'use client';

import { motion } from 'framer-motion';
import { hobbies } from '@/lib/data/hobbies';
import * as Icons from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '../ui/3d-card';

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
    <section id="hobbies" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Loisirs
          </h2>
          <p className="text-xl text-gray-600">
            Avoir des moments libres est rafraîchissant
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
        >
          {hobbies.map((hobby) => {
            const Icon = getIcon(hobby.icon);

            return (
              <motion.div
                key={hobby.id}
                variants={itemVariants}
              >
                <CardContainer>
                  <CardBody className="h-auto w-96 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                    <CardItem className="flex items-start gap-6 p-8 w-full">
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
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
