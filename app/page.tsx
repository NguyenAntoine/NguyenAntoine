import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Intro } from '@/components/sections/Intro';
import { Projects } from '@/components/sections/Projects';
import { Testimonials } from '@/components/sections/Testimonials';
import { Jobs } from '@/components/sections/Jobs';
import { Hobbies } from '@/components/sections/Hobbies';
import { Counters } from '@/components/sections/Counters';

export default function Home() {
  return (
    <main>
      <Navigation />
      <div id="hero" className="scroll-mt-20">
        <Hero />
      </div>
      <Intro />
      <Projects />
      <Testimonials />
      <Jobs />
      <Hobbies />
      <Counters />
      <Footer />
    </main>
  );
}
