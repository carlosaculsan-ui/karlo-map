import { useEffect, useRef } from 'react'

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <rect x="3"  y="3"  width="7" height="7" rx="1.5" />
      <rect x="14" y="3"  width="7" height="7" rx="1.5" />
      <rect x="3"  y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )
}

export default function CommandHub({
  open, onClose, onToggle,
  mapTheme, onThemeChange,
  onOpenSearch, onOpenBrowse, onOpenQuiz,
}) {
  const trayRef = useRef(null)

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (!trayRef.current?.contains(e.target)) onClose()
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open, onClose])

  const select = (fn) => { onClose(); fn() }

  return (
    <div ref={trayRef} className="absolute left-4 top-4 z-10">

      {/* Trigger */}
      <button
        onClick={onToggle}
        aria-label="Open menu"
        className={`flex h-9 w-9 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 items-center justify-center rounded-full backdrop-blur-sm ring-1 transition-all duration-200 focus:outline-none ${
          open
            ? 'bg-orange-500 ring-orange-400/60 text-white shadow-lg shadow-orange-500/25'
            : 'bg-black/60 ring-white/15 text-white/55 hover:bg-black/75 hover:text-white/85'
        }`}
      >
        <GridIcon />
      </button>

      {/* Tray */}
      {open && (
        <div
          className="absolute left-0 top-11 w-52 overflow-hidden rounded-2xl ring-1 ring-white/8"
          style={{ background: 'rgba(5, 8, 15, 0.97)', backdropFilter: 'blur(24px)' }}
        >
          <div className="absolute left-6 right-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/35 to-transparent" />

          <div className="p-1.5">

            {/* Search */}
            <button
              onClick={() => select(onOpenSearch)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/[0.06] focus:outline-none group"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/40 group-hover:text-white/70 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                </svg>
              </span>
              <span className="flex-1 text-[12px] font-medium text-white/60 group-hover:text-white/85 transition-colors">Search events</span>
              <span className="font-mono text-[9px] tracking-widest text-white/20">/</span>
            </button>

            {/* Browse */}
            <button
              onClick={() => select(onOpenBrowse)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/[0.06] focus:outline-none group"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/40 group-hover:text-white/70 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="8" y1="6"  x2="21" y2="6"  />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6"  x2="3.01" y2="6"  />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </span>
              <span className="text-[12px] font-medium text-white/60 group-hover:text-white/85 transition-colors">Browse all events</span>
            </button>

            {/* Quiz */}
            <button
              onClick={() => select(onOpenQuiz)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-white/[0.06] focus:outline-none group"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/40 group-hover:text-white/70 transition-colors">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </span>
              <span className="text-[12px] font-medium text-white/60 group-hover:text-white/85 transition-colors">History quiz</span>
            </button>

            {/* Divider */}
            <div className="mx-3 my-1 h-px bg-white/[0.05]" />

            {/* Map style toggle */}
            <div className="flex items-center gap-3 px-3 py-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-white/25">
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
              </span>
              <div className="flex flex-1 overflow-hidden rounded-lg bg-white/[0.05] ring-1 ring-white/[0.07]">
                {[
                  { key: 'explore', label: 'Explore' },
                  { key: 'light',   label: 'Minimal' },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => onThemeChange(key)}
                    className={`flex-1 py-1.5 text-[10px] font-medium tracking-wide transition-colors focus:outline-none ${
                      mapTheme === key
                        ? 'bg-orange-500 text-white'
                        : 'text-white/30 hover:text-white/60'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
