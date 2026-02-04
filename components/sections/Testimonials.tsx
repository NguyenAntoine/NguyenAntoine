'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/data/testimonials';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

export function Testimonials() {
  // Transform testimonials data to InfiniteMovingCards format
  const movingCardsItems = testimonials.map((testimonial) => ({
    quote: testimonial.quote,
    name: testimonial.personName,
    title: `${testimonial.personRole} - ${testimonial.companyName}`,
  }));

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Témoignages
          </h2>
          <p className="text-xl text-gray-600">
            Voici quelques avis de mes précédentes expériences
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
