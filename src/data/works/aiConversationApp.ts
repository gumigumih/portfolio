import type { ProjectData } from './types';
import thumbnail from '../../assets/images/works/aiConversationApp/thumbnail.png';

export const aiConversationApp: ProjectData = {
  type: 'technical',
  startDate: { year: 2025, month: 10 },
  endDate: { year: 2026, month: 7 },
  isOngoing: true,
  heading: 'AI対話アプリ（非公開案件）',
  lead: '技術的な意思決定と開発推進を支える技術PM',
  coverImage: thumbnail,
  thumbnail,
  description: `大手企業が提供するAI対話型アプリにおいて、収束フェーズの技術PM / プレイングテックリードとして参画。
プロジェクト全体・システム設計・実装の視点を行き来しながら、技術的な判断材料の整理、WebSocket・Redis・Firestoreを中心としたリアルタイム通信基盤の設計整理、設計レビュー、PRレビュー、品質改善、通知基盤のアーキテクチャ検討を担当しました。`,

  issues: [
    {
      title: 'リアルタイム通信における状態管理の複雑化',
      description: '再接続、ACK、永続化、セッション状態の扱いが複雑になり、個別修正だけでは品質を安定させにくい状態でした。',
    },
    {
      title: '責務と仕様の認識差',
      description: 'PM、開発会社、技術チームの間で、WebSocket・Redis・Firestoreそれぞれが担う責務や仕様の前提を揃える必要がありました。',
    },
    {
      title: '収束フェーズにおける判断材料の不足',
      description: 'リリースに向けて、修正範囲・技術的リスク・スケジュールを踏まえ、関係者が判断できる材料を揃える必要がありました。',
    },
  ],

  roles: {
    overall: [
      '技術PM',
      'プレイングテックリード',
    ],
    details: [
      {
        title: '要件整理・技術PM',
        color: 'bg-slate-400',
        items: [
          '技術課題をWBS・リスク・優先順位に分解し、収束フェーズの判断材料を整理',
          'PM・開発会社・技術チーム間の認識差を埋めるための仕様整理',
          '決まった方針を、実装可能な要件・レビュー観点へ落とし込み',
        ],
      },
      {
        title: 'リアルタイム通信基盤の設計改善',
        color: 'bg-sky-400',
        items: [
          'WebSocket・Redis・Firestore間の責務整理',
          '再接続・ACK・状態遷移・永続化に関する設計課題の整理',
          '個別不具合ではなく、構造的な原因から改善方針を検討',
        ],
      },
      {
        title: 'レビュー体制・品質改善',
        color: 'bg-teal-300',
        items: [
          '設計レビューとPRレビューによる品質観点のフィードバック',
          '実装方針の妥当性確認と差し戻し判断の支援',
          '開発会社との技術的な仕様調整',
        ],
      },
      {
        title: '通知基盤・アーキテクチャ検討',
        color: 'bg-amber-300',
        items: [
          'OneSignal導入に向けた通知基盤のアーキテクチャ検討',
          'マーケティング施策とアプリ通知要件の接続',
          '既存システムへの影響範囲と実装方針の整理',
        ],
      },
    ],
  },

  achievements: [
    {
      title: '責務整理',
      value: 'WebSocket / Redis / Firestore',
      description: 'リアルタイム通信基盤の役割分担を整理し、品質改善の論点を明確化',
    },
    {
      title: 'レビュー体制',
      value: '設計・PRレビュー',
      description: '開発会社とのレビューを通じて、設計品質と実装品質の改善を支援',
    },
    {
      title: '判断材料の整理',
      value: '収束フェーズ',
      description: 'リリースに向けた技術リスク、優先順位、対応方針を整理し、判断できる状態を支援',
    },
  ],

  techStack: {
    realtime: ['WebSocket', 'Redis', 'Firestore'],
    backend: ['Python', 'Cloud Run', 'GKE'],
    notification: ['OneSignal'],
    workflow: ['GitHub', 'PR Review', 'WBS', 'Risk Management'],
  },

  timeline: [
    {
      title: '構造的な技術課題の整理',
      period: '2025年10月〜',
      description: '再接続、ACK、永続化などの品質課題を、WebSocket・Firestoreの責務整理として分解。',
      achievements: [
        { category: '技術開発', text: 'リアルタイム通信基盤の責務と状態管理の論点を整理' },
        { category: 'プロジェクト推進', text: 'PM・開発会社・技術チーム間の認識合わせを支援' },
      ],
    },
    {
      title: 'レビュー体制と品質改善の支援',
      period: '2026年4月〜',
      description: '設計レビュー・PRレビューを通じて、個別修正ではなく品質観点で改善できる体制を支援。',
      achievements: [
        { category: '技術開発', text: '設計観点・実装観点でのレビューとフィードバックを実施' },
        { category: 'プロジェクト推進', text: '収束フェーズのWBS・リスク・優先順位整理を支援' },
      ],
    },
    {
      title: '通知基盤のアーキテクチャ検討',
      period: '2026年6月〜',
      description: 'OneSignal導入に向けて、通知要件・マーケティング施策・既存アーキテクチャの接続を検討。',
      achievements: [
        { category: 'プロダクト戦略', text: 'Push通知基盤と施策要件の整理' },
        { category: '技術開発', text: '既存システムへの影響範囲と実装方針を検討' },
      ],
    },
  ],
};

export default aiConversationApp;
