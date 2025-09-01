export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';
}

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'devops' | 'tools' | 'other';
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}
