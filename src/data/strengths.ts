import { faCode, faDiagramProject, faLanguage } from '@fortawesome/free-solid-svg-icons';

export const strengths = [
  {
    id: 'project-drive',
    title: '判断材料を揃える',
    icon: faDiagramProject,
    iconBg: 'bg-slate-900',
    textColor: 'text-slate-900',
    footerBg: 'bg-slate-50',
    content: [
      '現状調査、技術調査、リスク整理、WBS確認を通じて、関係者が判断できる状態を作ります。',
      '曖昧な依頼や複雑化した課題を、責務・状態・優先順位に分解して、意思決定に必要な材料へ整理します。',
    ],
    conclusion: '決める前に、まず判断できる状態を作ります',
  },
  {
    id: 'technical-understanding',
    title: '方針を実行可能にする',
    icon: faCode,
    iconBg: 'bg-slate-900',
    textColor: 'text-slate-900',
    footerBg: 'bg-slate-50',
    content: [
      'Webエンジニアとして実装・DB設計・API設計を経験しており、開発チームと同じ目線で実現性を議論できます。',
      '決まった方針を、仕様・責務・状態遷移・レビュー観点など、実装できる粒度へ翻訳します。',
    ],
    conclusion: '方針を、実装に入れる計画へ変換します',
  },
  {
    id: 'development-drive',
    title: '開発を推進する',
    icon: faLanguage,
    iconBg: 'bg-slate-900',
    textColor: 'text-slate-900',
    footerBg: 'bg-slate-50',
    content: [
      '設計レビュー、PRレビュー、仕様調整を通じて、決まった内容が実装・品質改善まで進むように支援します。',
      '必要に応じてフロントエンド・バックエンド・運用改善まで実装に入り、開発推進に必要な解像度を上げます。',
    ],
    conclusion: '決めたことを、実装と品質改善まで前に進めます',
  },
];
