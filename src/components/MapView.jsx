import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import events from '../data/events'
import eras from '../data/eras'
import YearSlider from './YearSlider'
import EventPanel from './EventPanel'
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

function makeMarkerEl(category) {
  const color = CATEGORY_COLOR[category] ?? '#6b7280'

  const wrapper = document.createElement('div')
  Object.assign(wrapper.style, {
    width: '28px', height: '38px', cursor: 'pointer',
  })

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  svg.setAttribute('width', '28')
  svg.setAttribute('height', '38')
  svg.setAttribute('viewBox', '0 0 28 38')
  svg.setAttribute('fill', 'none')
  Object.assign(svg.style, {
    filter: `drop-shadow(0 3px 10px ${color}99)`,
    animation: 'pinFloat 3s ease-in-out infinite',
  })

  svg.innerHTML = `
    <path d="M14 2C8.477 2 4 6.477 4 13C4 21.5 14 36 14 36C14 36 24 21.5 24 13C24 6.477 19.523 2 14 2Z"
          fill="${color}dd" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
    <circle cx="14" cy="13" r="5" fill="rgba(255,255,255,0.15)"/>
    <circle cx="14" cy="13" r="3" fill="rgba(255,255,255,0.85)"/>
    <circle cx="14" cy="13" r="1.5" fill="${color}"/>
  `

  wrapper.appendChild(svg)
  return wrapper
}

// ── Icon components ───────────────────────────────────────────────────────────

function SunIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2"  x2="12" y2="5"  />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34"  />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2"  y1="12" x2="5"  y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66" />
      <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"  />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function MapView({ selectedYear, onYearChange }) {
  const containerRef        = useRef(null)
  const mapRef              = useRef(null)
  const markersRef          = useRef([])
  const initialStyleApplied = useRef(false)
  const currentEraRef       = useRef(null)   // tracks active era for style.load re-add
  const animFrameRef        = useRef(null)   // requestAnimationFrame id for dash animation

  const [mapReady,     setMapReady]     = useState(false)
  const [panelOpen,    setPanelOpen]    = useState(false)
  const [mapTheme,     setMapTheme]     = useState('explore')
  const [eraInfo,      setEraInfo]      = useState(null)
  const [themeLoading, setThemeLoading] = useState(false)
  const [tileLoading,  setTileLoading]  = useState(false)

  // ── Global Escape handler — closes whichever overlay is topmost ──────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Escape') return
      if (eraInfo)    { setEraInfo(null);    return }
      if (panelOpen)  { setPanelOpen(false); return }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [eraInfo, panelOpen])

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

    // GL layers are wiped on setStyle — re-add trade routes once new style loads
    map.once('style.load', () => {
      const era = currentEraRef.current
      if (era?.tradeRoutes?.length) addRouteLayersToMap(map, era)
      map.once('idle', () => setThemeLoading(false))
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
    const era      = getEraForYear(selectedYear)

    if (yearEvts.length === 0) {
      setPanelOpen(true)
      return
    }

    yearEvts.forEach(event => {
      const el = makeMarkerEl(event.category)
      el.addEventListener('click', () => setPanelOpen(true))
      const marker = new maplibregl.Marker({ element: el })
        .setLngLat([event.lng, event.lat])
        .addTo(mapRef.current)
      markersRef.current.push(marker)
    })

    if (yearEvts.length === 1) {
      mapRef.current.flyTo({
        center: [yearEvts[0].lng, yearEvts[0].lat],
        zoom: 9, duration: 1200, essential: true,
      })
    } else {
      const bounds = new maplibregl.LngLatBounds()
      yearEvts.forEach(e => bounds.extend([e.lng, e.lat]))
      mapRef.current.fitBounds(bounds, { padding: 80, duration: 1200 })
    }

    setPanelOpen(true)
  }, [selectedYear, mapReady])

  // ── Derived render values ─────────────────────────────────────────────────
  const currentEra      = getEraForYear(selectedYear)
  const exactYearEvents = events.filter(e => e.year === selectedYear)
  const activeEffect    = exactYearEvents[0]?.effect ?? null

  return (
    <div className="relative h-full w-full">
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />

      <EffectsLayer effect={activeEffect} />

      {/* Map theme toggle */}
      <div className="absolute left-4 top-4 z-10 flex overflow-hidden rounded-full bg-black/50 backdrop-blur-sm ring-1 ring-white/10">
        {([
          { key: 'explore', label: 'Explore', Icon: SunIcon  },
          { key: 'light',   label: 'Minimal', Icon: MoonIcon },
        ]).map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setMapTheme(key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-all duration-200 ${
              mapTheme === key
                ? 'bg-orange-500 text-white shadow-inner'
                : 'text-white/35 hover:text-white/65'
            }`}
          >
            <Icon />
            {label}
          </button>
        ))}
      </div>

      {/* Era badge — top-center, appears only when an era is active */}
      {currentEra && (
        <div className="absolute top-4 left-1/2 z-10 -translate-x-1/2">
          <button
            onClick={() => setEraInfo(eraInfo?.name === currentEra.name ? null : currentEra)}
            className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-sm focus:outline-none hover:bg-black/75 transition-colors"
          >
            <span className="select-none whitespace-nowrap text-xs tracking-widest text-amber-400 uppercase">
              {currentEra.name}
            </span>
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
          className="absolute top-14 left-1/2 z-20 -translate-x-1/2 w-80 max-w-[calc(100vw-2rem)] rounded-2xl p-4"
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
                className="mt-1.5 text-[11px] font-semibold tracking-[0.25em] text-white/70 uppercase leading-snug"
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

      <YearSlider
        year={selectedYear}
        onChange={onYearChange}
        hasEvents={exactYearEvents.length > 0}
      />

      {/* Reopen tab — appears on the right edge when panel is closed */}
      {!panelOpen && (
        <button
          onClick={() => setPanelOpen(true)}
          className="absolute top-36 right-0 z-20 flex flex-col items-center gap-1 rounded-l-xl bg-black/70 px-2 py-3 backdrop-blur-sm ring-1 ring-white/10 transition-colors hover:bg-black/85 focus:outline-none"
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
      )}

      <EventPanel
        events={exactYearEvents}
        open={panelOpen}
        onClose={() => setPanelOpen(false)}
      />


      {/* Tile-loading bar — slim indicator at top during any tile fetch */}
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 z-30 h-0.5 transition-opacity duration-300"
        style={{ opacity: tileLoading && mapReady ? 1 : 0 }}
      >
        <div className="h-full w-full bg-gradient-to-r from-orange-500/0 via-orange-400 to-orange-500/0 animate-pulse" />
      </div>

      {/* Theme-switch veil — covers white flash during style transition */}
      <div
        className="pointer-events-none absolute inset-0 z-40 bg-[#0a0d14] transition-opacity duration-500"
        style={{ opacity: themeLoading ? 1 : 0 }}
      />

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
