'use client';

import { motion } from 'framer-motion';
import { hobbies } from '@/lib/data/hobbies';
import * as Icons from 'lucide-react';
import { CometCard } from '../ui/comet-card';
import { Boxes } from '../ui/background-boxes';

type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;

export function Hobbies() {
  const getIcon = (iconName: string): LucideIcon => {
    const iconMap: Record<string, LucideIcon> = {
      'Globe': Icons.Globe,
      'Wand2': Icons.Wand2,
      'Trophy': Icons.Trophy,
      'Music': Icons.Music,
    };
    return iconMap[iconName] || Icons.Package;
  };

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
    <section id="hobbies" className="section-padding relative overflow-hidden">
      <Boxes />
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative mx-auto w-fit"
          style={{
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(8px)',
            padding: '1.5rem 3rem',
            borderRadius: '9999px',
            boxShadow: '0 0 0 20px rgba(255,255,255,0.5), 0 0 0 40px rgba(255,255,255,0.25), 0 0 0 60px rgba(255,255,255,0.1)',
            pointerEvents: 'none',
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Passions & Loisirs
          </h2>
          <p className="text-xl text-gray-600">
            Équilibre entre passion professionnelle et intérêts personnels
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 [&>*]:origin-center"
        >
          {hobbies.map((hobby) => {
            const Icon = getIcon(hobby.icon);

            return (
              <motion.div
                key={hobby.id}
                variants={itemVariants}
              >
                <CometCard className="h-full w-full rounded-2xl border border-gray-200 bg-transparent transition-all duration-300 hover:shadow-2xl hover:border-primary/50">
                  <div className="group flex flex-col h-full bg-white rounded-2xl p-6">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center flex-shrink-0">
                        <Icon size={32} className="text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {hobby.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CometCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
