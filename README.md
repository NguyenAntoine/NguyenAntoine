# Antoine Nguyen - Portfolio

A modern portfolio website built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**. Features premium Aceternity UI components with smooth animations and responsive design.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router) with Turbopack
- **Language**: TypeScript 5.9
- **Styling**: Tailwind CSS 4.1
- **Animations**: Framer Motion 12
- **UI Components**: Aceternity UI
- **Deployment**: Docker + nginx-proxy or Vercel

## ✨ Features

- Premium Aceternity UI components (timeline, infinite-moving-cards, 3d-card)
- Advanced animations with smooth transitions
- Fully responsive design
- Optimized performance with Next.js
- Beautiful gradient animations
- TypeScript for type safety

## 🏗️ Project Structure

```
app/                    # Next.js app router
├── layout.tsx         # Root layout
└── page.tsx           # Main portfolio page

components/            # React components
├── sections/          # Portfolio sections
└── ui/                # Reusable UI components

lib/data/             # Content & configuration
public/               # Static assets
```

## 🚀 Quick Start

### Development

```bash
pnpm install
pnpm dev
# Open http://localhost:3000
```

### Production Build

```bash
pnpm build
pnpm start
```

### Docker

```bash
docker compose up --build
```

## 📝 Customization

Edit content in `lib/data/`:
- `projects.ts` - Projects
- `jobs.ts` - Work experience
- `testimonials.ts` - Recommendations
- `hobbies.ts` - Personal interests
- `skills.ts` - Skills & expertise
- `contact.ts` - Contact info

## 📖 Full Documentation

See [documentation.md](./documentation.md) for detailed setup, deployment, and customization guide.

## 📄 License

MIT - Feel free to use as a template

---

**Author**: [Antoine Nguyen](https://github.com/NguyenAntoine) | [LinkedIn](https://linkedin.com/in/nguyen-antoine)
