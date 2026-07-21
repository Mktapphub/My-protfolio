export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tech: string[];
  demoUrl?: string;
  codeUrl?: string;
  category: 'frontend' | 'backend' | 'mobile' | 'fullstack';
  stats?: { label: string; value: string }[];
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  iconName: string;
}

export interface TechItem {
  name: string;
  level: number; // out of 10
}

export interface SkillCategory {
  title: string;
  items: TechItem[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  techUsed: string[];
}

export interface ContactInfo {
  location: string;
  email: string;
  github: string;
  twitter: string;
  instagram: string;
}
export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
}