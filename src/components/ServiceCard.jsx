import { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  // Subtle pointer-driven tilt
  const handleMove = (e) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -5, ry: px * 5 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.1 }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="group flex h-full flex-col border border-line bg-cream shadow-card transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.alt}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-0 top-0 bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cream">
          {service.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-medium text-ink">{service.title}</h3>

        <ul className="mt-4 space-y-2.5">
          {service.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-stone">
              <span className="mt-1.5 h-1 w-3 shrink-0 bg-terracotta" aria-hidden="true" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-start border-t border-line pt-5">
          <a
            href="#contact"
            className="font-mono text-xs uppercase tracking-[0.15em] text-terracotta link-slide"
          >
            Enquire →
          </a>
        </div>
      </div>
    </motion.article>
  );
}
