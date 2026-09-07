export interface SkillGroup {
  group: string;
  tags: string[];
}

export interface ExperienceItem {
  title: string;
  org: string;
  location: string;
  dates: string;
  points: string[];
}

export interface ProjectItem {
  title: string;
  stack: string[];
  description: string;
  link: string | null;
  link_label: string | null;
  demo_link?: string | null;
  demo_label?: string | null;
}

export interface EducationItem {
  degree: string;
  school: string;
}

export interface Links {
  linkedin: string;
  github: string;
  booking: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  status: string;
  summary: string;
  skills: SkillGroup[];
  competencies: string[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  certifications: string[];
  links: Links;
}
