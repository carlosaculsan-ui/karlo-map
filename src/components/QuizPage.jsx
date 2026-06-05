import { useState } from 'react'
import { generateQuiz } from '../data/quizGenerator'

const TOTAL = 15

const DIFFICULTY = {
  easy:   { label: 'Easy',   desc: 'Years, eras, and categories',            color: 'text-emerald-400', ring: 'ring-emerald-500/40', bg: 'bg-emerald-500/10' },
  medium: { label: 'Medium', desc: 'Events, locations, and era connections', color: 'text-amber-400',   ring: 'ring-amber-500/40',   bg: 'bg-amber-500/10'   },
  hard:   { label: 'Hard',   desc: 'Chronology, odd-one-out, and more',      color: 'text-red-400',     ring: 'ring-red-500/40',     bg: 'bg-red-500/10'     },
}

function getRating(score, total) {
  const pct = score / total
  if (pct >= 0.9) return { label: 'Master Historian',  color: 'text-amber-400'   }
  if (pct >= 0.7) return { label: 'History Scholar',   color: 'text-emerald-400' }
  if (pct >= 0.5) return { label: 'History Student',   color: 'text-blue-400'    }
  return               { label: 'Beginner Historian', color: 'text-white/50'    }
}

// ── Difficulty selection ─────────────────────────────────────────────────────

function DifficultyScreen({ onSelect, onBack }) {
  return (
    <div className="flex h-full flex-col items-center justify-center px-6">
      <button
        onClick={onBack}
        className="absolute left-5 top-5 flex min-h-[44px] items-center gap-1.5 text-[10px] tracking-[0.3em] text-white/30 uppercase hover:text-white/60 transition-colors focus:outline-none"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to Map
      </button>

      <div className="mb-2 text-[10px] tracking-[0.5em] text-orange-400/60 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
        Philippine History
      </div>
      <h1 className="mb-1 text-3xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>
        Quiz
      </h1>
      <p className="mb-10 text-xs text-white/30">{TOTAL} questions · select a difficulty</p>

      <div className="flex w-full max-w-sm flex-col gap-3">
        {Object.entries(DIFFICULTY).map(([key, d]) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className={`rounded-2xl p-4 text-left ring-1 transition-all duration-200 hover:scale-[1.02] focus:outline-none ${d.bg} ${d.ring}`}
          >
            <p className={`text-base font-bold ${d.color}`} style={{ fontFamily: "'Cinzel', serif" }}>
              {d.label}
            </p>
            <p className="mt-0.5 text-[11px] text-white/40">{d.desc}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

// ── Quiz question screen ─────────────────────────────────────────────────────

function QuizScreen({ questions, onFinish, onQuit }) {
  const [index,    setIndex]    = useState(0)
  const [selected, setSelected] = useState(null)
  const [score,    setScore]    = useState(0)
  const [quitting, setQuitting] = useState(false)

  const q        = questions[index]
  const answered = selected !== null
  const isLast   = index === questions.length - 1

  const handleSelect = (i) => {
    if (answered) return
    setSelected(i)
    if (i === q.correctIndex) setScore(s => s + 1)
  }

  const handleNext = () => {
    if (isLast) {
      onFinish(answered && selected === q.correctIndex ? score + 1 : score)
      return
    }
    setSelected(null)
    setIndex(i => i + 1)
  }

  const optionClass = (i) => {
    if (!answered) return 'border-white/10 bg-white/[0.04] text-white/80 hover:border-white/25 hover:bg-white/[0.08]'
    if (i === q.correctIndex) return 'border-emerald-500/60 bg-emerald-500/10 text-emerald-300'
    if (i === selected)       return 'border-red-500/60 bg-red-500/10 text-red-300'
    return 'border-white/5 bg-white/[0.02] text-white/30'
  }

  const progress = ((index) / questions.length) * 100

  return (
    <div className="flex h-full flex-col px-5 py-6">
      {/* Progress */}
      <div className="mb-5">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Question {index + 1} of {questions.length}</span>
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">{score} correct</span>
            <button
              onClick={() => setQuitting(true)}
              className="inline-flex min-h-[44px] items-center text-[10px] tracking-[0.25em] text-white/20 uppercase hover:text-red-400/70 transition-colors focus:outline-none"
            >
              Quit
            </button>
          </div>
        </div>
        <div className="h-1 w-full rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-orange-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6 min-h-[80px]">
        <p className="text-base font-semibold leading-snug text-white">{q.question}</p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2.5">
        {q.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleSelect(i)}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-150 focus:outline-none ${optionClass(i)}`}
          >
            <span className="shrink-0 text-[10px] font-bold tracking-widest text-white/30">
              {String.fromCharCode(65 + i)}
            </span>
            <span className="leading-snug">{opt}</span>
            {answered && i === q.correctIndex && (
              <svg className="ml-auto shrink-0 text-emerald-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            )}
            {answered && i === selected && i !== q.correctIndex && (
              <svg className="ml-auto shrink-0 text-red-400" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            )}
          </button>
        ))}
      </div>

      {/* Explanation + Next */}
      {answered && (
        <div className="mt-4">
          <p className="mb-4 rounded-xl bg-white/[0.04] px-4 py-3 text-[11px] leading-relaxed text-white/50">
            {q.explanation}
          </p>
          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-orange-500 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-orange-400 focus:outline-none"
          >
            {isLast ? 'See Results' : 'Next Question'}
          </button>
        </div>
      )}

      {/* Quit confirmation overlay */}
      {quitting && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-8 text-center"
          style={{ background: 'rgba(7, 11, 18, 0.96)', backdropFilter: 'blur(8px)' }}
        >
          <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>End quiz?</p>
          <p className="text-4xl font-bold font-mono text-orange-400">{score}<span className="text-xl text-white/20">/{index + 1}</span></p>
          <p className="text-xs text-white/30">correct so far · question {index + 1} of {questions.length}</p>
          <div className="flex w-full max-w-xs flex-col gap-2.5 pt-2">
            <button
              onClick={() => setQuitting(false)}
              className="w-full rounded-xl bg-orange-500 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-orange-400 focus:outline-none"
            >
              Continue Quiz
            </button>
            <button
              onClick={onQuit}
              className="w-full rounded-xl border border-white/10 py-3 text-sm text-white/40 transition-colors hover:border-white/20 hover:text-white/60 focus:outline-none"
            >
              End Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Results screen ───────────────────────────────────────────────────────────

function ResultsScreen({ score, difficulty, onRetry, onBack }) {
  const total  = TOTAL
  const pct    = Math.round((score / total) * 100)
  const rating = getRating(score, total)
  const d      = DIFFICULTY[difficulty]

  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center">
      <div className="mb-2 text-[10px] tracking-[0.4em] text-white/25 uppercase" style={{ fontFamily: "'Cinzel', serif" }}>
        Quiz Complete
      </div>

      <div className="mb-1 font-mono text-6xl font-bold text-orange-400">{score}<span className="text-2xl text-white/20">/{total}</span></div>
      <div className="mb-1 text-2xl font-mono font-bold text-white/60">{pct}%</div>

      <div className={`mt-2 mb-8 text-sm font-semibold tracking-wide ${rating.color}`} style={{ fontFamily: "'Cinzel', serif" }}>
        {rating.label}
      </div>

      <div className="flex w-full max-w-xs flex-col gap-3">
        <button
          onClick={onRetry}
          className="w-full rounded-xl bg-orange-500 py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-orange-400 focus:outline-none"
        >
          Try Again · {d.label}
        </button>
        <button
          onClick={onBack}
          className="w-full rounded-xl border border-white/10 py-3 text-sm text-white/50 transition-colors hover:border-white/20 hover:text-white/70 focus:outline-none"
        >
          Back to Map
        </button>
      </div>
    </div>
  )
}

// ── Root QuizPage ────────────────────────────────────────────────────────────

export default function QuizPage({ onBack }) {
  const [phase,      setPhase]      = useState('difficulty')
  const [difficulty, setDifficulty] = useState(null)
  const [questions,  setQuestions]  = useState([])
  const [score,      setScore]      = useState(0)

  const startQuiz = (d) => {
    setDifficulty(d)
    setQuestions(generateQuiz(d, TOTAL))
    setPhase('quiz')
  }

  const handleFinish = (finalScore) => {
    setScore(finalScore)
    setPhase('results')
  }

  const handleRetry = () => {
    setQuestions(generateQuiz(difficulty, TOTAL))
    setPhase('quiz')
  }

  return (
    <div className="relative h-full w-full overflow-hidden" style={{ background: 'rgba(7, 11, 18, 1)' }}>
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="h-full overflow-y-auto">
        {phase === 'difficulty' && (
          <DifficultyScreen onSelect={startQuiz} onBack={onBack} />
        )}
        {phase === 'quiz' && (
          <QuizScreen questions={questions} onFinish={handleFinish} onQuit={() => setPhase('difficulty')} />
        )}
        {phase === 'results' && (
          <ResultsScreen score={score} difficulty={difficulty} onRetry={handleRetry} onBack={onBack} />
        )}
      </div>
    </div>
  )
}
