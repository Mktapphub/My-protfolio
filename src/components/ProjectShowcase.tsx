import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ExternalLink, 
  Github, 
  Search,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../data';

export const ProjectShowcase: React.FC = () => {
  const { projects } = portfolioData;
  
  // Showcase Interactive Filter & Search States
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const tabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'application', label: 'Android Application' },
    { id: 'website', label: 'Website' },
    { id: 'webapp', label: 'Web Application' },
    { id: 'ai', label: 'Ai Agent' },
    { id: 'Wordpressplugin', label: 'Wordpress Plugin' }
  ];

  // Dynamic search & category mapping
  const filteredProjects = projects.filter((project) => {
    const matchesTab = activeTab === 'all' || project.category.toLowerCase() === activeTab.toLowerCase();
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Default to showing 4 prominent cards if collapsed
  const displayedProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="work" className="py-2 md:py-4">
      <SectionHeader highlight="My" text=" work" />

      {/* Interactive Controls Panel (Category filter pills & Search) */}
      <div className="mb-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 border-b border-neutral-850 pb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setIsExpanded(false); // Reset expansion to keep UI focused
                }}
                className={`px-4.5 py-2.5 text-[11px] font-display font-bold uppercase tracking-widest rounded-xl transition-all cursor-pointer border select-none ${
                  isActive 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/35 shadow-md shadow-emerald-500/5' 
                    : 'bg-neutral-900/60 text-neutral-400 border-neutral-850 hover:border-neutral-750 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Minimal Search input bar */}
        <div className="relative max-w-md w-full shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsExpanded(false); // Reset expansion during typing
            }}
            placeholder="Search projects by title, stack, keyword..."
            className="w-full min-h-[44px] bg-neutral-900/90 border border-neutral-800 hover:border-neutral-750 focus:border-emerald-500 rounded-2xl pl-11 pr-12 py-2 font-sans text-sm text-white placeholder-neutral-500 outline-none transition-all focus:ring-2 focus:ring-emerald-500/10"
          />
          {searchQuery && (
            <button 
              onClick={() => {
                setSearchQuery('');
                setIsExpanded(false);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white text-xs cursor-pointer font-bold select-none p-1"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid of Project Cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout="position"
              className="group relative bg-neutral-900/90 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/30 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: Math.min(idx * 0.05, 0.2) }}
              whileHover={{ y: -4 }}
            >
              {/* Image Wrapper */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-950">
                {/* Overlay shading */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-60" />
                
                {/* Dynamic tag */}
                <span className="absolute top-3.5 left-3.5 z-20 font-mono text-[9px] font-bold bg-neutral-950/90 border border-neutral-800 text-emerald-400 px-2.5 py-1 rounded-full uppercase tracking-wider select-none">
                  {project.category}
                </span>

                {/* Main Illustration/Mockup Image */}
                <img 
                  src={project.image} 
                  alt={`${project.title} preview illustration`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content Details */}
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white mb-1.5 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neutral-400 text-xs md:text-sm font-sans line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Direct Action Links */}
                  <div className="flex items-center gap-2.5 mb-4" onClick={(e) => e.stopPropagation()}>
                    <a 
                      href={project.demoUrl}
                      onClick={project.demoUrl === '#' ? (e) => e.preventDefault() : undefined}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-h-[36px] h-9 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-neutral-950 border border-emerald-500/25 rounded-xl text-[11px] font-display font-bold uppercase tracking-wider transition-all select-none"
                    >
                      <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                      Live Link
                    </a>
                    {project.codeUrl && (
                      <a 
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 min-h-[36px] h-9 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-neutral-950 hover:bg-neutral-850 border border-neutral-850 hover:border-neutral-700 text-neutral-300 hover:text-white rounded-xl text-[11px] font-display font-bold uppercase tracking-wider transition-all select-none"
                      >
                        <Github className="w-3.5 h-3.5 text-neutral-400" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="pt-3.5 border-t border-neutral-850 flex flex-wrap items-center gap-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tag) => (
                      <span 
                        key={tag}
                        className="text-[9px] font-mono bg-neutral-950 border border-neutral-850 px-2 py-0.5 rounded text-neutral-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* Empty Search Results State */
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-neutral-800 rounded-3xl bg-neutral-900/30 p-8"
        >
          <div className="p-3 bg-neutral-900 rounded-2xl border border-neutral-850 text-neutral-500 mb-4">
            <Search className="w-6 h-6" />
          </div>
          <h4 className="font-display font-bold text-white text-base">No projects match your query</h4>
          <p className="text-sm text-neutral-500 max-w-sm mt-1.5 font-sans leading-relaxed">
            Try adjusting your search keywords or switching categories to browse Minhajul's full portfolio.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveTab('all');
              setIsExpanded(false);
            }}
            className="mt-5 px-4.5 py-2.5 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-750 text-neutral-300 text-xs font-display font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer select-none"
          >
            Reset Filters
          </button>
        </motion.div>
      )}

      {/* Expand / Collapse Button block */}
      {filteredProjects.length > 4 && (
        <div className="mt-12 flex justify-center">
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="min-h-[48px] inline-flex items-center gap-2.5 px-6 py-3 bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 hover:border-neutral-750 text-neutral-200 hover:text-white font-display font-bold rounded-2xl cursor-pointer transition-all shadow-md text-sm select-none"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? (
              <>
                Collapse Project Grid
                <ChevronUp className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
              </>
            ) : (
              <>
                More Projects
                <ChevronDown className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
              </>
            )}
          </motion.button>
        </div>
      )}

    </section>
  );
};
