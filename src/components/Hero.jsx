import { useEffect, useState, useRef } from 'react';
import { Mail, Github, Linkedin, BookOpen } from 'lucide-react';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { glass } from '../utils/glass';

const phrasesEn = ['Cybersecurity Enthusiast','AI & Gen AI Practitioner','Web Developer','Network Enthusiast','MIS Student'];
const phrasesAr = ['متحمس للأمن السيبراني','ممارس للذكاء الاصطناعي','مطور ويب','متحمس للشبكات','طالب نظم معلومات'];

function useCounter(target, duration = 1200, start = false, instant = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (instant) {
      setVal(target);
      return;
    }
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
  const [pi, setPi]     = useState(0);
  const [ci, setCi]     = useState(0);
  const [del, setDel]   = useState(false);
  const [started, setStarted] = useState(false);
  const [compactMotion, setCompactMotion] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 768px), (pointer: coarse), (prefers-reduced-motion: reduce)');
    const sync = () => setCompactMotion(media.matches);
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (heroRef.current) obs.observe(heroRef.current);
    return () => obs.disconnect();
  }, []);

  const certCount = useCounter(20, 1200, started && !compactMotion, compactMotion);
  const expCount  = useCounter(5,  1000, started && !compactMotion, compactMotion);

  useEffect(() => {
    setText(compactMotion ? phrases[0] : '');
    setCi(0);
    setPi(0);
    setDel(false);
  }, [compactMotion, lang, phrases]);

  useEffect(() => {
    if (compactMotion) return;
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
  }, [ci, compactMotion, pi, del, phrases]);

  const bg    = dark ? '#0f0f14' : '#fdfcf9';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#5a5a72';
  const amber = '#f0a500';

  const stats = [
    { val: `${certCount}+`, label: lang === 'ar' ? 'شهادة' : 'Certificates' },
    { val: `${expCount}+`,  label: lang === 'ar' ? 'تدريبات' : 'Internships' },
    { val: '3+',            label: lang === 'ar' ? 'مشاريع' : 'Projects' },
  ];

  return (
    <section id="hero" ref={heroRef}
      style={{ background: bg, minHeight: '100vh' }}
      className="flex flex-col justify-center px-[5%] relative overflow-hidden transition-colors duration-300 pt-24 pb-16">

      {/* Background blobs */}
      <div className="blob-hero hidden sm:block w-[500px] h-[500px] bg-amber opacity-[0.06]"
        style={{ position:'absolute', top:-80, insetInlineEnd:-80, pointerEvents:'none' }}/>
      <div className="blob-hero-2 hidden sm:block w-[300px] h-[300px] bg-teal opacity-[0.05]"
        style={{ position:'absolute', bottom:-40, left:'10%', pointerEvents:'none' }}/>

      {/* Main content — centered */}
      <div className="relative z-10 max-w-3xl">

        {/* Hi I'm */}
        <p className="text-base md:text-lg mb-2" style={{ color:muted, animation:'fadeUp .5s ease both' }}>
          {tr.hiIm}
        </p>

        {/* Name */}
        <h1 className="font-serif-display tracking-tight leading-[1.0] mb-5"
          style={{ animation:'fadeUp .5s .08s ease both' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl" style={{ color:ink }}>Kareem Basem</span>
          <em className="block text-4xl sm:text-5xl md:text-6xl not-italic" style={{ color:amber }}>Fathi.</em>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-2 text-sm md:text-base font-medium mb-4"
          style={{ animation:'fadeUp .5s .16s ease both' }}>
          <span style={{ color:amber }} className="font-bold text-lg">→</span>
          <span className="font-semibold" style={{ color:ink }}>{text}</span>
          {!compactMotion && (
            <span style={{ color:amber }} className="animate-[ping2_1s_step-end_infinite]">|</span>
          )}
        </div>

        {/* Currently learning */}
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ background:'rgba(42,157,143,0.10)', border:'1px solid rgba(42,157,143,0.28)', color:'#2a9d8f', animation:'fadeUp .5s .22s ease both' }}>
          <BookOpen size={12}/>
          {lang === 'ar' ? 'يتعلم الآن: Google Cybersecurity Certificate (6/9)' : 'Currently: Google Cybersecurity Certificate (6/9)'}
        </div>

        {/* Description */}
        <p className="text-[0.95rem] md:text-[1rem] leading-[1.85] mb-7 max-w-[580px]"
          style={{ color:muted, animation:'fadeUp .5s .24s ease both' }}>
          {tr.heroDesc}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap mb-8" style={{ animation:'fadeUp .5s .30s ease both' }}>
          <a href="#projects"
            className="px-6 py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1 glow-pulse"
            style={{ background:amber, color:'#fff', boxShadow:`0 4px 20px ${amber}44` }}>
            {lang === 'ar' ? 'استعرض مشاريعي' : 'Explore Projects'}
          </a>
          <a href="#contact"
            className="px-6 py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ ...glass(dark), color:dark?'rgba(255,255,255,0.8)':ink }}>
            {tr.getInTouch}
          </a>
          <a href={process.env.PUBLIC_URL + '/assets/kareem-cv.pdf'} download="Kareem_Basem_CV.pdf"
            className="px-6 py-3 font-semibold text-sm rounded-full transition-all hover:-translate-y-1"
            style={{ background:'rgba(240,165,0,0.10)', border:'1px solid rgba(240,165,0,0.28)', color:amber }}>
            {lang === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
          </a>
        </div>

        {/* Social + divider */}
        <div className="flex items-center gap-4 mb-10" style={{ animation:'fadeUp .5s .36s ease both' }}>
          <span className="text-xs uppercase tracking-wider font-medium" style={{ color:muted }}>{tr.findMe}</span>
          <div className="flex items-center gap-2">
            {[
              { href:'https://www.linkedin.com/in/karem-basem', Icon:Linkedin },
              { href:'https://github.com/Kareem-Basem', Icon:Github },
              { href:'mailto:karemalwy1@gmail.com', Icon:Mail },
            ].map(({ href, Icon }, i) => (
              <a key={i} href={href} target={href.startsWith('http')?'_blank':undefined} rel="noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                style={{ ...glass(dark), color:muted }}>
                <Icon size={15}/>
              </a>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-4 flex-wrap" style={{ animation:'fadeUp .5s .42s ease both' }}>
          {stats.map((s, i) => (
            <div key={i} className="px-5 py-3 rounded-2xl flex items-center gap-3"
              style={{ ...glass(dark) }}>
              <span className="font-serif-display text-2xl italic font-bold" style={{ color:amber }}>{s.val}</span>
              <span className="text-xs font-medium" style={{ color:muted }}>{s.label}</span>
            </div>
          ))}
          {/* Available badge */}
          <div className="px-5 py-3 rounded-2xl flex items-center gap-2 float-badge"
            style={{ ...glass(dark) }}>
            <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 ping2 block"/>
            <span className="text-xs font-semibold" style={{ color:ink }}>
              {lang === 'ar' ? 'متاح للفرص' : 'Available for Hire'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
