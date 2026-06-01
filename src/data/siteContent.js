// ============================================================================
//  siteContent.js — SINGLE SOURCE OF TRUTH
//  Every word, price, link and image on the site is configured here.
//  Edit this file to rebrand or update the entire website.
// ============================================================================

export const brand = {
  name: 'VastuShastra',
  tagline: 'Ancient Science of Space & Energy',
  // Used for the small monospace mark in the navbar / footer
  mark: 'VS',
  location: 'Pune, Maharashtra · Serving all of India',
  // Replace these with the real business contacts
  phone: '+91 98765 43210',
  phoneHref: 'tel:+919876543210',
  whatsapp: '919876543210', // international format, no + or spaces
  whatsappMessage: 'Namaste! I would like to book a Vastu consultation.',
  email: 'consult@dishavastu.in',
  address: 'Studio 4, Laxmi Heights, FC Road, Pune 411004',
  socials: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
  },
  established: '2009',
};

export const nav = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'Est. 2009 · Pune · Pan-India',
  heading: 'Align your space with the directions that govern prosperity.',
  // The headline is split so the last clause can be emphasised
  highlight: 'the directions',
  subheading:
    'Authentic Vastu Shastra consultation for homes, offices, shops and industrial units — grounded in the science of the five elements and practical, no-demolition remedies.',
  primaryCta: { label: 'Book Consultation', href: '#contact' },
  secondaryCta: { label: 'Free Vastu Assessment', href: '#contact' },
  image:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  imageAlt: 'A bright, well-proportioned modern home interior',
  stats: [
    { value: '1,200+', label: 'Spaces analysed' },
    { value: '15 yrs', label: 'Of practice' },
    { value: '4.9/5', label: 'Client rating' },
  ],
};

// The five elements (Pancha Bhoota) — used as the directional motif strip
export const elements = [
  { dir: 'NE', name: 'Jal', en: 'Water', note: 'Clarity & wealth' },
  { dir: 'SE', name: 'Agni', en: 'Fire', note: 'Energy & health' },
  { dir: 'SW', name: 'Prithvi', en: 'Earth', note: 'Stability & relationships' },
  { dir: 'NW', name: 'Vayu', en: 'Air', note: 'Movement & support' },
  { dir: 'C', name: 'Akash', en: 'Space', note: 'Balance & flow' },
];

export const services = [
  {
    id: 'residential',
    category: 'Residential',
    title: 'Home & Apartment Vastu',
    image:
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80',
    alt: 'Modern residential house exterior',
    points: [
      'Complete house & room placement analysis',
      'Entrance and energy-flow evaluation',
      'Kitchen, bedroom & balcony guidance',
      'Practical, no-demolition remedies',
    ],
    price: '₹2,999 – ₹7,999',
  },
  {
    id: 'plot',
    category: 'Residential',
    title: 'Plot Selection Vastu',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    alt: 'Open land plot at golden hour',
    points: [
      'Residential plot suitability analysis',
      'Direction & orientation assessment',
      'Shape and slope evaluation',
      'Pre-purchase advisory report',
    ],
    price: '₹1,999 – ₹4,999',
  },
  {
    id: 'office',
    category: 'Commercial',
    title: 'Office & Shop Vastu',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
    alt: 'Bright modern open-plan office',
    points: [
      'Workspace & cabin placement',
      'Cash counter & customer-flow optimisation',
      'Employee productivity zoning',
      'Business growth recommendations',
    ],
    price: '₹5,999 – ₹15,999',
  },
  {
    id: 'industrial',
    category: 'Industrial',
    title: 'Factory & Warehouse Vastu',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
    alt: 'Industrial facility interior',
    points: [
      'Machinery & production-flow placement',
      'Storage and material-flow planning',
      'Energy optimisation across the plant',
      'Site-level direction mapping',
    ],
    price: '₹12,000 – ₹50,000+',
  },
  {
    id: 'restaurant',
    category: 'Commercial',
    title: 'Restaurant Vastu',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
    alt: 'Warmly lit restaurant interior',
    points: [
      'Kitchen layout assessment',
      'Seating arrangement guidance',
      'Billing & entrance positioning',
      'Prosperity-focused recommendations',
    ],
    price: '₹7,999 – ₹15,999',
  },
  {
    id: 'online',
    category: 'Remote',
    title: 'Online Vastu Consultation',
    image:
      'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=900&q=80',
    alt: 'Floor plan on a laptop screen',
    points: [
      'Video-call session, worldwide',
      'Floor-plan analysis from your drawings',
      'Detailed PDF report',
      'Personalised remedies & follow-up',
    ],
    price: '₹1,499 – ₹4,999',
  },
];

export const problems = [
  'Financial instability',
  'Stalled business growth',
  'Career obstacles',
  'Relationship friction',
  'Recurring health concerns',
  'Mental stress & restlessness',
  'Lack of focus',
  'Negative energy in property',
  'Low productivity at work',
];

export const about = {
  eyebrow: 'About the practice',
  heading: 'A scientific, practical approach to an ancient discipline.',
  body: [
    'VastuShastra was founded on a simple belief: a well-aligned space quietly supports the people who live and work in it. For over fifteen years we have analysed homes, offices, shops and industrial units across India.',
    'Our method is grounded, not superstitious. We read the directions, the five elements and the flow of energy through a property, then translate that into remedies you can actually implement — most of them without touching a single wall.',
  ],
  image:
    'https://res.cloudinary.com/dynbpb9u0/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1780308242/Gemini_Generated_Image_wgkd2lwgkd2lwgkd_q5pnpi.png',
  alt: 'Architectural blueprints and drawing tools on a desk',
  trust: [
    'Experienced, certified consultant',
    'Personalised solutions for every space',
    'Online & on-site consultation',
    'Scientific & practical, no fear-selling',
    'Trusted by 1,200+ clients',
  ],
};

export const process = [
  { step: '01', title: 'Book your consultation', desc: 'Pick a slot by phone, WhatsApp or the form below.' },
  { step: '02', title: 'Share property details', desc: 'Send a floor plan, photos or the plot dimensions.' },
  { step: '03', title: 'Detailed analysis', desc: 'We map directions, elements and energy zones.' },
  { step: '04', title: 'Consultation session', desc: 'We walk you through findings on video or on-site.' },
  { step: '05', title: 'Remedy action plan', desc: 'You get practical, prioritised steps tailored to your space.' },
  { step: '06', title: 'Follow-up support', desc: 'We stay available while you implement changes.' },
];

export const pricing = [
  {
    name: 'Basic',
    price: '₹1,999',
    cadence: 'one-time',
    features: ['30-minute consultation', 'Basic property analysis', 'Practical remedies', 'WhatsApp support'],
    featured: false,
  },
  {
    name: 'Standard',
    price: '₹4,999',
    cadence: 'one-time',
    features: ['60-minute consultation', 'Detailed analysis', 'PDF report', 'Video consultation', '15 days support'],
    featured: true,
  },
  {
    name: 'Premium',
    price: '₹9,999',
    cadence: 'one-time',
    features: ['Complete property assessment', 'Comprehensive PDF report', 'Personalised recommendations', 'Video consultation', '30 days support'],
    featured: false,
  },
  {
    name: 'Business',
    price: '₹15,000+',
    cadence: 'custom',
    features: ['Commercial property analysis', 'Growth recommendations', 'Priority assistance', 'Ongoing follow-up'],
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      'After implementing the suggested remedies, we saw a real, measurable lift in our business within a few months. Practical advice, zero hocus-pocus.',
    name: 'Rajesh Patil',
    role: 'Business owner, Pune',
  },
  {
    quote:
      'The consultation was detailed and genuinely easy to act on. Nothing required breaking walls — just thoughtful placement and small corrections.',
    name: 'Sneha Kulkarni',
    role: 'Homeowner, Kothrud',
  },
  {
    quote:
      'Excellent guidance for our new home construction. We planned the layout right from the foundation and avoided costly mistakes.',
    name: 'Amit Deshmukh',
    role: 'Civil engineer, Wakad',
  },
  {
    quote:
      'We brought them in for our showroom. The cash-counter and entrance changes alone made the space feel completely different to walk into.',
    name: 'Farah Sheikh',
    role: 'Retail owner, FC Road',
  },
];

export const faqs = [
  {
    q: 'Can Vastu be applied without demolition?',
    a: 'Yes. The vast majority of Vastu corrections are implemented without any structural changes — through placement, colour, lighting and simple remedies.',
  },
  {
    q: 'Do you provide online consultations?',
    a: 'Absolutely. Online consultations are available worldwide over video call, using your floor plans and photographs.',
  },
  {
    q: 'How long does a consultation take?',
    a: 'Typically between 30 and 90 minutes depending on the size and type of property and the plan you choose.',
  },
  {
    q: 'Will I receive a written report?',
    a: 'Yes. A detailed, prioritised PDF report is included with the Standard, Premium and Business plans.',
  },
  {
    q: 'Is your approach religious or scientific?',
    a: 'Our approach is practical and direction-based. We focus on the logic of the five elements and energy flow rather than fear or ritual.',
  },
];

export const blog = [
  'Best direction for the main entrance according to Vastu',
  'Kitchen Vastu tips for positive energy',
  'Bedroom Vastu guidelines for rest',
  'Office Vastu for business success',
  'Vastu remedies without structural changes',
  'Plot selection Vastu — a practical guide',
];

export const ctaStrip = {
  heading: 'Take the first step toward a balanced, prosperous space.',
  sub: 'Book a consultation today — on-site in Pune or online anywhere in the world.',
  primary: { label: 'Book Consultation', href: '#contact' },
};

// Options shown in the contact form's "service" dropdown
export const serviceOptions = [
  'Home / Apartment Vastu',
  'Plot Selection',
  'Office / Shop Vastu',
  'Factory / Warehouse Vastu',
  'Restaurant Vastu',
  'Online Consultation',
  'Not sure yet',
];
