import { useState } from 'react';
import { ChevronDown, Shield, Brain, Globe, BarChart2, Network } from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { ink, muted, faint, glass } from '../utils/glass';

const groups = [
  { key:'cyber', icon:<Shield size={15}/>, accent:'#2a9d8f', glow:'rgba(42,157,143,0.25)',
    certs:[
      { org:'Google / Coursera', name:'Foundations of Cybersecurity',               date:'Dec 2025', img:'/assets/certs/google_cyber_1_foundations.jpg'  },
      { org:'Google / Coursera', name:'Play It Safe: Manage Security Risks',         date:'Feb 2026', img:'/assets/certs/google_cyber_2_security_risks.jpg'},
      { org:'Google / Coursera', name:'Connect & Protect: Networks & Security',      date:'Mar 2026', img:'/assets/certs/google_cyber_3_networks.jpg'      },
      { org:'Google / Coursera', name:'Tools of the Trade: Linux and SQL',           date:'Mar 2026', img:'/assets/certs/google_cyber_4_linux_sql.jpg'     },
      { org:'Google / Coursera', name:'Assets, Threats, and Vulnerabilities',        date:'Mar 2026', img:'/assets/certs/google_cyber_5_assets.jpg'        },
      { org:'Google / Coursera', name:'Sound the Alarm: Detection & Response',       badge:'🔄 6/9', img:null },
      { org:'Sprints × Microsoft', name:'Cybersecurity Summer Camp (40 hrs)',         date:'2024',    img:'/assets/certs/sprints_microsoft.jpg' },
      { org:'HP LIFE',             name:'Cybersecurity Awareness',                    img:'/assets/certs/hp_cybersecurity.jpg' },
    ]},
  { key:'ai', icon:<Brain size={15}/>, accent:'#f0a500', glow:'rgba(240,165,0,0.25)',
    certs:[
      { org:'NVIDIA Academy',       name:'AI for All: From Basics to GenAI',          date:'Jan 2026', img:'/assets/certs/nvidia_genai.jpg'          },
      { org:'NVIDIA Academy',       name:'Building LLM Apps with Prompt Engineering', date:'Feb 2026', img:'/assets/certs/nvidia_llm.jpg'            },
      { org:'IBM / Coursera',       name:'Introduction to Artificial Intelligence',   date:'Feb 2025', img:'/assets/certs/ibm_intro_ai.jpg'          },
      { org:'IBM / Coursera',       name:'Delivering Quality Work with Agility',      date:'Jan 2026', img:'/assets/certs/ibm_agility.jpg'           },
      { org:'Dubai Future Foundation', name:'AI Prompt Engineering — 1M Prompters',  img:'/assets/certs/dubai-ai.jpg'     },
      { org:'HP LIFE',              name:'Data Science & Analytics',                  img:'/assets/certs/hp_data_science.jpg' },
    ]},
  { key:'net', icon:<Network size={15}/>, accent:'#4d8fff', glow:'rgba(77,143,255,0.25)',
    certs:[
      { org:'Cisco Networking Academy', name:'Networking Basics', date:'Jul 2025', img:'/assets/certs/cisco_networking.jpg' },
    ]},
  { key:'digital', icon:<Globe size={15}/>, accent:'#e76f51', glow:'rgba(231,111,81,0.25)',
    certs:[
      { org:'Google',               name:'Digital Marketing Fundamentals',         img:'/assets/certs/google_digital_mktg.jpg' },
      { org:'Banque Misr × Google', name:'Maharat min Google — Digital Marketing', img:'/assets/certs/banque_misr_training.jpg'      },
      { org:'HP LIFE',              name:'Digital Business Skills',                img:'/assets/certs/hp_digital_business.jpg' },
    ]},
  { key:'tech', icon:<BarChart2 size={15}/>, accent:'#a855f7', glow:'rgba(168,85,247,0.25)',
    certs:[
      { org:'Meta / Coursera',   name:'Introduction to Data Analytics', date:'Sep 2024', img:'/assets/certs/meta_data_analytics.jpg'   },
      { org:'ITI Mahara-Tech',   name:'Python Programming Basics',       date:'Nov 2025', img:'/assets/certs/iti_python.jpg'            },
      { org:'EYouth Learning',   name:'Blockchain Technology',           img:'/assets/certs/eyouth.jpg'               },
      { org:'LinkedIn Learning', name:'Sustainability Foundations',       date:'Aug 2025', img:'/assets/certs/linkedin_sustainability.jpg'},
    ]},
];

const labels = {
  en:{ cyber:'Cybersecurity — Google 6/9 🔄', ai:'AI & Gen AI', net:'Networking', digital:'Digital & Marketing', tech:'Tech & Other' },
  ar:{ cyber:'الأمن السيبراني — Google 6/9 🔄', ai:'الذكاء الاصطناعي', net:'الشبكات', digital:'التسويق الرقمي', tech:'التقنية وغيرها' },
};

function CertRow({ c, accent, glow, dark }) {
  const [exp, setExp] = useState(false);
  return (
    <GlassCard dark={dark} glow={glow} className="rounded-xl" onClick={c.img ? () => setExp(!exp) : undefined}
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
            <img src={c.img} alt={c.name} className="w-full object-contain max-h-[280px]" loading="lazy"/>
          </div>
        </div>
      )}
    </GlassCard>
  );
}

export default function Certs() {
  const { dark, lang } = useApp();
  const tr   = t[lang];
  const [open, setOpen] = useState(0);
  const bg   = dark ? '#13131e' : '#f5f0e8';
  const lbl  = labels[lang];

  return (
    <section id="certs" style={{ background:bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300">
      <SectionHeader tag={tr.certsTag} title={tr.certsTitle}/>
      <p className="text-sm mb-8 -mt-6" style={{ color:faint(dark) }}>
        {lang==='ar' ? 'اضغط الفئة لتوسيعها · اضغط الشهادة لعرض صورتها' : 'Click category to expand · Click cert to preview'}
      </p>

      <div className="flex flex-col gap-2.5 w-full max-w-3xl">
        {groups.map((g, gi) => {
          const isOpen = open===gi;
          return (
            <div key={gi} className="reveal" style={{ transitionDelay:`${gi*0.07}s` }}>
              {/* Group header button */}
              <GlassCard dark={dark} glow={g.glow} className="rounded-2xl" onClick={() => setOpen(isOpen?null:gi)}
                style={{
                  cursor:'pointer',
                  ...(isOpen ? { background:`${g.accent}14`, border:`1px solid ${g.accent}38`, boxShadow:`0 8px 28px ${g.glow}` } : {}),
                }}>
                <div className="px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span style={{ color:isOpen?g.accent:muted(dark) }}>{g.icon}</span>
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
