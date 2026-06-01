import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faqs } from '../data/siteContent';
import { Reveal } from './motion';

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad bg-sand/30">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <span className="eyebrow">Questions</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            Frequently asked.
          </h2>
          <p className="mt-5 text-stone">
            Still unsure? Send a message on WhatsApp and we&apos;ll answer before you commit to
            anything.
          </p>
        </Reveal>

        <div className="lg:col-span-8">
          <ul className="border-t border-line">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q} className="border-b border-line">
                  <h3>
                    <button
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-trigger-${i}`}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-sand"
                    >
                      <span className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-terracotta">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display text-lg text-ink sm:text-xl">{faq.q}</span>
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="flex h-7 w-7 shrink-0 items-center justify-center border border-ink text-ink"
                        aria-hidden="true"
                      >
                        +
                      </motion.span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pl-10 text-stone">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
