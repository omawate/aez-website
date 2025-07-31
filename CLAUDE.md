# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website for Alpha Epsilon Zeta (AEZ), UC Berkeley's multidisciplinary professional fraternity. The website showcases the fraternity's identity, members, and provides information for potential new members.

## Architecture

**Technology Stack:**
- Pure HTML, CSS, and vanilla JavaScript
- No build system, package managers, or frameworks
- Static hosting (GitHub Pages via CNAME file)

**File Structure:**
- `index.html` - Main landing page with hero section, info, stats, and slideshow
- `brothers.html` - Current members showcase with executive board and member profiles
- `alumni.html` - Alumni destinations and achievements
- `timeline.html` - Rush timeline and process information
- `coffeechats.html` - Coffee chats information (currently shows closed message)
- `style.css` - Main stylesheet with responsive design and animations
- `main.js` - JavaScript for interactive elements (slideshow, counters, carousel)
- Image assets: High-resolution photos and social media icons
- `CNAME` - Custom domain configuration for GitHub Pages

**Key Features:**
- Responsive design with mobile-first approach
- Animated counters for statistics
- Image slideshow with navigation controls
- CSS animations and transitions
- Social media integration
- Multi-page navigation with consistent header/footer

## Development Commands

This is a static website with no build process. Development is straightforward:

**Local Development:**
- Open HTML files directly in browser for basic testing
- Use a local HTTP server for full testing:
  ```bash
  python -m http.server 8000
  # or
  npx serve .
  ```

**No build, test, or lint commands** - this is pure static HTML/CSS/JS

## Code Conventions

**CSS:**
- Uses CSS custom properties and modern features
- Responsive design with mobile breakpoints at 600px, 900px, 1100px
- Font families: Montserrat (primary), Playfair Display (headings), Libre Baskerville, Bodoni Moda
- Color scheme: White backgrounds with dark overlays, #181818 text, rgba overlays for hero sections

**JavaScript:**
- Vanilla ES6+ JavaScript, no frameworks
- Event-driven architecture with DOMContentLoaded listeners
- Modular functions for slideshow, counter animations, and carousel functionality
- Uses modern APIs like requestAnimationFrame and smooth scrolling

**HTML:**
- Semantic HTML5 structure
- Consistent navigation pattern across pages
- External CDN links for Google Fonts
- Image optimization with proper alt attributes

## Deployment

- Hosted on GitHub Pages
- Custom domain configured via CNAME file
- Static deployment - changes are live immediately after git push to main branch

## Important Notes

- All images are either local assets or hosted on external CDNs (cdn.prod.website-files.com, Google Photos)
- No server-side functionality - purely client-side static website
- Social media links point to actual AEZ accounts
- Application link integrates with Airtable form
- Contact information uses Gmail for the fraternity