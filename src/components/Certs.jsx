import { useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { ink, muted, faint } from '../utils/glass';
import { certGroups, certLabels } from '../data/portfolioData';

function CertRow({ c, accent, glow, dark }) {
  const [exp, setExp] = useState(false);
  const rowRef = useRef(null);

  const handleToggle = () => {
    if (!c.img || !rowRef.current) return;
    setExp(v => !v);
  };

  return (
    <div ref={rowRef} style={{ overflowAnchor: 'none' }}>
      <GlassCard dark={dark} glow={glow} className="rounded-xl float-card" onClick={c.img ? handleToggle : undefined}
        style={{ cursor: c.img ? 'pointer' : 'default' }}>
        <div className="px-4 py-3 flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-[.6rem] font-semibold tracking-wider uppercase mb-0.5" style={{ color:accent }}>{c.org}</p>
            <p className="text-[.84rem] font-semibold leading-snug" style={{ color:ink(dark) }}>{c.name}</p>
            <div className="flex items-center gap-2 mt-0.5 flex-wrap">
              {c.date && <span className="text-[.63rem]" style={{ color:faint(dark) }}>{c.date}</span>}
              {c.badge && <span className="text-[.6rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:`${accent}15`, color:accent, border:`1px solid ${accent}28` }}>{c.badge}</span>}
            </div>
          </div>
          {c.img && (
            <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
              style={{ background:`${accent}15`, color:accent }}>
              <ChevronDown size={12} style={{ transform:exp?'rotate(180deg)':'rotate(0)', transition:'transform .25s' }}/>
            </div>
          )}
        </div>
        {exp && c.img && (
          <div className="px-4 pb-4" style={{ animation:'fadeUp .2s ease both' }}>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor:`${accent}30` }}>
              <img src={c.img} alt={c.name} className="w-full object-contain max-h-[260px]" loading="lazy" decoding="async" style={{display:'block'}}/>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
}

export default function Certs() {
  const { dark, lang } = useApp();
  const tr   = t[lang];
  const [open, setOpen] = useState(0);
  const bg   = dark ? '#13131e' : '#f5f0e8';
  const lbl  = certLabels[lang] || certLabels.en;
  const groupRefs = useRef({});

  const handleGroupToggle = (gi) => {
    setOpen(prev => (prev === gi ? null : gi));
  };

  return (
    <section id="certs" style={{ background:bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300 overflow-x-hidden cv-auto section-shell">
      <SectionHeader tag={tr.certsTag} title={tr.certsTitle}/>
      <p className="text-sm mb-8 -mt-6" style={{ color:faint(dark) }}>
        {lang==='ar' ? 'اضغط الفئة لتوسيعها · اضغط الشهادة لعرض صورتها' : 'Click category to expand · Click cert to preview'}
      </p>

      <div className="flex flex-col gap-2.5 w-full max-w-3xl stagger" style={{ overflowAnchor: 'none' }}>
        {certGroups.map((g, gi) => {
          const isOpen = open===gi;
          const Icon = g.icon;
          return (
            <div
              key={gi}
              ref={el => { groupRefs.current[gi] = el; }}
              style={{ overflowAnchor: 'none' }}>
              {/* Group header button */}
              <GlassCard dark={dark} glow={g.glow} className="rounded-2xl float-card" onClick={() => handleGroupToggle(gi)}
                style={{
                  cursor:'pointer',
                  ...(isOpen ? { background:`${g.accent}14`, border:`1px solid ${g.accent}38`, boxShadow:`0 8px 28px ${g.glow}` } : {}),
                }}>
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span style={{ color:isOpen?g.accent:muted(dark) }}><Icon size={15}/></span>
                      <span className="font-semibold text-sm" style={{ color:isOpen?g.accent:ink(dark) }}>{lbl[g.key]}</span>
                      <span className="text-xs opacity-45" style={{ color:muted(dark) }}>({g.certs.length})</span>
                    </div>
                    <ChevronDown size={15} style={{ color:g.accent, transform:isOpen?'rotate(180deg)':'rotate(0)', transition:'transform .3s' }}/>
                  </div>
                  {/* Progress bar for Google Cybersecurity */}
                  {g.key === 'cyber' && (
                    <div className="mt-2.5">
                      <div className="flex justify-between text-[.62rem] mb-1" style={{ color:muted(dark) }}>
                        <span>Google Cybersecurity Professional Certificate</span>
                        <span style={{ color:g.accent, fontWeight:600 }}>6/9</span>
                      </div>
                      <div className="h-1.5 rounded-full overflow-hidden" style={{ background:dark?'rgba(255,255,255,0.08)':'rgba(26,26,46,0.08)' }}>
                        <div className="h-full rounded-full transition-all duration-700"
                          style={{ width:'66.6%', background:`linear-gradient(90deg,${g.accent},${g.accent}99)` }}/>
                      </div>
                    </div>
                  )}
                </div>
              </GlassCard>

              {/* Cert rows */}
              {isOpen && (
                <div className="mt-2 flex flex-col gap-2 pl-2">
                  {g.certs.map((c, ci) => (
                    <div key={ci} style={{ animation:`fadeUp .22s ${ci*0.04}s ease both` }}>
                      <CertRow c={c} accent={g.accent} glow={g.glow} dark={dark}/>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
