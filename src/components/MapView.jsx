import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import events from '../data/events'
import eras from '../data/eras'
import YearSlider from './YearSlider'
import EventPanel from './EventPanel'
import SearchOverlay from './SearchOverlay'
import EventBrowserPanel from './EventBrowserPanel'
import CommandHub from './CommandHub'
import EffectsLayer from './EffectsLayer'

const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY

const STYLES = {
  light:   'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  explore: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${MAPTILER_KEY}`,
}

const CATEGORY_COLOR = {
  revolution:  '#ef4444',
  war:         '#dc2626',
  disaster:    '#a855f7',
  politics:    '#3b82f6',
  culture:     '#f59e0b',
  religion:    '#fcd34d',
  trade:       '#14b8a6',
  exploration: '#6366f1',
}

// Marching-ants dash sequence for animated trade routes
const DASH_SEQ = [
  [0, 4, 3], [0.5, 4, 2.5], [1, 4, 2],
  [1.5, 4, 1.5], [2, 4, 1], [2.5, 4, 0.5], [3, 4, 0],
]

// ── Era helpers ───────────────────────────────────────────────────────────────

function getEraForYear(year) {
  if (year < 900 || year > 2026) return null
  // Search in reverse so later eras win at shared boundaries (e.g. year 1521)
  for (let i = eras.length - 1; i >= 0; i--) {
    const e = eras[i]
    if (year >= e.startYear && year <= e.endYear) return e
  }
  return null
}

function getNearestMilestone(year, era) {
  if (!era?.milestoneYears?.length) return null
  return era.milestoneYears.reduce((closest, my) =>
    Math.abs(my - year) < Math.abs(closest - year) ? my : closest,
  )
}

// ── Trade-route GL layer helpers ──────────────────────────────────────────────

function removeRouteLayersFromMap(map) {
  if (!map) return
  if (map.getLayer('trade-routes-dash')) map.removeLayer('trade-routes-dash')
  if (map.getLayer('trade-routes-bg'))   map.removeLayer('trade-routes-bg')
  if (map.getSource('trade-routes'))     map.removeSource('trade-routes')
}

function addRouteLayersToMap(map, era) {
  if (!map || !era?.tradeRoutes?.length) return
  removeRouteLayersFromMap(map)

  map.addSource('trade-routes', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: era.tradeRoutes.map((r, i) => ({
        type: 'Feature',
        id: i,
        properties: { label: r.label },
        geometry: { type: 'LineString', coordinates: [r.from, r.to] },
      })),
    },
  })

  map.addLayer({
    id: 'trade-routes-bg',
    type: 'line',
    source: 'trade-routes',
    paint: { 'line-color': 'rgba(251, 191, 36, 0.15)', 'line-width': 2 },
  })

  map.addLayer({
    id: 'trade-routes-dash',
    type: 'line',
    source: 'trade-routes',
    paint: {
      'line-color': 'rgba(251, 191, 36, 0.7)',
      'line-width': 2,
      'line-dasharray': DASH_SEQ[0],
    },
  })
}

// ── Marker DOM builder ────────────────────────────────────────────────────────

function makeMarkerEl() {
  const wrapper = document.createElement('div')
  Object.assign(wrapper.style, {
    width: '44px', height: '56px', cursor: 'pointer',
  })

  wrapper.innerHTML = `
    <svg width="44" height="56" viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg"
         style="filter:drop-shadow(0 4px 12px rgba(0,0,0,0.6));animation:pinFloat 3s ease-in-out infinite;display:block;">
      <!-- Pin body -->
      <path d="M22 2C12.06 2 4 10.06 4 20C4 33.5 22 54 22 54C22 54 40 33.5 40 20C40 10.06 31.94 2 22 2Z"
            fill="#0d1420" stroke="#c9970a" stroke-width="1.8"/>
      <!-- Outer ring -->
      <circle cx="22" cy="20" r="14.5" fill="none" stroke="#c9970a" stroke-width="1.2"/>
      <!-- Inner dashed ring -->
      <circle cx="22" cy="20" r="11" fill="none" stroke="#9a720a" stroke-width="0.6" stroke-dasharray="2.5 2.5"/>
      <!-- N point (bright, large) -->
      <polygon points="22,7 24,18 22,16 20,18" fill="#e8b020"/>
      <!-- S point -->
      <polygon points="22,33 24,22 22,24 20,22" fill="#9a720a"/>
      <!-- E point -->
      <polygon points="35,20 24,18 26,20 24,22" fill="#9a720a"/>
      <!-- W point -->
      <polygon points="9,20 20,18 18,20 20,22" fill="#9a720a"/>
      <!-- NE diagonal -->
      <polygon points="32,10 24,18 25.5,16.5" fill="#c9970a" opacity="0.75"/>
      <!-- NW diagonal -->
      <polygon points="12,10 20,18 18.5,16.5" fill="#c9970a" opacity="0.75"/>
      <!-- SE diagonal -->
      <polygon points="32,30 24,22 25.5,23.5" fill="#c9970a" opacity="0.75"/>
      <!-- SW diagonal -->
      <polygon points="12,30 20,22 18.5,23.5" fill="#c9970a" opacity="0.75"/>
      <!-- Center jewel -->
      <circle cx="22" cy="20" r="3.2" fill="#c9970a"/>
      <circle cx="22" cy="20" r="1.8" fill="#0d1420"/>
      <circle cx="22" cy="20" r="0.9" fill="#e8b020"/>
    </svg>
  `

  return wrapper
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MapView({ selectedYear, onYearChange, onOpenQuiz }) {
  const containerRef        = useRef(null)
  const mapRef              = useRef(null)
  const markersRef          = useRef([])
  const initialStyleApplied = useRef(false)
  const currentEraRef       = useRef(null)   // tracks active era for style.load re-add
  const animFrameRef        = useRef(null)   // requestAnimationFrame id for dash animation

  const [mapReady,       setMapReady]       = useState(false)
  const [panelOpen,      setPanelOpen]      = useState(false)
  const [mapTheme,       setMapTheme]       = useState('explore')
  const [eraInfo,        setEraInfo]        = useState(null)
  const [themeLoading,   setThemeLoading]   = useState(false)
  const [tileLoading,    setTileLoading]    = useState(false)
  const [activeEventIdx, setActiveEventIdx] = useState(null)
  const [showSearch,     setShowSearch]     = useState(false)
  const [showBrowser,    setShowBrowser]    = useState(false)
  const [showHub,        setShowHub]        = useState(false)
  const pendingEventRef = useRef(null)

  // ── Global Escape / search-shortcut keyboard handler ─────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        if (showHub)     { setShowHub(false);     return }
        if (showSearch)  { setShowSearch(false);  return }
        if (showBrowser) { setShowBrowser(false); return }
        if (eraInfo)     { setEraInfo(null);      return }
        if (panelOpen)   { setPanelOpen(false);   return }
        return
      }
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault()
        setShowHub(false)
        setShowSearch(s => !s)
        setShowBrowser(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [showHub, showSearch, showBrowser, eraInfo, panelOpen])

  // ── Init map ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (mapRef.current) return

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: STYLES.explore,
      center: [122.0, 12.0],
      zoom: 5,
      fadeDuration: 400,
    })

    mapRef.current.addControl(
      new maplibregl.NavigationControl({ visualizePitch: false }),
      'top-right',
    )

    mapRef.current.once('idle', () => setMapReady(true))

    mapRef.current.on('dataloading', () => setTileLoading(true))
    mapRef.current.on('idle',        () => setTileLoading(false))

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  // ── Swap map style ────────────────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return
    if (!initialStyleApplied.current) { initialStyleApplied.current = true; return }

    const map = mapRef.current
    setThemeLoading(true)
    map.setStyle(STYLES[mapTheme])

    // GL layers are wiped on setStyle — re-add trade routes once new style loads.
    // Reveal after style.load + a short grace period so first tiles paint before
    // the veil lifts; no need to wait for full idle (that's what caused the 2-3s black screen).
    map.once('style.load', () => {
      const era = currentEraRef.current
      if (era?.tradeRoutes?.length) addRouteLayersToMap(map, era)
      setTimeout(() => setThemeLoading(false), 350)
    })
  }, [mapTheme, mapReady])

  // ── Era trade routes ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return

    const era     = getEraForYear(selectedYear)
    const prevEra = currentEraRef.current
    currentEraRef.current = era

    // Only rebuild layers when the era itself changes
    if (era?.name === prevEra?.name) return

    if (animFrameRef.current) { cancelAnimationFrame(animFrameRef.current); animFrameRef.current = null }
    removeRouteLayersFromMap(mapRef.current)

    if (!era?.tradeRoutes?.length) return

    addRouteLayersToMap(mapRef.current, era)

    let step = 0, last = 0
    const tick = (ts) => {
      if (ts - last > 80) {
        step = (step + 1) % DASH_SEQ.length
        const map = mapRef.current
        if (map?.getLayer('trade-routes-dash')) {
          map.setPaintProperty('trade-routes-dash', 'line-dasharray', DASH_SEQ[step])
        }
        last = ts
      }
      animFrameRef.current = requestAnimationFrame(tick)
    }
    animFrameRef.current = requestAnimationFrame(tick)
  }, [selectedYear, mapReady])

  // ── Markers + panel open state ────────────────────────────────────────────
  useEffect(() => {
    if (!mapReady || !mapRef.current) return

    markersRef.current.forEach(m => m.remove())
    markersRef.current = []

    const yearEvts = events.filter(e => e.year === selectedYear)

    // Resolve pending active-event set by handleEventSelect cross-year navigation
    const pending = pendingEventRef.current
    pendingEventRef.current = null
    if (pending != null) {
      const pendingEvt = events[pending]
      const idx = pendingEvt ? yearEvts.findIndex(e => e === pendingEvt) : -1
      setActiveEventIdx(idx >= 0 ? idx : null)
    } else {
      setActiveEventIdx(null)
    }

    if (yearEvts.length === 0) {
      setPanelOpen(true)
      mapRef.current.flyTo({ center: [122.0, 12.0], zoom: 5, duration: 1000, essential: true })
      return
    }

    yearEvts.forEach((event, i) => {
      const el = makeMarkerEl()
      el.addEventListener('click', () => {
        setPanelOpen(true)
        setActiveEventIdx(i)
        el.classList.remove('marker-active')
        void el.offsetWidth
        el.classList.add('marker-active')
      })
      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([event.lng, event.lat])
        .addTo(mapRef.current)
      markersRef.current.push(marker)
    })

    const isMobile = window.innerWidth < 768
    const pad = isMobile
      ? { top: 80, bottom: 360, left: 60, right: 60 }
      : { top: 80, bottom: 80, left: 60, right: 360 }

    if (yearEvts.length === 1) {
      mapRef.current.flyTo({
        center: [yearEvts[0].lng, yearEvts[0].lat],
        zoom: 9, duration: 1200, essential: true,
        padding: pad,
      })
    } else {
      const bounds = new maplibregl.LngLatBounds()
      yearEvts.forEach(e => bounds.extend([e.lng, e.lat]))
      mapRef.current.fitBounds(bounds, { padding: pad, duration: 1200 })
    }

    setPanelOpen(true)
  }, [selectedYear, mapReady])

  // ── Sync active-marker CSS class (highlight + initial pulse) ────────────
  useEffect(() => {
    markersRef.current.forEach((marker, i) => {
      const el = marker.getElement()
      if (!el) return
      el.classList.toggle('marker-active', i === activeEventIdx)
    })
  }, [activeEventIdx])

  // ── Card click: scroll panel to card and pulse marker ────────────────────
  const handleCardClick = (i) => {
    setActiveEventIdx(i)
    const el = markersRef.current[i]?.getElement()
    if (!el) return
    el.classList.remove('marker-active')
    void el.offsetWidth
    el.classList.add('marker-active')
  }

  // ── Event select handler (called from search / browser overlays) ──────────
  const handleEventSelect = (event) => {
    setShowSearch(false)
    setShowBrowser(false)
    setPanelOpen(true)
    if (event.year === selectedYear) {
      const yearEvts = events.filter(e => e.year === event.year)
      setActiveEventIdx(yearEvts.indexOf(event))
    } else {
      pendingEventRef.current = events.indexOf(event)
      onYearChange(event.year)
    }
  }

  // ── Derived render values ─────────────────────────────────────────────────
  const currentEra      = getEraForYear(selectedYear)
  const exactYearEvents = events.filter(e => e.year === selectedYear)
  const activeEffect    = exactYearEvents[0]?.effect ?? null

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      <EffectsLayer effect={activeEffect} />

      {/* Command hub — single entry point for all secondary actions */}
      <CommandHub
        open={showHub}
        onClose={() => setShowHub(false)}
        onToggle={() => setShowHub(h => !h)}
        mapTheme={mapTheme}
        onThemeChange={setMapTheme}
        onOpenSearch={() => setShowSearch(true)}
        onOpenBrowse={() => setShowBrowser(true)}
        onOpenQuiz={onOpenQuiz}
      />

      {/* Era badge — top-center, appears only when an era is active */}
      {currentEra && (
        <div className="absolute top-[4.25rem] left-1/2 z-10 -translate-x-1/2 md:top-4">
          <button
            onClick={() => {
              const next = eraInfo?.name === currentEra.name ? null : currentEra
              setEraInfo(next)
              if (next) setPanelOpen(false)
            }}
            className="group flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 backdrop-blur-sm ring-1 ring-transparent focus:outline-none hover:bg-black/75 hover:ring-amber-400/30 transition-all duration-200"
          >
            <span className="select-none whitespace-nowrap text-xs tracking-widest text-amber-400 group-hover:text-amber-300 uppercase transition-colors duration-200">
              {currentEra.name}
            </span>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-amber-400/50 group-hover:text-amber-300/80 shrink-0 transition-colors duration-200">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
          </button>
        </div>
      )}

      {/* Click-outside backdrop for era popup */}
      {eraInfo && (
        <div className="absolute inset-0 z-[19]" onClick={() => setEraInfo(null)} />
      )}

      {/* Era info popup */}
      {eraInfo && (
        <div
          className="absolute top-24 left-1/2 z-20 -translate-x-1/2 w-80 max-w-[calc(100vw-1rem)] rounded-2xl p-4 md:top-14 md:max-w-[calc(100vw-2rem)]"
          style={{
            background: 'rgba(5, 8, 15, 0.93)',
            backdropFilter: 'blur(18px)',
            border: '1px solid rgba(251,191,36,0.15)',
          }}
        >
          <div className="absolute left-8 right-8 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />
          <div className="mb-3 flex items-start justify-between gap-3">
            <div>
              <p
                className="font-mono text-2xl font-bold text-amber-400 leading-none tracking-tight"
              >
                {eraInfo.startYear} – {eraInfo.endYear}
              </p>
              <h3
                className="mt-1.5 text-[11px] font-semibold tracking-[0.15em] text-white/70 uppercase leading-snug"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {eraInfo.name}
              </h3>
            </div>
            <button
              onClick={() => setEraInfo(null)}
              className="shrink-0 rounded-full p-1 text-white/30 transition-colors hover:text-white/70 focus:outline-none"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="h-px bg-white/8 mb-3" />
          <p className="text-xs leading-relaxed text-white/45">
            {eraInfo.description}
          </p>
        </div>
      )}

      {showSearch && (
        <SearchOverlay onSelect={handleEventSelect} onClose={() => setShowSearch(false)} />
      )}
      {showBrowser && (
        <EventBrowserPanel onSelect={handleEventSelect} onClose={() => setShowBrowser(false)} />
      )}

      <YearSlider
        year={selectedYear}
        onChange={onYearChange}
        hasEvents={exactYearEvents.length > 0}
      />

      {/* Reopen panel button — pill above the slider on mobile, vertical tab on desktop */}
      {!panelOpen && (
        <>
          {/* Mobile: pill floating above the year slider */}
          <button
            onClick={() => setPanelOpen(true)}
            className="md:hidden absolute z-20 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/75 px-4 py-2 backdrop-blur-sm ring-1 ring-white/10 transition-colors hover:bg-black/90 focus:outline-none"
            style={{ bottom: 'calc(6.5rem + env(safe-area-inset-bottom, 0px) + 0.5rem)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-orange-400/70">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            <span className="select-none text-[10px] tracking-[0.3em] text-white/50 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
              {exactYearEvents.length > 0 ? `${exactYearEvents.length} Event${exactYearEvents.length > 1 ? 's' : ''}` : 'Events'}
            </span>
          </button>

          {/* Desktop: vertical tab on the right edge */}
          <button
            onClick={() => setPanelOpen(true)}
            className="hidden md:flex absolute top-36 right-0 z-20 flex-col items-center gap-1 rounded-l-xl bg-black/70 px-2 py-3 backdrop-blur-sm ring-1 ring-white/10 transition-colors hover:bg-black/85 focus:outline-none"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white/50">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <line x1="9" y1="3" x2="9" y2="21" />
            </svg>
            <span
              className="select-none text-[8px] tracking-[0.3em] text-white/40 uppercase"
              style={{ writingMode: 'vertical-rl', fontFamily: "'Cinzel', serif" }}
            >
              {exactYearEvents.length > 0 ? `${exactYearEvents.length} Event${exactYearEvents.length > 1 ? 's' : ''}` : 'Events'}
            </span>
          </button>
        </>
      )}

      <EventPanel
        events={exactYearEvents}
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
        activeIdx={activeEventIdx}
        onCardClick={handleCardClick}
      />


      {/* Tile-loading bar — slim indicator at top during any tile fetch */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-30 h-0.5 transition-opacity duration-300"
        style={{ opacity: tileLoading && mapReady ? 1 : 0 }}
      >
        <div className="h-full w-full bg-gradient-to-r from-orange-500/0 via-orange-400 to-orange-500/0 animate-pulse" />
      </div>

      {/* Theme-switch veil — covers flash during style transition */}
      <div
        className="pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-[#0a0d14] transition-opacity duration-500"
        style={{ opacity: themeLoading ? 1 : 0 }}
      >
        <p
          className="text-[10px] tracking-[0.45em] text-amber-400/50 uppercase"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {mapTheme === 'explore' ? 'Explore' : 'Minimal'}
        </p>
      </div>

      {/* Dark loading veil — fades out when map tiles are ready */}
      <div
        className="pointer-events-none absolute inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-[#070b12] transition-opacity duration-700"
        style={{ opacity: mapReady ? 0 : 1 }}
      >
        {/* Compass rose */}
        <div style={{ animation: 'compassSpin 8s linear infinite' }}>
          <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
            {/* Outer ring */}
            <circle cx="36" cy="36" r="34" stroke="rgba(251,191,36,0.12)" strokeWidth="1" />
            <circle cx="36" cy="36" r="28" stroke="rgba(251,191,36,0.08)" strokeWidth="0.5" strokeDasharray="3 5" />
            {/* Cardinal points */}
            <polygon points="36,4 39,34 36,30 33,34" fill="rgba(251,191,36,0.9)" />
            <polygon points="36,68 39,38 36,42 33,38" fill="rgba(251,191,36,0.3)" />
            <polygon points="4,36 34,33 30,36 34,39" fill="rgba(251,191,36,0.3)" />
            <polygon points="68,36 38,33 42,36 38,39" fill="rgba(251,191,36,0.3)" />
            {/* Intercardinal ticks */}
            {[45,135,225,315].map(deg => (
              <line
                key={deg}
                x1="36" y1="10" x2="36" y2="16"
                stroke="rgba(251,191,36,0.25)"
                strokeWidth="1"
                transform={`rotate(${deg} 36 36)`}
              />
            ))}
            {/* Center dot */}
            <circle cx="36" cy="36" r="3" fill="rgba(251,191,36,0.7)" />
            <circle cx="36" cy="36" r="1.5" fill="#070b12" />
          </svg>
        </div>
        <p
          className="text-[10px] tracking-[0.55em] text-amber-400/40 uppercase"
          style={{ fontFamily: "'Cinzel', serif", animation: 'fadeIn 1s ease forwards' }}
        >
          Charting the archipelago
        </p>
      </div>
    </div>
  )
}
