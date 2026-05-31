import { useRef } from 'react'

// Mental model: red = conflict · blue = governance · amber = culture/spirit · teal = commerce · purple = disaster · indigo = exploration
const BADGE = {
  revolution: { bg: 'bg-red-500/20',    text: 'text-red-400',    label: 'Revolution' },
  war:        { bg: 'bg-red-700/20',    text: 'text-red-300',    label: 'War'        },
  disaster:   { bg: 'bg-purple-500/20', text: 'text-purple-400', label: 'Disaster'   },
  politics:   { bg: 'bg-blue-500/20',   text: 'text-blue-400',   label: 'Politics'   },
  culture:    { bg: 'bg-amber-500/20',  text: 'text-amber-400',  label: 'Culture'    },
  religion:   { bg: 'bg-amber-300/20',  text: 'text-amber-300',  label: 'Religion'   },
  trade:      { bg: 'bg-teal-500/20',   text: 'text-teal-400',   label: 'Trade'      },
  exploration:{ bg: 'bg-indigo-500/20', text: 'text-indigo-400', label: 'Exploration'},
}

export default function EventPanel({ events, open, onClose }) {
  const touchStartY = useRef(0)

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientY - touchStartY.current
    if (delta > 55) onClose()
  }

  return (
    <div
      className="absolute top-16 right-4 z-20 w-80 max-w-[calc(100vw-2rem)] transition-all duration-300 ease-out"
      style={{ opacity: open ? 1 : 0, transform: open ? 'translateX(0)' : 'translateX(110%)', pointerEvents: open ? 'auto' : 'none' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative rounded-2xl flex flex-col"
        style={{
          background: 'rgba(5, 8, 15, 0.93)',
          backdropFilter: 'blur(18px)',
          maxHeight: 'calc(100vh - 140px)',
          borderTop: '1px solid transparent',
          backgroundClip: 'padding-box',
        }}
      >
        {/* Orange accent line along the top edge */}
        <div className="absolute left-8 right-8 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        {/* Drag handle */}
        <div className="flex shrink-0 justify-center pt-3 pb-1">
          <div className="h-1 w-10 rounded-full bg-white/15" />
        </div>

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between px-4 pb-2 pt-1">
          <span
            className="select-none text-[11px] tracking-[0.45em] text-orange-400/70 uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Events
          </span>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-white/30 transition-colors hover:text-white/70 focus:outline-none"
            aria-label="Close panel"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable event cards / empty state */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          {events.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-8 text-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-white/20">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
              <p
                className="text-[10px] tracking-[0.35em] text-white/25 uppercase"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                No written records
              </p>
              <p className="text-[11px] leading-relaxed text-white/20">
                No historical records were written during this period.
                Oral traditions and local memory may still hold this history.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {events.map((event, i) => {
                const badge = BADGE[event.category] ?? {
                  bg: 'bg-gray-500/20', text: 'text-gray-400', label: event.category,
                }
                return (
                  <div
                    key={i}
                    className="rounded-xl border border-white/5 bg-white/[0.04] p-4"
                  >
                    <div className="mb-2.5 flex items-start justify-between gap-3">
                      <h3 className="text-sm font-bold leading-snug text-white tracking-wide">
                        {event.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${badge.bg} ${badge.text}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                    <p className="text-xs leading-loose text-white/50">
                      {event.description}
                    </p>
                  </div>
                )
              })}
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
