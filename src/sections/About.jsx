import { about, process } from '../data/siteContent';
import { Reveal } from '../components/motion';
import { motion } from 'framer-motion';

// Geometric symbols for each Pancha Bhoota element
const ELEMENT_ICONS = {
  'Experienced, certified consultant':    <FireIcon />,
  'Personalised solutions for every space': <WaterIcon />,
  'Online & on-site consultation':         <EarthIcon />,
  'Scientific & practical, no fear-selling': <AirIcon />,
  'Trusted by 1,200+ clients':             <SpaceIcon />,
};

export default function About() {
  return (
    <>
      <section id="about" className="section-pad bg-sand/30 relative overflow-hidden">
        {/* Yantra background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.06] hidden lg:block"
        >
          <YantraDecor />
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <Reveal className="relative order-2 lg:order-1">
            <span
              className="absolute -bottom-3 -right-3 h-full w-full border border-copper"
              aria-hidden="true"
            />
            {/* Directional label on image */}
            <span
              aria-hidden="true"
              className="absolute -top-5 left-0 font-mono text-[8px] uppercase tracking-[0.2em] text-terracotta"
            >
              SW · Prithvi · स्थिरता
            </span>
            <img
              src={about.image}
              alt={about.alt}
              loading="lazy"
              className="relative aspect-[4/3] w-full object-cover"
            />
          </Reveal>

          {/* Copy */}
          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <span className="eyebrow">{about.eyebrow}</span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              {about.heading}
            </h2>
            {about.body.map((p, i) => (
              <p key={i} className="mt-5 text-lg leading-relaxed text-stone">
                {p}
              </p>
            ))}

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {about.trust.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink">
                  <span className="mt-0.5 text-terracotta">
                    {ELEMENT_ICONS[t] || <CheckMark />}
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process timeline */}
      <section id="process" className="section-pad relative overflow-hidden">
        {/* Small mandala decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-1/2 -translate-y-1/2 opacity-[0.05] hidden lg:block"
        >
          <SmallMandala />
        </div>

        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Six steps, start to finish.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (i % 3) * 0.08 }}
                className="group relative bg-cream p-8 transition-colors hover:bg-sand/50"
              >
                {/* Direction indicator per step */}
                <span className="absolute right-4 top-4 font-mono text-[8px] uppercase tracking-[0.2em] text-terracotta/50">
                  {['NE', 'N', 'NW', 'SE', 'S', 'SW'][i]}
                </span>
                <span className="font-mono text-5xl font-medium text-line transition-colors group-hover:text-terracotta">
                  {p.step}
                </span>
                <h3 className="mt-4 font-display text-xl text-ink">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function CheckMark() {
  return <span className="font-mono text-terracotta">✓</span>;
}

function FireIcon() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" style={{ marginTop: 1 }}>
      <polygon points="9,1 17,15 1,15" stroke="#B0532F" strokeWidth="1.2" />
    </svg>
  );
}
function WaterIcon() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" style={{ marginTop: 1 }}>
      <polygon points="9,17 17,3 1,3" stroke="#B0532F" strokeWidth="1.2" />
    </svg>
  );
}
function EarthIcon() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" style={{ marginTop: 1 }}>
      <rect x="2" y="2" width="14" height="14" stroke="#B0532F" strokeWidth="1.2" />
    </svg>
  );
}
function AirIcon() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" style={{ marginTop: 1 }}>
      <polygon points="9,1 17,5 17,13 9,17 1,13 1,5" stroke="#B0532F" strokeWidth="1.2" />
    </svg>
  );
}
function SpaceIcon() {
  return (
    <svg viewBox="0 0 18 18" width="16" height="16" fill="none" style={{ marginTop: 1 }}>
      <circle cx="9" cy="9" r="7.5" stroke="#B0532F" strokeWidth="1.2" />
      <circle cx="9" cy="9" r="2.5" stroke="#B0532F" strokeWidth="0.8" />
    </svg>
  );
}

// Simplified Shri Yantra-like decoration (interlocking triangles + circles)
function YantraDecor() {
  const S = 400;
  const cx = S / 2;
  const cy = S / 2;
  const r = 170;

  const upTri = (scale) => {
    const h = r * scale;
    const w = h * 1.1547;
    return `${cx},${cy - h * 0.667} ${cx + w / 2},${cy + h * 0.333} ${cx - w / 2},${cy + h * 0.333}`;
  };
  const downTri = (scale) => {
    const h = r * scale;
    const w = h * 1.1547;
    return `${cx},${cy + h * 0.667} ${cx + w / 2},${cy - h * 0.333} ${cx - w / 2},${cy - h * 0.333}`;
  };

  return (
    <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} fill="none" aria-hidden="true">
      <circle cx={cx} cy={cy} r={r}      stroke="#B0532F" strokeWidth="1.5" />
      <circle cx={cx} cy={cy} r={r * 0.92} stroke="#B0532F" strokeWidth="0.5" strokeDasharray="4 6" />
      <circle cx={cx} cy={cy} r={r * 0.6}  stroke="#B0532F" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={r * 0.25} stroke="#B0532F" strokeWidth="0.5" />

      {/* Interlocking triangles */}
      <polygon points={upTri(1)}    stroke="#B0532F" strokeWidth="1.2" />
      <polygon points={downTri(1)}  stroke="#B0532F" strokeWidth="1.2" />
      <polygon points={upTri(0.65)} stroke="#A8754E" strokeWidth="0.8" />
      <polygon points={downTri(0.65)} stroke="#A8754E" strokeWidth="0.8" />

      {/* Center bindu */}
      <circle cx={cx} cy={cy} r="4" fill="#B0532F" opacity="0.7" />

      {/* 8 lotus petals (simplified as arcs) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4;
        const pr = r * 0.82;
        const px = cx + Math.cos(a) * pr;
        const py = cy + Math.sin(a) * pr;
        return (
          <ellipse
            key={i}
            cx={px} cy={py}
            rx="14" ry="24"
            stroke="#B0532F" strokeWidth="0.5"
            transform={`rotate(${(i * 45) + 90}, ${px}, ${py})`}
            opacity="0.5"
          />
        );
      })}
    </svg>
  );
}

// Smaller mandala for the process section bg
function SmallMandala() {
  return (
    <svg width="300" height="300" viewBox="0 0 300 300" fill="none" aria-hidden="true">
      {[140, 110, 80, 55, 30].map((r, i) => (
        <circle key={i} cx="150" cy="150" r={r} stroke="#B0532F" strokeWidth={i === 0 ? 1 : 0.5}
          strokeDasharray={i % 2 === 0 ? undefined : '3 5'} />
      ))}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <line key={i}
            x1={150 + Math.cos(a) * 30} y1={150 + Math.sin(a) * 30}
            x2={150 + Math.cos(a) * 140} y2={150 + Math.sin(a) * 140}
            stroke="#B0532F" strokeWidth="0.5"
          />
        );
      })}
      <circle cx="150" cy="150" r="5" fill="#B0532F" opacity="0.5" />
    </svg>
  );
}
