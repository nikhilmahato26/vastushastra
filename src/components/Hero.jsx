import { motion, useReducedMotion } from 'framer-motion';
import { brand, hero, elements } from '../data/siteContent';
import { whatsappUrl, WhatsAppIcon, PhoneIcon, CompassWatermark } from './icons';
import { EASE } from './motion';

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
  };

  const [before, after] = hero.heading.split(hero.highlight);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-0">

      {/* Vastu Purusha Mandala — 9×9 pada grid watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] opacity-[0.055]"
      >
        <VastuMandala />
      </div>

      {/* Compass watermark — top left */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 top-16 opacity-[0.055]"
      >
        <CompassWatermark size={300} color="#B0532F" />
      </div>

      {/* Floating Pancha Bhoota geometric symbols */}
      <ElementFloats />

      {/* Decorative blueprint compass — slow spin */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-20 hidden opacity-[0.18] md:block lg:right-0"
      >
        <CompassRings spin={!reduce} />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:px-12">
        {/* Copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 lg:col-span-7"
        >
          <motion.span variants={item} className="eyebrow">
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            {before}
            <span className="relative italic text-terracotta">
              {hero.highlight}
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9 C50 3 150 3 198 8"
                  stroke="#C07A53"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            {after}
          </motion.h1>

          <motion.p variants={item} className="mt-7 max-w-xl text-lg leading-relaxed text-stone">
            {hero.subheading}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href={hero.primaryCta.href} className="btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-outline">
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp Now
            </a>
            <a
              href={brand.phoneHref}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink link-slide"
            >
              <PhoneIcon className="h-4 w-4 text-terracotta" /> {brand.phone}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.dl variants={item} className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-7">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl font-semibold text-ink">{s.value}</dt>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-stone">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
          className="relative z-10 lg:col-span-5"
        >
          <div className="relative">
            {/* Directional corner markers */}
            <span className="absolute -left-3 -top-3 h-full w-full border border-terracotta" aria-hidden="true" />
            <DirectionCorner pos="top" label="N · उत्तर" />
            <DirectionCorner pos="bottom" label="S · दक्षिण" />
            <DirectionCorner pos="right" label="E" />
            <DirectionCorner pos="left" label="W" />

            {/* NE / SE corner badges */}
            <span className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center border border-terracotta bg-cream font-mono text-[8px] text-terracotta" aria-hidden="true">
              NE
            </span>
            <span className="absolute -right-3 -bottom-3 flex h-7 w-7 items-center justify-center border border-copper bg-cream font-mono text-[8px] text-copper" aria-hidden="true">
              SE
            </span>

            <img
              src={hero.image}
              alt={hero.imageAlt}
              loading="eager"
              className="relative aspect-[4/5] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-cream/90 px-4 py-2 backdrop-blur">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone">
                Direction · Element · Flow
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Five elements / directions strip */}
      <div className="mx-auto mt-20 max-w-7xl border-y border-line bg-sand/40 px-5 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-2 divide-y divide-line/70 sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {elements.map((el, i) => (
            <motion.li
              key={el.en}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.07 }}
              className="group flex items-center gap-3 px-2 py-6 lg:px-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-ink font-mono text-[11px] text-terracotta transition group-hover:bg-ink group-hover:text-cream">
                {el.dir}
              </span>
              <span>
                <span className="block font-display text-base text-ink">
                  {el.name} <span className="text-stone">· {el.en}</span>
                </span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  {el.note}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Small directional label attached to each side of the image frame
function DirectionCorner({ pos, label }) {
  const styles = {
    top: 'absolute -top-6 left-1/2 -translate-x-1/2',
    bottom: 'absolute -bottom-6 left-1/2 -translate-x-1/2',
    left: 'absolute top-1/2 -left-10 -translate-y-1/2 -rotate-90',
    right: 'absolute top-1/2 -right-10 -translate-y-1/2 rotate-90',
  };
  return (
    <span
      aria-hidden="true"
      className={`${styles[pos]} pointer-events-none font-mono text-[8px] uppercase tracking-[0.2em] text-terracotta whitespace-nowrap`}
    >
      {label}
    </span>
  );
}

// Vastu Purusha Mandala — 9×9 pada grid
function VastuMandala() {
  const N = 9;
  const S = 600;
  const cell = S / N;

  return (
    <svg width={S} height={S} viewBox={`0 0 ${S} ${S}`} fill="none" aria-hidden="true">
      {/* Double outer border */}
      <rect x="1" y="1" width={S - 2} height={S - 2} stroke="#B0532F" strokeWidth="2" />
      <rect x="9" y="9" width={S - 18} height={S - 18} stroke="#B0532F" strokeWidth="0.5" />

      {/* 9×9 grid */}
      {Array.from({ length: N + 1 }).map((_, i) => (
        <g key={i}>
          <line
            x1={i * cell} y1={0} x2={i * cell} y2={S}
            stroke="#B0532F"
            strokeWidth={i === 0 || i === N ? 2 : 0.5}
          />
          <line
            x1={0} y1={i * cell} x2={S} y2={i * cell}
            stroke="#B0532F"
            strokeWidth={i === 0 || i === N ? 2 : 0.5}
          />
        </g>
      ))}

      {/* Brahmasthana — central 3×3 padas */}
      <rect
        x={3 * cell} y={3 * cell}
        width={3 * cell} height={3 * cell}
        fill="#B0532F" opacity="0.15"
        stroke="#B0532F" strokeWidth="1.5"
      />

      {/* Concentric circles */}
      <circle cx={S / 2} cy={S / 2} r={S / 2 - 12}  stroke="#B0532F" strokeWidth="1"   opacity="0.5" />
      <circle cx={S / 2} cy={S / 2} r={S / 3}         stroke="#B0532F" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.6" />
      <circle cx={S / 2} cy={S / 2} r={S * 0.22}      stroke="#A8754E" strokeWidth="0.5" opacity="0.7" />
      <circle cx={S / 2} cy={S / 2} r={S * 0.1}       stroke="#A8754E" strokeWidth="1"   opacity="0.6" />

      {/* Cardinal cross */}
      <line x1={S / 2} y1={0}   x2={S / 2} y2={S}   stroke="#B0532F" strokeWidth="1.5" opacity="0.45" />
      <line x1={0}     y1={S / 2} x2={S}   y2={S / 2} stroke="#B0532F" strokeWidth="1.5" opacity="0.45" />

      {/* Diagonal lines */}
      <line x1="0" y1="0" x2={S} y2={S}   stroke="#B0532F" strokeWidth="0.5" opacity="0.25" />
      <line x1={S} y1="0" x2="0" y2={S}   stroke="#B0532F" strokeWidth="0.5" opacity="0.25" />

      {/* 8 direction labels */}
      {[
        { x: S / 2, y: 18,     t: 'N · उत्तर' },
        { x: S / 2, y: S - 5,  t: 'S · दक्षिण' },
        { x: 14,    y: S / 2 + 4, t: 'W' },
        { x: S - 9, y: S / 2 + 4, t: 'E' },
        { x: S - 22, y: 22,    t: 'NE' },
        { x: S - 22, y: S - 8, t: 'SE' },
        { x: 22,    y: 22,     t: 'NW' },
        { x: 22,    y: S - 8,  t: 'SW' },
      ].map((d, i) => (
        <text
          key={i} x={d.x} y={d.y}
          textAnchor="middle"
          fill="#B0532F" fontSize="11"
          fontFamily="'IBM Plex Mono', monospace"
          opacity="0.9"
        >
          {d.t}
        </text>
      ))}

      {/* Compass mark in Brahmasthana center */}
      <svg x={S / 2 - 22} y={S / 2 - 22} width="44" height="44" viewBox="0 0 200 200" fill="none" opacity="0.7">
        <circle cx="100" cy="100" r="92" stroke="#B0532F" strokeWidth="4" />
        <circle cx="100" cy="100" r="66" stroke="#B0532F" strokeWidth="2" strokeDasharray="8 10" />
        <circle cx="100" cy="100" r="38" stroke="#A8754E" strokeWidth="2" />
        <path d="M100 12 L110 100 L100 188 L90 100 Z" fill="#B0532F" opacity="0.65" />
        <path d="M12 100 L100 90 L188 100 L100 110 Z" fill="#A8754E" opacity="0.5" />
        <circle cx="100" cy="100" r="10" fill="#B0532F" opacity="0.5" />
        <circle cx="100" cy="100" r="4" fill="#B0532F" />
      </svg>

      {/* Corner dots */}
      {[[2, 2], [S - 2, 2], [2, S - 2], [S - 2, S - 2]].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="5" fill="#B0532F" opacity="0.6" />
      ))}
    </svg>
  );
}

// Pancha Bhoota floating geometric icons (each element has a traditional shape)
function ElementFloats() {
  const items = [
    // Fire — upward triangle
    {
      label: 'Agni',
      style: { top: '28%', left: '1.5%' },
      svg: (
        <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
          <polygon points="22,3 41,39 3,39" stroke="#B0532F" strokeWidth="1.2" />
          <polygon points="22,12 34,34 10,34" stroke="#B0532F" strokeWidth="0.6" opacity="0.5" />
        </svg>
      ),
    },
    // Water — downward triangle
    {
      label: 'Jal',
      style: { top: '12%', right: '10%' },
      svg: (
        <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
          <polygon points="22,41 41,5 3,5" stroke="#B0532F" strokeWidth="1.2" />
          <polygon points="22,32 34,10 10,10" stroke="#B0532F" strokeWidth="0.6" opacity="0.5" />
        </svg>
      ),
    },
    // Earth — square on its corner
    {
      label: 'Prithvi',
      style: { bottom: '32%', left: '2%' },
      svg: (
        <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
          <rect x="6" y="6" width="32" height="32" stroke="#B0532F" strokeWidth="1.2" />
          <rect x="13" y="13" width="18" height="18" stroke="#B0532F" strokeWidth="0.6" opacity="0.5" />
        </svg>
      ),
    },
    // Air — hexagon
    {
      label: 'Vayu',
      style: { top: '58%', right: '5%' },
      svg: (
        <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
          <polygon points="22,2 40,12 40,32 22,42 4,32 4,12" stroke="#B0532F" strokeWidth="1.2" />
          <polygon points="22,10 34,17 34,27 22,34 10,27 10,17" stroke="#B0532F" strokeWidth="0.6" opacity="0.5" />
        </svg>
      ),
    },
    // Space — concentric circles
    {
      label: 'Akash',
      style: { top: '38%', right: '14%' },
      svg: (
        <svg viewBox="0 0 44 44" width="44" height="44" fill="none">
          <circle cx="22" cy="22" r="19" stroke="#B0532F" strokeWidth="1.2" />
          <circle cx="22" cy="22" r="12" stroke="#B0532F" strokeWidth="0.6" opacity="0.6" />
          <circle cx="22" cy="22" r="5"  stroke="#B0532F" strokeWidth="0.6" opacity="0.5" />
          <circle cx="22" cy="22" r="1.5" fill="#B0532F" opacity="0.5" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {items.map((el) => (
        <div
          key={el.label}
          aria-hidden="true"
          className="pointer-events-none absolute select-none opacity-[0.09]"
          style={el.style}
        >
          {el.svg}
          <span className="mt-1 block font-mono text-[8px] uppercase tracking-[0.2em] text-terracotta text-center">
            {el.label}
          </span>
        </div>
      ))}
    </>
  );
}

function CompassRings({ spin }) {
  return (
    <svg width="560" height="560" viewBox="0 0 560 560" fill="none" aria-hidden="true">
      {/* Outer rings */}
      <circle cx="280" cy="280" r="270" stroke="#B0532F" strokeWidth="0.5" opacity="0.4" />
      <g className={spin ? 'animate-slowSpin' : ''} style={{ transformOrigin: '280px 280px' }}>
        <circle cx="280" cy="280" r="250" stroke="#B0532F" strokeWidth="1" />
        <circle cx="280" cy="280" r="210" stroke="#B0532F" strokeWidth="0.5" strokeDasharray="2 4" />
        <circle cx="280" cy="280" r="170" stroke="#A8754E" strokeWidth="1" />
        <circle cx="280" cy="280" r="120" stroke="#A8754E" strokeWidth="0.5" strokeDasharray="3 5" />
        {/* 16 radial lines */}
        {Array.from({ length: 16 }).map((_, i) => {
          const a = (i * Math.PI) / 8;
          return (
            <line
              key={i}
              x1={280 + Math.cos(a) * 120}
              y1={280 + Math.sin(a) * 120}
              x2={280 + Math.cos(a) * 250}
              y2={280 + Math.sin(a) * 250}
              stroke="#B0532F"
              strokeWidth="0.5"
            />
          );
        })}
        {/* 8 long cardinal/intercardinal spokes */}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          return (
            <line
              key={`long-${i}`}
              x1={280 + Math.cos(a) * 80}
              y1={280 + Math.sin(a) * 80}
              x2={280 + Math.cos(a) * 250}
              y2={280 + Math.sin(a) * 250}
              stroke="#B0532F"
              strokeWidth="1"
              opacity="0.6"
            />
          );
        })}
      </g>
      {/* N/S compass needle */}
      <path d="M280 80  L298 280 L280 480 L262 280 Z" fill="#B0532F" opacity="0.55" />
      {/* E/W needle */}
      <path d="M80 280  L280 262 L480 280 L280 298 Z" fill="#A8754E" opacity="0.4" />
      {/* Center dot */}
      <circle cx="280" cy="280" r="6" fill="#B0532F" opacity="0.5" />
      <circle cx="280" cy="280" r="2.5" fill="#B0532F" />
    </svg>
  );
}
