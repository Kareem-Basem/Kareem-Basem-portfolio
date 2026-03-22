import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';

export default function Navbar() {
  const { dark, setDark, lang, setLang } = useApp();
  const tr = t[lang];
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');
  const [open,     setOpen]     = useState(false);

  const links = [
    { id:'about',      label: tr.about },
    { id:'projects',   label: tr.projectsNav },
    { id:'experience', label: tr.experience },
    { id:'certs',      label: tr.certs },
    { id:'contact',    label: tr.contact },
  ];

  useEffect(() => {
    let frame = null;
    let sections = [];

    const collectSections = () => {
      sections = Array.from(document.querySelectorAll('section[id]'));
    };

    const update = () => {
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 40;
      let cur = '';

      for (const section of sections) {
        if (scrollY >= section.offsetTop - 130) cur = section.id;
      }

      setScrolled(prev => (prev === nextScrolled ? prev : nextScrolled));
      setActive(prev => (prev === cur ? prev : cur));
    };

    const onScroll = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        update();
      });
    };

    const onResize = () => {
      collectSections();
      onScroll();
    };

    collectSections();
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.55)' : '#8a8a9a';
  const lc    = id => ({ color: active === id ? '#f0a500' : muted, transition: 'color 0.2s' });

  // Enhanced Liquid Glass nav style
  const navStyle = scrolled ? {
    // Real-time content refraction simulation
    background: dark
      ? 'rgba(8,8,14,0.55)'
      : 'rgba(255,255,255,0.45)',
    backdropFilter: 'blur(18px) saturate(180%) brightness(1.04)',
    WebkitBackdropFilter: 'blur(18px) saturate(180%) brightness(1.04)',
    borderBottom: `1px solid ${dark
      ? 'rgba(255,255,255,0.12)'
      : 'rgba(255,255,255,0.95)'}`,
    boxShadow: dark
      ? '0 1px 0 rgba(255,255,255,0.04), 0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)'
      : '0 1px 0 rgba(255,255,255,1), 0 8px 32px rgba(26,26,46,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
  } : {
    background: 'transparent',
  };

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 sm:px-[5%] py-3 sm:py-4 transition-all duration-500 mobile-surface"
      style={navStyle}>

      {/* Logo */}
      <a href="#hero" className="font-serif-display text-2xl tracking-tight select-none">
        <span style={{ color: ink }}>Ke</span>
        <span style={{ color: '#f0a500' }}>M</span>
        <span style={{ color: ink }}>oO.</span>
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-7">
        {links.map(l => (
          <li key={l.id}>
            <a href={`#${l.id}`}
              className="text-sm font-medium transition-colors duration-200 nav-link"
              style={lc(l.id)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Controls */}
      <div className="flex items-center gap-2">

        {/* Lang toggle */}
        <button
          onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
          className="px-3 py-1.5 rounded-full text-xs font-semibold border transition-all hover:border-amber hover:text-amber"
          style={{
            borderColor: dark ? 'rgba(255,255,255,0.14)' : 'rgba(26,26,46,0.14)',
            color: muted,
            background: dark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(6px)',
          }}>
          {lang === 'en' ? 'ع' : 'EN'}
        </button>

        {/* Dark mode */}
        <button
          onClick={() => setDark(!dark)}
          className="w-9 h-9 rounded-full border flex items-center justify-center transition-all hover:border-amber"
          style={{
            borderColor: dark ? 'rgba(255,255,255,0.14)' : 'rgba(26,26,46,0.14)',
            color: dark ? '#f0a500' : muted,
            background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(6px)',
          }}>
          {dark ? <Sun size={15}/> : <Moon size={15}/>}
        </button>

        {/* Hire Me */}
        <a
          href="mailto:karemalwy1@gmail.com"
          className="hidden md:inline-block px-4 py-2 text-sm font-semibold rounded-full transition-all hover:-translate-y-0.5"
          style={{
            background: dark ? 'rgba(255,255,255,0.08)' : '#1a1a2e',
            color: dark ? '#f0f0f8' : '#fdfcf9',
            border: dark ? '1px solid rgba(255,255,255,0.10)' : 'none',
            backdropFilter: 'blur(6px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background='#f0a500'; e.currentTarget.style.color='#fff'; }}
          onMouseLeave={e => { e.currentTarget.style.background=dark?'rgba(255,255,255,0.08)':'#1a1a2e'; e.currentTarget.style.color=dark?'#f0f0f8':'#fdfcf9'; }}>
          {tr.hireMe}
        </a>

        {/* Mobile menu */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open
            ? <X    size={22} style={{ color: ink }}/>
            : <Menu size={22} style={{ color: ink }}/>}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="absolute top-full left-0 right-0 py-5 flex flex-col items-center gap-4 md:hidden" dir={lang === "ar" ? "rtl" : "ltr"}
          style={{
            background: dark ? 'rgba(8,8,14,0.88)' : 'rgba(255,255,255,0.88)',
            backdropFilter: 'blur(16px) saturate(170%)',
            WebkitBackdropFilter: 'blur(16px) saturate(170%)',
            borderBottom: `1px solid ${dark ? 'rgba(255,255,255,0.10)' : 'rgba(26,26,46,0.08)'}`,
          }}>
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="text-sm font-medium"
              style={lc(l.id)}>
              {l.label}
            </a>
          ))}
          <a href="mailto:karemalwy1@gmail.com"
            className="px-5 py-2 text-sm font-semibold rounded-full"
            style={{ background:'#f0a500', color:'#fff' }}>
            {tr.hireMe}
          </a>
        </div>
      )}
    </nav>
  );
}
