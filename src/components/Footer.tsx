import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioData } from '../data';

export const Footer: React.FC = () => {
  const currentYear = 2026; // Match standard design specification date

  const socialLinks = [
    { href: `https://github.com/${portfolioData.contact.github}`, icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/minhajul-khan-09130933b/", icon: Linkedin, label: "LinkedIn" },
    { href: `https://x.com/${portfolioData.contact.twitter}`, icon: Twitter, label: "Twitter" }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-16 border-t border-neutral-850 bg-neutral-950/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright and scrolling action */}
        <div className="flex items-center gap-2">
          <p className="text-neutral-500 font-sans text-xs md:text-sm">
            &copy; {currentYear} {portfolioData.name}. All rights reserved.
          </p>
          <button 
            onClick={handleScrollToTop} 
            className="text-[10px] text-emerald-500/70 hover:text-emerald-400 font-mono underline uppercase tracking-wider ml-1 cursor-pointer transition-colors"
          >
            Back to top
          </button>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center space-x-4">
          {socialLinks.map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-neutral-500 hover:text-emerald-500 transition-colors p-2"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4 stroke-[2]" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
