import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../data';

export const TechStack: React.FC = () => {
  const { techStack } = portfolioData;

  return (
    <section id="tech-stack" className="py-2 md:py-4">
      <SectionHeader highlight="Cor" text="e tech stack" />

      {/* Grid of categories: Stacks on mobile, 2 columns on md/lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {techStack.map((category, catIdx) => (
          <motion.div
            key={category.title}
            className="bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 md:p-6 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
          >
            {/* Soft decorative color glow */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* Category Title */}
            <h3 className="font-display text-base font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-5 bg-emerald-500 rounded-full mr-2.5 inline-block" />
              {category.title}
            </h3>

            {/* Tech Items List */}
            <div className="space-y-2.5">
              {category.items.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex flex-row items-center justify-between gap-4 py-1.5 px-2.5 rounded-xl hover:bg-neutral-950/40 transition-colors duration-200 group"
                >
                  {/* Technology Name */}
                  <span className="font-sans font-medium text-neutral-300 group-hover:text-emerald-400 transition-colors text-xs md:text-sm">
                    {tech.name}
                  </span>

                  {/* Level Indicator - 10 Horizontal Pill Segments */}
                  <div className="flex items-center gap-1 shrink-0" aria-label={`Skill level ${tech.level} out of 10`}>
                    {Array.from({ length: 10 }).map((_, segmentIdx) => {
                      const isActive = segmentIdx < tech.level;
                      return (
                        <motion.div
                          key={segmentIdx}
                          className={`h-1.5 w-1.5 sm:w-2 rounded-[1px] transition-all duration-500 ${
                            isActive
                              ? 'bg-emerald-500 shadow-[0_0_5px_rgba(34,197,94,0.3)] group-hover:bg-emerald-400 group-hover:shadow-[0_0_7px_rgba(52,211,153,0.45)]'
                              : 'bg-neutral-850 group-hover:bg-neutral-800'
                          }`}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            type: 'spring', 
                            stiffness: 150, 
                            damping: 15,
                            delay: (catIdx * 0.05) + (segmentIdx * 0.03) 
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
