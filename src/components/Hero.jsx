import { Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { heroPhrases } from '../data/portfolioData';

export default function Hero() {
  const { dark, lang } = useApp();
  const tr = t[lang];
  const phrases = heroPhrases[lang] || heroPhrases.en;

  const bg    = dark ? '#0f0f14' : '#fdfcf9';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#5a5a72';
  const amber = '#f0a500';
  const card  = {
    background: dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.04)',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : 'rgba(26,26,46,0.12)'}`,
  };

  const stats = [
    { val: '20+', label: lang === 'ar' ? 'شهادة' : 'Certificates' },
    { val: '5+',  label: lang === 'ar' ? 'تدريبات' : 'Internships' },
    { val: '3+',  label: lang === 'ar' ? 'مشاريع' : 'Projects' },
  ];

  return (
    <section
      id="hero"
      style={{ background: bg, minHeight: '100vh' }}
      className="flex flex-col justify-center px-[5%] relative overflow-hidden transition-colors duration-300 pt-24 pb-16">
      <div className="max-w-3xl">
        <p className="text-base md:text-lg mb-2" style={{ color: muted }}>
          {tr.hiIm}
        </p>

        <h1 className="font-serif-display tracking-tight leading-[1.0] mb-5">
          <span className="block text-4xl sm:text-5xl md:text-6xl" style={{ color: ink }}>Kareem Basem</span>
          <em className="block text-4xl sm:text-5xl md:text-6xl not-italic" style={{ color: amber }}>Fathi.</em>
        </h1>

        <div className="flex items-center gap-2 text-sm md:text-base font-medium mb-4">
          <span style={{ color: amber }} className="font-bold text-lg">→</span>
          <span className="font-semibold" style={{ color: ink }}>{phrases[0]}</span>
        </div>

        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ background:'rgba(42,157,143,0.10)', border:'1px solid rgba(42,157,143,0.28)', color:'#2a9d8f' }}>
          <BookOpen size={12}/>
          {lang === 'ar'
            ? 'يتعلم الآن: Google Cybersecurity Certificate (6/9)'
            : 'Currently: Google Cybersecurity Certificate (6/9)'}
        </div>

        <p className="text-[0.95rem] md:text-[1rem] leading-[1.85] mb-7 max-w-[580px]"
          style={{ color: muted }}>
          {tr.heroDesc}
        </p>

        <div className="flex gap-3 flex-wrap mb-8">
          <a href="#projects"
            className="px-6 py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ background: amber, color: '#fff', boxShadow: `0 4px 20px ${amber}44` }}>
            {lang === 'ar' ? 'استعرض مشاريعي' : 'Explore Projects'}
          </a>
          <a href="#contact"
            className="px-6 py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ ...card, color: dark ? 'rgba(255,255,255,0.8)' : ink }}>
            {tr.getInTouch}
          </a>
          <a href={process.env.PUBLIC_URL + '/assets/kareem-cv.pdf'} download="Kareem_Basem_CV.pdf"
            className="px-6 py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ background:'rgba(240,165,0,0.10)', border:'1px solid rgba(240,165,0,0.28)', color: amber }}>
            {lang === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
          </a>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs uppercase tracking-wider font-medium" style={{ color: muted }}>{tr.findMe}</span>
          <div className="flex items-center gap-2">
            {[
              { href:'https://www.linkedin.com/in/karem-basem', Icon:Linkedin },
              { href:'https://github.com/Kareem-Basem', Icon:Github },
              { href:'mailto:karemalwy1@gmail.com', Icon:Mail },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                aria-label={href.startsWith('mailto') ? 'Email' : href.includes('linkedin') ? 'LinkedIn' : 'GitHub'}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ ...card, color: muted }}>
                <Icon size={15}/>
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-4 flex-wrap">
          {stats.map((s, i) => (
            <div key={i} className="px-5 py-3 rounded-2xl flex items-center gap-3"
              style={{ ...card }}>
              <span className="font-serif-display text-2xl italic font-bold" style={{ color: amber }}>{s.val}</span>
              <span className="text-xs font-medium" style={{ color: muted }}>{s.label}</span>
            </div>
          ))}
          <div className="px-5 py-3 rounded-2xl flex items-center gap-2"
            style={{ ...card }}>
            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 block"/>
            <span className="text-xs font-semibold" style={{ color: ink }}>
              {lang === 'ar' ? 'متاح للفرص' : 'Available for Hire'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
