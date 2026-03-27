import { useApp } from '../context/AppContext';

export default function SectionHeader({ tag, title }) {
  const { dark } = useApp();
  return (
    <div className="mb-10 section-header">
      <span
        className="inline-block text-xs font-semibold tracking-[.14em] uppercase text-amber mb-2 px-3 py-1 rounded-full tahoe-pill"
        style={{
          background: dark ? 'rgba(240,165,0,0.12)' : 'rgba(255,255,255,0.65)',
          border: '1px solid rgba(240,165,0,0.25)',
        }}>
        {tag}
      </span>
      <div className="section-accent" />
      <h2
        className="font-serif-display section-title text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.05]"
        style={{ color: dark ? '#f0f0f8' : '#1a1a2e' }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </div>
  );
}
