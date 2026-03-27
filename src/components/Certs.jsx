import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { ink, muted } from '../utils/glass';
import { certGroups, certLabels } from '../data/portfolioData';

function CertRow({ c, accent, dark }) {
  return (
    <GlassCard dark={dark} glow={accent} className="rounded-xl float-card">
      <div className="px-4 py-3 flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <p className="text-[.6rem] font-semibold tracking-wider uppercase mb-0.5" style={{ color:accent }}>{c.org}</p>
          <p className="text-[.84rem] font-semibold leading-snug" style={{ color:ink(dark) }}>{c.name}</p>
          <div className="flex items-center gap-2 mt-0.5 flex-wrap">
            {c.date && <span className="text-[.63rem]" style={{ color:muted(dark) }}>{c.date}</span>}
            {c.badge && <span className="text-[.6rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:`${accent}15`, color:accent, border:`1px solid ${accent}28` }}>{c.badge}</span>}
          </div>
        </div>
      </div>
    </GlassCard>
  );
}

function CertGroup({ g, lbl, dark }) {
  const [open, setOpen] = useState(false);
  const Icon = g.icon;
  return (
    <div key={g.key}>
      <GlassCard dark={dark} glow={g.glow} className="rounded-2xl float-card"
        onClick={() => setOpen(v => !v)}
        style={{
          cursor:'pointer',
          ...(open ? { background:`${g.accent}14`, border:`1px solid ${g.accent}38`, boxShadow:`0 8px 28px ${g.glow}` } : {}),
        }}>
        <div className="px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span style={{ color:open?g.accent:muted(dark) }}><Icon size={15}/></span>
              <span className="font-semibold text-sm" style={{ color:open?g.accent:ink(dark) }}>{lbl[g.key]}</span>
              <span className="text-xs opacity-45" style={{ color:muted(dark) }}>({g.certs.length})</span>
            </div>
            <ChevronDown size={15} style={{ color:g.accent, transform:open?'rotate(180deg)':'rotate(0)', transition:'transform .2s' }}/>
          </div>
        </div>
      </GlassCard>

      {open && (
        <div className="mt-2 flex flex-col gap-2 pl-2">
          {g.certs.map((c, ci) => (
            <div key={`${g.key}-${c.name}-${ci}`}>
              <CertRow c={c} accent={g.accent} dark={dark}/>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Certs() {
  const { dark, lang } = useApp();
  const tr   = t[lang];
  const bg   = dark ? '#13131e' : '#f5f0e8';
  const lbl  = certLabels[lang] || certLabels.en;

  return (
    <section id="certs" style={{ background:bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300 overflow-x-hidden cv-auto section-shell no-scroll-anchor">
      <SectionHeader tag={tr.certsTag} title={tr.certsTitle}/>
      <p className="text-sm mb-8 -mt-6" style={{ color:muted(dark) }}>
        {lang==='ar' ? 'اضغط الفئة لعرض الشهادات' : 'Click category to show certificates'}
      </p>

      <div className="flex flex-col gap-2.5 w-full max-w-3xl stagger">
        {certGroups.map((g) => (
          <CertGroup key={g.key} g={g} lbl={lbl} dark={dark} />
        ))}
      </div>
    </section>
  );
}
