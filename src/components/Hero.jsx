import { useEffect, useState, useRef } from 'react';
import { Mail, Github, Linkedin, Sparkles, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { glass } from '../utils/glass';

const phrasesEn = ['Cybersecurity Enthusiast','AI & Gen AI Practitioner','Web Developer','Network Enthusiast','MIS Student'];
const phrasesAr = ['متحمس للأمن السيبراني','ممارس للذكاء الاصطناعي','مطور ويب','متحمس للشبكات','طالب نظم معلومات'];

function useCounter(target, duration = 1200, start = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return val;
}

export default function Hero() {
  const { dark, lang } = useApp();
  const tr = t[lang];
  const phrases = lang === 'ar' ? phrasesAr : phrasesEn;

  const [text, setText] = useState('');
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);
  const [counterStarted, setCounterStarted] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setCounterStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const certCount = useCounter(20, 1200, counterStarted);

  useEffect(() => { setText(''); setCi(0); setPi(0); setDel(false); }, [lang]);

  useEffect(() => {
    const phrase = phrases[pi];
    const timer = setTimeout(() => {
      if (!del) {
        setText(phrase.slice(0, ci + 1));
        if (ci + 1 === phrase.length) { setTimeout(() => setDel(true), 1800); return; }
        setCi(c => c + 1);
      } else {
        setText(phrase.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setPi(p => (p + 1) % phrases.length); setCi(0); return; }
        setCi(c => c - 1);
      }
    }, del ? 42 : 88);
    return () => clearTimeout(timer);
  }, [ci, pi, del, phrases]);

  const bg    = dark ? '#0f0f14' : '#fdfcf9';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#5a5a72';
  const amber = '#f0a500';

  return (
    <section id="hero" ref={heroRef}
      style={{ background: bg, minHeight: '100vh' }}
      className="grid md:grid-cols-2 items-center gap-6 md:gap-8 px-[5%] py-20 md:py-0 relative overflow-hidden transition-colors duration-300">

      {/* Background blobs — hidden on mobile to avoid overflow */}
      <div className="blob-hero hidden sm:block w-[420px] h-[420px] md:w-[560px] md:h-[560px] bg-amber opacity-[0.07]"
        style={{ position:'absolute', top:-80, right:-100 }} />
      <div className="blob-hero-2 hidden sm:block w-[200px] h-[200px] bg-teal opacity-[0.05]"
        style={{ position:'absolute', bottom:-30, left:'28%' }} />

      {/* MOBILE PHOTO — centered above text on small screens */}
      <div className="flex md:hidden justify-center pt-2 relative z-10">
        <div className="relative float" style={{ width:190, height:190 }}>
          <div className="blob-avatar absolute inset-0 bg-gradient-to-br from-amber to-[#ffd166]" />
          <div className="absolute inset-[14px] rounded-full overflow-hidden"
            style={{ boxShadow:'0 6px 24px rgba(26,26,46,0.2)' }}>
            <img
              src={process.env.PUBLIC_URL + '/assets/photo/kareem.jpg'}
              alt="Kareem Basem Fathi"
              className="w-full h-full object-cover"
              style={{ objectPosition:'center 15%' }}
            />
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg whitespace-nowrap"
            style={{ ...glass(dark) }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0" />
            <span className="text-[.65rem] font-semibold" style={{ color:dark?'#f0f0f8':'#1a1a2e' }}>
              {lang === 'ar' ? 'متاح للفرص' : 'Available for Hire'}
            </span>
          </div>
        </div>
      </div>

      {/* LEFT — text content */}
      <div className="relative z-10">
        <p className="text-base md:text-lg mb-1" style={{ color:muted, animation:'fadeUp .6s ease both' }}>
          {tr.hiIm}
        </p>

        <h1 className="font-serif-display leading-[1.02] tracking-tight" style={{ animation:'fadeUp .6s .08s ease both' }}>
          <span className="block text-4xl sm:text-5xl md:text-7xl" style={{ color:ink }}>Kareem Basem</span>
          <em className="block text-4xl sm:text-5xl md:text-7xl not-italic font-serif-display" style={{ color:amber }}>Fathi.</em>
        </h1>

        <div className="flex items-center gap-2 mt-4 text-sm font-medium min-h-[24px]" style={{ animation:'fadeUp .6s .16s ease both' }}>
          <span style={{ color:amber }} className="font-bold">→</span>
          <span className="font-semibold" style={{ color:ink, minWidth:0 }}>{text}</span>
          <span style={{ color:amber }} className="animate-[ping2_1s_step-end_infinite] flex-shrink-0">|</span>
        </div>

        <p className="mt-4 text-[0.92rem] leading-[1.8] max-w-full md:max-w-[440px]"
          style={{ color:muted, animation:'fadeUp .6s .24s ease both' }}>
          {tr.heroDesc}
        </p>

        {/* Currently Learning */}
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ background:'rgba(42,157,143,0.10)', border:'1px solid rgba(42,157,143,0.28)', color:'#2a9d8f', animation:'fadeUp .6s .30s ease both' }}>
          <BookOpen size={12}/>
          {lang === 'ar' ? 'يتعلم الآن: Google Cybersecurity (6/9)' : 'Currently: Google Cybersecurity Certificate (6/9)'}
        </div>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-3 flex-wrap mt-5" style={{ animation:'fadeUp .6s .32s ease both' }}>
          <a href="#projects"
            className="px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ background:amber, color:'#fff', boxShadow:`0 4px 20px ${amber}44` }}>
            {lang === 'ar' ? 'استعرض مشاريعي' : 'Explore Projects'}
          </a>
          <a href="#contact"
            className="px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ ...glass(dark), color:dark?'rgba(255,255,255,0.8)':ink }}>
            {tr.getInTouch}
          </a>
          <a href={process.env.PUBLIC_URL + "/assets/kareem-cv.pdf"} download="Kareem_Basem_CV.pdf"
            className="px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ background:'rgba(240,165,0,0.10)', border:'1px solid rgba(240,165,0,0.28)', color:amber }}>
            {lang === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3 mt-6" style={{ animation:'fadeUp .6s .40s ease both' }}>
          <span className="text-xs uppercase tracking-wider font-medium" style={{ color:muted }}>{tr.findMe}</span>
          {[
            { href:'https://www.linkedin.com/in/karem-basem', Icon:Linkedin },
            { href:'https://github.com/Kareem-Basem', Icon:Github },
            { href:'mailto:karemalwy1@gmail.com', Icon:Mail },
          ].map(({ href, Icon }, i) => (
            <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
              style={{ ...glass(dark), color:muted }}>
              <Icon size={15}/>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT — Photo (desktop only) */}
      <div className="hidden md:flex flex-col items-center relative z-10">
        <div className="relative float" style={{ width: 'clamp(240px, 28vw, 320px)', height: 'clamp(240px, 28vw, 320px)' }}>
          <div className="blob-avatar absolute inset-0 bg-gradient-to-br from-amber to-[#ffd166]" />

          <div className="absolute inset-[18px] rounded-full overflow-hidden"
            style={{ boxShadow:'0 8px 32px rgba(26,26,46,0.2)' }}>
            <img
              src={process.env.PUBLIC_URL + '/assets/photo/kareem.jpg'}
              alt="Kareem Basem Fathi"
              className="w-full h-full object-cover"
              style={{ objectPosition:'center 15%' }}
            />
          </div>

          {/* Badge: Available — contained so it doesn't overflow */}
          <div className="absolute top-2 -right-4 lg:-right-8 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
            style={{ ...glass(dark), maxWidth:160 }}>
            <Sparkles size={13} style={{ color:amber, flexShrink:0 }}/>
            <div className="min-w-0">
              <div className="text-[0.75rem] font-semibold truncate" style={{ color:ink }}>
                {lang === 'ar' ? 'متاح للفرص' : 'Available for Hire'}
              </div>
              <div className="text-[0.6rem]" style={{ color:muted }}>
                {lang === 'ar' ? 'أسيوط · عن بُعد' : 'Asyut · Remote'}
              </div>
            </div>
          </div>

          {/* Badge: Certs */}
          <div className="absolute bottom-5 -left-4 lg:-left-10 rounded-2xl px-3 py-2 shadow-xl flex items-center gap-2"
            style={glass(dark)}>
            <div>
              <div className="font-serif-display text-xl italic font-bold" style={{ color:'#2a9d8f' }}>
                {certCount}+
              </div>
              <div className="text-[0.63rem] leading-tight" style={{ color:muted }}>
                {lang === 'ar' ? 'شهادة' : 'Certificates'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
