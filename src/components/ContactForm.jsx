import { useState } from 'react';
import { motion } from 'framer-motion';
import { brand, serviceOptions } from '../data/siteContent';
import { whatsappUrl, WhatsAppIcon, PhoneIcon } from './icons';
import { useToast } from './Toast';
import { Reveal } from './motion';

const initial = { name: '', email: '', phone: '', service: '', message: '' };

export default function ContactForm() {
  const { push } = useToast();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Enter a valid email address.';
    if (!/^[0-9+\s-]{8,15}$/.test(values.phone)) e.phone = 'Enter a valid phone number.';
    if (!values.service) e.service = 'Select a service.';
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
    // Simulate an async submission. Replace with your real endpoint / Formspree / EmailJS.
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setDone(true);
    push('Request received — we will be in touch shortly.', 'success');
    setValues(initial);
  };

  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column — info */}
        <Reveal className="lg:col-span-5">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl lg:text-5xl">
            Book your consultation.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-stone">
            Fill in the form and we&apos;ll get back within one working day — or reach us directly on
            WhatsApp and phone.
          </p>

          <div className="mt-10 space-y-px border border-line bg-line">
            <a
              href={brand.phoneHref}
              className="flex items-center gap-4 bg-cream px-6 py-5 transition-colors hover:bg-sand/50"
            >
              <PhoneIcon className="h-5 w-5 text-terracotta" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  Call
                </span>
                <span className="font-display text-lg text-ink">{brand.phone}</span>
              </span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-cream px-6 py-5 transition-colors hover:bg-sand/50"
            >
              <WhatsAppIcon className="h-5 w-5 text-terracotta" />
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                  WhatsApp
                </span>
                <span className="font-display text-lg text-ink">Quick support</span>
              </span>
            </a>
            <div className="bg-cream px-6 py-5">
              <span className="block font-mono text-[10px] uppercase tracking-wider text-stone">
                Studio
              </span>
              <span className="font-display text-lg text-ink">{brand.address}</span>
              <span className="mt-1 block text-sm text-stone">{brand.email}</span>
            </div>
          </div>
        </Reveal>

        {/* Right column — form */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          {done ? (
            <SuccessState onReset={() => setDone(false)} />
          ) : (
            <form onSubmit={handleSubmit} noValidate className="border border-line bg-cream p-7 shadow-card sm:p-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field id="name" label="Full name" value={values.name} onChange={update('name')} error={errors.name} />
                <Field id="email" label="Email" type="email" value={values.email} onChange={update('email')} error={errors.email} />
                <Field id="phone" label="Phone" type="tel" value={values.phone} onChange={update('phone')} error={errors.phone} />

                {/* Service select */}
                <div className="relative">
                  <select
                    id="service"
                    value={values.service}
                    onChange={update('service')}
                    className={`peer w-full appearance-none border bg-transparent px-4 pb-2 pt-6 text-ink transition-colors focus:outline-none ${
                      errors.service ? 'border-ember' : 'border-line focus:border-terracotta'
                    }`}
                  >
                    <option value="" disabled hidden></option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                  <label
                    htmlFor="service"
                    className={`pointer-events-none absolute left-4 top-2 font-mono text-[10px] uppercase tracking-wider ${
                      errors.service ? 'text-ember' : 'text-stone'
                    }`}
                  >
                    Service
                  </label>
                  <span className="pointer-events-none absolute right-4 top-6 text-stone">▾</span>
                  {errors.service && <ErrorText>{errors.service}</ErrorText>}
                </div>
              </div>

              {/* Message */}
              <div className="relative mt-6">
                <textarea
                  id="message"
                  rows={4}
                  value={values.message}
                  onChange={update('message')}
                  placeholder=" "
                  className="peer w-full resize-none border border-line bg-transparent px-4 pb-2 pt-6 text-ink transition-colors placeholder-transparent focus:border-terracotta focus:outline-none"
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute left-4 top-4 font-mono text-sm text-stone transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider"
                >
                  Tell us about your space (optional)
                </label>
              </div>

              <button type="submit" disabled={loading} className="btn-primary mt-7 w-full disabled:opacity-70">
                {loading ? (
                  <>
                    <Spinner /> Sending…
                  </>
                ) : (
                  'Send request'
                )}
              </button>

              <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-wider text-stone">
                By submitting you agree to our privacy policy.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* Floating-label text field */
function Field({ id, label, value, onChange, error, type = 'text' }) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`peer w-full border bg-transparent px-4 pb-2 pt-6 text-ink transition-colors placeholder-transparent focus:outline-none ${
          error ? 'border-ember' : 'border-line focus:border-terracotta'
        }`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-4 top-4 font-mono text-sm transition-all peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:uppercase peer-[:not(:placeholder-shown)]:tracking-wider ${
          error ? 'text-ember' : 'text-stone'
        }`}
      >
        {label}
      </label>
      {error && (
        <ErrorText id={`${id}-error`}>{error}</ErrorText>
      )}
    </div>
  );
}

function ErrorText({ children, id }) {
  return (
    <span id={id} className="mt-1.5 block font-mono text-[11px] text-ember">
      {children}
    </span>
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
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-clay text-2xl text-clay">
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
