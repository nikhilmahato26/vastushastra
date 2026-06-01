import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { brand, nav } from '../data/siteContent';
import { whatsappUrl, WhatsAppIcon } from './icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  // Background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-line bg-cream/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        {/* Brand mark */}
        <a href="#top" className="group flex items-center gap-3" aria-label={brand.name}>
          <span className="flex h-9 w-9 items-center justify-center border border-ink">
            <CompassMark />
          </span>
          <span className="leading-none">
            <span className="block font-display text-lg font-semibold text-ink">{brand.name}</span>
            <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
              {brand.tagline}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`link-slide font-mono text-xs uppercase tracking-[0.15em] transition-colors ${
                    isActive ? 'text-terracotta' : 'text-ink hover:text-terracotta'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 border border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-cream sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center border border-ink lg:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  open ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  open ? '-translate-y-1 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-cream/95 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col px-5 py-4 sm:px-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line/60 py-3 font-mono text-sm uppercase tracking-[0.15em] text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 bg-ink py-3 font-mono text-sm uppercase tracking-[0.15em] text-cream"
                >
                  <WhatsAppIcon className="h-4 w-4" /> WhatsApp Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function CompassMark() {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
      <circle cx="16" cy="16" r="11" fill="none" stroke="#221E1A" strokeWidth="1.4" />
      <path d="M16 6 L19 16 L16 26 L13 16 Z" fill="#B0532F" />
      <path d="M6 16 L16 13 L26 16 L16 19 Z" fill="#A8754E" opacity="0.7" />
      <circle cx="16" cy="16" r="1.4" fill="#221E1A" />
    </svg>
  );
}
