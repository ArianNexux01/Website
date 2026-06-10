import { useRef, useEffect, useState } from 'react';
import SectionLabel from '../ui/SectionLabel';

const points = [
  {
    icon: 'building',
    title: 'Experiência Institucional',
    description: 'Sistemas utilizados em processos de grande responsabilidade, incluindo concursos públicos com centenas de milhares de candidaturas.',
  },
  {
    icon: 'scale',
    title: 'Sistemas Escaláveis',
    description: 'Arquitectura preparada para crescimento — suportamos alto volume de tráfego sem comprometer estabilidade ou desempenho.',
  },
  {
    icon: 'shield',
    title: 'Segurança e Controlo',
    description: 'Controlo de acesso, protecção de dados, validação robusta e práticas de segurança aplicadas em cada camada do sistema.',
  },
  {
    icon: 'user',
    title: 'Foco no Utilizador',
    description: 'Interfaces pensadas para facilitar o trabalho real — tanto para quem usa o sistema como para quem o administra.',
  },
  {
    icon: 'map',
    title: 'Contexto Angolano',
    description: 'Compreendemos a realidade operacional das instituições angolanas e desenvolvemos soluções ajustadas a esse contexto.',
  },
  {
    icon: 'globe',
    title: 'Alcance Internacional',
    description: 'Capacidade de desenvolver soluções para clientes nacionais e internacionais, com qualidade e rigor técnico comprovados.',
  },
  {
    icon: 'layers',
    title: 'Diversidade de Soluções',
    description: 'Actuamos em educação, candidaturas, produtividade, media, integração de sistemas e desenvolvimento web institucional.',
  },
  {
    icon: 'refresh',
    title: 'Compromisso com Continuidade',
    description: 'Não entregamos e desaparecemos. Mantemos, optimizamos e continuamos a desenvolver as soluções que construímos.',
  },
];

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

export default function WhyUs() {
  const { ref, inView } = useInView();

  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#020812' }}
    >
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/15 to-transparent" />

      {/* Decorative symbol */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 pointer-events-none"
        style={{ opacity: 0.03 }}
        aria-hidden="true"
      >
        <img src="/assets/symbol-white.png" alt="" className="w-full h-full object-contain -translate-x-16" />
      </div>

      <div className="container-site relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left — header and intro */}
          <div className="lg:col-span-2">
            <div
              className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <SectionLabel className="mb-5">Porquê escolher-nos</SectionLabel>
              <h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight"
                style={{ fontFamily: 'Sora, sans-serif' }}
              >
                Visão tecnológica e capacidade de execução.
              </h2>
              <p
                className="text-white/55 leading-relaxed mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                A Polisakidila combina visão tecnológica, capacidade de engenharia e conhecimento do contexto local para criar soluções digitais que respondem a desafios reais. Cada projecto é pensado para ser seguro, escalável, simples de usar e preparado para evoluir.
              </p>

              {/* Tech line accent */}
              <div className="tech-line mb-8 max-w-xs" />

              {/* Summary stat */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,107,255,0.12) 0%, rgba(8,37,92,0.2) 100%)',
                  border: '1px solid rgba(0,107,255,0.2)',
                }}
              >
                <div
                  className="text-4xl font-bold text-brand-electric mb-2"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  200k+
                </div>
                <div className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Candidaturas processadas no concurso do Conselho Superior da Magistratura Judicial — prova de escala, robustez e confiança institucional.
                </div>
              </div>
            </div>
          </div>

          {/* Right — points grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point, i) => (
                <PointCard key={point.title} point={point} index={i} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PointCard({ point, index, inView }: {
  point: typeof points[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-xl p-5 overflow-hidden cursor-default transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 70}ms`,
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.03)',
        border: hovered ? '1px solid rgba(0,107,255,0.35)' : '1px solid rgba(255,255,255,0.07)',
        transition: 'all 0.3s ease, opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tiny corner cut */}
      <div
        className="absolute top-0 right-0 w-8 h-8 pointer-events-none"
        style={{
          background: hovered ? 'rgba(0,107,255,0.2)' : 'rgba(255,255,255,0.03)',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          transition: 'background 0.3s',
        }}
      />

      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3.5 transition-all duration-300"
        style={{
          background: hovered ? 'rgba(0,107,255,0.2)' : 'rgba(0,107,255,0.1)',
          border: '1px solid rgba(0,107,255,0.2)',
        }}
      >
        <PointIcon name={point.icon} />
      </div>

      <h3
        className="text-sm font-bold text-white mb-1.5"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        {point.title}
      </h3>
      <p
        className="text-xs text-white/50 leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {point.description}
      </p>
    </div>
  );
}

function PointIcon({ name }: { name: string }) {
  const cls = "w-4 h-4 text-brand-electric";
  const icons: Record<string, JSX.Element> = {
    building: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="1"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/><line x1="2" y1="9" x2="9" y2="9"/><line x1="2" y1="15" x2="9" y2="15"/><line x1="15" y1="9" x2="22" y2="9"/><line x1="15" y1="15" x2="22" y2="15"/>
      </svg>
    ),
    scale: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    shield: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    user: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    ),
    map: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    globe: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    layers: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    refresh: (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
      </svg>
    ),
  };
  return icons[name] || icons['building'];
}
