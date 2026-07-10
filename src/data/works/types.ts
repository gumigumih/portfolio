export type ProjectType = 'technical' | 'product' | 'tool' | 'tourism' | 'avatar' | 'promotion';

export type CategoryType = 'プロダクト戦略' | 'プロジェクト推進' | '技術開発' | 'デザイン・制作' | '運用・改善';

export type ImageSource = string | { src: string };

export interface TimelineItem {
  title: string;
  period: string;
  description: string;
  roles?: string[];
  achievements: { category: CategoryType; text: string; }[];
}

export interface ProjectData {
  type: ProjectType;
  startDate: { year: number; month: number };
  endDate: { year: number; month: number };
  isOngoing?: boolean;
  heading: string;
  lead: string;
  coverImage: ImageSource;
  /** サムネイル画像（あれば） */
  thumbnail?: ImageSource;
  productUrl?: string;
  description: string;

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

  issues?: {
    title: string;
    description: string;
  }[];

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
    images: ImageSource[];
    link?: string;
  }[];
} 
