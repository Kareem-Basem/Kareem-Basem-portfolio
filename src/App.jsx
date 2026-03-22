import { useEffect, useRef, useState } from 'react';
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
  const barRef = useRef(null);
  useEffect(() => {
    let frame = null;

    const update = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      if (barRef.current) {
        const width = total > 0 ? (scrolled / total) * 100 : 0;
        barRef.current.style.width = `${width}%`;
      }
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return <div id="scroll-progress" ref={barRef} />;
}

function BackToTop({ dark }) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    let frame = null;

    const update = () => {
      const nextVisible = window.scrollY > 400;
      setVis(prev => (prev === nextVisible ? prev : nextVisible));
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        update();
      });
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  const style = {
    background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.80)',
    border: `1px solid ${dark ? 'rgba(255,255,255,0.15)' : 'rgba(26,26,46,0.14)'}`,
    backdropFilter: 'blur(10px)',
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
    // Prevent white flash on language/dir change
    document.documentElement.style.transition = 'none';
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    // Re-enable transitions after paint
    requestAnimationFrame(() => {
      document.documentElement.style.transition = '';
    });
  }, [lang]);

  useEffect(() => {
    // Reset and re-observe all reveal elements on lang change
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('visible');
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [lang]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0, rootMargin: '0px 0px -30px 0px' }
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
