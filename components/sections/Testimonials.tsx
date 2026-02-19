'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { WavyBackground } from '../ui/wavy-background';

export function Testimonials() {
  // Transform testimonials data to InfiniteMovingCards format
  const movingCardsItems = testimonials.map((testimonial) => ({
    quote: testimonial.quote,
    name: testimonial.personName,
    title: `${testimonial.personRole} - ${testimonial.companyName}`,
  }));

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none">
        <WavyBackground
          blur={10}
          speed="slow"
          waveOpacity={0.3}
          containerClassName="h-full"
        >
          <div />
        </WavyBackground>
      </div>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Témoignages
          </h2>
          <p className="text-xl text-gray-300">
            Avis et retours des équipes avec lesquelles j'ai travaillé
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <InfiniteMovingCards
            items={movingCardsItems}
            direction="left"
            speed="slow"
            pauseOnHover={true}
          />
        </motion.div>
      </div>
    </section>
  );
}
