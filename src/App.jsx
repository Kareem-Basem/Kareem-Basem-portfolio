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
import { projectLinks } from './data/portfolioData';
import t from './i18n/translations';

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
    backdropFilter: 'blur(var(--btn-blur,10px))',
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
  const meta = {
    en: {
      title: 'Kareem Basem Fathi — Cybersecurity & AI Portfolio',
      description:
        'MIS Student at Sadat Academy. Passionate about Cybersecurity, AI, Networking & Web Development. Google Cybersecurity Certificate in progress.',
    },
    ar: {
      title: 'كريم باسم فتحي — بورتفوليو الأمن السيبراني والذكاء الاصطناعي',
      description:
        'طالب نظم معلومات إدارية في أكاديمية السادات. مهتم بالأمن السيبراني والذكاء الاصطناعي والشبكات وتطوير الويب. شهادة الأمن السيبراني من Google قيد الدراسة.',
    },
  };

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
    const m = meta[lang] || meta.en;
    document.title = m.title;
    const setMeta = (attr, key, value) => {
      const el = document.querySelector(`meta[${attr}="${key}"]`);
      if (el) el.setAttribute('content', value);
    };
    setMeta('name', 'description', m.description);
    setMeta('property', 'og:title', m.title);
    setMeta('property', 'og:description', m.description);
    setMeta('name', 'twitter:title', m.title);
    setMeta('name', 'twitter:description', m.description);
  }, [lang]);

  useEffect(() => {
    const projects = t[lang]?.projects || t.en.projects;
    const list = projects.map((p, i) => {
      const url = i === 0 ? projectLinks.live.examor
        : i === 1 ? projectLinks.live.vision
        : null;
      const sameAs = i === 1 ? projectLinks.github.vision
        : i === 2 ? projectLinks.github.vc
        : i === 3 ? projectLinks.github.sa
        : null;
      const item = {
        "@type": "CreativeWork",
        "name": p.title,
        "description": p.desc,
      };
      if (url) item.url = url;
      if (sameAs) item.sameAs = [sameAs];
      return {
        "@type": "ListItem",
        "position": i + 1,
        "item": item,
      };
    });
    const data = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Projects",
      "itemListElement": list,
    };
    const id = 'ld-projects';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(data);
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
