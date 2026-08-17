export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  details: string[];
}

export interface SkillItem {
  name: string;
  level: number;
  category: 'design' | 'marketing' | 'tool' | 'soft';
  icon?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ExperienceItem {
  title: string;
  duration: string;
  description: string;
  highlights: string[];
}


