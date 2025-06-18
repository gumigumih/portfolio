export type ProjectType = 'product' | 'tourism' | 'avatar' | 'promotion';

export interface ProjectData {
  type: ProjectType;
  startDate: { year: number; month: number };
  endDate: { year: number; month: number };
  heading: string;
  lead: string;
  coverImage: string;
  description: string;

  overview?: {
    product: {
      name: string;
      type: string;
      target: string;
      keyFeatures: string[];
    };
  };

  roles?: {
    overall?: string[];
    details?: {
      title: string;
      color: string;
      items: string[];
    }[];
  } | {
    title: string;
    color: string;
    items: string[];
  }[];

  challenges?: {
    overview: string;
    solution: {
      overview: string;
      approaches: {
        title: string;
        items: string[];
      }[];
    };
  };

  achievements?: {
    title: string;
    value: string;
    description: string;
  }[];

  techStack?: {
    [key: string]: string[];
  };

  timeline?: TimelineItem[];

  slides?: {
    title: string;
    description: string;
    images: string[];
    link?: string;
  }[];
}

export interface TimelineItem {
  title: string;
  period: string;
  description: string;
  roles: string[];
  achievements: string[];
} 