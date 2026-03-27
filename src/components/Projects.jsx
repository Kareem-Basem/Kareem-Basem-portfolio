import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import {
  projectMeta,
  projectChips,
  projectLinks,
  projectPreviews,
} from '../data/portfolioData';

function ProjectCard({ p, m, chips, index, dark, githubUrl, liveUrl, previewUrl, techLabel, topLabel }) {
  const [hov, setHov] = useState(false);
  const gbg   = dark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.72)';
  const gbord = dark ? 'rgba(255,255,255,0.12)' : 'rgba(26,26,46,0.13)';
  const ink   = dark ? '#f0f0f8' : '#1a1a2e';
  const muted = dark ? 'rgba(255,255,255,0.5)' : '#5a5a72';
  const chip  = dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.70)';
  const delay = [0,.08,.15,.22,.29,.35][index]||0;

  return (
    <div
      className="relative rounded-2xl overflow-hidden flex flex-col float-card"
      style={{
        transitionDelay:`${delay}s`,
        background: gbg,
        border:`1px solid ${hov ? m.accent+'50' : gbord}`,
        boxShadow: hov
          ? `0 12px 28px ${m.glow}, inset 0 1px 0 rgba(255,255,255,${dark?'0.09':'0.92'})`
          : `0 3px 18px rgba(0,0,0,${dark?'0.22':'0.06'}), inset 0 1px 0 rgba(255,255,255,${dark?'0.06':'0.88'})`,
        transform: 'none',
        transition:'box-shadow 0.2s ease, border-color 0.2s ease',
        cursor: 'default',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}>

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
          </div>
          <div className="flex items-center gap-2">
            {liveUrl && (
              <span className="text-[.58rem] font-semibold px-2 py-0.5 rounded-full tahoe-pill"
                style={{ background:`${m.accent}22`, color:m.accent, border:`1px solid ${m.accent}38` }}>
                Live
              </span>
            )}
          </div>
        </div>

        <h3 className="font-serif-display text-xl tracking-tight leading-snug mb-2" style={{ color:ink }}>{p.title}</h3>
        <p className="text-[.87rem] leading-[1.75] flex-1" style={{ color:muted }}>{p.desc}</p>

        <div className="mt-4 mb-2">
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
            {previewUrl ? (
              <img
                src={previewUrl}
                alt={`${p.title} preview`}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
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
          </div>
        </div>

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
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ background:chip, border:`1px solid ${dark?'rgba(255,255,255,0.09)':'rgba(26,26,46,0.08)'}`, color:muted }}
                title="GitHub">
                <Github size={13}/>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noreferrer"
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

export default function Projects() {
  const { dark, lang } = useApp();
  const tr    = t[lang];
  const chips = projectChips[lang] || projectChips.en;
  const techLabel = tr.techStack;
  const topLabel = tr.topProject;
  const bg = dark ? '#0f0f14' : '#fdfcf9';

  return (
    <section id="projects" style={{ background:bg }} className="py-20 md:py-24 px-[5%] transition-colors duration-300 overflow-x-hidden cv-auto section-shell no-scroll-anchor">
      <SectionHeader tag={tr.projTag} title={tr.projTitle}/>
      <div className="grid md:grid-cols-2 gap-5 stagger">
        {tr.projects.map((p, i) => {
          const preview = Array.isArray(projectPreviews[i]) ? projectPreviews[i][0] : projectPreviews[i];
          return (
            <ProjectCard
              key={`project-${p.title}`}
              p={p}
              m={projectMeta[i]}
              chips={chips[i]}
              index={i}
              dark={dark}
              githubUrl={i === 0 ? projectLinks.github.examor : i === 1 ? projectLinks.github.vision : i === 2 ? projectLinks.github.vc : i === 3 ? projectLinks.github.sa : null}
              liveUrl={i === 0 ? projectLinks.live.examor : i === 1 ? projectLinks.live.vision : null}
              previewUrl={preview || null}
              techLabel={techLabel}
              topLabel={topLabel}
            />
          );
        })}
      </div>
    </section>
  );
}
