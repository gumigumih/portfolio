
import { faCode, faPalette, faLayerGroup, faChartBar, faBroadcastTower, faWrench, faObjectGroup, faCube, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Skill {
  title: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export interface SkillCategory {
  title: string;
  skillColor: string;
  icon: IconDefinition;
  textColor: string;
  iconBg: string;
  skills: SkillGroup[];
}

// サブカテゴリ名ごとのアイコン割り当て
export const subCategoryIcons: Record<string, IconDefinition> = {
  'グラフィック': faPalette,
  'UI/UX': faObjectGroup,
  '3D・動画': faCube,
  'ツール・分析': faChartBar,
  '配信・SNS運用': faBroadcastTower,
  'Frontend': faCode,
  'Backend': faDatabase,
  'Mobile & Others': faWrench,
};

export const skills: SkillCategory[] = [
  {
    title: "エンジニアリング",
    skillColor: 'bg-green-500',
    icon: faCode,
    textColor: 'text-green-800',
    iconBg: 'bg-green-500',
    skills: [
      {
        title: 'Frontend',
        items: [
          { title: 'HTML/CSS/JS', level: 5 },
          { title: '- Vue.js', level: 4 },
          { title: '- React', level: 1 },
          { title: '- A-Frame', level: 2 },
        ],
      },
      {
        title: 'Backend',
        items: [
          { title: 'PHP', level: 4 },
          { title: '- Wordpress', level: 4 },
          { title: '- Laravel', level: 4 },
          { title: 'Python', level: 2 },
          { title: 'Ruby on Rails', level: 1 },
          { title: 'Perl', level: 1 },
        ],
      },
      {
        title: 'Mobile & Others',
        items: [
          { title: 'React Native', level: 1 },
          { title: 'GAS', level: 3 },
          { title: 'シェルスクリプト\nコマンドプロンプト', level: 3 },
          { title: 'DB設計', level: 3 },
        ],
      },
    ]
  },
  {
    title: "デザイン・クリエイティブ",
    skillColor: 'bg-purple-500',
    icon: faPalette,
    textColor: 'text-purple-800',
    iconBg: 'bg-purple-500',
    skills: [
      {
        title: 'グラフィック',
        items: [
          { title: 'Photoshop', level: 4 },
          { title: 'Illustrator', level: 4 },
        ],
      },
      {
        title: 'UI/UX',
        items: [
          { title: 'Adobe XD', level: 4 },
          { title: 'Figma', level: 1 },
        ],
      },
      {
        title: '3D・動画',
        items: [
          { title: 'Premiere Pro', level: 1 },
          { title: 'VRoid Studio', level: 2 },
          { title: 'Blender', level: 1 },
          { title: 'Unity', level: 2 },
        ],
      },
    ]
  },
  {
    title: "ツール・分析・運用",
    skillColor: 'bg-blue-500',
    icon: faChartBar,
    textColor: 'text-blue-800',
    iconBg: 'bg-blue-500',
    skills: [
      {
        title: 'ツール・分析',
        items: [
          { title: 'Git', level: 3 },
          { title: 'Google Analytics', level: 3 },
          { title: 'Google Tag Manager', level: 3 },
          { title: 'Google Looker Studio', level: 1 },
        ],
      },
      {
        title: '配信・SNS運用',
        items: [
          { title: 'OBS Studio', level: 2 },
          { title: 'Meta Business Suite', level: 3 },
        ],
      },
    ]
  },
];
