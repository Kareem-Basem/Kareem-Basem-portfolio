import { useState } from 'react';
import {
  Briefcase, BookOpen, Landmark, FlameKindling, Globe,
  Building2, GraduationCap, Award, ExternalLink, Monitor
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { ink, muted, faint } from '../utils/glass';

function getIcon(org, type) {
  if (org.includes('CIB') || org.includes('التجاري') || org.includes('EALB') || org.includes('العقارى')) return Landmark;
  if (org.includes('ASORC') || org.includes('Refin') || org.includes('تكرير')) return FlameKindling;
  if (org.includes('Nile') || org.includes('النيل')) return FlameKindling;
  if (org.includes('Google') || org.includes('Misr') || org.includes('مصر')) return Globe;
  if (org.includes('HSBC')) return Building2;
  if (org.includes('Infinity') || org.includes('IT')) return Monitor;
  return type === 'internship' ? Briefcase : GraduationCap;
}

const accentMap = {
  internship: { color:'#f0a500', bg:'rgba(240,165,0,0.12)', border:'rgba(240,165,0,0.30)', glow:'rgba(240,165,0,0.22)', stripe:'linear-gradient(90deg,#f0a500,#e8920a)' },
  training:   { color:'#2a9d8f', bg:'rgba(42,157,143,0.12)', border:'rgba(42,157,143,0.30)', glow:'rgba(42,157,143,0.22)', stripe:'linear-gradient(90deg,#2a9d8f,#1f7a6e)' },
};

// Split '·' desc into chips
function Topics({ desc, dark }) {
  if (!desc) return null;
  // Only use · as separator for chips, never –
  if (desc.includes('·')) {
    return (
      <div className="flex flex-wrap gap-1.5 mt-3">
        {desc.split('·').map((item, i) => (
          <span key={i} className="text-[.72rem] px-2.5 py-1 rounded-lg font-medium"
            style={{ background:dark?'rgba(255,255,255,0.07)':'rgba(26,26,46,0.06)', border:`1px solid ${dark?'rgba(255,255,255,0.12)':'rgba(26,26,46,0.10)'}`, color:muted(dark) }}>
            {item.trim()}
          </span>
        ))}
      </div>
    );
  }
  return <p className="text-[.85rem] leading-[1.75] mt-3" style={{ color:muted(dark) }}>{desc}</p>;
}

function ExpCard({ e, dark, lang, delay = 0 }) {
  const acc  = accentMap[e.type];
  const Icon = getIcon(e.org, e.type);
  return (
    <GlassCard dark={dark} glow={acc.glow} className="reveal rounded-2xl"
      style={{ transitionDelay:`${delay}s`, borderTop:`3px solid ${acc.color}` }}>
      <div className="p-5">
        {/* Top row */}
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background:acc.bg, border:`1px solid ${acc.border}`, color:acc.color }}>
            <Icon size={18}/>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="inline-flex items-center gap-1 text-[.6rem] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full"
                style={{ background:acc.bg, border:`1px solid ${acc.border}`, color:acc.color }}>
                {e.type === 'internship'
                  ? <><Briefcase size={9}/> {lang==='ar'?'تدريب مهني':'Internship'}</>
                  : <><BookOpen size={9}/> {lang==='ar'?'كورس/تدريب':'Training'}</>}
              </span>
              <span className="text-[.65rem] font-medium" style={{ color:faint(dark) }}>{e.date}</span>
            </div>
            <h3 className="font-semibold text-[.95rem] leading-tight" style={{ color:ink(dark) }}>{e.role}</h3>
            <p className="text-[.78rem] mt-0.5" style={{ color:muted(dark) }}>{e.org} · {e.location}</p>
          </div>
        </div>
        {/* Description */}
        <div className="mt-3 pt-3" style={{ borderTop:`1px solid ${dark?'rgba(255,255,255,0.08)':'rgba(26,26,46,0.08)'}` }}>
          <Topics desc={e.desc} dark={dark}/>
        </div>
        {/* View Certificate */}
        {e.certImg && (
          <a href={e.certImg} target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-[.72rem] font-medium transition-colors hover:opacity-75"
            style={{ color:acc.color }}>
            <Award size={12}/> {lang==='ar'?'عرض الشهادة':'View Certificate'} <ExternalLink size={10}/>
          </a>
        )}
      </div>
    </GlassCard>
  );
}

// ── All experience data (EN + AR) ──
const expDataEn = {
  internships: [
    {
      type:'internship', date:'Sep 2025 – Present · 7 months',
      role:'Intern — Banking Operations',
      org:'Commercial International Bank (CIB)', location:'Asyut',
      desc:'Selected for on-site branch internship based on outstanding online training performance. Gained practical experience in banking operations and customer service.',
      certImg:'/assets/certs/cib_cert_aug.jpg',
    },
    {
      type:'internship', date:'Jul 2025 · 2 Weeks',
      role:'Summer Intern — IT Department',
      org:'ASORC — Assiut Oil Refining Company', location:'Asyut',
      desc:'Assisted with technical support, software troubleshooting, and network monitoring. Real-world experience in petroleum industry IT systems and hardware maintenance.',
      certImg:'/assets/certs/asorc_cert_new.jpg',
    },
    {
      type:'internship', date:'Jul 2025 · 1 Month',
      role:'Intern',
      org:'Arab Egyptian Land Bank (EALB)', location:'Asyut',
      desc:'Hybrid banking internship — gained exposure to land bank operations and financial services.',
      certImg: null,
    },
    {
      type:'internship', date:'Aug 2024 · 2 Weeks',
      role:'Intern — Marketing & Operations',
      org:'Nile Petroleum Marketing Co.', location:'Asyut',
      desc:'Blended theoretical + practical marketing training. Data entry, computer operations, and cross-functional team collaboration.',
      certImg:'/assets/certs/nile_oil_cert_new.jpg',
    },
    {
      type:'internship', date:'Jan 2025 – Present · 1y 3m',
      role:'Head of IT',
      org:'Infinity Team — IUA', location:'Asyut',
      desc:'Supporting technical operations and providing IT assistance during events. Contributing to digital presence and coordinating with different teams.',
      certImg: null,
    },
  ],
  trainings: [
    {
      type:'training', date:'Aug 2025 – Present · 8 months',
      role:'Online Training Program',
      org:'CIB × SAS × Udemy × LinkedIn', location:'Online',
      desc:'Responsible Innovation and Trustworthy AI (SAS) · Customer Centricity (Udemy) · Sustainability Foundations (LinkedIn Learning)',
      certImg:'/assets/certs/cib_cert_jul.jpg',
    },
    {
      type:'training', date:'Jul 2025',
      role:'Maharat Digital Marketing',
      org:'Banque Misr × Google', location:'Online',
      desc:'Digital Marketing Fundamentals & online business strategies via "Maharat min Google" program.',
      certImg:'/assets/certs/banque_misr_training.jpg',
    },
    {
      type:'training', date:'Oct 2024',
      role:'Digital Business Services Simulation',
      org:'HSBC × Forage', location:'Online',
      desc:'Carbon-neutrality roadmaps · Sustainability initiatives · Data-driven PM recommendations',
      certImg: null,
    },
  ],
};

const expDataAr = {
  internships: [
    {
      type:'internship', date:'سبتمبر 2025 – الحالي · 7 أشهر',
      role:'متدرب — العمليات البنكية',
      org:'البنك التجاري الدولي (CIB)', location:'أسيوط',
      desc:'تم اختياري للتدريب الميداني بناءً على أداء متميز في التدريب الإلكتروني. خبرة عملية في العمليات البنكية وخدمة العملاء.',
      certImg:'/assets/certs/cib_cert_aug.jpg',
    },
    {
      type:'internship', date:'يوليو 2025 · أسبوعان',
      role:'متدرب صيفي — قسم تكنولوجيا المعلومات',
      org:'ASORC — شركة أسيوط لتكرير البترول', location:'أسيوط',
      desc:'مساعدة في الدعم التقني وصيانة البرامج ومراقبة الشبكات. خبرة حقيقية في أنظمة تقنية المعلومات في بيئة صناعية.',
      certImg:'/assets/certs/asorc_cert_new.jpg',
    },
    {
      type:'internship', date:'يوليو 2025 · شهر',
      role:'متدرب',
      org:'البنك العقاري المصري العربي (EALB)', location:'أسيوط',
      desc:'تدريب هجين في عمليات البنك العقاري والخدمات المالية.',
      certImg: null,
    },
    {
      type:'internship', date:'أغسطس 2024 · أسبوعان',
      role:'متدرب — التسويق والعمليات',
      org:'شركة النيل لتسويق البترول', location:'أسيوط',
      desc:'تدريب نظري وعملي في التسويق مع فريق متعدد التخصصات. إدخال البيانات والتشغيل والتعاون مع الفريق.',
      certImg:'/assets/certs/nile_oil_cert_new.jpg',
    },
    {
      type:'internship', date:'يناير 2025 – الحالي · 1 سنة+',
      role:'رئيس قسم تكنولوجيا المعلومات',
      org:'Infinity Team — IUA', location:'أسيوط',
      desc:'دعم العمليات التقنية وتقديم المساعدة الفنية خلال الفعاليات. المساهمة في الحضور الرقمي للفريق.',
      certImg: null,
    },
  ],
  trainings: [
    {
      type:'training', date:'أغسطس 2025 – الحالي · 8 أشهر',
      role:'برنامج التدريب الإلكتروني',
      org:'CIB × SAS × Udemy × LinkedIn', location:'أونلاين',
      desc:'الذكاء الاصطناعي الموثوق (SAS) · التركيز على العميل (Udemy) · أسس الاستدامة (LinkedIn Learning)',
      certImg:'/assets/certs/cib_cert_jul.jpg',
    },
    {
      type:'training', date:'يوليو 2025',
      role:'مهارات التسويق الرقمي',
      org:'بنك مصر × Google', location:'أونلاين',
      desc:'أساسيات التسويق الرقمي واستراتيجيات الأعمال عبر برنامج مهارات من Google.',
      certImg:'/assets/certs/banque_misr_training.jpg',
    },
    {
      type:'training', date:'أكتوبر 2024',
      role:'محاكاة خدمات الأعمال الرقمية',
      org:'HSBC × Forage', location:'أونلاين',
      desc:'خرائط طريق الحياد الكربوني · مبادرات الاستدامة · توصيات إدارة المشاريع',
      certImg: null,
    }
  ],
};

export default function Experience() {
  const { dark, lang } = useApp();
  const tr = t[lang];
  const data = lang === 'ar' ? expDataAr : expDataEn;
  const bg = dark ? '#0f0f14' : '#fdfcf9';

  const divStyle = dark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)';

  return (
    <section id="experience" style={{ background: bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300">
      <SectionHeader tag={tr.expTag} title={tr.expTitle} />

      {/* Two-column layout: Internships | Training */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

        {/* ── LEFT: Internships ── */}
        <div>
          {/* Column header */}
          <div className="flex items-center gap-2 mb-5 pb-3" style={{ borderBottom:`2px solid #f0a500` }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background:'rgba(240,165,0,0.12)', color:'#f0a500' }}>
              <Briefcase size={14}/>
            </div>
            <h3 className="font-semibold text-sm" style={{ color:'#f0a500' }}>
              {lang === 'ar' ? `التدريبات المهنية (${data.internships.length})` : `Internships (${data.internships.length})`}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {data.internships.map((e, i) => (
              <ExpCard key={i} e={e} dark={dark} lang={lang} delay={i * 0.06}/>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Training ── */}
        <div>
          {/* Column header */}
          <div className="flex items-center gap-2 mb-5 pb-3" style={{ borderBottom:`2px solid #2a9d8f` }}>
            <div className="w-7 h-7 rounded-lg flex items-center justify-center"
              style={{ background:'rgba(42,157,143,0.12)', color:'#2a9d8f' }}>
              <GraduationCap size={14}/>
            </div>
            <h3 className="font-semibold text-sm" style={{ color:'#2a9d8f' }}>
              {lang === 'ar' ? `التدريبات والكورسات (${data.trainings.length})` : `Training & Courses (${data.trainings.length})`}
            </h3>
          </div>
          <div className="flex flex-col gap-3">
            {data.trainings.map((e, i) => (
              <ExpCard key={i} e={e} dark={dark} lang={lang} delay={i * 0.06}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
