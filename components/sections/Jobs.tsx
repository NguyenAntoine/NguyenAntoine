'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { jobs } from '@/lib/data/jobs';
import { Timeline } from '../ui/timeline';

export function Jobs() {
  // Transform jobs data to Timeline format
  const timelineData = jobs.map((job) => ({
    title: job.company,
    content: (
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-primary font-semibold text-lg">
              {job.position}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {job.startDate}{job.endDate ? ` - ${job.endDate}` : ' - Aujourd\'hui'} • {job.duration}
            </p>
          </div>
          {job.isCurrent && (
            <span className="px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-semibold whitespace-nowrap">
              Actuel
            </span>
          )}
        </div>

        <div className="flex gap-4 items-start">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={job.logo}
              alt={job.company}
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed flex-1">
            {job.description}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 pt-2">
          {job.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-primary/10 text-primary dark:bg-primary/20 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="jobs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes expériences
          </h2>
          <p className="text-xl text-gray-600">
            Mon parcours professionnel
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Timeline data={timelineData} />
        </motion.div>
      </div>
    </section>
  );
}
