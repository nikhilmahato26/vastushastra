import { ctaStrip, brand } from '../data/siteContent';
import { whatsappUrl, WhatsAppIcon, PhoneIcon, CompassWatermark } from './icons';
import { Reveal } from './motion';

function LotusMandala() {
  const cx = 140, cy = 140, petalR = 100;
  return (
    <svg width="280" height="280" viewBox="0 0 280 280" fill="none" aria-hidden="true">
      {/* Concentric circles */}
      {[95, 72, 50, 28].map((r, i) => (
        <circle key={i} cx={cx} cy={cy} r={r} stroke="#F6F0E6" strokeWidth={i === 0 ? 1 : 0.5}
          strokeDasharray={i % 2 !== 0 ? '3 4' : undefined} />
      ))}
      {/* 8 lotus petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const px = cx + Math.cos(a) * petalR;
        const py = cy + Math.sin(a) * petalR;
        return (
          <ellipse key={i} cx={px} cy={py} rx="18" ry="36"
            stroke="#F6F0E6" strokeWidth="0.6"
            transform={`rotate(${i * 45 + 90}, ${px}, ${py})`}
            opacity="0.7"
          />
        );
      })}
      {/* 8 inner petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4 + Math.PI / 8;
        const px = cx + Math.cos(a) * 60;
        const py = cy + Math.sin(a) * 60;
        return (
          <ellipse key={i} cx={px} cy={py} rx="10" ry="22"
            stroke="#F6F0E6" strokeWidth="0.5"
            transform={`rotate(${i * 45 + 112.5}, ${px}, ${py})`}
            opacity="0.5"
          />
        );
      })}
      {/* Radial spokes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        return (
          <line key={i}
            x1={cx + Math.cos(a) * 28} y1={cy + Math.sin(a) * 28}
            x2={cx + Math.cos(a) * 95} y2={cy + Math.sin(a) * 95}
            stroke="#F6F0E6" strokeWidth="0.4"
          />
        );
      })}
      <circle cx={cx} cy={cy} r="5" fill="#F6F0E6" opacity="0.6" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Glowing pulse backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta/25 blur-3xl animate-pulseGlow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(#F6F0E6 1px, transparent 1px), linear-gradient(90deg, #F6F0E6 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Lotus mandala — left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1] hidden lg:block"
      >
        <LotusMandala />
      </div>
      {/* Lotus mandala — right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 opacity-[0.1] hidden lg:block"
      >
        <LotusMandala />
      </div>

      {/* Compass — top center */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 opacity-[0.18]"
      >
        <CompassWatermark size={56} color="#F6F0E6" />
      </div>

      <Reveal className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8 md:py-28">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-clay">
          Ready when you are
        </span>
        <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-cream sm:text-4xl md:text-5xl">
          {ctaStrip.heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cream/70">{ctaStrip.sub}</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={ctaStrip.primary.href}
            className="inline-flex items-center gap-2 border border-cream bg-cream px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-ink transition-all hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0"
          >
            {ctaStrip.primary.label}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cream/40 px-7 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-cream transition-all hover:-translate-y-0.5 hover:border-cream active:translate-y-0"
          >
            <WhatsAppIcon className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={brand.phoneHref}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-cream/80 link-slide"
          >
            <PhoneIcon className="h-4 w-4 text-clay" /> {brand.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
