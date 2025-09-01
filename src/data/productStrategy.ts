import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faChartLine, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ProductStrategyPrinciple {
  icon: IconDefinition;
  title: string;
  color: string;
  textColor: string;
  description: string;
  principles: string[];
}

export const productStrategyPrinciples: ProductStrategyPrinciple[] = [
  {
    icon: faLightbulb,
    title: 'ユーザー価値を起点にする',
    color: 'bg-blue-500',
    textColor: 'text-blue-800',
    description: '直感的で分かりやすいUI/UXを第一に考え、技術よりも必要性を問い直す。',
    principles: [
      '直感的で分かりやすいUI/UX設計',
      'ユーザー視点での価値検証',
      '技術実現性よりも必要性の追求',
      'ユーザビリティを最優先とした設計'
    ]
  },
  {
    icon: faChartLine,
    title: '事業の持続性と成長を両立させる',
    color: 'bg-green-500',
    textColor: 'text-green-800',
    description: '短期的なKPIだけでなく、長期的にユーザーに愛されるプロダクトづくりを重視。',
    principles: [
      '長期的なユーザー愛着の構築',
      '継続的な改善と進化の重視',
      '事業成長とユーザー体験の両立',
      'インクリメンタルな進化の実現'
    ]
  },
  {
    icon: faUsers,
    title: 'ジェネラリストとしての意思決定力',
    color: 'bg-yellow-500',
    textColor: 'text-yellow-800',
    description: '各領域の知識を統合し、事業全体のバランスを見据えた最適解を導き出す。',
    principles: [
      '各領域の知識を統合した最適解の導出',
      'スペシャリストの意見を尊重した意思決定',
      '事業全体のバランスを見据えた判断',
      '幅広い経験を活かした問題解決'
    ]
  }
];
