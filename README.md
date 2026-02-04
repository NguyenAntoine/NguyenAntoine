# Antoine Nguyen - Portfolio

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion 12, Motion (Aceternity)
- **Icons**: Lucide React 0.563
- **UI Components**: Aceternity UI (premium components via shadcn/ui)
- **Package Manager**: pnpm
- **Deployment**: Docker + nginx-proxy (self-hosted) or Vercel

## Features

- ✨ Premium Aceternity UI components (infinite-moving-cards, comet-card, 3d-card, timeline)
- 🎬 Advanced animations with Framer Motion and Motion library
- 📱 Fully responsive design across all devices
- 🚀 Fast performance with Next.js optimizations
- 🎨 Beautiful gradient animations and backgrounds
- 📊 Animated counters with smooth transitions
- 🔗 Smooth scroll navigation between sections
- 🖼️ Optimized images with Next.js Image component
- 📧 Contact information in footer
- 🛠️ TypeScript for type safety
- 📦 Installed via shadcn/ui for maintainability

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main portfolio page
│   └── globals.css             # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx            # Hero with animated gradient
│   │   ├── Intro.tsx           # Skills with focus effects
│   │   ├── Projects.tsx        # Project showcase with comet-card
│   │   ├── Testimonials.tsx    # Rotating testimonials with infinite-moving-cards
│   │   ├── Jobs.tsx            # Timeline of experiences
│   │   ├── Hobbies.tsx         # 3D hobby cards
│   │   └── Counters.tsx        # Animated stats
│   ├── ui/
│   │   ├── 3d-card.tsx         # Aceternity 3D card effect
│   │   ├── comet-card.tsx      # Aceternity comet/glare effect
│   │   ├── infinite-moving-cards.tsx  # Aceternity auto-rotating carousel
│   │   ├── timeline.tsx        # Aceternity timeline component
│   │   └── background-gradient-animation.tsx  # Aceternity animated gradient
│   ├── Navigation.tsx          # Navigation component
│   └── Footer.tsx              # Footer with social links
├── lib/
│   ├── data/
│   │   ├── projects.ts         # Projects array
│   │   ├── jobs.ts             # Work experience
│   │   ├── testimonials.ts     # Testimonials
│   │   ├── hobbies.ts          # Hobbies
│   │   ├── skills.ts           # Skills
│   │   └── contact.ts          # Contact info & counters
│   └── utils.ts                # Utility functions
├── types/
│   └── index.ts                # TypeScript interfaces
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── profile/
│       ├── projects/
│       ├── companies/
│       └── logos/
├── Dockerfile
├── docker-compose.yml
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+ (or npm/yarn)

### Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open http://localhost:3000
```

### Add Aceternity Components

```bash
# Install additional Aceternity components
npx shadcn add @aceternity/[component-name]

# Example: Add a new component
npx shadcn add @aceternity/glare-card
```

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

## Sections

### Hero
Eye-catching landing section with background gradient animation and smooth transitions. Features layered animated backgrounds with responsive design.

### Intro (Skills)
Interactive skill cards with custom focus effects (blur & scale on hover). Highlights expertise in project management, web development, and DevOps.

### Projects
Premium project showcase using Aceternity's `comet-card` component with 3D glare/comet effect. Displays production projects with images and external links.

### Testimonials
Auto-rotating testimonial carousel powered by Aceternity's `infinite-moving-cards`. Professional recommendations from colleagues and managers displayed in smooth animation.

### Jobs
Timeline visualization of work experience using Aceternity's `timeline` component. Chronological layout with company logos, positions, dates, and technology stacks.

### Hobbies
Interactive hobby cards using Aceternity's `3d-card` component with 3D perspective rotation on mouse movement. Personal interests including travel, card magic, sports, and music.

### Counters
Animated statistics section with smooth counter animations (age, experience, graduation year, countries visited).

## Customization

### Update Content

Edit files in `lib/data/`:
- `projects.ts` - Add/modify projects
- `jobs.ts` - Update work experience
- `testimonials.ts` - Add LinkedIn recommendations
- `hobbies.ts` - Change interests
- `skills.ts` - Update skills
- `contact.ts` - Contact info and stats

### Update Components

Use shadcn/ui to add or update Aceternity components:
```bash
npx shadcn add @aceternity/[component-name]
```

Available components:
- `comet-card` - 3D glare effect (used in Projects)
- `infinite-moving-cards` - Auto-rotating carousel (used in Testimonials)
- `3d-card` - 3D perspective rotation (used in Hobbies)
- `timeline` - Timeline visualization (used in Jobs)
- `background-gradient-animation` - Animated gradient (used in Hero)

### Update Styling

- `tailwind.config.ts` - Tailwind CSS theme with custom colors
- `app/globals.css` - Global styles and animations
- Component `className` attributes - Individual component styles
- `.mcp.json` - shadcn MCP server configuration for Claude Code

### Update Images

Replace images in:
- `public/images/profile/antoine.jpg` - Profile photo
- `public/images/projects/` - Project screenshots
- `public/images/companies/` - Company logos
- `public/images/logos/` - Site logos

## Development Tools

### Claude Code Integration

This project is configured for Claude Code MCP (Model Context Protocol) integration via `.mcp.json`. This enables Claude to:
- Directly add/update components using shadcn/ui
- Work with Aceternity components
- Provide context-aware code suggestions

### TypeScript & Type Safety

All components are fully typed with TypeScript 5.9 for improved development experience and type checking.

## Deployment

### Docker (VPS)

```bash
# Build Docker image
docker build -t nguyenantoine-portfolio .

# Run with docker-compose
docker-compose up -d
```

Environment variables (in `.env` or `docker-compose.yml`):
```
VIRTUAL_HOST=nguyenantoine.com
LETSENCRYPT_HOST=nguyenantoine.com
LETSENCRYPT_EMAIL=antoine.ngu@outlook.fr
NODE_ENV=production
```

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Deploy from Vercel dashboard
# https://vercel.com/new
```

Vercel automatically detects Next.js and configures build settings. Provides automatic SSL, CDN, and edge functions.

## Performance

- ✅ Image optimization (WebP, AVIF)
- ✅ Code splitting with Next.js
- ✅ CSS-in-JS with Tailwind
- ✅ Lazy loading for sections
- ✅ Smooth animations with hardware acceleration
- ✅ SEO optimized metadata

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - Feel free to use this as a template for your own portfolio.

## Author

Antoine Nguyen - [GitHub](https://github.com/NguyenAntoine) | [LinkedIn](https://linkedin.com/in/nguyen-antoine)
