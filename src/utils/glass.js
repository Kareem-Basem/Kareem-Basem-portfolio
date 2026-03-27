// ── LIQUID GLASS SYSTEM ──────────────────────────────────────────
// Visible borders + glass effect used everywhere

export const AMBER  = '#f0a500';
export const TEAL   = '#2a9d8f';
export const INK    = '#1a1a2e';

// Base glass card — visible border
export const glass = (dark) => ({
  background:           dark ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.80)',
  border:               `1px solid ${dark ? 'rgba(255,255,255,0.14)' : 'rgba(26,26,46,0.14)'}`,
  backdropFilter:       'blur(var(--glass-blur,12px)) saturate(var(--glass-sat,140%))',
  WebkitBackdropFilter: 'blur(var(--glass-blur,12px)) saturate(var(--glass-sat,140%))',
  boxShadow: dark
    ? '0 8px 28px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.08)'
    : '0 8px 28px rgba(30,28,40,0.10), inset 0 1px 0 rgba(255,255,255,0.95)',
});

// Hovered glass card
export const glassHov = (dark, glow = AMBER + '44') => ({
  background:           dark ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.95)',
  border:               `1px solid ${dark ? 'rgba(255,255,255,0.22)' : 'rgba(26,26,46,0.20)'}`,
  backdropFilter:       'blur(var(--glass-blur-hover,12px)) saturate(var(--glass-sat,140%))',
  WebkitBackdropFilter: 'blur(var(--glass-blur-hover,12px)) saturate(var(--glass-sat,140%))',
  boxShadow:            `0 24px 70px ${glow}, inset 0 1px 0 rgba(255,255,255,${dark?'0.12':'0.98'})`,
  transform:            'translateY(-4px) scale(1.01)',
});

// Legacy alias
export const glassHover = glassHov;

// Specular top-line (inside card, top edge)
export const specular = (dark) => ({
  position: 'absolute', top: 0, left: '16px', right: '16px', height: '1px',
  background: `linear-gradient(90deg,transparent,${dark?'rgba(255,255,255,0.16)':'rgba(255,255,255,0.95)'},transparent)`,
  pointerEvents: 'none',
});

// Text colors
export const ink   = (dark) => dark ? '#f0f0f8' : '#1a1a2e';
export const muted = (dark) => dark ? 'rgba(255,255,255,0.52)' : '#5a5a72';
export const faint = (dark) => dark ? 'rgba(255,255,255,0.35)' : '#9a9ab0';
