import { brand, nav, blog } from '../data/siteContent';
import { whatsappUrl, CompassWatermark } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sand/40 relative overflow-hidden">
      {/* Compass watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.07]"
      >
        <CompassWatermark size={220} color="#B0532F" />
      </div>

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-ink font-mono text-sm text-terracotta">
                {brand.mark}
              </span>
              <span className="font-display text-xl font-semibold text-ink">{brand.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone">
              {brand.tagline}. Authentic, practical Vastu Shastra consultation since {brand.established}.
            </p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-wider text-stone">
              {brand.location}
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-ink link-slide">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reads */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-terracotta">
              Popular reads
            </h3>
            <ul className="mt-5 space-y-3">
              {blog.slice(0, 5).map((b) => (
                <li key={b}>
                  <a href="#top" className="text-sm text-stone transition-colors hover:text-ink">
                    {b}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-wider text-stone">
            <a href={brand.phoneHref} className="hover:text-ink">{brand.phone}</a>
            <a href={`mailto:${brand.email}`} className="hover:text-ink">{brand.email}</a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              WhatsApp
            </a>
          </div>

          <div className="flex items-center gap-3">
            {Object.entries(brand.socials).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={key}
                className="flex h-9 w-9 items-center justify-center border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-cream"
              >
                <span className="font-mono text-[10px] uppercase">{key[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-wider text-stone/70">
          © {year} {brand.name}. All rights reserved. · Built with React, Vite, Tailwind &amp; Framer Motion.
        </p>
      </div>
    </footer>
  );
}
