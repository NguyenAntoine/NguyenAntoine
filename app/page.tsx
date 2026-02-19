import { Suspense, lazy } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';

const Intro = lazy(() => import('@/components/sections/Intro').then(m => ({ default: m.Intro })));
const Testimonials = lazy(() => import('@/components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Jobs = lazy(() => import('@/components/sections/Jobs').then(m => ({ default: m.Jobs })));
const Hobbies = lazy(() => import('@/components/sections/Hobbies').then(m => ({ default: m.Hobbies })));
const Counters = lazy(() => import('@/components/sections/Counters').then(m => ({ default: m.Counters })));

export default function Home() {
  return (
    <main>
      <Navigation />
      <div id="hero" className="scroll-mt-20">
        <Hero />
      </div>
      <Suspense fallback={<div />}>
        <Intro />
      </Suspense>
      <Suspense fallback={<div />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div />}>
        <Jobs />
      </Suspense>
      <Suspense fallback={<div />}>
        <Hobbies />
      </Suspense>
      <Suspense fallback={<div />}>
        <Counters />
      </Suspense>
      <Footer />
    </main>
  );
}
