import { useState } from 'react';
import { glass, glassHov } from '../utils/glass';

/**
 * GlassCard — reusable Liquid Glass card with:
 *  • Mouse-tracking radial glow
 *  • Hover lift + border brighten
 *  • Specular top line
 *  • Visible border always
 *
 * Props:
 *  dark       — boolean
 *  glow       — accent glow color e.g. 'rgba(240,165,0,0.3)'
 *  className  — extra classes
 *  onClick    — optional
 *  style      — extra inline styles
 *  children
 */
export default function GlassCard({ dark, glow, className = '', onClick, style = {}, children }) {
  const [hov, setHov] = useState(false);

  const base  = glass(dark);
  const hover = glassHov(dark, glow || 'rgba(240,165,0,0.28)');

  return (
    <div
      className={`relative ${className}`}
      style={{
        ...(hov ? hover : base),
        transition: 'box-shadow 0.18s ease, border-color 0.18s ease, background-color 0.18s ease',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onClick}>

      {/* Specular top highlight */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: 0, left: '14px', right: '14px', height: '1px',
          background: `linear-gradient(90deg,transparent,${dark?'rgba(255,255,255,0.18)':'rgba(255,255,255,1)'},transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
