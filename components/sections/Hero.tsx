'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { BackgroundBeams } from '../background-beams';
import { BackgroundGradientAnimation } from '../ui/background-gradient-animation';

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
        <BackgroundGradientAnimation
          containerClassName="absolute inset-0 opacity-60"
          firstColor="59, 130, 246"
          secondColor="139, 92, 246"
          thirdColor="59, 130, 246"
          fourthColor="139, 92, 246"
          fifthColor="59, 130, 246"
          pointerColor="139, 92, 246"
          interactive={false}
        />
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
              Développeur{' '}
              <span className="gradient-text">Web</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Je me suis passionné pour le développement web et je suis en constante évolution grâce à mon envie d\'apprendre et à ma motivation. Je suis autonome et je suis à l\'écoute des actualités du monde informatique ainsi que son évolution.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-4 pt-8"
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Découvrir mes projets
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-gray-600 hover:text-primary transition-colors"
          >
            <span className="text-sm">Défiler</span>
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
