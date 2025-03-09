export const products = {
  'audio-system': {
    title: 'Audio System',
    description: 'Sistem audio profesional untuk berbagai kebutuhan acara dan instalasi permanen',
    image: '/portfolio/audio-dprd.jpg',
    gallery: [
      '/portfolio/audio-dprd.jpg',
      '/portfolio/video-control.jpg',
      '/portfolio/lighting-convention.jpg',
      '/portfolio/conference-smart.jpg'
    ],
    features: [
      'Sound System Profesional',
      'Audio Mixer Digital & Analog',
      'Speaker Management System',
      'Microphone Conference System',
      'Power Amplifier',
      'Audio Processing',
      'Instalasi & Setting',
    ],
    applications: [
      'Ruang Rapat & Conference',
      'Gedung Serbaguna',
      'Tempat Ibadah',
      'Studio & Broadcasting',
      'Event & Pertunjukan',
    ],
  },
  'video-system': {
    title: 'Video System',
    description: 'Solusi video profesional termasuk LED screen, proyektor, dan sistem video conference',
    image: '/portfolio/video-control.jpg',
    gallery: [
      '/portfolio/video-control.jpg',
      '/portfolio/audio-dprd.jpg',
      '/portfolio/lighting-convention.jpg',
      '/portfolio/conference-smart.jpg'
    ],
    features: [
      'LED Display Indoor & Outdoor',
      'Video Wall System',
      'Projector Installation',
      'Video Conference System',
      'Video Switcher',
      'Video Processing',
      'Control System',
    ],
    applications: [
      'Command Center',
      'Ruang Meeting',
      'Digital Signage',
      'Broadcasting Studio',
      'Event Production',
    ],
  },
  'lighting-system': {
    title: 'Lighting System',
    description: 'Sistem pencahayaan modern untuk panggung, studio, dan berbagai kebutuhan lighting profesional',
    image: '/portfolio/lighting-convention.jpg',
    gallery: [
      '/portfolio/lighting-convention.jpg',
      '/portfolio/video-control.jpg',
      '/portfolio/audio-dprd.jpg',
      '/portfolio/conference-smart.jpg'
    ],
    features: [
      'Stage Lighting',
      'Architectural Lighting',
      'LED Par Light',
      'Moving Head Light',
      'DMX Control System',
      'Light Programming',
      'Effect Lighting',
    ],
    applications: [
      'Theater & Panggung',
      'Studio TV',
      'Exhibition Hall',
      'Hotel & Restaurant',
      'Event Production',
    ],
  },
  'conference-system': {
    title: 'Conference System',
    description: 'Sistem konferensi lengkap untuk ruang meeting dan auditorium',
    image: '/portfolio/conference-smart.jpg',
    gallery: [
      '/portfolio/conference-smart.jpg',
      '/portfolio/video-control.jpg',
      '/portfolio/lighting-convention.jpg',
      '/portfolio/audio-dprd.jpg'
    ],
    features: [
      'Digital Conference System',
      'Voting System',
      'Language Interpretation',
      'Audio Recording',
      'Camera Tracking',
      'Central Control Unit',
      'Wireless Discussion',
    ],
    applications: [
      'Ruang Sidang DPRD',
      'Meeting Room',
      'Auditorium',
      'Convention Center',
      'Training Center',
    ],
  },
} as const;

export type Product = typeof products[keyof typeof products];
export type ProductSlug = keyof typeof products; 