# AEZ Website NextJS Migration - Phase 1 Analysis

## Project Overview
This document provides a comprehensive analysis of the existing AEZ static website in preparation for migration to NextJS. The current website is a pure HTML/CSS/JavaScript static site showcasing Alpha Epsilon Zeta fraternity at UC Berkeley.

## Current Website Structure Analysis

### 1. File Catalog
The old_html_code directory contains:

**HTML Pages (5 total):**
- `index.html` - Main landing page with hero, info, stats, and slideshow
- `brothers.html` - Executive board and member profiles showcase  
- `alumni.html` - Alumni destinations table with company/position info
- `timeline.html` - Rush timeline and process information
- `coffeechats.html` - Coffee chats information (currently shows closed message)

**Assets:**
- `style.css` - Main stylesheet (~2000+ lines, comprehensive styling)
- `main.js` - JavaScript for interactive elements (slideshow, counters, carousel)
- `instagram.png` & `linkedin.png` - Social media icons
- `2M0A0175.jpg`, `2M0A4026.jpg`, `2M0A4078.jpg` - Local image assets
- `CNAME` - Custom domain configuration for GitHub Pages
- `README.md` - Documentation

### 2. Page Structure & Navigation Flow

**Navigation Pattern:**
All pages share consistent navigation with:
- Logo (top-left, links to index.html)
- Main navigation (top-right):
  - Brothers � brothers.html
  - Alumni � alumni.html  
  - Paradigm � anchor link (#paradigm)
  - Innovate � external link (berkeleyinnovate.com)
  - Join Us dropdown:
    - Timeline � timeline.html
    - Coffee Chats � coffeechats.html
    - Application � external Airtable form
  - Social icons (Instagram, LinkedIn)

**Page Templates:**
- **Landing Page**: Full-screen hero with overlay + content sections
- **Sub-pages**: Hero section with navigation + content sections + footer
- **Footer**: Consistent across all pages with social links and copyright

## 3. Reusable Components Identified

### Header Components:
- **Logo Component**: Positioned logo with link to home
- **Main Navigation**: Horizontal nav with dropdown functionality
- **Social Icons**: Instagram/LinkedIn links with custom styling

### Hero Sections:
- **Landing Hero**: Full-screen with title overlay and background image
- **Sub-page Hero**: Consistent hero with page-specific titles

### Content Components:
- **Info Section**: Two-column layout (text + image)
- **Counter Section**: Animated statistics blocks (4 counters)
- **Slideshow**: Image carousel with navigation arrows
- **Executive Profile Cards**: Structured member profiles with headshots
- **Alumni Table**: Sortable table with company/position data

### Footer:
- **Site Footer**: Social icons + copyright text

### Interactive Elements:
- **Dropdown Menu**: "Join Us" navigation dropdown
- **Image Slideshow**: Arrow navigation with smooth transitions
- **Counter Animations**: Scroll-triggered number animations
- **Carousel**: Image carousel with infinite scroll

## 4. Styling Approach Analysis

### CSS Architecture:
- **Single CSS File**: All styles in one 2000+ line file
- **Font Stack**: Multiple Google Fonts (Sora, Montserrat, Playfair Display, Bebas Neue, Poppins, Raleway, Bodoni Moda)
- **Color Palette**: Primarily white backgrounds, #181818 text, rgba overlays
- **Layout**: Flexbox-based responsive design

### Design Patterns:
- **Mobile-first**: Responsive breakpoints at 600px, 900px, 1100px
- **Typography**: Hierarchical font sizes with consistent letter-spacing
- **Spacing**: Consistent use of rem/vw units for scalability
- **Animations**: CSS transitions and keyframe animations
- **Images**: Heavy use of external CDN images (cdn.prod.website-files.com)

### Inconsistencies Found:
- **Inline Styles**: Some pages have `<style>` blocks in HTML
- **Font Loading**: Multiple font imports could be optimized
- **Image Sources**: Mix of local and external images
- **CSS Organization**: No modular structure, styles mixed together

## 5. Feature Inventory

### Interactive Features:
1. **Animated Counters**: JavaScript-driven statistics animation
2. **Image Slideshow**: Manual navigation with arrow controls
3. **Dropdown Navigation**: Hover/click dropdown menu
4. **Responsive Design**: Mobile-friendly layouts
5. **Keyboard Navigation**: Arrow key support for slideshow

### Content Management:
- **Static Content**: All text hardcoded in HTML
- **Image Management**: Mix of local and CDN-hosted images
- **Member Profiles**: Structured but hardcoded profile data
- **Alumni Data**: Large table of alumni information

### External Integrations:
- **Google Fonts**: Multiple font families loaded via CDN
- **Airtable Forms**: Application form integration
- **Social Media**: Direct links to Instagram/LinkedIn
- **Berkeley Innovate**: External partnership link

## 6. Technical Assessment

### SEO Implementation:
- **Meta Tags**: Basic charset and viewport, missing description/keywords
- **Semantic HTML**: Uses semantic elements (nav, section, footer)
- **Alt Text**: Images have alt attributes
- **Page Titles**: Descriptive titles for each page
- **Missing**: Open Graph tags, structured data, sitemap

### Performance Considerations:
- **Image Optimization**: Large images not optimized (some 2600px wide)
- **Font Loading**: Multiple font requests could impact performance
- **CSS/JS**: Unminified files
- **CDN Usage**: External images rely on third-party CDN
- **Caching**: Static hosting allows for good caching

### Accessibility:
- **ARIA Labels**: Social media links have aria-label attributes
- **Semantic HTML**: Proper heading hierarchy
- **Color Contrast**: White text on dark backgrounds
- **Missing**: Focus indicators, screen reader support, alt text for decorative images

### Browser Compatibility:
- **Modern Features**: Uses CSS Grid, Flexbox, modern JavaScript
- **Font Smoothing**: Webkit-specific font smoothing rules
- **ES6+**: Arrow functions, const/let, template literals

## 7. Migration Recommendations

### High Priority:
1. **Component Extraction**: Break down reusable components (Header, Footer, Hero, Cards)
2. **Image Optimization**: Implement Next.js Image component for performance
3. **CSS Architecture**: Migrate to CSS Modules or styled-components
4. **Font Optimization**: Use Next.js font optimization features
5. **SEO Enhancement**: Add metadata, Open Graph tags, structured data

### Medium Priority:
1. **Content Management**: Consider headless CMS for dynamic content
2. **Performance**: Implement code splitting and lazy loading
3. **Accessibility**: Add proper focus management and ARIA support
4. **TypeScript**: Add type safety for better development experience

### Low Priority:
1. **Animation Library**: Consider replacing vanilla JS animations with Framer Motion
2. **State Management**: If dynamic features are added
3. **Testing**: Unit and integration tests for components
4. **Analytics**: Google Analytics or similar tracking

## Next Steps
1. Set up NextJS project structure
2. Create component library based on identified reusable elements
3. Migrate static content page by page
4. Implement responsive design with modern CSS
5. Add performance optimizations and SEO enhancements
6. Test cross-browser compatibility
7. Deploy and configure hosting

---

# Phase 2: Next.js Architecture Planning

## 1. Next.js 14+ App Router Project Structure

```
aez-website/
├── README.md
├── next.config.ts
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
├── .env.local
├── .env.example
├── .gitignore
├── .eslintrc.json
├── public/
│   ├── images/
│   │   ├── logo/
│   │   │   └── aez-logo.png
│   │   ├── brothers/
│   │   │   ├── executives/
│   │   │   └── members/
│   │   ├── alumni/
│   │   │   └── destinations.jpg
│   │   ├── slideshow/
│   │   └── social/
│   │       ├── instagram.png
│   │       └── linkedin.png
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Home page (index.html equivalent)
│   │   ├── loading.tsx         # Global loading UI
│   │   ├── error.tsx           # Global error UI
│   │   ├── not-found.tsx       # 404 page
│   │   ├── brothers/
│   │   │   ├── page.tsx        # Brothers listing page
│   │   │   └── loading.tsx
│   │   ├── alumni/
│   │   │   ├── page.tsx        # Alumni page
│   │   │   └── loading.tsx
│   │   ├── timeline/
│   │   │   └── page.tsx        # Rush timeline page
│   │   ├── coffee-chats/
│   │   │   └── page.tsx        # Coffee chats page
│   │   └── api/                # API routes if needed
│   ├── components/
│   │   ├── ui/                 # Base UI components
│   │   │   ├── Button/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Button.module.css
│   │   │   │   └── index.ts
│   │   │   ├── Card/
│   │   │   ├── Modal/
│   │   │   ├── Dropdown/
│   │   │   └── index.ts        # Barrel exports
│   │   ├── layout/             # Layout components
│   │   │   ├── Header/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Header.module.css
│   │   │   │   ├── Navigation/
│   │   │   │   ├── Logo/
│   │   │   │   └── index.ts
│   │   │   ├── Footer/
│   │   │   └── PageWrapper/
│   │   ├── sections/           # Page-specific sections
│   │   │   ├── Hero/
│   │   │   ├── InfoSection/
│   │   │   ├── CountersSection/
│   │   │   ├── SlideshowSection/
│   │   │   └── AlumniTable/
│   │   └── features/           # Feature-specific components
│   │       ├── BrotherProfile/
│   │       ├── ExecutiveCard/
│   │       ├── AlumniCard/
│   │       └── RushTimeline/
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   ├── constants.ts        # App constants
│   │   ├── fonts.ts            # Font configurations
│   │   └── metadata.ts         # SEO metadata helpers
│   ├── data/
│   │   ├── brothers.ts         # Brothers data
│   │   ├── alumni.ts           # Alumni data
│   │   ├── executives.ts       # Executive board data
│   │   └── navigation.ts       # Navigation configuration
│   ├── types/
│   │   ├── brother.ts          # Brother type definitions
│   │   ├── alumni.ts           # Alumni type definitions
│   │   └── index.ts            # Consolidated exports
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   ├── useAnimation.ts
│   │   └── useMediaQuery.ts
│   └── styles/
│       ├── globals.css
│       ├── components.css      # Component-specific globals
│       └── utilities.css       # Utility classes
├── docs/
│   └── COMPONENT_GUIDE.md
└── .vscode/
    └── settings.json
```

## 2. Component Hierarchy & Reusability Strategy

### Component Architecture Principles:
1. **Atomic Design**: Base components → Composed components → Page sections
2. **Single Responsibility**: Each component has one clear purpose
3. **Composability**: Components work well together
4. **Reusability**: Generic components with prop-based customization
5. **Accessibility**: ARIA support and semantic HTML built-in

### Component Hierarchy:

```
App
├── RootLayout
│   ├── Header
│   │   ├── Logo
│   │   ├── Navigation
│   │   │   ├── NavItem
│   │   │   └── Dropdown
│   │   └── SocialIcons
│   ├── PageWrapper
│   │   └── [Page Content]
│   └── Footer
│       └── SocialIcons
```

### Reusability Strategy:
- **Polymorphic Components**: Accept `as` prop for flexible HTML elements
- **Compound Components**: Related components that work together
- **Render Props**: For complex state sharing
- **Custom Hooks**: Reusable logic extraction
- **Context Providers**: Global state management

## 3. TypeScript Integration Plan

### Type Structure:
```typescript
// Core data types
interface Brother {
  id: string;
  name: string;
  class: string;
  major: string;
  year: 'freshman' | 'sophomore' | 'junior' | 'senior';
  hometown: string;
  bio: string;
  image: string;
  email: string;
  interests: string[];
  isExecutive?: boolean;
  executiveRole?: string;
}

interface Alumni {
  id: string;
  name: string;
  class: string;
  company: string;
  position: string;
  industry: string;
  graduationYear: number;
}

// Component prop types
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Page props with metadata
interface PageProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
```

### TypeScript Configuration:
- **Strict Mode**: Full type checking enabled
- **Path Mapping**: Clean imports with `@/` alias
- **Component Props**: Strongly typed with generic interfaces
- **API Types**: Type-safe data fetching
- **Utility Types**: Leverage TypeScript utilities (Pick, Omit, etc.)

## 4. Styling Approach Decision

### Selected Approach: **Tailwind CSS + CSS Modules Hybrid**

**Rationale:**
- **Tailwind CSS**: Rapid development, consistent spacing, responsive utilities
- **CSS Modules**: Component-specific styles, CSS-in-CSS benefits
- **Hybrid Strategy**: Tailwind for layout/utilities, CSS Modules for complex components

### Styling Architecture:
```
styles/
├── globals.css           # Tailwind directives + global styles
├── components.css        # Component-specific global styles
└── utilities.css         # Custom utility classes

components/
├── Button/
│   ├── Button.tsx        # Tailwind classes for basic styling
│   └── Button.module.css # Complex animations/states
└── Hero/
    ├── Hero.tsx          # Tailwind for layout
    └── Hero.module.css   # Custom background effects
```

### Design System Integration:
- **Color Palette**: Extended Tailwind colors matching brand
- **Typography**: Custom font classes with Tailwind
- **Spacing**: Tailwind spacing scale with custom additions
- **Breakpoints**: Custom responsive breakpoints
- **Animations**: CSS Modules for complex, Tailwind for simple

## 5. Component Library Plan

### UI Components (Base Level):

#### Button Component:
```typescript
interface ButtonProps extends ComponentProps {
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
```

#### Card Component:
```typescript
interface CardProps extends ComponentProps {
  variant: 'default' | 'elevated' | 'outline';
  padding: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}
```

#### Modal Component:
```typescript
interface ModalProps extends ComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
}
```

### Layout Components:

#### Header Component:
```typescript
interface HeaderProps {
  transparent?: boolean;
  fixed?: boolean;
  showLogo?: boolean;
}
```

#### PageWrapper Component:
```typescript
interface PageWrapperProps extends ComponentProps {
  title: string;
  description: string;
  heroSection?: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}
```

### Section Components:

#### Hero Section:
```typescript
interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  overlay?: boolean;
  height?: 'sm' | 'md' | 'lg' | 'full';
  actions?: React.ReactNode;
}
```

#### Counter Section:
```typescript
interface CounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  animationDuration?: number;
}

interface CounterSectionProps {
  counters: CounterProps[];
}
```

## 6. Specialized Components

### Brother Profile Components:

#### Executive Card:
```typescript
interface ExecutiveCardProps {
  brother: Brother;
  showFullBio?: boolean;
  layout: 'horizontal' | 'vertical';
}
```

#### Brother Grid:
```typescript
interface BrotherGridProps {
  brothers: Brother[];
  groupBy?: 'class' | 'major' | 'year';
  searchable?: boolean;
  filterable?: boolean;
}
```

### Alumni Components:

#### Alumni Table:
```typescript
interface AlumniTableProps {
  alumni: Alumni[];
  sortable?: boolean;
  searchable?: boolean;
  groupBy?: 'class' | 'industry' | 'company';
  pagination?: boolean;
}
```

### Interactive Components:

#### Slideshow:
```typescript
interface SlideshowProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}
```

#### Rush Timeline:
```typescript
interface TimelineEvent {
  id: string;
  title: string;
  date: Date;
  description: string;
  type: 'info' | 'event' | 'deadline';
}

interface RushTimelineProps {
  events: TimelineEvent[];
  currentDate?: Date;
}
```

## 7. State Management Strategy

### Approach: **React Context + Custom Hooks**

```typescript
// Global app context
interface AppContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

// Feature-specific contexts
interface BrotherContextType {
  brothers: Brother[];
  executives: Brother[];
  filterBy: string;
  setFilterBy: (filter: string) => void;
}
```

## 8. Performance Optimization Plan

### Image Optimization:
- **Next.js Image Component**: Automatic optimization, lazy loading
- **Local Images**: Stored in public/images with proper organization
- **External Images**: Proxy through Next.js API routes if needed
- **Responsive Images**: Multiple sizes for different breakpoints

### Code Splitting:
- **Route-based**: Automatic with App Router
- **Component-based**: Dynamic imports for heavy components
- **Library Splitting**: Separate vendor chunks

### Caching Strategy:
- **Static Generation**: Pre-render pages at build time
- **Incremental Static Regeneration**: Update content without rebuilds
- **Client-side Caching**: React Query or SWR for data fetching

## 9. Development Workflow

### Code Quality:
- **ESLint**: Extended Next.js config with custom rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for linting/testing
- **TypeScript**: Strict mode with path mapping

### Testing Strategy:
- **Unit Tests**: Jest + Testing Library for components
- **Integration Tests**: Component interactions
- **E2E Tests**: Playwright for critical user flows
- **Visual Regression**: Chromatic or similar

### Documentation:
- **Storybook**: Component documentation and testing
- **Component Guide**: Usage examples and best practices
- **README**: Setup and development instructions

---

*Architecture planning completed for NextJS migration - Phase 2*