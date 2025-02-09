export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  additionalInfo: string;
  location: string;
  email: string;
  links: {
    github: string;
    linkedin: string;
  };
  profileImage: string;
}

export interface Skill {
  name: string;
  skills: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}