'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { counters } from '@/lib/data/contact';
import * as Icons from 'lucide-react';

type LucideIcon = React.ComponentType<{ size?: number; className?: string }>;

function AnimatedCounter({ value, duration }: { value: number; duration: number }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      setDisplayValue(Math.floor(progress * value));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <>{displayValue}</>;
}

export function Counters() {
  const [isVisible, setIsVisible] = useState(false);

  const getIcon = (iconName: string): LucideIcon => {
    const iconMap: Record<string, LucideIcon> = {
      'User': Icons.User,
      'Briefcase': Icons.Briefcase,
      'GraduationCap': Icons.GraduationCap,
      'Globe': Icons.Globe,
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
    <section id="counters" className="section-padding bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container-custom">
        <motion.div
          onViewportEnter={() => setIsVisible(true)}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {counters.map((counter) => {
            const Icon = getIcon(counter.icon);
            return (
              <motion.div
                key={counter.id}
                variants={itemVariants}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center">
                    <Icon size={32} className="text-white" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {isVisible ? (
                    <AnimatedCounter value={counter.value} duration={2.5} />
                  ) : (
                    '0'
                  )}
                </div>
                <p className="text-gray-300">
                  {counter.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
