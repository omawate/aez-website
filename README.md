# Alpha Epsilon Zeta Website

The official website for Alpha Epsilon Zeta (AEZ), Berkeley's Premier Multidisciplinary Professional Fraternity. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **Performance Optimized**: Image optimization, code splitting, static generation
- **Responsive Design**: Mobile-first approach with consistent breakpoints
- **SEO Optimized**: Dynamic metadata, Open Graph tags, structured data
- **Accessible**: ARIA support, semantic HTML, focus management
- **Type Safe**: Full TypeScript integration with strict mode
- **Component Architecture**: Reusable UI components with consistent design system

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + CSS Modules hybrid
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Montserrat, Playfair Display)
- **Image Optimization**: Next.js Image component
- **Development**: ESLint, Prettier, Husky (pre-commit hooks)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Base UI components (Button, Card, etc.)
│   ├── layout/            # Layout components (Header, Footer)
│   ├── sections/          # Page sections (Hero, InfoSection, etc.)
│   └── features/          # Feature-specific components
├── lib/                   # Utility functions and configurations
├── data/                  # Static data and constants
├── types/                 # TypeScript type definitions
├── hooks/                 # Custom React hooks
└── styles/                # Global styles and utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aez-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript compiler check

## 🏗️ Development Workflow

### Adding New Components

1. **Create component directory**
   ```bash
   mkdir -p src/components/ui/NewComponent
   ```

2. **Create component files**
   ```typescript
   // src/components/ui/NewComponent/NewComponent.tsx
   import { ComponentProps } from '@/types';
   
   export interface NewComponentProps extends ComponentProps {
     // Add your props here
   }
   
   export const NewComponent = ({ ... }) => {
     // Component implementation
   };
   ```

3. **Export from index**
   ```typescript
   // src/components/ui/NewComponent/index.ts
   export { NewComponent } from './NewComponent';
   export type { NewComponentProps } from './NewComponent';
   ```

### Styling Guidelines

- **Use Tailwind CSS** for layout, spacing, and simple styling
- **Use CSS Modules** for complex animations and component-specific styles  
- **Follow mobile-first** responsive design principles
- **Use the design system** colors, spacing, and typography scales

### Code Quality

- **TypeScript**: All components must be properly typed
- **ESLint**: Code must pass linting checks
- **Prettier**: Code is automatically formatted
- **Accessibility**: Components must include proper ARIA attributes

## 📦 Build and Deployment

### Production Build

```bash
npm run build
```

### Performance Optimization

- **Image Optimization**: Next.js Image component with WebP/AVIF support
- **Code Splitting**: Automatic route-based and manual component splitting
- **Static Generation**: Pages pre-rendered at build time
- **Font Optimization**: Google Fonts with display=swap
- **Bundle Analysis**: Use `npm run analyze` to inspect bundle size

### Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Deploy automatically on push to main branch
3. Environment variables configured in Vercel dashboard

#### Other Platforms
- **Netlify**: Works with zero configuration
- **AWS Amplify**: Supports Next.js SSG
- **Traditional Hosting**: Use `npm run build && npm run start`

## 🎨 Design System

### Colors
- **Primary**: Blue palette for main actions and links
- **Neutral**: Gray palette for text and backgrounds  
- **Accent**: Gold/yellow for highlights and special elements

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Montserrat (sans-serif)
- **Executive Roles**: Playfair Display italic

### Spacing
- Consistent 4px base unit
- Responsive spacing with Tailwind's scale
- Component-specific spacing in CSS Modules

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```bash
# Optional: Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: Google Site Verification
GOOGLE_SITE_VERIFICATION=your-verification-code
```

### Next.js Configuration

Key configurations in `next.config.ts`:
- Image optimization for external domains
- Security headers
- Performance optimizations

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with type errors**
   ```bash
   npm run type-check
   ```

2. **Images not loading**
   - Check `next.config.ts` remote patterns
   - Verify image URLs are accessible

3. **Styling not applied**
   - Check Tailwind CSS classes
   - Verify CSS Modules file naming (*.module.css)

4. **Development server issues**
   ```bash
   rm -rf .next node_modules
   npm install
   npm run dev
   ```

## 📝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make changes** following code guidelines
4. **Test thoroughly** (`npm run build`, `npm run lint`)
5. **Commit changes** (`git commit -m 'Add amazing feature'`)
6. **Push to branch** (`git push origin feature/amazing-feature`)
7. **Open Pull Request**

## 📄 License

This project is proprietary and confidential. All rights reserved by Alpha Epsilon Zeta.

## 📞 Support

For technical issues or questions:
- **Development**: Contact the Tech Chair
- **Content Updates**: Contact the External VP
- **General Questions**: aezberkeley@gmail.com

---

Built with ❤️ by the AEZ Tech Team
