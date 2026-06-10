import { useEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';

const metrics = [
  { value: 200, suffix: 'k+', label: 'Candidaturas processadas', delay: 0 },
  { value: 5, suffix: '+', label: 'Projectos em portfólio', delay: 200 },
];

function AnimatedMetric({ value, suffix, label, delay }: {
  value: number; suffix: string; label: string; delay: number;
}) {
  const { count, ref } = useCounter(value, 2000, delay);
  return (
    <div ref={ref} className="metric-card rounded-xl px-5 py-4 min-w-[140px]">
      <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
        <span className="text-gradient-blue">{count.toLocaleString('pt-AO')}</span>
        <span className="text-brand-electric">{suffix}</span>
      </div>
      <div className="text-xs text-white/50 mt-1 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #031633 0%, #020812 55%, #08255C 100%)' }}
    >
      {/* Pattern background */}
      <div className="absolute inset-0 pattern-bg pointer-events-none" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-30" />

      {/* Radial glow — left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at left center, rgba(0,107,255,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Large P symbol watermark — right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none select-none"
        style={{ opacity: 0.055 }}
      >
        <img
          src="/assets/symbol-white.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain translate-x-16"
        />
      </div>

      {/* Geometric accent modules — top right */}
      <div className="absolute top-24 right-12 hidden xl:block pointer-events-none" aria-hidden="true">
        <div className="relative w-32 h-32">
          <div className="absolute top-0 right-0 w-14 h-14 rounded-xl border border-brand-electric/20 bg-brand-electric/5" />
          <div
            className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-brand-deep/60 border border-brand-electric/15"
            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)' }}
          />
        </div>
      </div>

      {/* Geometric accent modules — bottom left */}
      <div className="absolute bottom-24 left-8 hidden xl:block pointer-events-none" aria-hidden="true">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-sm border border-brand-electric/30" />
          <div className="w-3 h-3 rounded-sm bg-brand-electric/20" />
          <div className="w-3 h-3 rounded-sm border border-brand-electric/20"
            style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}
          />
        </div>
      </div>

      {/* Main content */}
      <div className="container-site relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '0ms' }}
          >
            <span className="section-label mb-7 inline-flex">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-electric" />
              Tecnologia Angolana
            </span>
          </div>

          {/* Headline */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Tecnologia angolana para{' '}
              <span className="text-gradient-blue">sistemas digitais</span>{' '}
              de alto impacto.
            </h1>
          </div>

          {/* Subtitle */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <p
              className="text-base lg:text-lg text-white/60 max-w-2xl mb-10 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A Polisakidila desenvolve plataformas, sistemas e soluções digitais escaláveis para instituições, empresas e serviços públicos — com foco em segurança, eficiência e desempenho.
            </p>
          </div>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <button
              onClick={() => scrollTo('portfolio')}
              className="btn-primary px-7 py-3.5"
            >
              Ver portfólio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contacto')}
              className="btn-outline px-7 py-3.5"
            >
              Falar connosco
            </button>
          </div>

          {/* Metrics */}
          <div
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Tech line */}
            <div className="tech-line mb-8 max-w-sm" />
            <div className="flex flex-wrap gap-3">
              {metrics.map((m) => (
                <AnimatedMetric key={m.label} {...m} />
              ))}
              <div className="metric-card rounded-xl px-5 py-4 min-w-[140px]">
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Sora, sans-serif' }}>
                  <span className="text-brand-support">Angola</span>
                </div>
                <div className="text-xs text-white/50 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Base de inovação
                </div>
              </div>
              <div className="metric-card rounded-xl px-5 py-4 min-w-[140px]">
                <div className="text-2xl font-bold" style={{ fontFamily: 'Sora, sans-serif' }}>
                  <span className="text-brand-electric">Crítico</span>
                </div>
                <div className="text-xs text-white/50 mt-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Processos suportados
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs text-white/60 tracking-widest uppercase" style={{ fontFamily: 'Sora, sans-serif', fontSize: '10px' }}>
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-brand-electric/60 to-transparent" />
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #020812)' }}
      />
    </section>
  );
}
