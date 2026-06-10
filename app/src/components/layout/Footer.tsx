const quickLinks = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre', href: 'sobre' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Portfólio', href: 'portfolio' },
  { label: 'Processo', href: 'processo' },
];

const serviceLinks = [
  'Desenvolvimento de Sistemas Web',
  'Candidaturas Online',
  'Integração de Sistemas e APIs',
  'Consultoria Tecnológica',
  'Automação de Processos',
  'Dashboards e Dados',
];

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer id="contacto" style={{ background: '#020812', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* Main footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <img
              src="/assets/logo-dark.png"
              alt="Polisakidila"
              className="h-10 w-auto mb-5"
            />
            <p className="text-sm text-white/50 leading-relaxed max-w-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Empresa angolana de tecnologia especializada no desenvolvimento de sistemas digitais, plataformas web e soluções para processos institucionais.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-6">
              {['linkedin', 'twitter', 'instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:bg-white/08 border border-white/10 hover:border-brand-electric/40 transition-all duration-200"
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
              Navegação
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 focus:outline-none text-left"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
              Serviços
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-5" style={{ fontFamily: 'Sora, sans-serif' }}>
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-brand-electric mt-0.5 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <span className="text-sm text-white/60" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Luanda, Angola
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-electric mt-0.5 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <a
                  href="mailto:geral@polisakidila.ao"
                  className="text-sm text-white/60 hover:text-brand-electric transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  geral@polisakidila.ao
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-electric mt-0.5 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 18z" />
                  </svg>
                </span>
                <a
                  href="tel:+244000000000"
                  className="text-sm text-white/60 hover:text-brand-electric transition-colors duration-200"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  +244 000 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30" style={{ fontFamily: 'Inter, sans-serif' }}>
            © 2026 Polisakidila. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/20" style={{ fontFamily: 'Inter, sans-serif' }}>
            Sistemas digitais com engenharia aplicada — Luanda, Angola
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === 'linkedin') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
  if (name === 'twitter') return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}
