import { useRef, useEffect, useState } from 'react';
import SectionLabel from '../ui/SectionLabel';
import ServiceIcon from '../ui/ServiceIcon';
import { services } from '../../data/services';

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

export default function Services() {
  const { ref, inView } = useInView();

  return (
    <section
      id="servicos"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: '#0a0e1a' }}
    >
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-bg pointer-events-none" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/20 to-transparent" />

      <div className="container-site relative z-10" ref={ref}>
        {/* Header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <SectionLabel className="mb-5">O que fazemos</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Sistemas e plataformas para os desafios que importam.
            </h2>
            <p className="text-white/50 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Desenvolvemos soluções digitais ajustadas à realidade operacional de cada cliente — desde plataformas institucionais até sistemas de automação e integração.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, inView }: {
  service: typeof services[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`relative rounded-2xl p-7 cursor-default transition-all duration-700 overflow-hidden group ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        transitionDelay: `${index * 80}ms`,
        background: hovered ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
        border: hovered ? '1px solid rgba(0,107,255,0.35)' : '1px solid rgba(255,255,255,0.07)',
        boxShadow: hovered ? '0 0 28px rgba(0,107,255,0.08)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.7s ease-out, transform 0.7s ease-out',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Corner geometric accent — brand pattern language */}
      <div
        className="absolute top-0 right-0 w-12 h-12 pointer-events-none transition-opacity duration-300"
        style={{
          background: hovered ? 'rgba(0,107,255,0.15)' : 'rgba(255,255,255,0.03)',
          clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
        }}
      />

      {/* Bottom-left module dot */}
      <div
        className="absolute bottom-5 right-6 flex gap-1.5 pointer-events-none"
        style={{ opacity: hovered ? 0.6 : 0.2, transition: 'opacity 0.3s' }}
      >
        <div className="w-1.5 h-1.5 rounded-sm border border-brand-electric/60" />
        <div
          className="w-1.5 h-1.5 rounded-sm bg-brand-electric/60"
          style={{ clipPath: 'polygon(0 0, calc(100% - 3px) 0, 100% 3px, 100% 100%, 0 100%)' }}
        />
      </div>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-6 transition-all duration-300"
        style={{
          background: hovered ? 'rgba(0,107,255,0.2)' : 'rgba(0,107,255,0.1)',
          border: hovered ? '1px solid rgba(0,107,255,0.4)' : '1px solid rgba(0,107,255,0.2)',
        }}
      >
        <ServiceIcon
          icon={service.icon}
          className={`transition-colors duration-300 ${hovered ? 'text-brand-electric' : 'text-brand-support'}`}
        />
      </div>

      {/* Content */}
      <h3
        className="text-base font-bold text-white mb-3 leading-snug"
        style={{ fontFamily: 'Sora, sans-serif' }}
      >
        {service.title}
      </h3>
      <p
        className="text-sm text-white/50 leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {service.description}
      </p>
    </div>
  );
}
