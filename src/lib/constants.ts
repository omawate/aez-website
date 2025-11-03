import { NavItem, CounterData } from '@/types';

// Navigation configuration
export const navigation: NavItem[] = [
  {
    label: 'Brothers',
    href: '/brothers',
  },
  {
    label: 'Alumni',
    href: '/alumni',
  },
  // Commented this out until paradigm website is built
  // {
  //   label: 'Paradigm',
  //   href: '/#paradigm',
  // },
  {
    label: 'Innovate',
    href: 'https://www.berkeleyinnovate.com/',
    external: true,
  },
  {
    label: 'Paradigm',
    href: 'https://berkeleyparadigm.org/',
    external: true,
  },
  {
    label: 'Join Us',
    href: '#',
    dropdown: [
      {
        label: 'Timeline',
        href: '/timeline',
      },
      {
        label: 'Coffee Chats',
        href: '/coffee-chats',
      },
      {
        label: 'Application',
        href: 'https://airtable.com/appoEeyrE51PL5szS/pagzqgUqNe5oEKFy7/form',
        external: true,
      },
    ],
  },
];

// Social media links
export const socialLinks = {
  instagram: 'https://www.instagram.com/aezberkeley/',
  linkedin: 'https://www.linkedin.com/company/alpha-epsilon-zeta/',
  email: 'mailto:aezberkeley@gmail.com',
};

// Statistics counters for home page
export const statsCounters: CounterData[] = [
  {
    value: 92,
    label: 'Haas\nAcceptance Rate',
    suffix: '%',
    animationDuration: 2000,
  },
  {
    value: 500,
    label: 'Raised for Alumni\nFounded Startups',
    prefix: '$',
    suffix: 'M+',
    animationDuration: 2500,
  },
  {
    value: 15,
    label: 'Startups Founded\nby Alumni',
    animationDuration: 1800,
  },
  {
    value: 100,
    label: 'Full-Time Job\nPlacement Rate',
    suffix: '%',
    animationDuration: 2200,
  },
];

// Slideshow images - Add your image links here
export const slideshowImages = [
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c40b91935c9898b88381_IMG_1031-min.JPG',
    alt: 'AEZ Event Photo 1',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c40ace2f16ce3860e50f_100_1014-min.JPG',
    alt: 'AEZ Event Photo 2',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cf9184968c5f3d2109_IMG_2143.JPG',
    alt: 'AEZ Event Photo 3',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cfdab45cd5aa72397d_2M0A3828.jpg',
    alt: 'AEZ Event Photo 4',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1ce61d868ed7907009e_IMG_4286.JPG',
    alt: 'AEZ Event Photo 5',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1ce9948942f57ac3cef_IMG_4098.JPG',
    alt: 'AEZ Event Photo 6',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1ce0a6ba6442ea5b1c3_2M0A0177%20(1).jpg',
    alt: 'AEZ Event Photo 7',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1ceb7c0502d7af204e6_2M0A0645.jpg',
    alt: 'AEZ Event Photo 8',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cd690e3c8e85a11412_2M0A4037.jpg',
    alt: 'AEZ Event Photo 9',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cdfbe567fe9cc24b13_IMG_4024.JPG',
    alt: 'AEZ Event Photo 10',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cd641fc0402b6e66c2_DSC05876.jpg',
    alt: 'AEZ Event Photo 11',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cd155a37ad75e0564c_2A0CF023-1017-452C-AACD-CEA6F14C52AB.JPG',
    alt: 'AEZ Event Photo 12',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cd690e3c8e85a113d8_IMG_2891.JPG',
    alt: 'AEZ Event Photo 13',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cc4f46207b2bbb1b0e_IMG_2178.JPG',
    alt: 'AEZ Event Photo 14',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1ccf529c6ca26e8cf33_IMG_0224.JPG',
    alt: 'AEZ Event Photo 15',
  },
  {
    src: 'https://cdn.prod.website-files.com/6374140cc01b132d1cad9d00/6903c1cbd230cb475ef00365_20250209_123711_C6DD9E.jpeg',
    alt: 'AEZ Event Photo 16',
  },
];

// Class mappings for brother organization
export const brotherClasses = {
  'Psi': { order: 1, fullName: 'Psi Class' },
  'Alpha Alpha': { order: 2, fullName: 'Alpha Alpha Class' },
  'Alpha Beta': { order: 3, fullName: 'Alpha Beta Class' },
  'Alpha Gamma': { order: 4, fullName: 'Alpha Gamma Class' },
  'Alpha Delta': { order: 5, fullName: 'Alpha Delta Class' },
  'Alpha Epsilon': { order: 6, fullName: 'Alpha Epsilon Class' },
  'Alpha Zeta': { order: 7, fullName: 'Alpha Zeta Class' },
  'Alpha Eta': { order: 8, fullName: 'Alpha Eta Class' },
  'Alpha Theta': { order: 9, fullName: 'Alpha Theta Class' },
  'Alpha Iota': { order: 10, fullName: 'Alpha Iota Class' },
  'Alpha Kappa': { order: 11, fullName: 'Alpha Kappa Class' },
  'Alpha Lambda': { order: 12, fullName: 'Alpha Lambda Class' },
  'Alpha Mu': { order: 13, fullName: 'Alpha Mu Class' },
  'Alpha Nu': { order: 14, fullName: 'Alpha Nu Class' },
  'Alpha Xi': { order: 15, fullName: 'Alpha Xi Class' },
  'Alpha Omicron': { order: 16, fullName: 'Alpha Omicron Class' },
  'Alpha Pi': { order: 17, fullName: 'Alpha Pi Class' },
  'Alpha Rho': { order: 18, fullName: 'Alpha Rho Class' },
  'Alpha Sigma': { order: 19, fullName: 'Alpha Sigma Class' },
  'Alpha Tau': { order: 20, fullName: 'Alpha Tau Class' },
  'Alpha Upsilon': { order: 21, fullName: 'Alpha Upsilon Class' },
  'Alpha Phi': { order: 22, fullName: 'Alpha Phi Class' },
  'Alpha Chi': { order: 23, fullName: 'Alpha Chi Class' },
  'Alpha': { order: 24, fullName: 'Alpha Class' },
  'Beta': { order: 25, fullName: 'Beta Class' },
  'Gamma': { order: 26, fullName: 'Gamma Class' },
  'Delta': { order: 27, fullName: 'Delta Class' },
  'Epsilon': { order: 28, fullName: 'Epsilon Class' },
  'Zeta': { order: 29, fullName: 'Zeta Class' },
  'Eta': { order: 30, fullName: 'Eta Class' },
  'Theta': { order: 31, fullName: 'Theta Class' },
  'Iota': { order: 32, fullName: 'Iota Class' },
  'Kappa': { order: 33, fullName: 'Kappa Class' },
  'Lambda': { order: 34, fullName: 'Lambda Class' },
  'Mu': { order: 35, fullName: 'Mu Class' },
  'Nu': { order: 36, fullName: 'Nu Class' },
  'Xi': { order: 37, fullName: 'Xi Class' },
  'Omicron': { order: 38, fullName: 'Omicron Class' },
  'Pi': { order: 39, fullName: 'Pi Class' },
  'Rho': { order: 40, fullName: 'Rho Class' },
  'Sigma': { order: 41, fullName: 'Sigma Class' },
  'Tau': { order: 42, fullName: 'Tau Class' },
  'Upsilon': { order: 43, fullName: 'Upsilon Class' },
  'Phi': { order: 44, fullName: 'Phi Class' },
  'Chi': { order: 45, fullName: 'Chi Class' },
} as const;

// Animation durations and easing
export const animations = {
  durations: {
    fast: 200,
    normal: 300,
    slow: 500,
    slower: 800,
  },
  easing: {
    easeOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// Breakpoints (matching Tailwind)
export const breakpoints = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;