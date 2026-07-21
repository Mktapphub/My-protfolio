import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../data';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData as any;

  return (
    <div className="py-2 md:py-4 max-w-3xl mx-auto space-y-10">
      
      {/* CENTERED HEADER */}
      <div className="text-center mb-10">
        <SectionHeader highlight="Edu" text="cation" />
        <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-xl mx-auto font-sans leading-relaxed">
          My Academic Profile
        </p>
      </div>

      {/* TIMELINE COLUMN: EDUCATION */}
      <div className="relative border-l-2 border-neutral-850 pl-6 md:pl-8 ml-3 md:ml-6 space-y-12">
        {education.map((edu: any, idx: number) => (
          <motion.div 
            key={edu.id}
            className="relative group"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {/* Timeline Dot Indicator */}
            <div className="absolute -left-[32px] md:-left-[40px] top-1.5 w-4.5 h-4.5 rounded-full bg-neutral-900 border-2 border-emerald-500 group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(34,197,94,0.3)]" />

            {/* Year Period Badge */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="font-mono text-xs font-semibold text-neutral-950 bg-emerald-400 border border-emerald-300 px-3 py-1 rounded-full flex items-center gap-1 select-none shadow-md">
                <Calendar className="w-3 h-3 stroke-[2.5]" />
                {edu.period}
              </span>
              <span className="text-sm font-display font-medium text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                {edu.location}
              </span>
            </div>

            {/* Degree Title */}
            <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {edu.degree}
            </h3>
            
            {/* Institution Name */}
            <p className="text-xs font-semibold text-neutral-450 uppercase tracking-wide mb-4 flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-neutral-500" />
              {edu.institution}
            </p>

            {/* Description Narrative */}
            <p className="text-neutral-450 text-xs md:text-sm font-sans leading-relaxed">
              {edu.description}
            </p>

          </motion.div>
        ))}
      </div>

    </div>
  );
};