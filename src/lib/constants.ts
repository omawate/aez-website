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
        href: 'https://airtable.com/appyWVJTerxEykO4A/pagzqgUqNe5oEKFy7/form',
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

// Slideshow images
export const slideshowImages = [
  {
    src: 'https://lh3.googleusercontent.com/pw/AP1GczNeV9GeZNAIpb5tQy_nF9d2f0yvnp-f_nSmVwW-0EC-jWua6Sth5jc9oojpktckkjCAhimJuU-LV8xIXYiBsCzLzP1fP_Ko1Cg3aZ4Ne1z7tUmqn72kKv2-jYnRTvTY-vagqkNdRNLfGOJmOjfqHi0DoQ=w2626-h1750-s-no-gm',
    alt: 'AEZ Brothers at Berkeley Event',
    caption: 'Brotherhood in Action',
  },
  {
    src: '/images/slideshow/2M0A4078.jpg',
    alt: 'AEZ Professional Event',
    caption: 'Professional Development',
  },
  {
    src: 'https://lh3.googleusercontent.com/pw/AP1GczNBbu0_DrgxHUJ19WAGno04E1VPEHcAM2ur5R_Hp2FH36T-xTAQUnF4cC5bT4W5eUI-PSNo9i-ozIwHai_wqT82SOJrV-_qCOZe_SXXOAC6jWMs09Vrf9F2q6J9R_l9Vi91K-HUZ6xVZFTaaPYC1bhp=w2626-h1750-s-no-gm',
    alt: 'AEZ Social Gathering',
    caption: 'Building Lifelong Connections',
  },
  {
    src: '/images/slideshow/2M0A0175.jpg',
    alt: 'AEZ Group Photo',
    caption: 'United in Excellence',
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