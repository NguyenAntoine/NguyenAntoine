export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  url: string;
  isPrivate?: boolean;
}

export interface Job {
  id: string;
  company: string;
  position: string;
  description: string;
  duration: string;
  startDate: string;
  endDate?: string;
  logo: string;
  isCurrent?: boolean;
  technologies: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  personName: string;
  personRole: string;
  personLinkedIn?: string;
  companyName: string;
  companyLogo?: string;
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Counter {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
