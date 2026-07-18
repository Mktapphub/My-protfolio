import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, FolderGit2, Mail } from 'lucide-react';
import { portfolioData } from '../data';
import { TerminalSimulator } from './TerminalSimulator';

export const Hero: React.FC = () => {
  const socialLinks = [
    { href: `https://github.com/${portfolioData.contact.github}`, icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/minhajul-khan-09130933b/", icon: Linkedin, label: "LinkedIn" },
    { href: `https://x.com/${portfolioData.contact.twitter}`, icon: Twitter, label: "Twitter" }
  ];

  return (
    <section className="relative py-1 md:py-2 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
      {/* Interactive Terminal Block - Left (Column span 5 on desktop) */}
      <motion.div 
        className="lg:col-span-5"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <TerminalSimulator />
      </motion.div>

      {/* Hero Bio Card - Right (Column span 7 on desktop) */}
      <motion.div 
        className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 p-6 md:p-8 lg:p-10 rounded-3xl shadow-2xl flex flex-col justify-between relative overflow-hidden backdrop-blur-md"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
      >
        {/* Subtle green ambient light flare */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div>
          {/* Tag Header: Code tag */}
          <div className="flex items-center space-x-2 mb-6">
            <span className="font-mono text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/30 px-3 py-1.5 rounded-full flex items-center gap-1 select-none shadow-sm">
              <span className="text-emerald-500 font-bold">&lt;code&gt;</span>
              build information gathered
              <span className="text-emerald-500 font-bold">&lt;/code&gt;</span>
              <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse" />
            </span>
          </div>

          {/* Title & Social Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h1 className="font-display fluid-h1 font-bold text-white tracking-tight">
              Minhajul <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">Khan</span>
            </h1>
            
            {/* Social Icons */}
            <div className="flex items-center space-x-3.5">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2.5 text-neutral-400 hover:text-emerald-400 bg-neutral-950/60 border border-neutral-800 hover:border-emerald-500/30 rounded-xl transition-all shadow-sm"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Biography texts */}
          <div className="space-y-4 md:space-y-5 text-neutral-350 font-sans leading-relaxed">
            <p className="text-sm md:text-base">
              {portfolioData.summary}
            </p>
            <p className="text-sm text-neutral-450 leading-relaxed">
              {portfolioData.additionalSummary}
            </p>
          </div>
        </div>

        {/* Buttons - Touch-friendly: Height min 44px, optimized spacing */}
        <div className="mt-8 pt-6 border-t border-neutral-800/60 flex flex-col sm:flex-row gap-4">
          <motion.a 
            href="#contact"
            className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-neutral-950 font-display font-semibold rounded-2xl shadow-lg transition-colors select-none text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail className="w-4 h-4 text-neutral-950" />
            Contact
          </motion.a>

          <motion.a 
            href="#work"
            className="flex-1 min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-white font-display font-medium rounded-2xl transition-colors select-none text-sm cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FolderGit2 className="w-4 h-4 text-neutral-400" />
            Show My Projects
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};
