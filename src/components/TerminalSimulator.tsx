import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Terminal, CheckCircle2, ChevronRight, FileCode, Database, Cpu } from 'lucide-react';

interface Tab {
  id: string;
  filename: string;
  icon: typeof FileCode;
  language: string;
  content: string[];
}

export const TerminalSimulator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('profile');
  const [isBuilding, setIsBuilding] = useState<boolean>(false);
  const [buildStep, setBuildStep] = useState<number>(0);
  const [buildLogs, setBuildLogs] = useState<string[]>([]);
  const [completed, setCompleted] = useState<boolean>(false);

  const tabs: Tab[] = [
    {
      id: 'profile',
      filename: 'minhajul.json',
      icon: FileCode,
      language: 'json',
      content: [
        '{',
        '  "developer": "Minhajul Khan",',
        '  "role": "Full Stack Engineer",',
        '  "focus": ["Scalable Systems", "AI Integrations"],',
        '  "coffeeToCodeRatio": "1.42",',
        '  "loves": ["Clean Architecture", "Tailwind CSS", "React"],',
        '  "status": "Ready for high-impact roles"',
        '}'
      ]
    },
    {
      id: 'query',
      filename: 'skills.sql',
      icon: Database,
      language: 'sql',
      content: [
        'SELECT name, proficiency_level',
        'FROM core_technologies',
        'WHERE category IN (\'Backend\', \'Frontend\')',
        'ORDER BY ranking DESC;',
        '',
        '-- Outputs: React, Node.js, Express, Postgres'
      ]
    },
    {
      id: 'build',
      filename: 'deploy.sh',
      icon: Cpu,
      language: 'shell',
      content: [
        '# Interactive CLI Pipeline',
        '# Click the Run button above',
        './pipeline.sh --env=production'
      ]
    }
  ];

  const triggerBuild = () => {
    if (isBuilding) return;
    setIsBuilding(true);
    setCompleted(false);
    setBuildStep(0);
    setBuildLogs(['$ ./pipeline.sh --env=production']);
    setActiveTab('build');
  };

  const resetBuild = () => {
    setIsBuilding(false);
    setBuildStep(0);
    setBuildLogs([]);
    setCompleted(false);
  };

  const steps = [
    'Initializing production pipeline...',
    'Analyzing bundle size & chunk weights...',
    'Transpiling TypeScript sources via esbuild...',
    'Running strict linter validations...',
    'Bundling client-side bundles & static assets...',
    'Deploying package to serverless secure container...',
    'Deployment successful!'
  ];

  useEffect(() => {
    if (!isBuilding) return;

    if (buildStep < steps.length) {
      const timer = setTimeout(() => {
        setBuildLogs((prev) => [...prev, `[info] ${steps[buildStep]}`]);
        setBuildStep((prev) => prev + 1);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setCompleted(true);
        setIsBuilding(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isBuilding, buildStep]);

  const activeContent = tabs.find((t) => t.id === activeTab);

  return (
    <div id="interactive-terminal" className="w-full bg-[#0a0a0a]/90 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col font-mono text-xs md:text-[13px] h-[340px] md:h-[380px] select-none transition-all duration-300 hover:border-emerald-500/20">
      
      {/* Top Header/Window control bar */}
      <div className="bg-neutral-950/80 px-4 py-3 border-b border-neutral-900 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-neutral-500 text-[11px] ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-emerald-500" /> bash (minhajul-dev)
          </span>
        </div>
        
        {/* Interactive Controls */}
        <div className="flex items-center space-x-2">
          {activeTab === 'build' && completed ? (
            <button
              onClick={resetBuild}
              className="px-2 py-1 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 rounded-md text-neutral-400 hover:text-white transition-all flex items-center gap-1 cursor-pointer text-[10px]"
              title="Reset output"
            >
              <RotateCcw className="w-3 h-3 text-amber-500" /> Reset
            </button>
          ) : (
            <button
              onClick={triggerBuild}
              disabled={isBuilding}
              className={`px-2.5 py-1 bg-emerald-950/50 border border-emerald-900 hover:border-emerald-800 rounded-md text-emerald-400 hover:text-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer text-[10px] ${
                isBuilding ? 'opacity-50 cursor-not-allowed animate-pulse' : ''
              }`}
            >
              <Play className="w-3 h-3 fill-emerald-400/20 text-emerald-400" />
              {isBuilding ? 'Running...' : 'Run Build'}
            </button>
          )}
        </div>
      </div>

      {/* Tabs navigation list */}
      <div className="bg-[#0f0f0f]/60 px-2 flex border-b border-neutral-900 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => !isBuilding && setActiveTab(tab.id)}
              disabled={isBuilding}
              className={`px-3.5 py-2.5 flex items-center gap-1.5 text-[11px] transition-all border-b-2 font-display font-medium ${
                isActive 
                  ? 'bg-[#0a0a0a] border-emerald-500 text-white font-semibold' 
                  : 'border-transparent text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/30'
              } ${isBuilding ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-neutral-500'}`} />
              {tab.filename}
            </button>
          );
        })}
      </div>

      {/* Code / Logs Viewport panel */}
      <div className="flex-1 p-4 overflow-y-auto bg-black/40 text-neutral-300 scrollbar-none relative">
        <AnimatePresence mode="wait">
          {activeTab === 'build' ? (
            <motion.div
              key="logs"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-1.5"
            >
              {buildLogs.map((log, index) => {
                const isCommand = log.startsWith('$');
                const isSuccess = log.includes('successful') || log.includes('Ready');
                return (
                  <div 
                    key={index} 
                    className={`${isCommand ? 'text-emerald-400 font-bold' : isSuccess ? 'text-emerald-400' : 'text-neutral-400'} flex items-start gap-1`}
                  >
                    {!isCommand && <ChevronRight className="w-3 h-3 mt-0.5 text-neutral-600 shrink-0" />}
                    <span className="leading-relaxed">{log}</span>
                  </div>
                );
              })}
              
              {isBuilding && (
                <div className="flex items-center gap-2 text-neutral-500 text-[11px] mt-2 italic animate-pulse">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  compiling assets...
                </div>
              )}

              {completed && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3.5 bg-emerald-950/20 border border-emerald-800/30 rounded-2xl flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="font-bold text-white text-[12px] leading-tight">Pipeline Compiled Successfully</div>
                    <div className="text-[11px] text-emerald-400/80 leading-normal">Minhajul Khan is optimized and ready for production deployment.</div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="code"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-1 font-mono text-neutral-300"
            >
              {activeContent?.content.map((line, idx) => {
                // Quick custom styling based on language and JSON syntax highlights
                let highlightedLine = <span className="text-neutral-300">{line}</span>;
                if (activeTab === 'profile') {
                  const keyMatch = line.match(/"([^"]+)":/);
                  if (keyMatch) {
                    const key = keyMatch[1];
                    const rest = line.substring(line.indexOf(':'));
                    highlightedLine = (
                      <span>
                        <span className="text-emerald-400">"{key}"</span>
                        <span className="text-neutral-500">{rest}</span>
                      </span>
                    );
                  }
                } else if (activeTab === 'query') {
                  if (line.startsWith('--')) {
                    highlightedLine = <span className="text-neutral-500 italic">{line}</span>;
                  } else {
                    const parts = line.split(/(SELECT|FROM|WHERE|IN|ORDER BY|DESC)/i);
                    highlightedLine = (
                      <span>
                        {parts.map((p, pIdx) => {
                          const isKeyword = /^(SELECT|FROM|WHERE|IN|ORDER BY|DESC)$/i.test(p);
                          return (
                            <span key={pIdx} className={isKeyword ? 'text-emerald-400 font-bold' : 'text-neutral-300'}>
                              {p}
                            </span>
                          );
                        })}
                      </span>
                    );
                  }
                }
                
                return (
                  <div key={idx} className="flex gap-4">
                    <span className="text-neutral-700 text-right w-5 select-none">{idx + 1}</span>
                    <div className="flex-1 whitespace-pre-wrap">{highlightedLine}</div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tiny status bar */}
      <div className="bg-neutral-950 px-4 py-2 border-t border-neutral-900 text-neutral-600 text-[10px] flex items-center justify-between">
        <span>Lines: {activeTab === 'build' ? buildLogs.length : activeContent?.content.length}</span>
        <span className="text-emerald-600/70">● LIVE COMPILER READY</span>
      </div>
    </div>
  );
};
