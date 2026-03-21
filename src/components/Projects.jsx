import { useState } from 'react';
import {
  Shield, Library, Gamepad2, Database, Leaf,
  ArrowUpRight, X, CheckCircle2, Circle, Server,
  Monitor, Volume2, Car, Cpu, FileText, Github, ExternalLink
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';

/* ─── Accent palette per project ─── */
const meta = [
  { Icon: Shield,   accent:'#2a9d8f', glow:'rgba(42,157,143,0.28)'  },
  { Icon: Library,  accent:'#4d8fff', glow:'rgba(77,143,255,0.25)'  },
  { Icon: Gamepad2, accent:'#f0a500', glow:'rgba(240,165,0,0.28)'   },
  { Icon: Gamepad2, accent:'#e05c2e', glow:'rgba(224,92,46,0.28)'   },
  { Icon: Database, accent:'#a855f7', glow:'rgba(168,85,247,0.25)'  },
  { Icon: Leaf,     accent:'#e76f51', glow:'rgba(231,111,81,0.25)'  },
];

const chipsEn = [
  ['React','Node.js','SQL Server','JWT'],
  ['HTML','CSS','JavaScript'],
  ['Graphics','Vehicles','Sound'],
  ['Graphics','Vehicles','Sound'],
  ['MS Access','Relational DB','Team ×4'],
  ['ESG','Strategy','Forage'],
];
const chipsAr = [
  ['React','Node.js','SQL Server','JWT'],
  ['HTML','CSS','JavaScript'],
  ['رسومات','سيارات','صوت'],
  ['رسومات','سيارات','صوت'],
  ['MS Access','قاعدة بيانات','فريق ×4'],
  ['الاستدامة','استراتيجية','Forage'],
];

/* ─── Examor modal ─── */
const examorFeaturesEn = [
  { done:true,  text:'Role system: Admin / Doctor / Student' },
  { done:true,  text:'MCQ, True/False, Essay question types' },
  { done:true,  text:'Auto-grading for MCQ & True/False' },
  { done:true,  text:'Unique exam code per exam' },
  { done:true,  text:'JWT auth + bcrypt password hashing' },
  { done:true,  text:'SQL Injection protection' },
  { done:true,  text:'20+ REST API endpoints' },
  { done:true,  text:'Countdown timer with auto-submit' },
  { done:false, text:'Frontend dashboards (in progress)' },
  { done:false, text:'Deploy on Vercel / Render' },
];
const examorFeaturesAr = [
  { done:true,  text:'نظام أدوار: Admin / Doctor / Student' },
  { done:true,  text:'MCQ + صح/خطأ + مقالي' },
  { done:true,  text:'تصحيح تلقائي للأسئلة الموضوعية' },
  { done:true,  text:'كود فريد لكل امتحان' },
  { done:true,  text:'JWT + bcrypt لحماية كلمات المرور' },
  { done:true,  text:'حماية من SQL Injection' },
  { done:true,  text:'+20 API endpoint' },
  { done:true,  text:'عداد تنازلي مع تسليم تلقائي' },
  { done:false, text:'لوحات التحكم (قيد التطوير)' },
  { done:false, text:'Deploy على Vercel / Render' },
];

/* ─── GTA Vice City modal data ─── */
const vcData = {
  github: 'https://github.com/Kareem-Basem/GTA-Vice-City-KeMoO-Edition',
  en: {
    title: 'GTA: Vice City — KeMoO Edition v.3',
    icon: '/assets/gta-vc-icon.png',
    docImg: '/assets/gta-vc-doc.jpg',
    era: '1980s Atmosphere',
    accentColor: '#f0a500',
    features: [
      { Icon: Monitor, label:'Graphics',  text:'Fully upgraded textures to modern standards, realistic environment.' },
      { Icon: Car,     label:'Vehicles',  text:'All vehicles replaced with authentic 1980s models.' },
      { Icon: Volume2, label:'Audio',     text:'Complete soundtrack & environmental sound overhaul.' },
      { Icon: Cpu,     label:'Engine',    text:'Refined movement mechanics, bug-free stable performance.' },
    ],
    sysReq: {
      min:  'Core i5 2400 · 8GB RAM · GTX 710 · 6GB',
      rec:  'Core i5 3470 · 16GB RAM · GTX 1050 · 6GB',
    },
    note: '© 2024 KeMoO Interactive — Unofficial mod, not endorsed by Rockstar.',
  },
  ar: {
    title: 'GTA: Vice City — إصدار KeMoO v.3',
    icon: '/assets/gta-vc-icon.png',
    docImg: '/assets/gta-vc-doc.jpg',
    era: 'أجواء الثمانينيات',
    accentColor: '#f0a500',
    features: [
      { Icon: Monitor, label:'الرسومات',  text:'ترقية شاملة للـ textures لمعايير حديثة.' },
      { Icon: Car,     label:'السيارات',  text:'استبدال كامل بموديلات أصيلة من الثمانينيات.' },
      { Icon: Volume2, label:'الصوت',     text:'إعادة تصميم كاملة للموسيقى والمؤثرات الصوتية.' },
      { Icon: Cpu,     label:'المحرك',    text:'تحسين ميكانيكيات الحركة، أداء مستقر.' },
    ],
    sysReq: {
      min: 'Core i5 2400 · 8GB RAM · GTX 710 · 6GB',
      rec: 'Core i5 3470 · 16GB RAM · GTX 1050 · 6GB',
    },
    note: '© 2024 KeMoO Interactive — تعديل غير رسمي، غير معتمد من Rockstar.',
  },
};

/* ─── GTA San Andreas modal data ─── */
const saData = {
  github: 'https://github.com/Kareem-Basem/GTA-San-Andreas-KeMoO-Edition',
  en: {
    title: 'GTA: San Andreas — KeMoO Edition v.3',
    icon: '/assets/gta-sa-icon.png',
    docImg: '/assets/gta-sa-doc.jpg',
    era: '1990s Spirit',
    accentColor: '#e05c2e',
    features: [
      { Icon: Monitor, label:'Graphics',  text:'Modern textures with 90s aesthetics, up to 4K resolution support.' },
      { Icon: Car,     label:'Vehicles',  text:'New & redesigned vehicles capturing the 90s vibe, enhanced AI.' },
      { Icon: Volume2, label:'Audio',     text:'Full sound overhaul including environmental effects & soundtrack.' },
      { Icon: Cpu,     label:'Engine',    text:'Improved movement mechanics, weather/lighting/shadow updates.' },
    ],
    sysReq: {
      min: 'Core i5 3470 · 8GB RAM · GTX 660 · 20GB',
      rec: 'Core i7 4790 · 16GB RAM · GTX 1050 · 20GB',
    },
    note: '© 2024 KeMoO Interactive — Unofficial mod, not endorsed by Rockstar.',
  },
  ar: {
    title: 'GTA: San Andreas — إصدار KeMoO v.3',
    icon: '/assets/gta-sa-icon.png',
    docImg: '/assets/gta-sa-doc.jpg',
    era: 'روح التسعينيات',
    accentColor: '#e05c2e',
    features: [
      { Icon: Monitor, label:'الرسومات',  text:'تكسچر حديثة بأجواء التسعينيات، دعم حتى دقة 4K.' },
      { Icon: Car,     label:'السيارات',  text:'سيارات جديدة بروح التسعينيات، تحسين الذكاء الاصطناعي.' },
      { Icon: Volume2, label:'الصوت',     text:'إعادة تصميم كاملة للصوتيات والموسيقى والمؤثرات.' },
      { Icon: Cpu,     label:'المحرك',    text:'تحسين الحركة، تحديث الطقس والإضاءة والظلال.' },
    ],
    sysReq: {
      min: 'Core i5 3470 · 8GB RAM · GTX 660 · 20GB',
      rec: 'Core i7 4790 · 16GB RAM · GTX 1050 · 20GB',
    },
    note: '© 2024 KeMoO Interactive — تعديل غير رسمي، غير معتمد من Rockstar.',
  },
};

/* ─── Modal wrapper ─── */
function Modal({ onClose, dark, children }) {
  const overlay = dark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)';
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: overlay, backdropFilter:'blur(12px)' }}
      onClick={onClose}>
      <div className="relative w-full max-w-lg my-4" onClick={e => e.stopPropagation()}
        style={{ animation:'fadeUp .25s ease both' }}>
        {children}
      </div>
    </div>
  );
}

/* ─── Examor Modal ─── */
function ExamorModal({ onClose, dark, lang }) {
  const features = lang==='ar' ? examorFeaturesAr : examorFeaturesEn;
  const bg    = dark ? 'rgba(19,19,30,0.97)' : 'rgba(255,255,255,0.97)';
  const bord  = dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.12)';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#8a8a9a';
  return (
    <Modal onClose={onClose} dark={dark}>
      <div className="rounded-2xl p-6 shadow-2xl"
        style={{ background:bg, border:`1px solid ${bord}`, backdropFilter:'blur(24px)' }}>
        <button onClick={onClose} className="absolute top-4 right-4 transition-colors hover:text-amber" style={{ color:muted }}><X size={18}/></button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background:'rgba(42,157,143,0.12)', color:'#2a9d8f' }}><Server size={16}/></div>
          <div>
            <p className="font-semibold" style={{ color:ink }}>Examor</p>
            <p className="text-[.65rem] font-mono" style={{ color:'#2a9d8f' }}>React · Node.js · SQL Server · JWT</p>
          </div>
          <span className="ml-auto text-[.58rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:'rgba(240,165,0,0.12)', color:'#e8920a', border:'1px solid rgba(240,165,0,0.25)' }}>🔄 In Progress</span>
        </div>
        <div className="space-y-2.5">
          {features.map((f,i) => (
            <div key={i} className="flex items-start gap-2.5">
              {f.done ? <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color:'#2a9d8f' }}/> : <Circle size={14} className="flex-shrink-0 mt-0.5" style={{ color:muted }}/>}
              <span className="text-[.83rem] leading-snug" style={{ color:f.done?ink:muted }}>{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}

/* ─── GTA Modal (VC or SA) ─── */
function GTAModal({ data, onClose, dark }) {
  const bg    = dark ? 'rgba(15,15,20,0.97)' : 'rgba(255,255,255,0.97)';
  const bord  = dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.12)';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#8a8a9a';
  const divider = dark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)';
  const ac    = data.accentColor;

  return (
    <Modal onClose={onClose} dark={dark}>
      <div className="rounded-2xl overflow-hidden shadow-2xl"
        style={{ background:bg, border:`1px solid ${bord}`, backdropFilter:'blur(24px)' }}>

        {/* Header accent stripe */}
        <div className="h-1" style={{ background:`linear-gradient(90deg,${ac},${ac}88)` }}/>

        <div className="p-6">
          <button onClick={onClose} className="absolute top-5 right-5 transition-colors hover:text-amber" style={{ color:muted }}><X size={18}/></button>

          {/* Title row */}
          <div className="flex items-center gap-3 mb-5">
            <img src={data.icon} alt="icon" className="w-10 h-10 rounded-xl object-contain"
              style={{ background:`${ac}15`, border:`1px solid ${ac}28`, padding:4 }}
              onError={e => { e.target.style.display='none'; }}/>
            <div>
              <h3 className="font-serif-display text-lg tracking-tight leading-tight" style={{ color:ink }}>{data.title}</h3>
              <span className="text-[.65rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:`${ac}15`, color:ac, border:`1px solid ${ac}28` }}>{data.era}</span>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
            {data.features.map(({ Icon, label, text }, i) => (
              <div key={i} className="rounded-xl p-3" style={{ background:`${ac}08`, border:`1px solid ${ac}20` }}>
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon size={13} style={{ color:ac }}/>
                  <span className="text-[.68rem] font-semibold" style={{ color:ac }}>{label}</span>
                </div>
                <p className="text-[.78rem] leading-snug" style={{ color:muted }}>{text}</p>
              </div>
            ))}
          </div>

          {/* Sys req */}
          <div className="rounded-xl p-3 mb-4" style={{ background:dark?'rgba(255,255,255,0.04)':'rgba(26,26,46,0.04)', border:`1px solid ${divider}` }}>
            <p className="text-[.65rem] font-semibold tracking-wider uppercase mb-2" style={{ color:muted }}>System Requirements</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[['Min',data.sysReq.min],['Rec',data.sysReq.rec]].map(([lbl,val]) => (
                <div key={lbl}>
                  <p className="text-[.6rem] uppercase tracking-wider font-semibold mb-0.5" style={{ color:ac }}>{lbl}</p>
                  <p className="text-[.75rem] leading-snug" style={{ color:muted }}>{val}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Doc preview + download + GitHub */}
          <div className="flex items-center justify-between pt-3" style={{ borderTop:`1px solid ${divider}` }}>
            <p className="text-[.7rem] max-w-[60%]" style={{ color:muted }}>{data.note}</p>
            <div className="flex gap-2">
              {data.github && (
                <a href={data.github} target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[.72rem] font-semibold px-3 py-1.5 rounded-full transition-all hover:-translate-y-0.5"
                  style={{ background:'rgba(255,255,255,0.08)', color: dark?'#f0f0f8':'#1a1a2e', border:`1px solid ${dark?'rgba(255,255,255,0.15)':'rgba(26,26,46,0.15)'}` }}>
                  <Github size={12}/> GitHub
                </a>
              )}
              <a href={data.docImg} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[.72rem] font-semibold px-3 py-1.5 rounded-full transition-all hover:-translate-y-0.5"
                style={{ background:`${ac}15`, color:ac, border:`1px solid ${ac}28` }}>
                <FileText size={12}/> Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

/* ─── Glass card ─── */
function GlassCard({ p, m, chips, index, modalType, dark, onOpen, githubUrl, liveUrl }) {
  const [hov, setHov] = useState(false);
  const [pos, setPos] = useState({ x:50, y:50 });

  const gbg   = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.72)';
  const gbord = dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.13)';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#5a5a72';
  const chip  = dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.70)';
  const delay = [0,.08,.15,.22,.29,.35][index]||0;
  const canClick = !!modalType;

  return (
    <div className="reveal relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        transitionDelay:`${delay}s`,
        background: gbg,
        border:`1px solid ${hov ? m.accent+'50' : gbord}`,
        backdropFilter:'blur(22px) saturate(160%)',
        WebkitBackdropFilter:'blur(22px) saturate(160%)',
        boxShadow: hov
          ? `0 20px 55px ${m.glow}, inset 0 1px 0 rgba(255,255,255,${dark?'0.09':'0.92'})`
          : `0 3px 18px rgba(0,0,0,${dark?'0.22':'0.06'}), inset 0 1px 0 rgba(255,255,255,${dark?'0.06':'0.88'})`,
        transform: hov ? 'translateY(-6px) scale(1.005)' : 'none',
        transition:'all 0.32s cubic-bezier(0.22,1,0.36,1)',
        cursor: canClick ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onMouseMove={e => { const r=e.currentTarget.getBoundingClientRect(); setPos({ x:((e.clientX-r.left)/r.width*100).toFixed(1), y:((e.clientY-r.top)/r.height*100).toFixed(1) }); }}
      onClick={canClick ? onOpen : undefined}>

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-300"
        style={{ opacity:hov?1:0, background:`radial-gradient(circle at ${pos.x}% ${pos.y}%, ${m.glow}, transparent 60%)` }}/>
      {/* Specular */}
      <div className="absolute top-0 left-4 right-4 h-px pointer-events-none"
        style={{ background:`linear-gradient(90deg,transparent,${dark?'rgba(255,255,255,0.16)':'rgba(255,255,255,0.95)'},transparent)` }}/>

      <div className="relative z-10 p-5 sm:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background:`${m.accent}18`, border:`1px solid ${m.accent}30`, color:m.accent }}>
              <m.Icon size={18}/>
            </div>
            <span className="text-[.65rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border"
              style={{ background:`${m.accent}12`, borderColor:`${m.accent}28`, color:m.accent }}>
              {p.tag}
            </span>
          </div>
          {modalType === 'examor' && (
            <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:'rgba(42,157,143,0.12)', color:'#2a9d8f', border:'1px solid rgba(42,157,143,0.25)' }}>🔄 In Progress</span>
          )}
          {(modalType === 'vc' || modalType === 'sa') && (
            <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:`${m.accent}12`, color:m.accent, border:`1px solid ${m.accent}28` }}>📄 Docs</span>
          )}
        </div>

        <h3 className="font-serif-display text-xl tracking-tight leading-snug mb-2" style={{ color:ink }}>{p.title}</h3>
        <p className="text-[.87rem] leading-[1.75] flex-1" style={{ color:muted }}>{p.desc}</p>

        {modalType === 'examor' && (
          <div className="flex gap-1.5 flex-wrap mt-3">
            {['React','Node.js','SQL Server','JWT','Express'].map(tech => (
              <span key={tech} className="text-[.62rem] font-mono px-2 py-0.5 rounded-full border"
                style={{ background:`${m.accent}10`, borderColor:`${m.accent}28`, color:m.accent }}>{tech}</span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-5 pt-4"
          style={{ borderTop:`1px solid ${dark?'rgba(255,255,255,0.07)':'rgba(26,26,46,0.07)'}` }}>
          <div className="flex gap-1.5 flex-wrap">
            {chips.map(c => (
              <span key={c} className="text-[.67rem] font-medium px-2 py-0.5 rounded"
                style={{ background:chip, border:`1px solid ${dark?'rgba(255,255,255,0.09)':'rgba(26,26,46,0.08)'}`, color:muted }}>{c}</span>
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background:chip, border:`1px solid ${dark?'rgba(255,255,255,0.09)':'rgba(26,26,46,0.08)'}`, color:muted }}
                title="GitHub">
                <Github size={13}/>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer"
                onClick={e => e.stopPropagation()}
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background:hov?`${m.accent}18`:chip, border:`1px solid ${hov?m.accent+'38':dark?'rgba(255,255,255,0.09)':'rgba(26,26,46,0.08)'}`, color:hov?m.accent:muted }}
                title="Live Demo">
                <ExternalLink size={13}/>
              </a>
            )}
            {!githubUrl && !liveUrl && (
              <div className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                style={{ background:hov?`${m.accent}18`:chip, border:`1px solid ${hov?m.accent+'38':dark?'rgba(255,255,255,0.09)':'rgba(26,26,46,0.08)'}`, color:hov?m.accent:muted }}>
                <ArrowUpRight size={13}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main ─── */
export default function Projects() {
  const { dark, lang } = useApp();
  const tr    = t[lang];
  const chips = lang === 'ar' ? chipsAr : chipsEn;
  const [modal, setModal] = useState(null); // 'examor' | 'vc' | 'sa' | null
  const bg = dark ? '#0f0f14' : '#fdfcf9';

  // Map project index → modal type
  const modalTypes = ['examor', null, 'vc', 'sa', null, null];

  return (
    <>
      <section id="projects" style={{ background:bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300">
        <SectionHeader tag={tr.projTag} title={tr.projTitle}/>
        <div className="grid md:grid-cols-2 gap-5">
          {tr.projects.map((p, i) => (
            <GlassCard key={i} p={p} m={meta[i]} chips={chips[i]} index={i}
              modalType={modalTypes[i]} dark={dark}
              onOpen={() => setModal(modalTypes[i])}
              githubUrl={i === 1 ? 'https://github.com/Kareem-Basem/vision-library' : i === 2 ? 'https://github.com/Kareem-Basem/GTA-Vice-City-KeMoO-Edition' : i === 3 ? 'https://github.com/Kareem-Basem/GTA-San-Andreas-KeMoO-Edition' : null}
              liveUrl={i === 1 ? 'https://kareem-basem.github.io/vision-library/index.html' : null}
            />
          ))}
        </div>
      </section>

      {modal === 'examor' && <ExamorModal onClose={() => setModal(null)} dark={dark} lang={lang}/>}
      {modal === 'vc'     && <GTAModal data={vcData[lang]} onClose={() => setModal(null)} dark={dark}/>}
      {modal === 'sa'     && <GTAModal data={saData[lang]} onClose={() => setModal(null)} dark={dark}/>}
    </>
  );
}
