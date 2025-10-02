import { faRocket, faCode, faPalette } from '@fortawesome/free-solid-svg-icons';

export const strengths = [
  {
    id: 'project-drive',
    title: 'プロジェクト推進力',
    icon: faRocket,
    iconBg: 'bg-amber-500',
    textColor: 'text-amber-800',
    footerBg: 'bg-amber-100',
    content: [
      'PMとして受託案件・自社プロダクトを推進し、要件定義・進行管理・ステークホルダー調整を一貫して担当してきました。',
      'ユーザー体験 × 技術的実現性 × 事業的要請を総合判断し、最適な優先順位を決定します。',
    ],
    conclusion: '「プロジェクト全体を任せても安心」 と言われる推進力を培ってきました',
  },
  {
    id: 'technical-understanding',
    title: '技術理解',
    icon: faCode,
    iconBg: 'bg-sky-500',
    textColor: 'text-sky-800',
    footerBg: 'bg-sky-100',
    content: [
      'Webエンジニアとして実装・DB設計を経験しており、開発チームと同じ目線で課題や実現可能性を議論できます。',
      '技術的な制約を踏まえた現実的な提案や改善を実行します。',
    ],
    conclusion: '「できる／できない」だけでなく、「どうすればできるか」を考えられるPMです',
  },
  {
    id: 'design-perspective',
    title: 'デザイン視点',
    icon: faPalette,
    iconBg: 'bg-pink-500',
    textColor: 'text-pink-800',
    footerBg: 'bg-pink-100',
    content: [
      'UI/UXデザイナーとして画面設計・改善を担当し、「直感的に理解できる体験」を重視して課金フローや登録画面を改善してきました。',
      'また、図解や資料化によって誰でも理解できるアウトプットを整備することを心がけています。',
    ],
    conclusion: 'ユーザー起点で迷わず使える体験を作ることを大切にしています',
  },
];
