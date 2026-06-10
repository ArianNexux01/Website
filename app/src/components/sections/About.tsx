import { useRef, useEffect, useState } from 'react';
import SectionLabel from '../ui/SectionLabel';

const diferenciais = [
  'Conhecimento profundo do contexto angolano',
  'Soluções desenvolvidas sob medida para cada cliente',
  'Foco em desempenho, segurança e escalabilidade',
  'Experiência com processos institucionais de grande volume',
  'Design orientado à experiência do utilizador',
  'Engenharia aplicada à resolução de problemas reais',
];

function useInView(threshold = 0.2) {
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

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="sobre" className="bg-white py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/20 to-transparent" />

      {/* Background modular accent — top right */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{ opacity: 0.04 }}
        aria-hidden="true"
      >
        <img src="/assets/pattern.png" alt="" className="w-full h-full object-cover object-left-bottom" />
      </div>

      <div className="container-site" ref={ref}>
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <SectionLabel className="mb-5">Sobre a Empresa</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2
              className="text-3xl lg:text-4xl font-bold text-brand-navy leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Engenharia e inovação com raízes angolanas.
            </h2>
            <p className="text-brand-gray leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              A Polisakidila nasce com a missão de transformar o cenário tecnológico angolano, criando soluções digitais que aproximam instituições, empresas e pessoas. Com uma abordagem orientada à engenharia, inovação e excelência, posicionamo-nos como parceiros estratégicos para projectos tecnológicos de elevado impacto.
            </p>
          </div>
        </div>

        {/* Cards — Missão e Visão */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Missão */}
          <div
            className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transitionDelay: '100ms',
              background: 'linear-gradient(135deg, #031633 0%, #08255C 100%)',
            }}
          >
            {/* Corner cut accent */}
            <div
              className="absolute top-0 right-0 w-14 h-14 bg-brand-electric/20"
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-brand-electric/20 border border-brand-electric/30 flex items-center justify-center mb-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                Missão
              </h3>
              <p className="text-white/65 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Transformar processos complexos em soluções digitais simples, seguras e escaláveis que respondam a desafios reais de instituições e empresas.
              </p>
            </div>
          </div>

          {/* Visão */}
          <div
            className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transitionDelay: '200ms',
              background: '#F8FAFE',
              border: '1px solid #E5EAF3',
            }}
          >
            <div
              className="absolute top-0 right-0 w-14 h-14"
              style={{ background: '#E5EAF3', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-brand-electric/10 border border-brand-electric/20 flex items-center justify-center mb-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#006BFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                Visão
              </h3>
              <p className="text-brand-gray text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Ser uma referência angolana na criação de sistemas digitais modernos, robustos e orientados ao impacto — com presença relevante no mercado africano e internacional.
              </p>
            </div>
          </div>

          {/* Contexto */}
          <div
            className={`relative rounded-2xl p-8 overflow-hidden transition-all duration-700 md:col-span-2 lg:col-span-1 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{
              transitionDelay: '300ms',
              background: '#006BFF',
            }}
          >
            <div
              className="absolute top-0 right-0 w-16 h-16 bg-white/10"
              style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
            />
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center mb-6">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>
                Contexto Local
              </h3>
              <p className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                Nascidos em Angola, compreendemos os desafios únicos do mercado local — e desenvolvemos soluções adequadas à realidade operacional das instituições angolanas.
              </p>
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div
          className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: '#E5EAF3' }} />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-gray" style={{ fontFamily: 'Sora, sans-serif' }}>
              Diferenciais
            </span>
            <div className="h-px flex-1" style={{ background: '#E5EAF3' }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {diferenciais.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3.5 rounded-xl"
                style={{ background: '#F8FAFE', border: '1px solid #E5EAF3' }}
              >
                <span
                  className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center"
                  style={{ background: 'rgba(0,107,255,0.1)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#006BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-sm text-brand-dark" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
