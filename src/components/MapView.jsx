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
  war:         '#f97316',
  disaster:    '#a855f7',
  politics:    '#3b82f6',
  culture:     '#22c55e',
  religion:    '#eab308',
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
  if (year < 900 || year > 1565) return null
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
    position: 'relative', width: '32px', height: '32px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer',
  })

  const ring = document.createElement('div')
  Object.assign(ring.style, {
    position: 'absolute', inset: '0', borderRadius: '50%',
    border: `2px solid ${color}`,
    animation: 'markerPulse 2s ease-out infinite',
  })

  const dot = document.createElement('div')
  Object.assign(dot.style, {
    position: 'relative', zIndex: '1', width: '14px', height: '14px',
    borderRadius: '50%', background: color,
    border: '2.5px solid rgba(255,255,255,0.9)',
    boxShadow: `0 0 14px ${color}bb, 0 0 28px ${color}44`,
  })

  wrapper.appendChild(ring)
  wrapper.appendChild(dot)
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

  const [mapReady,  setMapReady]  = useState(false)
  const [panelOpen, setPanelOpen] = useState(false)
  const [mapTheme,  setMapTheme]  = useState('explore')

  // ── Init map ──────────────────────────────────────────────────────────────
  useEffect(() => {
    if (mapRef.current) return

    mapRef.current = new maplibregl.Map({
      container: containerRef.current,
      style: STYLES.explore,
      center: [122.0, 12.0],
      zoom: 5,
    })

    mapRef.current.addControl(
      new maplibregl.NavigationControl({ visualizePitch: false }),
      'top-right',
    )

    mapRef.current.on('load', () => setMapReady(true))

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
    map.setStyle(STYLES[mapTheme])

    // GL layers are wiped on setStyle — re-add trade routes once new style loads
    map.once('style.load', () => {
      const era = currentEraRef.current
      if (era?.tradeRoutes?.length) addRouteLayersToMap(map, era)
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
      setPanelOpen(false)
      return
    }

    yearEvts.forEach(event => {
      const marker = new maplibregl.Marker({ element: makeMarkerEl(event.category) })
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
      <div className="absolute left-4 top-4 z-10 flex overflow-hidden rounded-full bg-black/35 backdrop-blur-sm">
        {([
          { key: 'explore', label: 'Explore', Icon: SunIcon  },
          { key: 'light',   label: 'Minimal', Icon: MoonIcon },
        ]).map(({ key, label, Icon }) => (
          <button
            key={key}
            onClick={() => setMapTheme(key)}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-[10px] tracking-[0.2em] uppercase transition-all duration-200 ${
              mapTheme === key ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/70'
            }`}
          >
            <Icon />
            {label}
          </button>
        ))}
      </div>

      {/* Era badge — top-center, appears only in Era Mode */}
      {currentEra && (
        <div className="pointer-events-none absolute top-4 left-1/2 z-10 -translate-x-1/2">
          <div className="rounded-full bg-black/60 px-3 py-1 backdrop-blur-sm">
            <span className="select-none whitespace-nowrap text-xs tracking-widest text-amber-400 uppercase">
              {currentEra.name}
            </span>
          </div>
        </div>
      )}

      <YearSlider
        year={selectedYear}
        onChange={onYearChange}
        hasEvents={exactYearEvents.length > 0}
      />

      {exactYearEvents.length > 0 && (
        <EventPanel
          events={exactYearEvents}
          open={panelOpen}
          onClose={() => setPanelOpen(false)}
        />
      )}

      {/* Blank-year note — shown in Era Mode when the selected year has no records */}
      {currentEra && exactYearEvents.length === 0 && (
        <div className="pointer-events-none absolute bottom-[120px] left-1/2 z-10 -translate-x-1/2">
          <div className="rounded-full bg-black/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="select-none whitespace-nowrap text-[10px] tracking-[0.3em] text-white/30 uppercase">
              No Specific Written Milestones Available
            </span>
          </div>
        </div>
      )}

      {/* Dark loading veil — fades out when map tiles are ready */}
      <div
        className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center bg-[#070b12] transition-opacity duration-700"
        style={{ opacity: mapReady ? 0 : 1 }}
      >
        <p
          className="text-[11px] tracking-[0.5em] text-orange-400/50 uppercase"
          style={{ fontFamily: "'Cinzel', serif", animation: 'fadeIn 1s ease forwards' }}
        >
          Loading
        </p>
      </div>
    </div>
  )
}
