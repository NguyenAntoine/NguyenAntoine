'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '@/lib/data/skills';
import * as Icons from 'lucide-react';
import { cn } from '@/lib/utils';

type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;

export function Intro() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (iconName: string): LucideIcon => {
    const iconMap: Record<string, LucideIcon> = {
      'BookOpen': Icons.BookOpen,
      'Code': Icons.Code,
      'Server': Icons.Server,
    };
    return iconMap[iconName] || Icons.Package;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="intro" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mes Compétences Techniques
          </h2>
          <p className="text-xl text-gray-600">
            Expertise en développement web, gestion de projet et infrastructure DevOps
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {skills.map((skill) => {
            const Icon = getIcon(skill.icon);
            const isHovered = hoveredId === skill.id;
            const isOtherHovered = hoveredId !== null && hoveredId !== skill.id;

            return (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(skill.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  'p-8 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white',
                  'transition-all duration-300 ease-out',
                  isHovered && 'border-primary/50 shadow-lg scale-100',
                  isOtherHovered && 'blur-sm scale-[0.98] opacity-50',
                  'relative overflow-hidden group'
                )}
              >
                <div className="mb-4 relative z-10">
                  <div className={cn(
                    'w-14 h-14 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100',
                    'flex items-center justify-center transition-all duration-300',
                    isHovered && 'from-blue-200 to-purple-200 shadow-md scale-110'
                  )}>
                    <Icon size={28} className="text-blue-600" />
                  </div>
                </div>
                <h3 className={cn(
                  'text-xl font-semibold text-gray-900 mb-3 transition-colors duration-300',
                  isHovered && 'text-primary'
                )}>
                  {skill.title}
                </h3>
                <p className={cn(
                  'text-gray-600 leading-relaxed transition-colors duration-300',
                  isHovered && 'text-gray-800'
                )}>
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
