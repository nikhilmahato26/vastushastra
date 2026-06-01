import { testimonials, pricing } from '../data/siteContent';
import { Reveal } from '../components/motion';
import { motion } from 'framer-motion';
import { CompassWatermark } from '../components/icons';

export default function Testimonials() {
  return (
    <>
      <section className="section-pad bg-ink text-cream relative overflow-hidden">
        {/* Large compass watermark in testimonials */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.06]"
        >
          <CompassWatermark size={360} color="#F6F0E6" />
        </div>
        <div className="mx-auto max-w-7xl relative z-10">
          <Reveal className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-clay">
              Client outcomes
            </span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Trusted by families &amp; businesses across India.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (i % 2) * 0.1 }}
                className="flex flex-col border border-cream/15 bg-cream/[0.04] p-8 transition-colors hover:border-clay/50"
              >
                <span className="font-display text-5xl leading-none text-clay" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-cream/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-cream/15 pt-5">
                  <span className="block font-display text-base">{t.name}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-cream/50">
                    {t.role}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>  {/* relative z-10 */}
      </section>

      {/* Pricing */}
      <section id="pricing" className="section-pad">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Transparent pricing</span>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
              Choose what fits your space.
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className={`flex flex-col border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  plan.featured
                    ? 'border-ink bg-ink text-cream shadow-lift'
                    : 'border-line bg-cream text-ink shadow-card hover:shadow-lift'
                }`}
              >
                {plan.featured && (
                  <span className="mb-4 inline-block w-fit bg-terracotta px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream">
                    Most popular
                  </span>
                )}
                <h3 className="font-mono text-xs uppercase tracking-[0.2em] opacity-70">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-semibold">{plan.price}</span>
                  <span className="font-mono text-[11px] uppercase tracking-wider opacity-50">
                    {plan.cadence}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3 border-t border-current/15 pt-6 text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className={plan.featured ? 'text-clay' : 'text-terracotta'}>+</span>
                      <span className={plan.featured ? 'text-cream/85' : 'text-stone'}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-7 inline-flex items-center justify-center border px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-all hover:-translate-y-0.5 active:translate-y-0 ${
                    plan.featured
                      ? 'border-cream bg-cream text-ink hover:shadow-lift'
                      : 'border-ink text-ink hover:bg-ink hover:text-cream'
                  }`}
                >
                  Get started
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
