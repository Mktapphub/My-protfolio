import React from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../data';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

export const Timeline: React.FC = () => {
  const { experience } = portfolioData;

  return (
    <div className="py-2 md:py-4 max-w-3xl mx-auto space-y-10">
      
      {/* CENTERED HEADER */}
      <div className="text-center mb-10">
        <SectionHeader highlight="Work" text=" Experience" />
        <p className="text-neutral-400 text-sm md:text-base mt-2 max-w-xl mx-auto font-sans leading-relaxed">
          A brief overview of my professional roles, leadership initiatives, and technical contributions in the developer community.
        </p>
      </div>

      {/* TIMELINE COLUMN: EXPERIENCE */}
      <div className="relative border-l-2 border-neutral-850 pl-6 md:pl-8 ml-3 md:ml-6 space-y-12">
        {experience.map((exp, idx) => (
          <motion.div 
            key={exp.id}
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
                {exp.period}
              </span>
              <span className="text-sm font-display font-medium text-neutral-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                {exp.location}
              </span>
            </div>

            {/* Role Title & Company */}
            <h3 className="font-display text-lg md:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
              {exp.role}
            </h3>
            <p className="text-xs font-semibold text-neutral-450 uppercase tracking-wide mb-4 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-neutral-500" />
              {exp.company}
            </p>

            {/* Narrative description */}
            <p className="text-neutral-450 text-xs md:text-sm font-sans leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Key Bullet Highlights */}
            {exp.bullets.length > 0 && (
              <ul className="space-y-2.5 mb-5 pl-1">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm">
                    <span className="text-emerald-500 font-bold text-sm shrink-0 mt-0.5">•</span>
                    <span className="text-neutral-450 leading-relaxed font-sans">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Badges Row */}
            {exp.techUsed.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-2">
                {exp.techUsed.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-[10px] md:text-xs font-mono bg-neutral-950 border border-neutral-850 hover:border-emerald-500/15 text-neutral-400 hover:text-emerald-400 px-2.5 py-1 rounded-md transition-all duration-300 select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>

    </div>
  );
};
