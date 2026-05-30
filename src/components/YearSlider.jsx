import { useState, useId } from 'react'

const MIN = 900
const MAX = 2026

const TICKS = [900, 1200, 1521, 1800, 1898, 2026]

export default function YearSlider({ year, onChange, hasEvents }) {
  const [editing, setEditing]   = useState(false)
  const [inputVal, setInputVal] = useState('')
  const inputId = useId()

  const progress = ((year - MIN) / (MAX - MIN)) * 100

  const commitInput = () => {
    const parsed = parseInt(inputVal, 10)
    if (!isNaN(parsed)) {
      onChange(Math.min(MAX, Math.max(MIN, parsed)))
    }
    setInputVal('')
    setEditing(false)
  }

  return (
    <div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 overflow-hidden rounded-2xl bg-black/60 backdrop-blur-md w-[min(580px,calc(100vw-3rem))]"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="mx-auto max-w-2xl px-5 py-4">
        <div className="flex items-center gap-4">

          {/* Left: year label + year number */}
          <div className="w-28 shrink-0">
            <div className="mb-1 flex items-center gap-1.5">
              <span className="select-none text-[10px] tracking-[0.35em] text-white/30 uppercase">
                Year
              </span>
              {hasEvents && (
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
              )}
            </div>

            {editing ? (
              <input
                id={inputId}
                type="number"
                value={inputVal}
                min={MIN}
                max={MAX}
                autoFocus
                onChange={(e) => setInputVal(e.target.value)}
                onBlur={commitInput}
                onKeyDown={(e) => {
                  if (e.key === 'Enter')  commitInput()
                  if (e.key === 'Escape') { setInputVal(''); setEditing(false) }
                }}
                className="w-full rounded-lg bg-white/5 px-2 py-0.5 text-center font-mono text-3xl font-bold text-orange-300 ring-1 ring-orange-400/40 outline-none transition-shadow focus:ring-orange-400/70 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            ) : (
              <button
                onClick={() => { setInputVal(String(year)); setEditing(true) }}
                className="flex select-none flex-col focus:outline-none"
              >
                <span className="font-mono text-3xl font-bold text-orange-300 transition-colors hover:text-orange-200">
                  {year}
                </span>
                <span className="text-[8px] tracking-[0.3em] text-white/20 uppercase">
                  tap to set
                </span>
              </button>
            )}
          </div>

          {/* Divider */}
          <div className="h-10 w-px shrink-0 bg-white/10" />

          {/* Right: arrow buttons + slider track + milestone ticks */}
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
              <div className="relative mt-2 h-3">
                {TICKS.map((tick) => {
                  const pct = ((tick - MIN) / (MAX - MIN)) * 100
                  return (
                    <span
                      key={tick}
                      className="absolute -translate-x-1/2 select-none text-[9px] text-white/35"
                      style={{ left: `${pct}%` }}
                    >
                      {tick}
                    </span>
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
