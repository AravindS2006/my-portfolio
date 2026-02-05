import React from 'react';

export interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  image?: string;
  stats?: string;
}

export interface Experience {
  role: string;
  company?: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
  icon: React.ComponentType<any>;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image?: string;
}