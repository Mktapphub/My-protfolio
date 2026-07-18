import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Calendar, 
  Flag, 
  Flame, 
  GraduationCap, 
  Briefcase,
  Mail,
  Github
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { portfolioData, MINHAJUL_PROFILE } from '../data';

export const About: React.FC = () => {
  const { paragraphs, quickFacts } = portfolioData.about;

  // Map icon strings to actual Lucide component icons
  const iconMap: Record<string, any> = {
    MapPin: MapPin,
    Calendar: Calendar,
    Flag: Flag,
    Flame: Flame,
    GraduationCap: GraduationCap,
    Briefcase: Briefcase,
    Mail: Mail,
    Github: Github,
  };

  return (
    <section id="about" className="py-2 md:py-4">
      <SectionHeader highlight="Ab" text="out me" />

      {/* Main Container - grid stacks on mobile, splits into 5:4 on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
        {/* Left Side: Biography paragraphs */}
        <motion.div 
          className="lg:col-span-7 space-y-6 text-neutral-300 font-sans leading-relaxed text-sm md:text-base bg-neutral-900/40 p-6 md:p-8 rounded-3xl border border-neutral-850"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-neutral-400">
              {p}
            </p>
          ))}
        </motion.div>

        {/* Right Side: Profile Image & Quick Facts Sidebar Box */}
        <motion.div 
          className="lg:col-span-5 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Circular Profile Image with Glowing Green Border Ring */}
          <div className="relative group select-none">
            <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl group-hover:bg-emerald-500/30 transition-colors duration-500" />
            <div className="relative p-1.5 bg-neutral-900 border-2 border-emerald-500/20 rounded-full group-hover:border-emerald-500/55 transition-colors duration-500">
              <img 
                src={MINHAJUL_PROFILE} 
                alt="Minhajul Khan profile portrait" 
                referrerPolicy="no-referrer"
                className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover shadow-2xl border-2 border-neutral-900"
              />
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="w-full bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 md:p-8 shadow-xl backdrop-blur-md relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-emerald-500 to-emerald-600" />
            <h3 className="font-display text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-6 ml-2">
              Quick Facts
            </h3>
            
            <ul className="space-y-4 font-sans text-xs md:text-sm">
              {quickFacts.map((fact, idx) => {
                const IconComponent = iconMap[fact.icon];
                return (
                  <li 
                    key={idx} 
                    className="flex items-start space-x-4 p-2 rounded-xl hover:bg-neutral-950/60 transition-colors group border border-transparent hover:border-neutral-850/40"
                  >
                    <div className="p-2 bg-neutral-950 text-emerald-500 group-hover:text-emerald-400 group-hover:bg-neutral-900 rounded-lg border border-neutral-850 transition-colors shrink-0">
                      {IconComponent && <IconComponent className="w-4 h-4 stroke-[2]" />}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-medium text-neutral-500 uppercase tracking-wide group-hover:text-emerald-500/60 transition-colors">
                        {fact.label}
                      </span>
                      <span className="text-neutral-300 font-semibold mt-0.5">
                        {fact.value}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
