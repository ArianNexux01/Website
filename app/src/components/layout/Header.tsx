import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre', href: 'sobre' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Portfólio', href: 'portfolio' },
  { label: 'Processo', href: 'processo' },
  { label: 'Contacto', href: 'contacto' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-site flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex-shrink-0 focus:outline-none"
          aria-label="Polisakidila - Início"
        >
          <img
            src="/assets/logo-dark.png"
            alt="Polisakidila"
            className="h-9 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 focus:outline-none"
              style={{ fontFamily: 'Sora, sans-serif' }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollTo('contacto')}
            className="btn-primary text-sm"
          >
            Falar com a equipa
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'opacity-0 w-0' : 'w-5'
            }`}
          />
          <span
            className={`block h-0.5 bg-white transition-all duration-300 ${
              menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
            }`}
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: '#020812' }}
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/[0.06]">
          <img src="/assets/logo-dark.png" alt="Polisakidila" className="h-9 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white focus:outline-none"
            aria-label="Fechar menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Mobile menu links */}
        <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Navegação mobile">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left py-4 text-xl font-semibold text-white/80 hover:text-white border-b border-white/[0.06] transition-colors duration-200 focus:outline-none"
              style={{
                fontFamily: 'Sora, sans-serif',
                transitionDelay: menuOpen ? `${i * 40}ms` : '0ms',
              }}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-6">
            <button
              onClick={() => scrollTo('contacto')}
              className="btn-primary w-full justify-center py-4 text-base"
            >
              Falar com a equipa
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
