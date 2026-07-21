import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../data';
import { Certificate } from '../types';
import { 
  Award, 
  ExternalLink, 
  CheckCircle2, 
  Calendar, 
  Hash,
  Globe,
  Loader2
} from 'lucide-react';

export const Certificates: React.FC = () => {
  const certificates: Certificate[] = (portfolioData as any).certificates || [];

  // Render clean brand placeholders based on the issuer
  const renderIssuerLogo = (preset: string) => {
    switch (preset) {
      case 'meta':
        return (
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 select-none font-sans font-black text-xs shrink-0">
            ∞
          </div>
        );
      case 'aws':
        return (
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-mono text-[9px] font-black select-none shrink-0">
            AWS
          </div>
        );
      case 'google':
        return (
          <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 font-sans font-bold text-xs select-none shrink-0">
            G
          </div>
        );
      case 'microsoft':
        return (
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 font-sans font-bold text-[8px] uppercase select-none shrink-0">
            MSFT
          </div>
        );
      case 'fcc':
        return (
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-sans text-[10px] select-none shrink-0">
            (fcc)
          </div>
        );
      default:
        return (
          <div className="w-8 h-8 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-emerald-400 select-none shrink-0">
            <Award className="w-4 h-4" />
          </div>
        );
    }
  };

  // State maps to handle image loads and errors gracefully
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageLoad = (certId: string) => {
    setLoadedImages(prev => ({ ...prev, [certId]: true }));
  };

  const handleImageError = (certId: string) => {
    setImageErrors(prev => ({ ...prev, [certId]: true }));
  };

  return (
    <div className="py-12 max-w-6xl mx-auto px-4 space-y-10">
      
      {/* Centered Header */}
      <div className="text-center mb-10">
        <SectionHeader highlight="Licenses &" text=" Certifications" />
        <p className="text-neutral-400 text-sm md:text-base -mt-6 max-w-xl mx-auto font-sans leading-relaxed">
        
        </p>
      </div>

      {/* Bento Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, idx) => {
          const hasUrl = !!cert.credentialUrl;
          
          // MicroLink API screenshots the actual verification link live
          const screenshotUrl = hasUrl 
            ? `https://api.microlink.io/?url=${encodeURIComponent(cert.credentialUrl!)}&screenshot=true&embed=screenshot.url`
            : null;
          
          const isImageLoaded = loadedImages[cert.id];
          const hasImageError = imageErrors[cert.id];

          return (
            <motion.div
              key={cert.id}
              className="bg-neutral-900/40 border border-neutral-850 hover:border-emerald-500/25 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 group shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              {/* Card Browser Preview Window */}
              <div className="aspect-video w-full bg-neutral-950 border-b border-neutral-850 relative overflow-hidden flex flex-col">
                
                {/* Browser top navigation bar details */}
                <div className="h-7 bg-neutral-900/80 px-3 flex items-center justify-between border-b border-neutral-950/80 shrink-0 select-none">
                  <div className="flex gap-1.5 items-center">
                    <span className="w-2 h-2 rounded-full bg-red-500/40 border border-red-500/20 group-hover:bg-red-500 transition-colors" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/40 border border-yellow-500/20 group-hover:bg-yellow-500 transition-colors" />
                    <span className="w-2 h-2 rounded-full bg-green-500/40 border border-green-500/20 group-hover:bg-green-500 transition-colors" />
                  </div>
                  <div className="bg-neutral-950/80 text-[9px] text-neutral-500 px-3 py-0.5 rounded-md font-mono truncate max-w-[150px] flex items-center gap-1">
                    <Globe className="w-2.5 h-2.5 shrink-0 text-neutral-600" />
                    {hasUrl ? cert.credentialUrl!.replace(/^https?:\/\/(www\.)?/, '').split('/')[0] : 'credential.verify'}
                  </div>
                  <div className="w-10" />
                </div>

                {/* Main Viewport Content */}
                <div className="flex-1 relative overflow-hidden flex items-center justify-center">
                  
                  {hasUrl && screenshotUrl && !hasImageError ? (
                    <div className="absolute inset-0 w-full h-full">
                      {/* Live loading skeleton spinner */}
                      {!isImageLoaded && (
                        <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-center gap-2 z-10">
                          <Loader2 className="w-5 h-5 text-emerald-500 animate-spin" />
                          <span className="text-[9px] text-neutral-500 font-mono uppercase tracking-widest">Loading Live View...</span>
                        </div>
                      )}
                      
                      <img
                        src={screenshotUrl}
                        alt={`Certificate preview of ${cert.name}`}
                        className={`w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => handleImageLoad(cert.id)}
                        onError={() => handleImageError(cert.id)}
                        referrerPolicy="no-referrer"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <span className="px-3 py-1 rounded-full bg-emerald-500 text-neutral-950 text-[10px] font-extrabold flex items-center gap-1 shadow-lg">
                          <ExternalLink className="w-3 h-3 stroke-[2.5]" />
                          Inspect Link
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Default Fallback Certificate Frame if URL screenshot is not available */
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 p-4 flex flex-col justify-between border-2 border-dashed border-neutral-800/40 m-2 rounded-2xl relative">
                      <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                          <span className="text-[7px] font-mono uppercase tracking-widest text-emerald-500 font-bold">Credential Document</span>
                          <h5 className="font-serif italic text-[10px] text-neutral-300">Certificate of Completion</h5>
                        </div>
                        <Award className="w-4 h-4 text-emerald-500/50" />
                      </div>

                      <div className="text-center space-y-1">
                        <span className="text-[7px] text-neutral-500 uppercase tracking-widest block">Awarded to</span>
                        <span className="font-display font-bold text-xs text-white tracking-wide block">Minhajul Khan</span>
                        <div className="h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent w-2/3 mx-auto" />
                        <span className="text-[8px] text-neutral-400 block px-4 truncate">
                          for completing {cert.name}
                        </span>
                      </div>

                      <div className="flex justify-between items-end text-[7px] text-neutral-500 font-mono">
                        <div>
                          <p className="border-b border-neutral-800 pb-0.5 px-1">{cert.issuer}</p>
                          <p className="pt-0.5 uppercase tracking-widest">Authorized Issuer</p>
                        </div>
                        <div className="text-right">
                          <p className="border-b border-neutral-800 pb-0.5 px-1">{cert.issueDate}</p>
                          <p className="pt-0.5 uppercase tracking-widest">Date Conferred</p>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>

              {/* Text metadata block */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    {renderIssuerLogo(cert.logoUrl || 'other')}
                    <div className="text-xs font-semibold text-neutral-300 font-sans">
                      {cert.issuer}
                    </div>
                  </div>

                  <h4 className="font-display font-bold text-sm md:text-base text-white group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2 leading-snug min-h-[44px]">
                    {cert.name}
                  </h4>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-neutral-850/60 text-xs text-neutral-450 font-sans">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-2">
                      <Hash className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                      <span className="font-mono text-[10px] bg-neutral-950 px-1.5 py-0.5 rounded border border-neutral-850/60 truncate">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}
                </div>

                {hasUrl && (
                  <div className="pt-2">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-850 hover:border-neutral-750 text-neutral-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold transition-all cursor-pointer select-none"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
};