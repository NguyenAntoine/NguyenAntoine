'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from '@/lib/data/projects';
import { ExternalLink, Lock } from 'lucide-react';
import { CometCard } from '../ui/comet-card';

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes projets
          </h2>
          <p className="text-xl text-gray-600">
            Tous mes projets sont utilisés et sont en production.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
            >
              <CometCard className="h-full w-full rounded-xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col h-full"
                >
                  {/* Image container */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10 flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.isPrivate && (
                        <Lock size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                      )}
                    </div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                      {project.subtitle}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      Voir le projet
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </CometCard>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-center text-gray-500 text-sm mt-8">
          * sources privées
        </p>
      </div>
    </section>
  );
}
