import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPalette, faLayerGroup, faChartBar, faBroadcastTower, faWrench } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Skill {
  name: string;
  level: number;
  isHeader?: boolean;
}

export interface SkillCategory {
  skillColor: string;
  icon: IconDefinition;
  textColor: string;
  iconBg: string;
  skills: Skill[];
}

// サブカテゴリ名ごとのアイコン割り当て
export const subCategoryIcons: Record<string, IconDefinition> = {
  'グラフィック': faPalette,
  'UI/UX': faLayerGroup,
  '3D・動画': faLayerGroup,
  'ツール・分析': faChartBar,
  '配信・SNS運用': faBroadcastTower,
  'Frontend': faLayerGroup,
  'Backend': faLayerGroup,
  'Mobile & Others': faWrench,
};

export const skills: Record<string, SkillCategory> = {
  "エンジニアリング": {
    skillColor: 'bg-green-500',
    icon: faCode,
    textColor: 'text-green-800',
    iconBg: 'bg-green-500',
    skills: [
      { name: 'Frontend', level: 0, isHeader: true },
      { name: 'HTML/CSS/JS', level: 5 },
      { name: '- Vue.js', level: 4 },
      { name: '- React', level: 1 },
      { name: '- A-Frame', level: 2 },
      { name: 'Backend', level: 0, isHeader: true },
      { name: 'PHP', level: 4 },
      { name: '- Wordpress', level: 4 },
      { name: '- Laravel', level: 4 },
      { name: 'Python', level: 2 },
      { name: 'Ruby on Rails', level: 1 },
      { name: 'Perl', level: 1 },
      { name: 'Mobile & Others', level: 0, isHeader: true },
      { name: 'React Native', level: 1 },
      { name: 'GAS', level: 3 },
      { name: 'シェルスクリプト\nコマンドプロンプト', level: 3 },
      { name: 'DB設計', level: 3 },
    ],
  },
  "デザイン・クリエイティブ": {
    skillColor: 'bg-purple-500',
    icon: faPalette,
    textColor: 'text-purple-800',
    iconBg: 'bg-purple-500',
    skills: [
      { name: 'グラフィック', level: 0, isHeader: true },
      { name: 'Photoshop', level: 4 },
      { name: 'Illustrator', level: 4 },
      { name: 'UI/UX', level: 0, isHeader: true },
      { name: 'Adobe XD', level: 4 },
      { name: 'Figma', level: 1 },
      { name: '3D・動画', level: 0, isHeader: true },
      { name: 'Premiere Pro', level: 1 },
      { name: 'VRoid Studio', level: 2 },
      { name: 'Blender', level: 1 },
      { name: 'Unity', level: 2 },
    ],
  },
  "ツール・分析・運用": {
    skillColor: 'bg-blue-500',
    icon: faChartBar,
    textColor: 'text-blue-800',
    iconBg: 'bg-blue-500',
    skills: [
      { name: 'ツール・分析', level: 0, isHeader: true },
      { name: 'Git', level: 3 },
      { name: 'Google Analytics', level: 3 },
      { name: 'Google Tag Manager', level: 3 },
      { name: 'Google Looker Studio', level: 1 },
      { name: '配信・SNS運用', level: 0, isHeader: true },
      { name: 'OBS Studio', level: 2 },
      { name: 'Meta Business Suite', level: 3 },
    ],
  },
};
