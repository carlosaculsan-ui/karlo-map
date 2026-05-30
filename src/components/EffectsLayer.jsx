import { ParticlesProvider, Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

// Module-level function — ParticlesProvider v4 requires a STABLE reference.
// The engine is a singleton internally; loadSlim is safe to call multiple times.
const initEngine = async (engine) => {
  await loadSlim(engine)
}

// ── Shared base ───────────────────────────────────────────────────────────────
const BASE = {
  background: { color: { value: 'transparent' } },
  // Fixed fullscreen canvas: z-5 puts it above the map (0) but below UI (z-10+)
  fullScreen: { enable: true, zIndex: 5 },
  fpsLimit: 60,
  // No mouse interactivity — map stays fully clickable beneath the canvas
  interactivity: {
    events: {
      onClick: { enable: false },
      onHover: { enable: false },
    },
  },
}

// ── Per-effect particle configs ───────────────────────────────────────────────
const CONFIGS = {
  // ── fire: orange/red rising particles ─────────────────────────────────────
  fire: {
    ...BASE,
    particles: {
      number: { value: 90 },
      color: { value: ['#ff6600', '#ff4400', '#ff8c00', '#ffb300', '#ff5500'] },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0, max: 0.8 },
        animation: { enable: true, speed: 2.5, destroy: 'min', startValue: 'max' },
      },
      size: { value: { min: 2, max: 7 } },
      move: {
        enable: true,
        speed: 6,
        direction: 'top',
        random: true,
        straight: false,
        drift: 1,
        outModes: { default: 'destroy', top: 'destroy' },
      },
    },
  },

  // ── rain: dense blue-gray falling particles ────────────────────────────────
  rain: {
    ...BASE,
    particles: {
      number: { value: 220 },
      color: { value: '#7a9ec4' },
      shape: { type: 'circle' },
      opacity: { value: 0.55 },
      size: { value: { min: 1, max: 2 } },
      move: {
        enable: true,
        speed: 18,
        direction: 'bottom',
        straight: true,
        outModes: { default: 'out' },
      },
    },
  },

  // ── smoke: large dark slowly drifting circles ─────────────────────────────
  smoke: {
    ...BASE,
    particles: {
      number: { value: 22 },
      color: { value: ['#222222', '#333333', '#444444'] },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.04, max: 0.24 },
        animation: { enable: true, speed: 0.4 },
      },
      size: { value: { min: 50, max: 100 } },
      move: {
        enable: true,
        speed: 0.7,
        direction: 'top',
        random: true,
        straight: false,
        drift: 2,
        outModes: { default: 'out' },
      },
    },
  },

  // ── pulse: hollow red rings emitted from viewport center ──────────────────
  pulse: {
    ...BASE,
    particles: {
      number: { value: 0 },
      color: { value: '#ef4444' },
      stroke: { width: 2, color: { value: '#ef4444' } },
      fill: false,
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0, max: 0.65 },
        animation: { enable: true, speed: 0.5, destroy: 'min', startValue: 'max', sync: true },
      },
      size: {
        value: { min: 1, max: 300 },
        animation: { enable: true, speed: 100, startValue: 'min', destroy: 'none', sync: true },
      },
      move: { enable: false },
    },
    // Point emitter at viewport center — one ring every 2.5 s
    emitters: {
      position: { x: 50, y: 50 },
      rate: { delay: 2.5, quantity: 1 },
      size: { width: 0, height: 0 },
    },
  },

  // ── ash: slow sparse falling particles for Pinatubo ashfall ──────────────
  ash: {
    ...BASE,
    particles: {
      number: { value: 55 },
      color: { value: ['#bbbbbb', '#cccccc', '#d8d8d8', '#e8e8e8'] },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.15, max: 0.5 },
        animation: { enable: true, speed: 0.5 },
      },
      size: { value: { min: 2, max: 5 } },
      move: {
        enable: true,
        speed: 1.3,
        direction: 'bottom',
        random: true,
        straight: false,
        drift: 1.8,
        outModes: { default: 'out' },
      },
      wobble: { enable: true, speed: 3, distance: 12 },
    },
  },
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function EffectsLayer({ effect }) {
  if (!effect || !CONFIGS[effect]) return null

  return (
    // ParticlesProvider initialises the engine once (module-level singleton).
    // It renders null children until loaded, then renders Particles.
    <ParticlesProvider init={initEngine}>
      {/*
        key={effect} forces a full Particles remount when the effect changes,
        resetting particle state cleanly instead of blending old and new configs.
      */}
      <Particles
        key={effect}
        id="karlo-map-effects"
        options={CONFIGS[effect]}
      />
    </ParticlesProvider>
  )
}
