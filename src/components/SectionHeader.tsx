import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  highlight: string;
  text: string;
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ highlight, text, id }) => {
  return (
    <div id={id} className="relative mb-8 md:mb-12 flex items-center select-none">
      <h2 className="font-display fluid-h2 font-bold tracking-tight text-white flex items-center">
        <span className="text-emerald-500 mr-0.5 relative">
          {highlight}
          <motion.span 
            className="absolute bottom-0 left-0 h-[2px] bg-emerald-500"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        </span>
        <span className="text-gray-100">{text}</span>
      </h2>
      <div className="ml-4 h-[1px] flex-1 bg-gradient-to-r from-neutral-800 to-transparent" />
    </div>
  );
};
