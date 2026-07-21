import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';

// Components
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { TechStack } from './components/TechStack';
import { ProjectShowcase } from './components/ProjectShowcase';
import { Timeline } from './components/Timeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Education } from './components/Education';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Stats', target: 'stats' },
    { label: 'Skills', target: 'tech-stack' },
    { label: 'Work', target: 'work' },
    { label: 'Education', target: 'education' },
    { label: 'Experience', target: 'experience' },
    { label: 'Contact', target: 'contact' },
  ];

  // Monitor Scroll for Navbar Glassmorphic effect and Active Links
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Find current active section
      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const element = document.getElementById(link.target);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.target);
            break;
          }
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (targetId: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetPosition = element.offsetTop - 85; // space for sticky navbar
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#090909] text-neutral-200 overflow-x-hidden antialiased selection:bg-emerald-500 selection:text-neutral-950 font-sans relative">
      
      {/* Glowing Cybernetic Grid Pattern */}
      <div className="fixed inset-0 cyber-grid pointer-events-none z-0 opacity-70" />

      {/* Decorative Global Background Glow Flares (Hardware-Accelerated) */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-500/[0.04] blur-[130px] pointer-events-none z-0" />
      <div className="fixed top-[30%] right-[-5%] w-[45vw] h-[45vw] rounded-full bg-indigo-600/[0.03] blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-600/[0.035] blur-[150px] pointer-events-none z-0" />


      {/* STICKY GLASSMORPHIC HEADER */}
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-[#0c0c0c]/85 border-neutral-850/60 shadow-xl backdrop-blur-md py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo Signature */}
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
              <Terminal className="w-4 h-4 stroke-[2]" />
            </div>
            <span className="font-display text-lg font-bold text-white tracking-tight">
              Minhajul <span className="text-emerald-500 font-extrabold group-hover:text-emerald-400 transition-colors">Khan</span>
            </span>
          </motion.button>

          {/* Desktop Navigation Menu Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => handleScrollTo(link.target)}
                  className={`relative px-4 py-2 text-sm font-display font-semibold cursor-pointer transition-colors ${
                    isActive ? 'text-emerald-400' : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-500 rounded-full"
                      layoutId="activeNavIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Hire Me CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={() => handleScrollTo('contact')}
              className="min-h-[40px] inline-flex items-center gap-1.5 px-4.5 py-2 bg-neutral-900 hover:bg-neutral-850 active:bg-neutral-950 border border-neutral-800 hover:border-neutral-700 text-white hover:text-emerald-400 font-display font-semibold text-xs rounded-xl cursor-pointer shadow-sm transition-all"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </motion.button>
          </div>

          {/* Mobile Menu Toggle Button - Touch-friendly min size 44x44px */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white cursor-pointer"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </header>

      {/* MOBILE FULL-SCREEN NAVIGATION PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-30 md:hidden bg-[#0c0c0c] flex flex-col justify-center px-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.target;
                return (
                  <motion.button
                    key={link.target}
                    onClick={() => handleScrollTo(link.target)}
                    className={`font-display text-2xl font-bold text-left cursor-pointer transition-colors py-2 ${
                      isActive ? 'text-emerald-400' : 'text-neutral-300 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="text-emerald-500/40 text-sm font-mono mr-3">0{idx + 1}.</span>
                    {link.label}
                  </motion.button>
                );
              })}

              <motion.button
                onClick={() => handleScrollTo('contact')}
                className="mt-6 min-h-[48px] inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-neutral-950 font-display font-bold rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 }}
              >
                Contact Minhajul Khan
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MAIN LAYOUT CANVAS */}
      <main className="relative max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-28 pb-10 space-y-8 md:space-y-12 z-10">
        
        {/* HERO BLOCK */}
        <Hero />

        {/* ABOUT ME BLOCK */}
        <About />

        {/* STATS HIGHLIGHTS BLOCK */}
        <Stats />

        {/* TECHNICAL PROFICIENCIES BLOCK */}
        <TechStack />

        {/* PORTFOLIO CASE STUDY BLOCK */}
        <ProjectShowcase />
        {/*  Education block  */}
        <div id="education">
          <Education />
        </div>


        {/* EXPERIENCE TIMELINE BLOCK */}
        {/* Wrapping with experience wrapper to anchor the navbar target */}
        <div id="experience">
          <Timeline />
        </div>

        {/* CONTACT INQUIRIES BLOCK */}
        <Contact />

      </main>

      {/* COMPACT SOCIAL FOOTER */}
      <Footer />

    </div>
  );
}
