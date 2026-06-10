import { useRef, useEffect, useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import { featuredProject, portfolioProjects } from '../../data/projects';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function DashboardMockup() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden h-full min-h-[340px]"
      style={{ background: 'rgba(3,22,51,0.8)', border: '1px solid rgba(0,107,255,0.2)' }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: '1px solid rgba(0,107,255,0.15)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-electric" />
          <span className="text-xs text-white/70 font-medium" style={{ fontFamily: 'Sora, sans-serif' }}>
            Painel — Sistema de Candidaturas
          </span>
        </div>
        <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
          CSMJ · Em funcionamento
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-px p-0" style={{ borderBottom: '1px solid rgba(0,107,255,0.1)' }}>
        {[
          { val: '200k+', label: 'Candidaturas', color: '#006BFF' },
          { val: '98.2%', label: 'Válidas', color: '#A7C7FF' },
          { val: 'Ativo', label: 'Estado', color: '#006BFF' },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-3.5 text-center" style={{ background: 'rgba(0,107,255,0.04)' }}>
            <div
              className="text-lg font-bold mb-0.5"
              style={{ fontFamily: 'Sora, sans-serif', color: stat.color }}
            >
              {stat.val}
            </div>
            <div className="text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="px-4 pt-5 pb-3">
        <div className="text-xs text-white/30 mb-3 tracking-wide" style={{ fontFamily: 'Inter, sans-serif' }}>
          Volume de candidaturas por período
        </div>
        <div className="space-y-2">
          {[
            { label: 'Engenharia Civil', pct: 82, val: '45.231' },
            { label: 'Direito', pct: 68, val: '38.019' },
            { label: 'Medicina', pct: 51, val: '29.104' },
            { label: 'Arquitectura', pct: 34, val: '18.770' },
          ].map((bar) => (
            <div key={bar.label} className="flex items-center gap-3">
              <span className="text-xs text-white/40 w-28 text-right flex-shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                {bar.label}
              </span>
              <div className="flex-1 h-4 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${bar.pct}%`,
                    background: 'linear-gradient(90deg, #006BFF, #A7C7FF)',
                    transition: 'width 1.5s ease-out',
                  }}
                />
              </div>
              <span className="text-xs text-white/50 w-14 flex-shrink-0" style={{ fontFamily: 'Inter, sans-serif' }}>
                {bar.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Status row */}
      <div className="px-4 pt-2 pb-4">
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 6px #4ade80' }} />
            <span className="text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>Sistema operacional</span>
          </div>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>Dados protegidos</span>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>Alta disponibilidade</span>
        </div>
      </div>

      {/* Geometric corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-20 h-20 pointer-events-none"
        style={{
          background: 'rgba(0,107,255,0.08)',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
        }}
      />
    </div>
  );
}

const projectColors: Record<string, { bg: string; border: string; tag: string }> = {
  'kbhvn':         { bg: 'rgba(0,107,255,0.06)',  border: 'rgba(0,107,255,0.2)',  tag: '#006BFF' },
  'itel-escolar':  { bg: 'rgba(8,37,92,0.4)',      border: 'rgba(8,37,92,0.8)',    tag: '#A7C7FF' },
  'growth-software': { bg: 'rgba(0,107,255,0.06)', border: 'rgba(0,107,255,0.2)', tag: '#006BFF' },
  'dezpila-iptv':  { bg: 'rgba(8,37,92,0.4)',      border: 'rgba(8,37,92,0.8)',    tag: '#A7C7FF' },
};

function ProjectCard({ project, index, inView }: {
  project: typeof portfolioProjects[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const colors = projectColors[project.id] || projectColors['kbhvn'];

  return (
    <div
      className={`relative rounded-2xl p-7 overflow-hidden cursor-default transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: hovered ? 'rgba(255,255,255,0.06)' : colors.bg,
        border: hovered ? '1px solid rgba(0,107,255,0.4)' : `1px solid ${colors.border}`,
        boxShadow: hovered ? '0 0 32px rgba(0,107,255,0.08)' : 'none',
        transition: 'all 0.3s ease, opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner cut — brand pattern language */}
      <div
        className="absolute top-0 right-0 w-14 h-14 pointer-events-none"
        style={{
          background: hovered ? 'rgba(0,107,255,0.2)' : 'rgba(255,255,255,0.04)',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          transition: 'background 0.3s',
        }}
      />

      {/* Modular dots — bottom right */}
      <div
        className="absolute bottom-6 right-6 flex gap-1.5"
        style={{ opacity: hovered ? 0.7 : 0.2, transition: 'opacity 0.3s' }}
      >
        <div className="w-1.5 h-1.5 rounded-sm border border-brand-electric/50" />
        <div className="w-1.5 h-1.5 rounded-sm bg-brand-electric/50"
          style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 0 100%)' }}
        />
      </div>

      {/* Category tag */}
      <div className="flex items-center gap-2 mb-5">
        <span
          className="text-xs font-semibold px-2.5 py-1 rounded-md tracking-wide"
          style={{
            fontFamily: 'Sora, sans-serif',
            background: 'rgba(0,107,255,0.12)',
            border: '1px solid rgba(0,107,255,0.25)',
            color: colors.tag,
          }}
        >
          {project.category}
        </span>
        <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
          {project.type}
        </span>
      </div>

      {/* Name */}
      <h3
        className="text-lg font-bold text-white mb-3 leading-snug"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-white/55 leading-relaxed mb-5"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {project.shortDescription}
      </p>

      {/* Feature list */}
      <ul className="space-y-1.5 mb-6">
        {project.features.slice(0, 3).map((feat, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="flex-shrink-0 w-1 h-1 rounded-full bg-brand-electric" />
            <span className="text-xs text-white/45" style={{ fontFamily: 'Inter, sans-serif' }}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-md text-white/40"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', fontFamily: 'Inter, sans-serif' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <button
        className="text-sm font-semibold text-brand-electric hover:text-white flex items-center gap-2 transition-colors duration-200 focus:outline-none"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        Ver detalhes
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </button>
    </div>
  );
}

export default function Portfolio() {
  const { ref, inView } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  return (
    <section
      id="portfolio"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#020812' }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-bg pointer-events-none" style={{ opacity: 0.03 }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/15 to-transparent" />

      <div className="container-site relative z-10">
        {/* Header */}
        <div
          className={`mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          ref={ref}
        >
          <SectionLabel className="mb-5">Portfólio</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Soluções digitais que provam o que dizemos.
            </h2>
            <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Sistemas desenvolvidos para processos institucionais, educação, serviços online, produtividade empresarial e distribuição de conteúdo digital.
            </p>
          </div>
        </div>

        {/* ─── Featured project ─── */}
        <div
          className={`mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '150ms' }}
        >
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #031633 0%, #08255C 60%, #020812 100%)',
              border: '1px solid rgba(0,107,255,0.2)',
            }}
          >
            {/* Large symbol watermark */}
            <div
              className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none"
              style={{ opacity: 0.04 }}
              aria-hidden="true"
            >
              <img
                src="/assets/symbol-white.png"
                alt=""
                className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 object-contain translate-x-8"
              />
            </div>

            {/* Pattern overlay */}
            <div className="absolute inset-0 pattern-bg pointer-events-none" style={{ opacity: 0.03 }} />

            {/* Top label bar */}
            <div
              className="flex items-center gap-3 px-8 py-4 border-b"
              style={{ borderColor: 'rgba(0,107,255,0.15)' }}
            >
              <span className="section-label">Projecto Principal</span>
              <div className="h-px flex-1" style={{ background: 'rgba(0,107,255,0.12)' }} />
              <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
                {featuredProject.category} · {featuredProject.type}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left — content */}
              <div className="p-8 lg:p-10 lg:pr-6">
                <h3
                  className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {featuredProject.shortDescription}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed mb-8"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {featuredProject.fullDescription}
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-8">
                  {featuredProject.features.slice(0, 8).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="flex-shrink-0 w-4 h-4 rounded flex items-center justify-center" style={{ background: 'rgba(0,107,255,0.2)' }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#006BFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="text-xs text-white/55" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metrics */}
                <div
                  className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 rounded-xl"
                  style={{ background: 'rgba(0,107,255,0.08)', border: '1px solid rgba(0,107,255,0.15)' }}
                >
                  {featuredProject.metrics?.map((m) => (
                    <div key={m.label} className="text-center">
                      <div className="text-xl font-bold text-brand-electric mb-0.5" style={{ fontFamily: 'Sora, sans-serif' }}>
                        {m.value}
                      </div>
                      <div className="text-xs text-white/40 leading-tight" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="btn-primary">
                  Conhecer solução semelhante
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>

              {/* Right — dashboard mockup */}
              <div className="hidden lg:flex items-center p-8 pl-4">
                <div className="w-full">
                  <DashboardMockup />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Other projects grid ─── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          ref={ref2}
        >
          {portfolioProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView2} />
          ))}
        </div>

        {/* Solution types reference */}
        <div
          className={`mt-10 transition-all duration-700 ${inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div
            className="rounded-2xl p-6"
            style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs text-white/30 font-semibold tracking-widest uppercase mr-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                Outros tipos de soluções
              </span>
              {[
                'Plataformas Institucionais',
                'Integrações e APIs',
                'Dashboards e Relatórios',
                'Automação de Processos',
                'Portais de Serviços',
                'Soluções de Dados',
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-lg text-white/40"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    fontFamily: 'Inter, sans-serif',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{ background: 'rgba(3,22,51,0.8)', border: '1px solid rgba(0,107,255,0.2)' }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-3"
        style={{ borderBottom: '1px solid rgba(0,107,255,0.15)' }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-brand-electric animate-pulse" />
          <span className="text-xs text-white/70 font-medium" style={{ fontFamily: 'Sora, sans-serif' }}>
            Painel — Sistema de Candidaturas
          </span>
        </div>
        <span className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
          CSMJ · Activo
        </span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-px" style={{ borderBottom: '1px solid rgba(0,107,255,0.1)' }}>
        {[
          { val: '200k+', label: 'Candidaturas', color: '#006BFF' },
          { val: '98.2%', label: 'Válidas', color: '#A7C7FF' },
          { val: 'Ativo', label: 'Estado', color: '#4ade80' },
        ].map((stat) => (
          <div key={stat.label} className="px-4 py-3.5 text-center" style={{ background: 'rgba(0,107,255,0.04)' }}>
            <div className="text-base font-bold mb-0.5" style={{ fontFamily: 'Sora, sans-serif', color: stat.color }}>
              {stat.val}
            </div>
            <div className="text-xs text-white/40" style={{ fontFamily: 'Inter, sans-serif' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="px-4 pt-4 pb-3">
        <div className="text-xs text-white/30 mb-3" style={{ fontFamily: 'Inter, sans-serif' }}>
          Candidaturas por área
        </div>
        <div className="space-y-2.5">
          {[
            { label: 'Engenharia Civil', pct: 82, val: '45.231' },
            { label: 'Direito', pct: 66, val: '38.019' },
            { label: 'Medicina', pct: 51, val: '29.104' },
            { label: 'Arquitectura', pct: 33, val: '18.770' },
          ].map((bar) => (
            <div key={bar.label} className="flex items-center gap-2">
              <span className="text-xs text-white/35 w-24 text-right flex-shrink-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px' }}>
                {bar.label}
              </span>
              <div className="flex-1 h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${bar.pct}%`, background: 'linear-gradient(90deg, #006BFF, #A7C7FF)' }}
                />
              </div>
              <span className="text-xs text-white/40 w-12 flex-shrink-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px' }}>
                {bar.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Status row */}
      <div className="px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: '0 0 5px #4ade80' }} />
            <span className="text-xs text-white/35" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px' }}>Sistema operacional</span>
          </div>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-xs text-white/25" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px' }}>Dados protegidos</span>
          <div className="h-3 w-px bg-white/10" />
          <span className="text-xs text-white/25" style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px' }}>Alta disponibilidade</span>
        </div>
      </div>

      {/* Geometric corner */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 pointer-events-none"
        style={{ background: 'rgba(0,107,255,0.1)', clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
    </div>
  );
}
