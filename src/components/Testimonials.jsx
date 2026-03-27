import SectionHeader from './SectionHeader';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { glass, ink, muted, faint } from '../utils/glass';

export default function Testimonials() {
  const { dark, lang } = useApp();
  const tr = t[lang];
  const bg = dark ? '#101019' : '#f7f3ec';
  return (
    <section id="testimonials" style={{ background: bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300 overflow-x-hidden cv-auto section-shell">
      <SectionHeader tag={tr.testimonialsTag} title={tr.testimonialsTitle}/>
      <div className="grid md:grid-cols-3 gap-4">
        {tr.testimonials.map((item, i) => (
          <div key={i} className="rounded-2xl p-5 reveal" style={{ ...glass(dark) }}>
            <p className="text-[.9rem] leading-[1.75]" style={{ color: ink(dark) }}>
              “{item.quote}”
            </p>
            <div className="mt-4 pt-3" style={{ borderTop:`1px solid ${dark?'rgba(255,255,255,0.08)':'rgba(26,26,46,0.08)'}` }}>
              <div className="text-sm font-semibold" style={{ color: ink(dark) }}>{item.name}</div>
              <div className="text-[.75rem]" style={{ color: faint(dark) }}>{item.role}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-[.72rem] mt-4" style={{ color: muted(dark) }}>
        {lang === 'ar' ? 'يمكن استبدال هذه الأقوال بآراء حقيقية لاحقاً.' : 'You can replace these with real testimonials later.'}
      </p>
    </section>
  );
}
