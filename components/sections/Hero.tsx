'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BackgroundBeams } from '../background-beams';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-slate-950 overflow-hidden pt-20">
      {/* Background layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <BackgroundBeams />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center space-y-6">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Senior{' '}
              <span className="gradient-text">Software Engineer</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Développeur Full-stack créant des applications web performantes et scalables. Depuis 2017 dans des startups et scale-ups en croissance. Passionné par l'IA, l'innovation et les outils modernes comme Claude Code.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-8 pt-8"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Découvrir mes projets
            </button>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pointer-events-none"
            >
              <motion.button
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={scrollToProjects}
                className="flex flex-col items-center gap-2 text-white hover:text-primary transition-colors pointer-events-auto"
              >
                <span className="text-sm">Défiler</span>
                <ChevronDown size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
