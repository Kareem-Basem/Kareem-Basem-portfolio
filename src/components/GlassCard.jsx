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
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const base  = glass(dark);
  const hover = glassHov(dark, glow || 'rgba(240,165,0,0.28)');

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width  * 100).toFixed(1),
      y: ((e.clientY - r.top)  / r.height * 100).toFixed(1),
    });
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        ...(hov ? hover : base),
        transition: 'all 0.32s cubic-bezier(0.22,1,0.36,1)',
        cursor: onClick ? 'pointer' : 'default',
        ...style,
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onMouseMove={handleMove}
      onClick={onClick}>

      {/* Mouse-tracking glow */}
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hov ? 1 : 0,
          background: `radial-gradient(circle at ${pos.x}% ${pos.y}%, ${glow || 'rgba(240,165,0,0.22)'}, transparent 60%)`,
        }}
      />

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
