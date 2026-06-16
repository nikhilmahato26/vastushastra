import { useState } from 'react';
import { motion } from 'framer-motion';
import { brand, serviceOptions } from '../data/siteContent';
import { whatsappUrl, WhatsAppIcon, PhoneIcon } from './icons';
import { useToast } from './Toast';
import { Reveal } from './motion';

const initial = { name: '', phone: '', dob: '', service: '', message: '' };

function EnvelopeIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="0" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function ContactForm() {
  const { push } = useToast();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!/^[0-9+\s-]{8,15}$/.test(values.phone.replace(/\s+/g, ''))) e.phone = 'Enter a valid phone number.';
    if (!values.message.trim()) e.message = 'Please enter your message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const update = (key) => (ev) => {
    setValues((v) => ({ ...v, [key]: ev.target.value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) {
      push('Please fix the highlighted fields.', 'error');
      return;
    }
    setLoading(true);
    // Simulate an async submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);

    // Format pre-filled WhatsApp message
    const messageText = `Namaste Vastulogy! I would like to request a Vastu consultation.
*Name:* ${values.name}
*Phone:* ${values.phone}
${values.dob ? `*Date of Birth:* ${values.dob}` : ''}
${values.service ? `*Category:* ${values.service}` : ''}
*Message:* ${values.message}`;
    const waLink = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(messageText)}`;
    window.open(waLink, '_blank');

    setDone(true);
    push('Request received — redirecting to WhatsApp.', 'success');
    setValues(initial);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column — info */}
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Direct Contact</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Contact Directly
          </h2>

          <div className="mt-10 space-y-px border border-line bg-line">
            {/* Phone card */}
            <a
              href={brand.phoneHref}
              className="flex items-center gap-4 bg-cream px-6 py-5 transition-colors hover:bg-sand/50"
            >
              <PhoneIcon className="h-5 w-5 text-terracotta" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Phone
                </span>
                <span className="font-display text-lg text-ink">{brand.phone}</span>
              </span>
            </a>

            {/* Email card */}
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-4 bg-cream px-6 py-5 transition-colors hover:bg-sand/50"
            >
              <EnvelopeIcon className="h-5 w-5 text-terracotta" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Email
                </span>
                <span className="font-display text-lg text-ink">{brand.email}</span>
              </span>
            </a>

            {/* Location card */}
            <div className="flex items-center gap-4 bg-cream px-6 py-5">
              <MapPinIcon className="h-5 w-5 text-terracotta" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Location
                </span>
                <span className="font-display text-lg text-ink">{brand.address}</span>
              </span>
            </div>
          </div>

          {/* Quick buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 py-4 text-center justify-center"
            >
              <WhatsAppIcon className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={brand.phoneHref}
              className="btn-outline flex-1 py-4 text-center justify-center"
            >
              <PhoneIcon className="h-4 w-4" /> Call Now
            </a>
          </div>
        </Reveal>

        {/* Right column — form */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          {done ? (
            <SuccessState onReset={() => setDone(false)} />
          ) : (
            <form onSubmit={handleSubmit} noValidate className="border border-line bg-cream p-7 shadow-card sm:p-10 space-y-6">
              <h3 className="font-display text-2xl font-medium text-ink">
                Consultation Request
              </h3>

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Your Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={values.name}
                  onChange={update('name')}
                  className={`w-full border bg-transparent px-4 py-3 text-ink placeholder-stone/40 transition-colors focus:border-terracotta focus:outline-none ${
                    errors.name ? 'border-ember' : 'border-line focus:border-terracotta'
                  }`}
                />
                {errors.name && <span className="text-[11px] text-ember font-mono mt-0.5">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="10 digit mobile number"
                  value={values.phone}
                  onChange={update('phone')}
                  className={`w-full border bg-transparent px-4 py-3 text-ink placeholder-stone/40 transition-colors focus:border-terracotta focus:outline-none ${
                    errors.phone ? 'border-ember' : 'border-line focus:border-terracotta'
                  }`}
                />
                {errors.phone && <span className="text-[11px] text-ember font-mono mt-0.5">{errors.phone}</span>}
              </div>

              {/* Date of Birth */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="dob" className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Date of Birth
                </label>
                <input
                  id="dob"
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={values.dob}
                  onChange={update('dob')}
                  className="w-full border border-line bg-transparent px-4 py-3 text-ink placeholder-stone/40 transition-colors focus:border-terracotta focus:outline-none"
                />
              </div>

              {/* Problem Category */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="service" className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Problem Category
                </label>
                <div className="relative">
                  <select
                    id="service"
                    value={values.service}
                    onChange={update('service')}
                    className="w-full appearance-none border border-line bg-transparent px-4 py-3 text-ink transition-colors focus:border-terracotta focus:outline-none"
                  >
                    <option value="">Select a service (optional)</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-4 top-[50%] -translate-y-[50%] text-stone">▾</span>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Write your problem or question here..."
                  value={values.message}
                  onChange={update('message')}
                  className={`w-full resize-none border bg-transparent px-4 py-3 text-ink placeholder-stone/40 transition-colors focus:border-terracotta focus:outline-none ${
                    errors.message ? 'border-ember' : 'border-line focus:border-terracotta'
                  }`}
                />
                {errors.message && <span className="text-[11px] text-ember font-mono mt-0.5">{errors.message}</span>}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full py-4 text-center justify-center"
              >
                {loading ? (
                  <>
                    <Spinner /> Sending…
                  </>
                ) : (
                  '👉 Send on WhatsApp & Email'
                )}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" opacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function SuccessState({ onReset }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex h-full flex-col items-center justify-center border border-ink bg-ink p-12 text-center text-cream"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-none border border-clay text-2xl text-clay">
        ✓
      </span>
      <h3 className="mt-6 font-display text-2xl">Request received.</h3>
      <p className="mt-3 max-w-sm text-cream/75">
        Thank you — we&apos;ll reach out within one working day. For anything urgent, message us on
        WhatsApp.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-cream px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-cream transition hover:bg-cream hover:text-ink">
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
        <button onClick={onReset} className="border border-cream/40 px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-cream/70 transition hover:border-cream hover:text-cream">
          Send another
        </button>
      </div>
    </motion.div>
  );
}
