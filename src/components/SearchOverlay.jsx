import { useState, useEffect, useRef } from 'react'
import events from '../data/events'

const BADGE = {
  revolution: { text: 'text-red-400',    label: 'Revolution'  },
  war:        { text: 'text-red-300',    label: 'War'         },
  disaster:   { text: 'text-purple-400', label: 'Disaster'    },
  politics:   { text: 'text-blue-400',   label: 'Politics'    },
  culture:    { text: 'text-amber-400',  label: 'Culture'     },
  religion:   { text: 'text-amber-300',  label: 'Religion'    },
  trade:      { text: 'text-teal-400',   label: 'Trade'       },
  exploration:{ text: 'text-indigo-400', label: 'Exploration' },
}

export default function SearchOverlay({ onSelect, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const q = query.trim().toLowerCase()
  const results = q.length < 2 ? [] : events.filter(e =>
    e.title.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    (e.location ?? '').toLowerCase().includes(q)
  ).slice(0, 30)

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col"
      style={{ background: 'rgba(7, 11, 18, 0.97)', backdropFilter: 'blur(16px)' }}
    >
      {/* Search bar */}
      <div className="flex shrink-0 items-center gap-3 border-b border-white/5 px-5 py-4">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="shrink-0 text-white/30">
          <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search events, people, places…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none"
        />
        <button
          onClick={onClose}
          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80 focus:outline-none"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Results */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {q.length < 2 ? (
          <p className="px-5 py-12 text-center text-xs text-white/20">Type at least 2 characters…</p>
        ) : results.length === 0 ? (
          <p className="px-5 py-12 text-center text-xs text-white/20">No events found for "{query}"</p>
        ) : results.map((event, i) => {
          const badge = BADGE[event.category] ?? { text: 'text-gray-400', label: event.category }
          return (
            <button
              key={i}
              onClick={() => onSelect(event)}
              className="flex w-full items-start gap-4 border-b border-white/[0.04] px-5 py-3 text-left transition-colors hover:bg-white/[0.04] focus:outline-none"
            >
              <span className="mt-0.5 w-10 shrink-0 text-right font-mono text-sm font-bold text-orange-400/80">{event.year}</span>
              <div className="min-w-0 flex-1">
                <p className="line-clamp-1 text-sm font-medium leading-snug text-white/90">{event.title}</p>
                {event.location && <p className="mt-0.5 text-[10px] text-white/30">{event.location}</p>}
              </div>
              <span className={`mt-0.5 shrink-0 text-[9px] font-semibold uppercase tracking-wide ${badge.text}`}>{badge.label}</span>
            </button>
          )
        })}
      </div>

      {q.length >= 2 && results.length > 0 && (
        <div className="shrink-0 border-t border-white/5 px-5 py-2">
          <p className="text-[9px] tracking-[0.3em] text-white/15 uppercase">
            {results.length >= 30 ? '30+ results — refine your search' : `${results.length} result${results.length !== 1 ? 's' : ''}`}
          </p>
        </div>
      )}
    </div>
  )
}
