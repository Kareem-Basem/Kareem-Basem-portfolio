import { useApp } from '../context/AppContext';
import t from '../i18n/translations';
import { contactLinks } from '../data/portfolioData';

export default function Contact() {
  const { dark, lang } = useApp();
  const tr  = t[lang];
  const bg  = dark ? '#0a0a10' : '#f6f3ee';
  const ink = dark ? '#f0f0f8' : '#1c1b22';
  const sub = dark ? 'rgba(255,255,255,0.42)' : 'rgba(28,27,34,0.65)';

  return (
    <>
      <section id="contact"
        style={{ background:bg }}
        className="py-16 md:py-20 px-[5%] relative overflow-x-hidden transition-colors duration-300 cv-auto section-shell">

        {/* Ambient glow */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center">
          <div style={{ width:420, height:320, borderRadius:'50%', background:'radial-gradient(circle,rgba(240,165,0,0.08),transparent 70%)', flexShrink:0 }}/>
        </div>

        <div className="relative z-10 max-w-2xl">
          <div className="reveal">
            <span className="inline-block text-xs font-semibold tracking-[.14em] uppercase mb-3 px-3 py-1 rounded-full tahoe-pill"
              style={{ background:'rgba(240,165,0,0.12)', border:'1px solid rgba(240,165,0,0.28)', color:'#f0a500' }}>
              {tr.conTag}
            </span>
          </div>

          <h2 className="reveal font-serif-display tracking-tight leading-[.92] mb-5 d1"
            style={{ fontSize:'clamp(2.4rem,7vw,6rem)', color:ink }}
            dangerouslySetInnerHTML={{ __html: tr.conTitle.replace('<em>',`<em style="font-style:italic;color:#f0a500;font-family:'DM Serif Display',serif;">`).replace('</em>','</em>') }}/>

          <p className="reveal d2 text-[.92rem] md:text-[.96rem] leading-[1.8] mb-8 max-w-full md:max-w-[460px]"
            style={{ color:sub }}>
            {tr.conSub}
          </p>

          {/* Links — wrap nicely on mobile */}
        <div className="reveal d3 flex flex-wrap gap-2">
            {contactLinks.map((l) => (
              <a key={l.href}
                href={l.href}
                target={l.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                download={l.download}
                aria-label={l.label[lang] || l.label.en}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all hover:-translate-y-0.5 tahoe-pill"
                style={{
                  background: l.download
                    ? 'rgba(240,165,0,0.10)'
                    : (dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.65)'),
                  border: l.download
                    ? '1.5px solid rgba(240,165,0,0.35)'
                    : (dark ? '1.5px solid rgba(255,255,255,0.15)' : '1.5px solid rgba(28,27,34,0.12)'),
                  color: l.download ? '#f0a500' : (dark ? 'rgba(255,255,255,0.65)' : '#1c1b22'),
                  backdropFilter:'blur(14px)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#f0a500';
                  e.currentTarget.style.color = '#f0a500';
                  e.currentTarget.style.background = 'rgba(240,165,0,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = l.download
                    ? 'rgba(240,165,0,0.35)'
                    : (dark ? 'rgba(255,255,255,0.15)' : 'rgba(28,27,34,0.12)');
                  e.currentTarget.style.color = l.download ? '#f0a500' : (dark ? 'rgba(255,255,255,0.65)' : '#1c1b22');
                  e.currentTarget.style.background = l.download
                    ? 'rgba(240,165,0,0.10)'
                    : (dark ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.65)');
                }}>
                <l.Icon size={13}/>
                <span className="truncate max-w-[140px] sm:max-w-none">{l.label[lang] || l.label.en}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer
        style={{ background:dark?'#06060a':'#efeae4' }}
        className="px-[5%] py-4 transition-colors duration-300">
        <div className="flex justify-between items-center">
          <span style={{
            fontFamily:"'Dancing Script', cursive",
            fontSize:'0.95rem',
            fontWeight: 700,
            color: 'rgba(240,165,0,0.55)',
            letterSpacing: '0.02em',
          }}>
            Designed by KeMoO
          </span>
          <span className="text-[.7rem]" style={{ color:dark?'rgba(255,255,255,0.20)':'rgba(28,27,34,0.45)' }}>
            © {new Date().getFullYear()} Kareem Basem Fathi
          </span>
        </div>
      </footer>
    </>
  );
}
