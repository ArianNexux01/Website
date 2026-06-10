import { useRef, useEffect, useState } from 'react';
import SectionLabel from '../ui/SectionLabel';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Compreensão do problema, objectivos, utilizadores, requisitos técnicos e contexto operacional do cliente.',
  },
  {
    number: '02',
    title: 'Arquitectura',
    description:
      'Definição da solução técnica, fluxos de dados, módulos do sistema, integrações, segurança e estrutura de dados.',
  },
  {
    number: '03',
    title: 'Design e Desenvolvimento',
    description:
      'Construção da interface, backend, base de dados, componentes do sistema e integrações com serviços externos.',
  },
  {
    number: '04',
    title: 'Testes e Validação',
    description:
      'Verificação funcional, testes de segurança, análise de desempenho, usabilidade e consistência dos fluxos.',
  },
  {
    number: '05',
    title: 'Implementação',
    description:
      'Deploy em ambiente de produção, configuração de infraestrutura, monitorização e suporte à entrada em operação.',
  },
  {
    number: '06',
    title: 'Evolução',
    description:
      'Melhorias contínuas, manutenção, optimização de desempenho e desenvolvimento de novas funcionalidades.',
  },
];

function useInView(threshold = 0.15) {
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

export default function Process() {
  const { ref, inView } = useInView();

  return (
    <section
      id="processo"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#0d1420' }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/20 to-transparent" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none" style={{ opacity: 0.4 }} />

      <div className="container-site relative z-10" ref={ref}>
        {/* Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex justify-center mb-5">
            <SectionLabel>Como trabalhamos</SectionLabel>
          </div>
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            Método, rigor e entrega.
          </h2>
          <p
            className="text-white/50 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Cada projecto segue um processo estruturado — desde a compreensão do problema até à entrega e evolução contínua da solução.
          </p>
        </div>

        {/* Steps — desktop horizontal, mobile vertical */}
        <div className="hidden lg:block">
          {/* Desktop: 3+3 grid */}
          <div className="grid grid-cols-3 gap-5 mb-5">
            {steps.slice(0, 3).map((step, i) => (
              <StepCard key={step.number} step={step} index={i} inView={inView} />
            ))}
          </div>
          {/* Connecting visual */}
          <div className="relative flex items-center justify-center mb-5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-electric/20 to-transparent" />
            <div
              className="mx-4 px-3 py-1.5 rounded-full text-xs text-white/30 border border-white/10 flex-shrink-0"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Iterativo e contínuo
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-brand-electric/20 to-transparent" />
          </div>
          <div className="grid grid-cols-3 gap-5">
            {steps.slice(3).map((step, i) => (
              <StepCard key={step.number} step={step} index={i + 3} inView={inView} />
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div
            className="absolute left-7 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, rgba(0,107,255,0.4), rgba(0,107,255,0.1))' }}
          />
          <div className="space-y-5 pl-16">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Step dot */}
                <div
                  className="absolute -left-[3.25rem] top-1 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{
                    background: '#006BFF',
                    fontFamily: 'Sora, sans-serif',
                    color: 'white',
                  }}
                >
                  {step.number}
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <h3 className="text-base font-bold text-white mb-2" style={{ fontFamily: 'Sora, sans-serif' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({ step, index, inView }: {
  step: typeof steps[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
        background: hovered ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
        border: hovered ? '1px solid rgba(0,107,255,0.35)' : '1px solid rgba(255,255,255,0.06)',
        transition: 'all 0.3s ease, opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner cut */}
      <div
        className="absolute top-0 right-0 w-10 h-10 pointer-events-none"
        style={{
          background: hovered ? 'rgba(0,107,255,0.2)' : 'rgba(255,255,255,0.03)',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
          transition: 'background 0.3s',
        }}
      />

      {/* Step number */}
      <div
        className="inline-flex items-center justify-center w-10 h-10 rounded-xl mb-5 text-sm font-bold transition-all duration-300"
        style={{
          fontFamily: 'Sora, sans-serif',
          background: hovered ? '#006BFF' : 'rgba(0,107,255,0.15)',
          color: hovered ? '#ffffff' : '#006BFF',
          border: hovered ? 'none' : '1px solid rgba(0,107,255,0.25)',
        }}
      >
        {step.number}
      </div>

      <h3 className="text-base font-bold text-white mb-2.5" style={{ fontFamily: 'Sora, sans-serif' }}>
        {step.title}
      </h3>
      <p className="text-sm text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
        {step.description}
      </p>
    </div>
  );
}
