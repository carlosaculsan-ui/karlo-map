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
  return (
    <div
      className="event-panel-wrapper absolute z-20 transition-all duration-300 ease-out"
      style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}
      data-open={String(open)}
    >
      <div
        className="relative h-full rounded-t-2xl md:rounded-2xl flex flex-col ring-1 ring-white/8"
        style={{
          background: 'rgba(26, 25, 23, 0.95)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center pt-2.5 pb-0.5 md:hidden">
          <div className="h-1 w-10 rounded-full bg-white/20" />
        </div>

        {/* Amber accent line along the top edge */}
        <div className="absolute left-6 right-6 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between px-4 pt-4 pb-3 border-b border-white/5">
          <span
            className="select-none text-[11px] tracking-[0.45em] text-orange-400/80 uppercase"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Events
          </span>
          <button
            onClick={onClose}
            className="flex h-6 w-6 min-h-[40px] min-w-[40px] md:min-h-0 md:min-w-0 items-center justify-center rounded-full bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80 focus:outline-none"
            aria-label="Close panel"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable event cards / empty state */}
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
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
                    className="rounded-xl border border-white/5 bg-white/[0.03] p-4"
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
