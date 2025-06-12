export type ProjectType = 'product' | 'tourism' | 'avatar' | 'promotion';

export interface ProjectData {
  type: ProjectType;
  period: string;
  startDate: {
    year: number;
    month: number;
  };
  endDate: {
    year: number;
    month: number;
  };
  heading: string;
  lead: string;
  description: string;
  roles: {
    title: string;
    color: string;
    items: string[];
  }[];
  slides: {
    title: string;
    description?: string;
    images: string[];
    link?: string;
  }[];
  challenges?: {
    title: string;
    description: string;
    solution: string;
  }[];
  techStack?: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
    tools: string[];
  };
  achievements?: {
    title: string;
    value: string;
    description: string;
  }[];
  timeline?: {
    period: string;
    title: string;
    description: string;
    achievements: string[];
  }[];
  coverImage?: string;
} 