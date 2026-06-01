import { motion } from 'framer-motion';
import { brand } from '../data/siteContent';
import { whatsappUrl, WhatsAppIcon, PhoneIcon } from './icons';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.92 }}
        className="flex h-14 w-14 items-center justify-center bg-ink p-3.5 text-cream shadow-lift"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </motion.a>
      <motion.a
        href={brand.phoneHref}
        aria-label="Call us"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.12, type: 'spring', stiffness: 260, damping: 18 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.92 }}
        className="flex h-14 w-14 items-center justify-center border border-ink bg-cream p-3.5 text-ink shadow-card"
      >
        <PhoneIcon className="h-6 w-6 text-terracotta" />
      </motion.a>
    </div>
  );
}
