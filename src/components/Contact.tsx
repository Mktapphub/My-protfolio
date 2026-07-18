import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  Briefcase, 
  Sparkles, 
  FileText, 
  CheckCircle2, 
  Coffee, 
  GraduationCap, 
  Send,
  Terminal
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { portfolioData } from '../data';

interface DraftTemplate {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description: string;
  fields: { key: string; label: string; placeholder: string; type: string }[];
  generateText: (fields: Record<string, string>) => string;
}

export const Contact: React.FC = () => {
  const { contact } = portfolioData;
  const linkedinUrl = "https://www.linkedin.com/in/minhajul-khan-09130933b/";
  
  const [copied, setCopied] = useState(false);
  const [mailTriggered, setMailTriggered] = useState(false);
  const [activeTemplateId, setActiveTemplateId] = useState<string>('collab');
  
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({
    yourName: '',
    company: '',
    role: '',
    tech: '',
    projectType: '',
    timeline: '',
    budget: '',
    organization: '',
    topic: '',
    interest: '',
    medium: 'Virtual Zoom/Meet'
  });

  const templates: DraftTemplate[] = [
    {
      id: 'collab',
      name: 'Project Collab',
      icon: Sparkles,
      description: 'Request a custom Full-Stack Web or Android app development build.',
      fields: [
        { key: 'yourName', label: 'Your Name / Org', placeholder: 'e.g. Sarah Jennings', type: 'text' },
        { key: 'projectType', label: 'Project Type', placeholder: 'e.g. Android Mobile App & Web Panel', type: 'text' },
        { key: 'timeline', label: 'Target Timeline', placeholder: 'e.g. 2 Months', type: 'text' },
        { key: 'budget', label: 'Estimated Budget Scope', placeholder: 'e.g. Flexible / Competitive', type: 'text' },
      ],
      generateText: (val) => {
        const name = val.yourName || '[Your Name]';
        const type = val.projectType || 'Full-Stack / Android development';
        const time = val.timeline || 'your requested timeframe';
        const budgetScope = val.budget || 'your budgeted scale';
        return `Hi Minhajul,\n\nMy name is ${name}. I reached out after exploring your portfolio, and I am very interested in collaborating with you on a specialized "${type}" project.\n\nWe are looking to develop this project within ${time} and are operating with a budget scope of "${budgetScope}". Given your robust technical expertise and engineering leadership, I believe you would be an exceptional partner to build this.\n\nI look forward to discussing the system architecture and specifications with you on LinkedIn.\n\nWarm regards,\n${name}`;
      }
    },
    {
      id: 'hiring',
      name: 'Hiring / Career',
      icon: Briefcase,
      description: 'Discuss full-time, contract, or advisory opportunities for your team.',
      fields: [
        { key: 'yourName', label: 'Your Name', placeholder: 'e.g. David Miller', type: 'text' },
        { key: 'company', label: 'Company / Firm', placeholder: 'e.g. TechCorp Solutions', type: 'text' },
        { key: 'role', label: 'Role Title', placeholder: 'e.g. Senior Android Engineer / Tech Lead', type: 'text' },
        { key: 'tech', label: 'Core Technology Stack', placeholder: 'e.g. Kotlin, React, Node.js', type: 'text' },
      ],
      generateText: (val) => {
        const name = val.yourName || '[Your Name]';
        const comp = val.company || '[Company Name]';
        const roleTitle = val.role || 'Software Architect';
        const stack = val.tech || 'Kotlin, React, & Node';
        return `Hi Minhajul,\n\nThis is ${name} from ${comp}. I came across your portfolio and github code bases, and was highly impressed by your engineering background, project builds, and your administrative leadership as President of Binary SUST.\n\nWe are currently sourcing candidates for a "${roleTitle}" role specializing in ${stack}. I would love to connect, share our vision, and explore if this opportunity aligns with your career path.\n\nLet's coordinate a brief sync!\n\nBest,\n${name}`;
      }
    },
    {
      id: 'sust',
      name: 'Binary SUST',
      icon: GraduationCap,
      description: 'Connect regarding university initiatives, events, workshops, or partnerships.',
      fields: [
        { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Professor Rahman', type: 'text' },
        { key: 'organization', label: 'Your Organization', placeholder: 'e.g. CSE Dept / Tech Forum', type: 'text' },
        { key: 'topic', label: 'Inquiry / Event Topic', placeholder: 'e.g. Hackathon Mentor / Tech Seminar', type: 'text' },
      ],
      generateText: (val) => {
        const name = val.yourName || '[Your Name]';
        const org = val.organization || '[Organization / Institution]';
        const eventTopic = val.topic || 'educational workshop';
        return `Hi Minhajul,\n\nI am ${name}, writing on behalf of ${org}.\n\nI am reaching out to you in your capacity as the President of Binary SUST. We are currently planning a "${eventTopic}" and would be delighted to coordinate, partner, or have you share your tech experiences with our community.\n\nPlease let us know if we can schedule a quick brief to discuss this.\n\nSincerely,\n${name}`;
      }
    },
    {
      id: 'casual',
      name: 'Casual Coffee',
      icon: Coffee,
      description: 'Simple knowledge share, tech exchange, or community advice chat.',
      fields: [
        { key: 'yourName', label: 'Your Name', placeholder: 'e.g. Shajib Ahmed', type: 'text' },
        { key: 'interest', label: 'Topic of Interest', placeholder: 'e.g. System Design / Tech Community building', type: 'text' },
        { key: 'medium', label: 'Preferred Mode', placeholder: 'e.g. Virtual Zoom Call / Coffee in Sylhet', type: 'text' },
      ],
      generateText: (val) => {
        const name = val.yourName || '[Your Name]';
        const topic = val.interest || 'technical growth & engineering';
        const mode = val.medium || 'Virtual Zoom Call';
        return `Hi Minhajul,\n\nI'm ${name}. I really admire your engineering journey and your contributions to the developer community in Sylhet.\n\nI would love to grab a cup of coffee (or connect via ${mode}) for a casual, friendly chat to exchange thoughts on "${topic}". Let me know if you have some free cycles in the coming weeks!\n\nCheers,\n${name}`;
      }
    }
  ];

  const activeTemplate = templates.find(t => t.id === activeTemplateId) || templates[0];
  const generatedMessage = activeTemplate.generateText(fieldValues);

  const contactItems = [
    { label: "Current Location", value: contact.location, icon: MapPin, href: `https://maps.google.com/?q=${encodeURIComponent(contact.location)}` },
    { label: "Direct Email", value: contact.email, icon: Mail, href: `mailto:${contact.email}` },
    { label: "GitHub Profile", value: contact.github, icon: Github, href: `https://github.com/${contact.github}` },
    { label: "Twitter Account", value: contact.twitter, icon: Twitter, href: `https://twitter.com/${contact.twitter}` }
  ];

  const handleInputChange = (key: string, value: string) => {
    setFieldValues(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenLinkedIn = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');
  };

  const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(`Inquiry from Portfolio - ${fieldValues.yourName || 'Visitor'}`)}&body=${encodeURIComponent(generatedMessage)}`;

  return (
    <section id="contact" className="py-2 md:py-4">
      <SectionHeader highlight="Let's" text=" connect" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
        
        {/* LEFT COLUMN: Verification & Coordinates */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div className="space-y-4 md:space-y-5">
            <h3 className="font-display font-bold text-xl text-white tracking-tight">
              Let's Connect
            </h3>
            
            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed font-sans">
              Use the Smart Message Drafter on the right to  contact me. 
            </p>

            {/* List of direct coordinates */}
            <ul className="space-y-3.5 font-sans pt-2">
              {contactItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx}>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center space-x-3.5 p-1 rounded-xl hover:bg-neutral-900/60 transition-all border border-transparent hover:border-neutral-850/40"
                    >
                      <div className="p-2.5 bg-neutral-900 text-neutral-500 group-hover:text-emerald-400 group-hover:bg-neutral-950 rounded-xl border border-neutral-850 group-hover:border-emerald-500/10 transition-colors shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-medium text-neutral-500 group-hover:text-emerald-500/60 uppercase tracking-wider transition-colors">
                          {item.label}
                        </span>
                        <span className="text-neutral-300 font-semibold text-sm group-hover:text-white transition-colors">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN: Interactive Message Drafter Hub */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-3xl p-5 md:p-6 shadow-2xl backdrop-blur-md relative flex flex-col space-y-5">
            
            {/* Header with Title & Live Status */}
            <div className="flex items-center justify-between border-b border-neutral-850 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="font-display font-extrabold text-sm md:text-base text-white tracking-tight flex items-center gap-1.5">
                  <Terminal className="w-4 h-4 text-emerald-400" />
                  Smart Message Drafter Hub
                </h4>
              </div>
              <span className="text-[10px] font-mono text-neutral-500 bg-neutral-950 px-2 py-1 rounded-md border border-neutral-850">
                LOCAL_PC_SECURE
              </span>
            </div>

            {/* Template Buttons Selection Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {templates.map((temp) => {
                const Icon = temp.icon;
                const isActive = activeTemplateId === temp.id;
                return (
                  <button
                    key={temp.id}
                    onClick={() => setActiveTemplateId(temp.id)}
                    className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-1.5 group ${
                      isActive 
                        ? 'bg-[#0a66c2]/15 border-[#0a66c2]/40 text-white shadow-lg' 
                        : 'bg-neutral-950/40 border-neutral-850/60 text-neutral-400 hover:text-neutral-200 hover:border-neutral-800'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-transform group-hover:scale-110 ${isActive ? 'text-[#0a66c2]' : 'text-neutral-500 group-hover:text-neutral-400'}`} />
                    <span className="text-[11px] font-bold font-display tracking-tight leading-none">
                      {temp.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Template Description Banner */}
            <p className="text-[11px] text-neutral-400 font-sans italic bg-neutral-950/40 p-2.5 rounded-lg border border-neutral-850/30">
              💡 {activeTemplate.description}
            </p>

            {/* Interactive Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
              {activeTemplate.fields.map((field) => (
                <div key={field.key} className="flex flex-col space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={fieldValues[field.key] || ''}
                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                    placeholder={field.placeholder}
                    className="w-full h-10 px-3 bg-neutral-950 border border-neutral-850 focus:border-[#0a66c2]/60 rounded-xl text-xs text-white placeholder-neutral-600 focus:outline-none transition-colors"
                  />
                </div>
              ))}
            </div>

            {/* Interactive Live Preview Box */}
            <div className="flex flex-col space-y-1.5 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-emerald-400/80" />
                  Live Message Draft Preview
                </span>
                <span className="text-[9px] font-mono text-emerald-500/70 uppercase">
                  Real-time formatting
                </span>
              </div>
              
              <div className="relative group/preview">
                <pre className="w-full min-h-[160px] max-h-[220px] overflow-y-auto p-4 bg-neutral-950 text-neutral-300 font-sans text-[11px] md:text-xs leading-relaxed rounded-2xl border border-neutral-850 whitespace-pre-wrap select-all">
                  {generatedMessage}
                </pre>
                
                {/* Copy button overlay */}
                <button
                  onClick={handleCopyMessage}
                  className="absolute right-3.5 bottom-3.5 p-2 bg-neutral-900/90 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 hover:text-white rounded-lg cursor-pointer transition-colors shadow-lg flex items-center gap-1 text-[10px] font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      COPY
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Actions panel */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 border-t border-neutral-850/60 pt-4">
              
              {/* Primary: Copy + LinkedIn Redirect */}
              <motion.button
                onClick={handleOpenLinkedIn}
                className="flex-1 min-h-[48px] px-4 inline-flex items-center justify-center gap-2 bg-[#0a66c2] hover:bg-[#0055a5] active:bg-[#004485] text-white font-display font-semibold rounded-xl cursor-pointer transition-colors text-xs md:text-sm shadow-md"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <Linkedin className="w-4 h-4 fill-white shrink-0" />
                Copy & Connect on LinkedIn
                <ExternalLink className="w-3.5 h-3.5 opacity-60 shrink-0" />
              </motion.button>

              {/* Secondary: Direct Mail Link */}
              <motion.a
                href={mailtoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMailTriggered(true);
                  setTimeout(() => setMailTriggered(false), 2000);
                }}
                className="min-h-[48px] px-4 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-900 border border-neutral-850 hover:border-neutral-700 text-neutral-300 hover:text-white font-display font-semibold rounded-xl cursor-pointer transition-colors text-xs md:text-sm"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {mailTriggered ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    Mail Client Triggered
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 shrink-0" />
                    Send Direct Email
                  </>
                )}
              </motion.a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};