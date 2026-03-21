import { useEffect, useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certs from './components/Certs';
import Contact from './components/Contact';
import { ChevronUp } from 'lucide-react';

function ScrollProgress() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const fn = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setWidth(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return <div id="scroll-progress" style={{ width: `${width}%` }} />;
}

function BackToTop({ dark }) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const fn = () => setVis(window.scrollY > 400);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  const style = {
    background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.80)',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : 'rgba(26,26,46,0.14)'}`,
    backdropFilter: 'blur(16px)',
    color: '#f0a500',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  };
  return (
    <button
      id="back-top"
      className={vis ? 'visible' : ''}
      style={style}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      onMouseEnter={e => { e.currentTarget.style.background = '#f0a500'; e.currentTarget.style.color = '#fff'; }}
      onMouseLeave={e => { e.currentTarget.style.background = dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.80)'; e.currentTarget.style.color = '#f0a500'; }}>
      <ChevronUp size={18} />
    </button>
  );
}

function Inner() {
  const { dark, lang } = useApp();

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0f0f14';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fdfcf9';
    }
  }, [dark]);

  useEffect(() => {
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    }, 100);
    return () => { clearTimeout(timer); obs.disconnect(); };
  }, []);

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Certs />
      <Contact />
      <BackToTop dark={dark} />
    </>
  );
}

export default function App() {
  return <AppProvider><Inner /></AppProvider>;
}
