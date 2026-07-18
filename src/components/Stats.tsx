import React from 'react';
import { motion } from 'motion/react';
import { Star, Users, Calendar, Code } from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../data';

export const Stats: React.FC = () => {
  const { stats } = portfolioData;

  const iconMap: Record<string, any> = {
    Star: Star,
    Users: Users,
    Calendar: Calendar,
    Code: Code
  };

  return (
    <section id="stats" className="py-2 md:py-4">
      <SectionHeader highlight="St" text="ats" />

      {/* Stats Cards Grid: 1 col on mobile, 2 on sm, 4 on lg */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, idx) => {
          const IconComponent = iconMap[stat.iconName];
          return (
            <motion.div
              key={stat.id}
              className="relative group bg-neutral-900/80 border border-neutral-800 rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-lg hover:border-emerald-500/30 glow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Animated Accent Background Glow on hover */}
              <div className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/[0.02] rounded-2xl transition-colors duration-500" />

              {/* Icon Container with subtle rotation effect */}
              <div className="p-3 bg-neutral-950 rounded-xl text-emerald-500 border border-neutral-850 group-hover:text-emerald-400 group-hover:border-emerald-500/20 group-hover:rotate-6 transition-all duration-300 mb-4 shadow-inner">
                {IconComponent && <IconComponent className="w-6 h-6 stroke-[1.5]" />}
              </div>

              {/* Label */}
              <span className="text-[11px] md:text-xs font-medium text-neutral-500 uppercase tracking-wider mb-2 font-sans group-hover:text-neutral-400 transition-colors">
                {stat.label}
              </span>

              {/* Value with text-shadow element */}
              <span className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
