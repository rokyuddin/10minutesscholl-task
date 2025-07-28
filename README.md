# IELTS Product Page

A dynamic, SEO-optimized product landing page for "IELTS Course by Munzereen Shahid" built with Next.js, TypeScript, and TailwindCSS.

## Features

- **Server-Side Rendering (SSR)** with Incremental Static Regeneration (ISR)
- **Localization Support** (English and Bengali)
- **SEO Optimized** with dynamic meta tags
- **Responsive Design** with TailwindCSS
- **TypeScript** for type safety
- **Component-based Architecture** for reusability

## API Integration

The application fetches data from:
\`\`\`
https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en
\`\`\`

## Sections Implemented

### Core Sections
- ✅ **Hero Section** - Title, description, video trailer, ratings
- ✅ **Instructor Section** - Munzereen Shahid's profile and credentials
- ✅ **Course Content** - Expandable curriculum with lessons
- ✅ **Pricing Section** - Course price, discount, and CTA
- ✅ **Features Section** - Course highlights and benefits

### Bonus Sections
- ✅ **What You'll Learn** - Learning outcomes and checklist
- ✅ **Course Includes** - Detailed course contents

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

## Getting Started

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Localization

The application supports both English and Bengali languages:
- English: `/?lang=en`
- Bengali: `/?lang=bn`

## SEO Features

- Dynamic meta tags from API data
- Open Graph tags for social sharing
- Structured data for better search engine understanding
- Semantic HTML for accessibility

## Performance Optimizations

- Server-side rendering for faster initial load
- Incremental Static Regeneration (ISR) for optimal performance
- Code splitting and lazy loading
- Optimized images and assets

## Deployment

The application is ready for deployment on Vercel or any other Next.js-compatible platform.

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx          # Main page component
│   └── layout.tsx        # Root layout
├── components/
│   ├── hero-section.tsx
│   ├── instructor-section.tsx
│   ├── course-content-section.tsx
│   ├── features-section.tsx
│   ├── what-youll-learn-section.tsx
│   ├── pricing-section.tsx
│   └── ui/               # Reusable UI components
├── types/
│   └── product.ts        # TypeScript type definitions
└── README.md
