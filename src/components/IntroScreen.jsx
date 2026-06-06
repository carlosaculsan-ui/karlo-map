import { useMemo } from 'react'

const STAR_COUNT = 110

export default function IntroScreen({ onBegin }) {
  // Stable random stars — only computed once per mount
  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.6 + 0.4,
        delay: Math.random() * 7,
        duration: Math.random() * 4 + 3,
      })),
    [],
  )

  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{ background: '#070b12' }}
    >
      {/* Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animation: `twinkle ${s.duration}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Ambient glow — orange, center */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '70vmax',
          height: '70vmax',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(249,115,22,0.13) 0%, transparent 65%)',
          animation: 'driftA 28s ease-in-out infinite, glowPulse 7s ease-in-out infinite',
        }}
      />

      {/* Ambient glow — blue, bottom-right */}
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: '50vmax',
          height: '50vmax',
          bottom: '-10%',
          right: '-5%',
          background:
            'radial-gradient(circle, rgba(59,130,246,0.09) 0%, transparent 65%)',
          animation: 'driftB 22s 4s ease-in-out infinite',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-6 text-center">
        {/* Eyebrow */}
        <p
          className="text-[10px] tracking-[0.5em] text-orange-400/80 uppercase"
          style={{ animation: 'fadeIn 1s 0.2s ease forwards', opacity: 0 }}
        >
          Philippine History Explorer
        </p>

        {/* Logo */}
        <img
          src="/Logo.png"
          alt="Karlo Map logo"
          className="h-24 w-24 sm:h-32 sm:w-32"
          style={{
            animation: 'fadeInUp 1s 0.35s ease forwards',
            opacity: 0,
            filter: 'drop-shadow(0 0 24px rgba(249,115,22,0.4))',
          }}
        />

        {/* Title */}
        <h1
          className="text-5xl font-bold tracking-widest text-white sm:text-7xl"
          style={{
            fontFamily: "'Cinzel', serif",
            animation: 'fadeInUp 1s 0.55s ease forwards',
            opacity: 0,
            textShadow: '0 0 48px rgba(249,115,22,0.35)',
          }}
        >
          Karlo Map
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-xs text-sm text-white/40 sm:text-base"
          style={{ animation: 'fadeInUp 1s 1s ease forwards', opacity: 0 }}
        >
          Explore&nbsp;1,126&nbsp;years of Philippine history
        </p>

        {/* Decorative line */}
        <div
          className="h-px w-16 bg-orange-500/30"
          style={{ animation: 'fadeIn 1s 1.2s ease forwards', opacity: 0 }}
        />

        {/* Begin button */}
        <button
          onClick={onBegin}
          className="mt-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-500 px-10 py-3.5 text-xs tracking-[0.3em] text-white uppercase shadow-lg shadow-orange-500/30 transition-all duration-200 hover:brightness-110 hover:shadow-orange-500/50 active:scale-95"
          style={{ animation: 'fadeIn 1s 1.4s ease forwards', opacity: 0 }}
        >
          Begin
        </button>

      </div>
    </div>
  )
}
