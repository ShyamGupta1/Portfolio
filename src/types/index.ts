export interface ProjectType {
  title: string;
  category: string; // 'personal' | 'academic' | 'hackathon'
  description: string;
  technologies: string[];
  image: string;
  githubLink?: string;
  demoLink?: string;
}

export interface ExperienceType {
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface HackathonType {
  name: string;
  date: string;
  duration: string;
  teamSize: number;
  projectName: string;
  description: string;
  techStack: string[];
  myRole: string;
  position?: string;
  githubLink?: string;
  demoLink?: string;
}

export interface CertificationType {
  name: string;
  issuer: string;
  date: string;
  skills?: string[];
  link?: string;
}

export interface AwardType {
  name: string;
  presenter: string;
  date: string;
  description: string;
}

export interface AchievementType {
  title: string;
  description: string;
}

export interface ExtracurricularType {
  name: string;
  category: string;
  description: string;
  achievements?: string[];
}