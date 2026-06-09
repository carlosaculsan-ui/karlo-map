import { useState } from 'react'
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

const CATS = ['all', 'revolution', 'war', 'politics', 'culture', 'religion', 'trade', 'exploration', 'disaster']

export default function EventBrowserPanel({ onSelect, onClose }) {
  const [activeCat, setActiveCat] = useState('all')

  const filtered = activeCat === 'all' ? events : events.filter(e => e.category === activeCat)

  return (
    <div
      className="absolute inset-0 z-50 flex flex-col"
      style={{ background: 'rgba(7, 11, 18, 0.97)', backdropFilter: 'blur(16px)' }}
    >
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-white/5 px-5 py-4">
        <div>
          <p className="text-[9px] tracking-[0.45em] text-orange-400/60 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>History</p>
          <h2 className="text-base font-bold tracking-wide text-white" style={{ fontFamily: "'Cinzel', serif" }}>All Events</h2>
        </div>
        <button
          onClick={onClose}
          className="flex h-7 w-7 min-h-[44px] min-w-[44px] md:min-h-0 md:min-w-0 items-center justify-center rounded-full bg-white/5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/80 focus:outline-none"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Category filters */}
      <div className="flex shrink-0 flex-wrap gap-2 border-b border-white/5 px-5 py-3">
        {CATS.map(cat => {
          const badge    = BADGE[cat]
          const count    = cat === 'all' ? events.length : events.filter(e => e.category === cat).length
          const isActive = activeCat === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`rounded-full px-3 py-1 text-[10px] font-semibold capitalize tracking-wide transition-colors focus:outline-none ${
                isActive
                  ? 'bg-orange-500 text-white'
                  : `bg-white/5 ${badge?.text ?? 'text-white/40'} hover:bg-white/10`
              }`}
            >
              {badge?.label ?? 'All'}
              <span className={`ml-1.5 ${isActive ? 'text-white/60' : 'text-white/20'}`}>{count}</span>
            </button>
          )
        })}
      </div>

      <p className="shrink-0 px-5 py-1.5 text-[9px] tracking-[0.3em] text-white/20 uppercase">
        {filtered.length} event{filtered.length !== 1 ? 's' : ''}
      </p>

      {/* Events list */}
      <div className="min-h-0 flex-1 overflow-y-auto">
        {filtered.map((event, i) => {
          const badge = BADGE[event.category] ?? { text: 'text-gray-400', label: event.category }
          return (
            <button
              key={i}
              onClick={() => onSelect(event)}
              className="flex w-full items-start gap-4 border-b border-white/[0.04] px-5 py-3 text-left transition-colors hover:bg-white/[0.04] focus:outline-none"
            >
              <span className="mt-0.5 w-12 shrink-0 text-right font-mono text-sm font-bold text-orange-400/80">{event.year}</span>
              <div className="min-w-0 flex-1">
                <p className="line-clamp-2 text-sm font-medium leading-snug text-white/90">{event.title}</p>
                {event.location && <p className="mt-0.5 text-[10px] text-white/30">{event.location}</p>}
              </div>
              <span className={`mt-0.5 shrink-0 text-[9px] font-semibold uppercase tracking-wide ${badge.text}`}>{badge.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
