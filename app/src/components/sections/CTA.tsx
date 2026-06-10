import { useRef, useEffect, useState } from 'react';

function useInView(threshold = 0.3) {
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

export default function CTA() {
  const { ref, inView } = useInView();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" style={{ background: '#020812' }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-electric/20 to-transparent" />

      <div className="container-site relative z-10" ref={ref}>
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Background */}
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #006BFF 0%, #031633 55%, #08255C 100%)' }}
          />

          {/* Pattern overlay */}
          <div className="absolute inset-0 pattern-bg pointer-events-none" style={{ opacity: 0.06 }} />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern pointer-events-none" style={{ opacity: 0.15 }} />

          {/* Geometric accents */}
          <div
            className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.06)', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none"
            style={{ background: 'rgba(255,255,255,0.04)', clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}
          />

          {/* Symbol watermark */}
          <div
            className="absolute right-8 top-1/2 -translate-y-1/2 w-56 h-56 pointer-events-none hidden lg:block"
            style={{ opacity: 0.07 }}
            aria-hidden="true"
          >
            <img src="/assets/symbol-white.png" alt="" className="w-full h-full object-contain" />
          </div>

          {/* Modular dots — brand pattern language */}
          <div className="absolute bottom-8 right-8 flex gap-2 pointer-events-none opacity-30" aria-hidden="true">
            <div className="w-2 h-2 rounded-sm border border-white/60" />
            <div className="w-2 h-2 rounded-sm bg-white/60"
              style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}
            />
            <div className="w-2 h-2 rounded-sm border border-white/40"
              style={{ clipPath: 'polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)' }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center py-16 px-8 lg:px-20 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
              style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', fontFamily: 'Sora, sans-serif' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              Próximo Passo
            </div>

            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              Tem um processo que precisa de ser digitalizado com segurança e escala?
            </h2>
            <p
              className="text-white/75 mb-10 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              A Polisakidila pode ajudar a transformar processos complexos em sistemas digitais simples, seguros e eficientes.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => scrollTo('contacto')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-brand-navy transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
                style={{ background: '#ffffff', fontFamily: 'Sora, sans-serif' }}
              >
                Falar com a equipa
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('portfolio')}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.12)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontFamily: 'Sora, sans-serif',
                }}
              >
                Ver portfólio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
