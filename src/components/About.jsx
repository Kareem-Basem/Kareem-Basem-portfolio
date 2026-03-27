import { Shield, Brain, Globe, Network, Gamepad2, Database } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { ink, muted } from '../utils/glass';

export default function About() {
  const { dark, lang } = useApp();
  const tr = t[lang];
  const bg = dark ? '#13131e' : '#f5f0e8';

  const skills = [
    { Icon: Shield,   key:'cyber', glow:'rgba(42,157,143,0.25)'  },
    { Icon: Brain,    key:'ai',    glow:'rgba(240,165,0,0.25)'   },
    { Icon: Network,  key:'net',   glow:'rgba(77,143,255,0.25)'  },
    { Icon: Globe,    key:'web',   glow:'rgba(42,157,143,0.22)'  },
    { Icon: Gamepad2, key:'game',  glow:'rgba(240,165,0,0.22)'   },
    { Icon: Database, key:'db',    glow:'rgba(168,85,247,0.22)'  },
  ];

  return (
    <section id="about" style={{ background:bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300 overflow-x-hidden cv-auto section-shell">
      <SectionHeader tag={tr.aboutTag} title={tr.aboutTitle}/>
      {/* Stack on mobile, side by side on desktop */}
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* Text */}
        <div className="space-y-4">
          {[tr.aboutP1, tr.aboutP2].map((p, i) => (
            <p key={i} className="text-[0.95rem] md:text-[1rem] leading-[1.9]"
              style={{ color:muted(dark) }}>
              {p}
            </p>
          ))}
          <div className="space-y-2 pt-1" style={{ transitionDelay:'0.2s' }}>
            {[
              { e:'🏅', text: lang==='ar' ? 'بطل الكشافة الوطني — المركز الأول (2020)' : 'National Scout Excellence Champion — 1st Place (2020)' },
              { e:'🏆', text: lang==='ar' ? 'مديرية أسيوط — المركز الأول (2019)'       : '2019 · Asyut Directorate — Scout Excellence, 1st Place' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                style={{ background:'rgba(240,165,0,0.09)', border:'1px solid rgba(240,165,0,0.25)', color:'#e8920a', display:'flex', marginBottom:6 }}>
                {b.e} <span className="break-words">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills grid — 2 cols on all sizes */}
        <div className="grid grid-cols-2 gap-2.5 md:gap-3 stagger">
          {skills.map(({ Icon, key, glow }, i) => (
            <GlassCard key={key} dark={dark} glow={glow}
              className="rounded-xl overflow-hidden float-card"
              style={{ }}>
              <div className="flex items-center gap-2.5 px-3 md:px-4 py-3 md:py-3.5">
                <span style={{ color:'#f0a500', flexShrink:0 }}><Icon size={17}/></span>
                <span className="text-xs md:text-sm font-medium leading-tight" style={{ color:ink(dark) }}>
                  {tr.skills[key]}
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
