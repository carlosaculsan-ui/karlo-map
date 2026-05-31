import { useState, useId, useRef, useEffect } from 'react'
import eras from '../data/eras'

const MIN = 900
const MAX = 2026

const TICKS = [900, 1200, 1521, 1800, 1898, 2026]

const ERA_COLORS = [
  '#14b8a6',
  '#22c55e',
  '#3b82f6',
  '#f97316',
  '#ef4444',
  '#a855f7',
  '#6366f1',
  '#eab308',
]

export default function YearSlider({ year, onChange, hasEvents }) {
  const [inputVal,  setInputVal]  = useState(String(year))
  const [error,     setError]     = useState(false)
  const [errorMsg,  setErrorMsg]  = useState('')
  const [focused,   setFocused]   = useState(false)
  const inputRef = useRef(null)
  const inputId  = useId()

  // Keep input display in sync with slider/arrow changes, but not while user is typing
  if (!focused && inputVal !== String(year)) {
    setInputVal(String(year))
  }

  const progress = ((year - MIN) / (MAX - MIN)) * 100

  const commit = (raw) => {
    const parsed = parseInt(raw, 10)
    if (isNaN(parsed) || isNaN(Number(raw.trim()))) {
      setError(true)
      setErrorMsg('Please enter a valid number')
      setInputVal(String(year))
      setTimeout(() => setError(false), 2000)
      return
    }
    if (parsed < MIN || parsed > MAX) {
      setError(true)
      setErrorMsg(`Must be between ${MIN} and ${MAX}`)
      setInputVal(String(year))
      setTimeout(() => setError(false), 2000)
      return
    }
    setError(false)
    setErrorMsg('')
    onChange(parsed)
    setInputVal(String(parsed))
  }

  // Press Y to focus the year input (when not already in a text field)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'y' && e.key !== 'Y') return
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return
      e.preventDefault()
      inputRef.current?.focus()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-10 bg-black/65 backdrop-blur-md rounded-t-2xl"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="px-5 py-4">
        <div className="flex items-center gap-4">

          {/* Left: year input */}
          <div className="w-28 shrink-0">
            <div className="mb-1.5 flex items-center gap-1.5">
              <label
                htmlFor={inputId}
                className="select-none text-[10px] tracking-[0.35em] text-white/30 uppercase cursor-pointer"
              >
                Year
              </label>
              {hasEvents && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
              )}
            </div>
            <input
              ref={inputRef}
              id={inputId}
              type="number"
              min={MIN}
              max={MAX}
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onFocus={(e) => { setFocused(true); e.target.select() }}
              onBlur={(e) => { setFocused(false); commit(e.target.value) }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') { e.target.blur() }
                if (e.key === 'Escape') { setInputVal(String(year)); setFocused(false); e.target.blur() }
              }}
              className={`w-full rounded-lg bg-white/8 px-2 py-1 text-center font-mono text-3xl font-bold outline-none transition-all duration-200
                [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none
                ${error
                  ? 'text-red-400 ring-2 ring-red-500/80'
                  : 'text-orange-300 ring-1 ring-orange-400/30 hover:ring-orange-400/50 focus:ring-orange-400/70'
                }`}
            />
            <p className={`mt-1 min-h-[12px] text-center text-[8px] tracking-wide transition-colors duration-200 ${error ? 'text-red-400' : 'text-white/20'}`}>
              {error ? errorMsg : 'Press Y to focus'}
            </p>
          </div>

          {/* Divider */}
          <div className="h-10 w-px shrink-0 bg-white/10" />

          {/* Right: arrow buttons + slider track + era band + milestone ticks */}
          <div className="flex min-w-0 flex-1 items-center gap-2">

            <button
              onClick={() => onChange(Math.max(MIN, year - 1))}
              disabled={year <= MIN}
              aria-label="Previous year"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white/80 disabled:cursor-not-allowed disabled:opacity-20 focus:outline-none"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="min-w-0 flex-1">
              <input
                type="range"
                className="timeline-slider"
                min={MIN}
                max={MAX}
                value={year}
                onChange={(e) => onChange(Number(e.target.value))}
                style={{ '--fill': `${progress}%` }}
              />

              {/* Era color band */}
              <div className="relative mt-1.5 h-1.5 rounded-full overflow-hidden bg-white/5">
                {eras.map((era, i) => {
                  const left  = ((era.startYear - MIN) / (MAX - MIN)) * 100
                  const width = ((era.endYear   - MIN) / (MAX - MIN)) * 100 - left
                  return (
                    <div
                      key={era.name}
                      className="absolute top-0 h-full"
                      style={{
                        left: `${left}%`,
                        width: `${width}%`,
                        background: ERA_COLORS[i % ERA_COLORS.length],
                        opacity: 0.45,
                      }}
                    />
                  )
                })}
                {/* Active year cursor line */}
                <div
                  className="absolute top-0 h-full w-0.5 bg-white/70 rounded-full"
                  style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
                />
              </div>

              {/* Tick labels — clickable year shortcuts */}
              <div className="relative mt-1.5 h-4">
                {TICKS.map((tick) => {
                  const pct = ((tick - MIN) / (MAX - MIN)) * 100
                  return (
                    <button
                      key={tick}
                      onClick={() => onChange(tick)}
                      className="absolute -translate-x-1/2 text-[9px] font-medium text-white/40 hover:text-orange-400 transition-colors focus:outline-none"
                      style={{ left: `${pct}%` }}
                    >
                      {tick}
                    </button>
                  )
                })}
              </div>
            </div>

            <button
              onClick={() => onChange(Math.min(MAX, year + 1))}
              disabled={year >= MAX}
              aria-label="Next year"
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white/80 disabled:cursor-not-allowed disabled:opacity-20 focus:outline-none"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}
