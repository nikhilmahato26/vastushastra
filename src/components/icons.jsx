import { brand } from '../data/siteContent';

export function CompassWatermark({ size = 200, color = '#B0532F' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      {/* Concentric rings */}
      <circle cx="100" cy="100" r="96" stroke={color} strokeWidth="1" />
      <circle cx="100" cy="100" r="80" stroke={color} strokeWidth="0.5" strokeDasharray="3 5" />
      <circle cx="100" cy="100" r="62" stroke={color} strokeWidth="0.5" />
      <circle cx="100" cy="100" r="40" stroke={color} strokeWidth="0.5" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="18" stroke={color} strokeWidth="0.5" />
      {/* 16 radial spokes */}
      {Array.from({ length: 16 }).map((_, i) => {
        const a = (i * Math.PI) / 8;
        return (
          <line key={i}
            x1={100 + Math.cos(a) * 18} y1={100 + Math.sin(a) * 18}
            x2={100 + Math.cos(a) * 96} y2={100 + Math.sin(a) * 96}
            stroke={color} strokeWidth={i % 4 === 0 ? 0.9 : 0.3}
          />
        );
      })}
      {/* N/S needle */}
      <path d="M100 8 L107 100 L100 192 L93 100 Z" fill={color} opacity="0.55" />
      {/* E/W needle */}
      <path d="M8 100 L100 93 L192 100 L100 107 Z" fill={color} opacity="0.38" />
      {/* Cardinal labels */}
      <text x="100" y="6.5" textAnchor="middle" fill={color} fontSize="9" fontFamily="'IBM Plex Mono', monospace">N</text>
      <text x="100" y="199" textAnchor="middle" fill={color} fontSize="9" fontFamily="'IBM Plex Mono', monospace">S</text>
      <text x="4"   y="104" textAnchor="middle" fill={color} fontSize="9" fontFamily="'IBM Plex Mono', monospace">W</text>
      <text x="197" y="104" textAnchor="middle" fill={color} fontSize="9" fontFamily="'IBM Plex Mono', monospace">E</text>
      {/* Center dot */}
      <circle cx="100" cy="100" r="4" fill={color} />
      <circle cx="100" cy="100" r="1.8" fill={color} opacity="0.4" />
    </svg>
  );
}

export const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
  brand.whatsappMessage,
)}`;

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.21-8.05 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export function PhoneIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}
