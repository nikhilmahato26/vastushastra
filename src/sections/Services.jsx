import { services, problems } from '../data/siteContent';
import ServiceCard from '../components/ServiceCard';
import { Reveal } from '../components/motion';

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      {/* Compass rose watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 opacity-[0.07] hidden md:block"
      >
        <CompassRoseSvg />
      </div>

      <div className="mx-auto max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">What we offer</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Consultation for every kind of space.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            From a one-bedroom flat to a 50,000 sq ft factory floor — each engagement starts with the
            directions and ends with remedies you can actually put into practice.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>

      {/* Problems we solve — scrolling ledger strip */}
      <div className="mt-20 overflow-hidden border-y border-line bg-ink py-4">
        <div className="flex w-max animate-[marquee_38s_linear_infinite] gap-10 whitespace-nowrap">
          {[...problems, ...problems].map((p, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.15em] text-cream/70"
            >
              {p}
              <span className="text-terracotta">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* keyframes for the marquee (scoped here for portability) */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[marquee_38s_linear_infinite\\] { animation: none; }
        }
      `}</style>
    </section>
  );
}

function CompassRoseSvg() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
      <circle cx="110" cy="110" r="100" stroke="#B0532F" strokeWidth="1" />
      <circle cx="110" cy="110" r="75"  stroke="#B0532F" strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="110" cy="110" r="50"  stroke="#A8754E" strokeWidth="0.5" />
      <circle cx="110" cy="110" r="20"  stroke="#A8754E" strokeWidth="0.5" />
      {/* 16 spokes */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI) / 8;
        return (
          <line key={i}
            x1={110 + Math.cos(a) * 20} y1={110 + Math.sin(a) * 20}
            x2={110 + Math.cos(a) * 100} y2={110 + Math.sin(a) * 100}
            stroke="#B0532F" strokeWidth={i % 4 === 0 ? 1 : 0.4}
          />
        );
      })}
      {/* Cardinal arrow points */}
      <path d="M110 12 L117 110 L110 208 L103 110 Z" fill="#B0532F" opacity="0.5" />
      <path d="M12 110 L110 103 L208 110 L110 117 Z" fill="#A8754E" opacity="0.4" />
      {/* N/S/E/W labels */}
      {[
        { x: 110, y: 10, t: 'N' },
        { x: 110, y: 218, t: 'S' },
        { x: 8,   y: 114, t: 'W' },
        { x: 214, y: 114, t: 'E' },
      ].map((d, i) => (
        <text key={i} x={d.x} y={d.y} textAnchor="middle" fill="#B0532F" fontSize="11"
          fontFamily="'IBM Plex Mono', monospace" fontWeight="600">
          {d.t}
        </text>
      ))}
      <circle cx="110" cy="110" r="3.5" fill="#B0532F" />
    </svg>
  );
}
