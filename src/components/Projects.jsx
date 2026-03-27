import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, X, CheckCircle2, Circle, Server, FileText, Github, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import {
  projectMeta,
  projectChips,
  examorFeatures,
  gtaData,
  projectLinks,
  projectPreviews,
} from '../data/portfolioData';

function Modal({ onClose, dark, ariaLabel, children }) {
  const overlay = dark ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)';
  const dialogRef = useRef(null);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto"
      style={{ background: overlay, backdropFilter:'blur(8px)' }}
      onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className="relative w-full max-w-lg my-4 outline-none"
        onClick={e => e.stopPropagation()}
        style={{ animation:'fadeUp .25s ease both' }}>
        {children}
      </div>
    </div>
  );
}

function ExamorModal({ onClose, dark, lang }) {
  const features = examorFeatures[lang] || examorFeatures.en;
  const bg    = dark ? 'rgba(19,19,30,0.97)' : 'rgba(255,255,255,0.97)';
  const bord  = dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.12)';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#8a8a9a';
  return (
    <Modal onClose={onClose} dark={dark} ariaLabel="Examor project details">
      <div className="rounded-2xl p-6 shadow-2xl"
        style={{ background:bg, border:`1px solid ${bord}`, backdropFilter:'blur(14px)' }}>
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 transition-colors hover:text-amber"
          style={{ color:muted }}>
          <X size={18}/>
        </button>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background:'rgba(42,157,143,0.12)', color:'#2a9d8f' }}><Server size={16}/></div>
          <div>
            <p className="font-semibold" style={{ color:ink }}>Examor</p>
            <p className="text-[.65rem] font-mono" style={{ color:'#2a9d8f' }}>React · Node.js · SQL Server · JWT</p>
          </div>
          <span className="ml-auto text-[.58rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:'rgba(46,139,87,0.14)', color:'#2e8b57', border:'1px solid rgba(46,139,87,0.28)' }}>✅ Completed</span>
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

function GTAModal({ data, github, onClose, dark }) {
  const bg    = dark ? 'rgba(15,15,20,0.97)' : 'rgba(255,255,255,0.97)';
  const bord  = dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.12)';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#8a8a9a';
  const divider = dark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)';
  const ac    = data.accentColor;
  const shots = Array.isArray(data.shots) ? data.shots : [];
  const [si, setSi] = useState(0);
  const hasShots = shots.length > 0;
  const curShot = hasShots ? shots[si % shots.length] : null;

  return (
    <Modal onClose={onClose} dark={dark} ariaLabel={`${data.title} details`}>
      <div className="rounded-2xl overflow-hidden shadow-2xl"
        style={{ background:bg, border:`1px solid ${bord}`, backdropFilter:'blur(14px)' }}>

        <div className="h-1" style={{ background:`linear-gradient(90deg,${ac},${ac}88)` }}/>

        <div className="p-6">
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 transition-colors hover:text-amber"
            style={{ color:muted }}>
            <X size={18}/>
          </button>

          <div className="flex items-center gap-3 mb-5">
            <img src={data.icon} alt="icon" className="w-10 h-10 rounded-xl object-contain"
              style={{ background:`${ac}15`, border:`1px solid ${ac}28`, padding:4 }}
              loading="lazy"
              decoding="async"
              onError={e => { e.target.style.display='none'; }}/>
            <div>
              <h3 className="font-serif-display text-lg tracking-tight leading-tight" style={{ color:ink }}>{data.title}</h3>
              <span className="text-[.65rem] font-semibold px-2 py-0.5 rounded-full" style={{ background:`${ac}15`, color:ac, border:`1px solid ${ac}28` }}>{data.era}</span>
            </div>
          </div>

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

          {hasShots && (
            <div className="rounded-xl overflow-hidden mb-5" style={{ border:`1px solid ${divider}` }}>
              <div className="relative">
                <img
                  src={curShot}
                  alt={`${data.title} screenshot`}
                  className="w-full object-cover max-h-[260px]"
                  loading="lazy"
                  decoding="async"
                />
                {shots.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous screenshot"
                      onClick={() => setSi(v => (v - 1 + shots.length) % shots.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background:'rgba(0,0,0,0.35)', color:'#fff', border:'1px solid rgba(255,255,255,0.35)' }}>
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next screenshot"
                      onClick={() => setSi(v => (v + 1) % shots.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{ background:'rgba(0,0,0,0.35)', color:'#fff', border:'1px solid rgba(255,255,255,0.35)' }}>
                      ›
                    </button>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-1">
                      {shots.map((_, i) => (
                        <span key={i} className="block w-2 h-2 rounded-full"
                          style={{ background: i === (si % shots.length) ? ac : 'rgba(255,255,255,0.6)' }} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

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

          <div className="flex items-center justify-between pt-3" style={{ borderTop:`1px solid ${divider}` }}>
            <p className="text-[.7rem] max-w-[60%]" style={{ color:muted }}>{data.note}</p>
            <div className="flex gap-2">
              {github && (
                <a href={github} target="_blank" rel="noreferrer"
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

function GlassCard({ p, m, chips, index, modalType, dark, onOpen, githubUrl, liveUrl, previewUrls, onPreview, techLabel, topLabel, previewToggleLabel, previewToggle, previewDefaultOpen = true }) {
  const [hov, setHov] = useState(false);
  const [pi, setPi] = useState(0);
  const [fading, setFading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(previewDefaultOpen);
  const hasCarousel = Array.isArray(previewUrls) && previewUrls.length > 1;
  const curPreview = Array.isArray(previewUrls) ? previewUrls[pi] : previewUrls;
  const canPreview = Boolean(curPreview);
  const reduceMotion = useRef(false);
  const goTo = (nextIndex) => {
    if (!hasCarousel) return;
    setFading(true);
    setTimeout(() => {
      setPi(nextIndex);
      setFading(false);
    }, 150);
  };

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => { reduceMotion.current = media.matches; };
    sync();
    media.addEventListener?.('change', sync);
    return () => media.removeEventListener?.('change', sync);
  }, []);

  // Auto-rotate disabled (manual only)

  const gbg   = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.72)';
  const gbord = dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.13)';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#5a5a72';
  const chip  = dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.70)';
  const delay = [0,.08,.15,.22,.29,.35][index]||0;
  const canClick = !!modalType;

  return (
    <div className="relative rounded-2xl overflow-hidden flex flex-col float-card"
      style={{
        transitionDelay:`${delay}s`,
        background: gbg,
        border:`1px solid ${hov ? m.accent+'50' : gbord}`,
        backdropFilter:'blur(var(--glass-blur,12px)) saturate(var(--glass-sat,140%))',
        WebkitBackdropFilter:'blur(var(--glass-blur,12px)) saturate(var(--glass-sat,140%))',
        boxShadow: hov
          ? `0 12px 28px ${m.glow}, inset 0 1px 0 rgba(255,255,255,${dark?'0.09':'0.92'})`
          : `0 3px 18px rgba(0,0,0,${dark?'0.22':'0.06'}), inset 0 1px 0 rgba(255,255,255,${dark?'0.06':'0.88'})`,
        transform: 'none',
        transition:'box-shadow 0.2s ease, border-color 0.2s ease',
        cursor: canClick ? 'pointer' : 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={canClick ? onOpen : undefined}>

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
            {index === 0 && (
              <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full"
                style={{ background:`${m.accent}22`, color:m.accent, border:`1px solid ${m.accent}38` }}>
                {topLabel}
              </span>
            )}
            {index === 1 && (
              <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full"
                style={{ background:`${m.accent}16`, color:m.accent, border:`1px solid ${m.accent}30` }}>
                Preview
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {liveUrl && (
              <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full tahoe-pill"
                style={{ background:`${m.accent}22`, color:m.accent, border:`1px solid ${m.accent}38` }}>
                Live
              </span>
            )}
            {modalType === 'examor' && (
              <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full tahoe-pill" style={{ background:'rgba(46,139,87,0.14)', color:'#2e8b57', border:'1px solid rgba(46,139,87,0.28)' }}>✅ Completed</span>
            )}
            {(modalType === 'vc' || modalType === 'sa') && (
              <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full tahoe-pill" style={{ background:`${m.accent}12`, color:m.accent, border:`1px solid ${m.accent}28` }}>📄 Docs</span>
            )}
          </div>
        </div>

        <h3 className="font-serif-display text-xl tracking-tight leading-snug mb-2" style={{ color:ink }}>{p.title}</h3>
        <p className="text-[.87rem] leading-[1.75] flex-1" style={{ color:muted }}>{p.desc}</p>

        <div className="mt-4 mb-2">
          {previewToggle && (
            <button
              type="button"
              onClick={e => {
                e.stopPropagation();
                setIsPreviewOpen(v => !v);
              }}
              className="text-[.66rem] font-semibold px-3 py-1 rounded-full mb-2"
              style={{ background:`${m.accent}18`, color:m.accent, border:`1px solid ${m.accent}30` }}>
              {isPreviewOpen ? previewToggleLabel?.hide : previewToggleLabel?.show}
            </button>
          )}
          {(!previewToggle || isPreviewOpen) && (
            <div
              className="relative rounded-xl overflow-hidden preview-16-9"
              style={{
                background: dark
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))'
                  : 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.7))',
                border: `1px solid ${dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.12)'}`,
                boxShadow: dark
                  ? 'inset 0 1px 0 rgba(255,255,255,0.06)'
                  : 'inset 0 1px 0 rgba(255,255,255,0.8)',
              }}>
              {curPreview ? (
                <img
                  src={curPreview}
                  alt={`${p.title} preview`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  onClick={e => { e.stopPropagation(); onPreview?.(curPreview, p.title); }}
                  style={{
                    cursor: canPreview ? 'pointer' : 'default',
                    transition: 'opacity 320ms ease, transform 320ms ease',
                    opacity: fading ? 0.25 : 1,
                    transform: fading ? 'scale(0.99)' : 'scale(1)',
                  }}
                />
              ) : (
                <>
                  <div style={{ height: 10, background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(26,26,46,0.08)' }} />
                  <div className="flex gap-2 p-2">
                    <div style={{ width: 22, height: 18, borderRadius: 4, background: `${m.accent}25` }} />
                    <div style={{ flex: 1, height: 18, borderRadius: 4, background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(26,26,46,0.06)' }} />
                  </div>
                  <div className="px-2 pb-2">
                    <div style={{ height: 8, borderRadius: 4, background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(26,26,46,0.05)' }} />
                    <div style={{ height: 8, borderRadius: 4, marginTop: 6, width: '75%', background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(26,26,46,0.05)' }} />
                  </div>
                </>
              )}
              {canPreview && (
                <button
                  type="button"
                  aria-label="View preview"
                  onClick={e => { e.stopPropagation(); onPreview?.(curPreview, p.title); }}
                  className="absolute left-2 top-2 text-[.58rem] font-semibold px-2 py-0.5 rounded-full"
                  style={{ background:'rgba(0,0,0,0.35)', color:'#fff', border:'1px solid rgba(255,255,255,0.35)' }}>
                  View
                </button>
              )}
              {hasCarousel && (
                <>
                  <button
                    type="button"
                    aria-label="Previous preview"
                    onClick={e => { e.stopPropagation(); goTo((pi - 1 + previewUrls.length) % previewUrls.length); }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background:'rgba(0,0,0,0.35)', color:'#fff', border:'1px solid rgba(255,255,255,0.35)' }}>
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Next preview"
                    onClick={e => { e.stopPropagation(); goTo((pi + 1) % previewUrls.length); }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background:'rgba(0,0,0,0.35)', color:'#fff', border:'1px solid rgba(255,255,255,0.35)' }}>
                    ›
                  </button>
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-1 flex gap-1">
                    {previewUrls.map((_, i) => (
                      <span key={i} className="block w-1.5 h-1.5 rounded-full"
                        style={{ background: i === pi ? '#f0a500' : 'rgba(255,255,255,0.6)' }} />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}
        </div>

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
          <div className="flex flex-col gap-1.5">
            <span className="text-[.6rem] font-semibold tracking-wider uppercase" style={{ color:muted }}>
              {techLabel}
            </span>
            <div className="flex gap-1.5 flex-wrap">
            {chips.map(c => (
              <span key={c} className="text-[.67rem] font-medium px-2 py-0.5 rounded"
                style={{ background:chip, border:`1px solid ${dark?'rgba(255,255,255,0.09)':'rgba(26,26,46,0.08)'}`, color:muted }}>{c}</span>
            ))}
            </div>
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

function TogglePreviewCard(props) {
  return <GlassCard {...props} previewToggle previewDefaultOpen={false} />;
}

export default function Projects() {
  const { dark, lang } = useApp();
  const tr    = t[lang];
  const chips = projectChips[lang] || projectChips.en;
  const techLabel = tr.techStack;
  const topLabel = tr.topProject;
  const previewToggleLabel = { show: tr.showPreview, hide: tr.hidePreview };
  const [modal, setModal] = useState(null); // 'examor' | 'vc' | 'sa' | null
  const [lightbox, setLightbox] = useState(null); // { src, title }
  const previewToggleIndexes = new Set([4, 5]);
  const bg = dark ? '#0f0f14' : '#fdfcf9';

  const modalTypes = ['examor', null, 'vc', 'sa', null, null];

  return (
    <>
      <section id="projects" style={{ background:bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300 overflow-x-hidden cv-auto section-shell">
        <SectionHeader tag={tr.projTag} title={tr.projTitle}/>
        <div className="grid md:grid-cols-2 gap-5 stagger">
          {tr.projects.map((p, i) => {
            const isToggleCard = previewToggleIndexes.has(i);
            const commonProps = {
              p,
              m: projectMeta[i],
              chips: chips[i],
              index: i,
              modalType: modalTypes[i],
              dark,
              onOpen: () => setModal(modalTypes[i]),
              githubUrl: i === 0 ? projectLinks.github.examor : i === 1 ? projectLinks.github.vision : i === 2 ? projectLinks.github.vc : i === 3 ? projectLinks.github.sa : null,
              liveUrl: i === 0 ? projectLinks.live.examor : i === 1 ? projectLinks.live.vision : null,
              previewUrls: projectPreviews[i] || null,
              onPreview: (src, title) => setLightbox({ src, title }),
              techLabel,
              topLabel,
              previewToggleLabel,
            };

            return isToggleCard ? (
              <TogglePreviewCard key={`project-${p.title}`} {...commonProps} />
            ) : (
              <GlassCard key={`project-${p.title}`} {...commonProps} />
            );
          })}
        </div>
      </section>

      {modal === 'examor' && <ExamorModal onClose={() => setModal(null)} dark={dark} lang={lang}/>}
      {modal === 'vc'     && <GTAModal data={gtaData.vc[lang]} github={gtaData.vc.github} onClose={() => setModal(null)} dark={dark}/>}
      {modal === 'sa'     && <GTAModal data={gtaData.sa[lang]} github={gtaData.sa.github} onClose={() => setModal(null)} dark={dark}/>}
      {lightbox && (
        <Modal onClose={() => setLightbox(null)} dark={dark} ariaLabel={`${lightbox.title} preview`}>
          <div className="rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: dark ? 'rgba(15,15,20,0.97)' : 'rgba(255,255,255,0.98)', border:`1px solid ${dark?'rgba(255,255,255,0.12)':'rgba(26,26,46,0.12)'}` }}>
            <div className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom:`1px solid ${dark?'rgba(255,255,255,0.08)':'rgba(26,26,46,0.08)'}` }}>
              <span className="text-sm font-semibold" style={{ color: dark ? '#f0f0f8' : '#1a1a2e' }}>
                {lightbox.title}
              </span>
              <button onClick={() => setLightbox(null)} aria-label="Close preview"
                className="text-sm px-2 py-1 rounded-lg"
                style={{ color: dark ? 'rgba(255,255,255,0.7)' : 'rgba(26,26,46,0.7)' }}>
                Close
              </button>
            </div>
            <img
              src={lightbox.src}
              alt={`${lightbox.title} preview`}
              className="w-full object-contain max-h-[70vh]"
              loading="lazy"
              decoding="async"
              style={{ maxWidth: 1200, margin: '0 auto' }}
            />
          </div>
        </Modal>
      )}
    </>
  );
}
