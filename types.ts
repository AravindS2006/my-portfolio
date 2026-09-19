import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  filterTag: 'hardware' | 'fullstack' | 'algo-ml';
  description: string;
  highlights: string[];
  techStack: string[];
  period?: string;
  funding?: string;
  result?: string;
  githubLink?: string;
  liveLink?: string;
  buildMethodNote?: string;
  badge?: string;
}

export interface ExperienceItem {
  title: string;
  organization: string;
  location: string;
  duration: string;
  highlights: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score: string;
  relevantCoursework: string[];
  note?: string;
}

export interface SkillCategoryTier {
  id: string;
  title: string;
  badge: string;
  badgeColor: string;
  description: string;
  skills: string[];
  transparencyNote?: string;
}

export interface CodingProfileMetric {
  platform: string;
  handle: string;
  url: string;
  highlight: string;
  stats: { label: string; value: string | number }[];
  badges?: string[];
  color: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  category: 'Grant' | 'Competition' | 'Certification' | 'Coursework';
  description: string;
  badge?: string;
  date?: string;
  url?: string;
}

export interface NavItem {
  label: string;
  href: string;
}