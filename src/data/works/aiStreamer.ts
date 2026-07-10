import type { ProjectData } from './types';
import image1 from '../../assets/images/works/aiStreamer/image1.png';

export const aiStreamer: ProjectData = {
  type: 'product',
  startDate: { year: 2025, month: 3 },
  endDate: { year: 2025, month: 7 },
  heading: 'AIキャラクター配信システム',
  lead: 'AIキャラクター配信の仕様整理と実装改修',
  coverImage: image1,
  description: `AIキャラクターを活用したLive2D配信システムの開発において、仕様・要件整理、Unity開発の進行管理、Unity側の改修を担当しました。
関係者から出た要望をUnity側で実装可能な仕様へ整理し、優先順位や対応範囲を調整しながら開発を推進。複数キャラクターへの対応や音声合成サービスの変更など、AI配信に関わる機能追加・変更に伴うUnity側の改修も行いました。`,

  issues: [
    {
      title: '要望をUnity実装へ落とし込む必要',
      description: 'AIキャラクターのLive2D配信表現に関する要望を、Unityエンジニアが実装できる仕様・タスクへ整理する必要がありました。',
    },
    {
      title: '外部サービス変更に伴うUnity側の影響整理',
      description: '音声合成サービスの変更などにより、キャラクター表現やUnity側の改修範囲を整理しながら進める必要がありました。',
    },
    {
      title: '進行管理と実装対応の両立',
      description: '複数キャラクター対応や機能追加を進める中で、優先順位・対応範囲・確認事項を整理しつつ、自身でもUnity側の改修に入る必要がありました。',
    },
  ],

  roles: {
    overall: [
      'Unity開発ディレクター',
    ],
    details: [
      {
        title: '仕様・要件整理',
        color: 'bg-sky-400',
        items: [
          '関係者から出た要望をUnity側で実装可能な仕様へ整理',
          '機能追加・変更に伴う対応範囲と優先順位の整理',
          'Live2Dキャラクター表現や配信演出に関する確認事項の整理',
        ],
      },
      {
        title: 'Unity開発の進行管理・改修',
        color: 'bg-teal-300',
        items: [
          'Unityエンジニアのタスク整理と進捗確認',
          '複数キャラクター対応に向けたUnity側改修の管理',
          '必要な場面でのUnity側の実装・改修対応',
          '音声合成サービス変更に伴うUnity側の影響確認',
        ],
      },
      {
        title: '関係者調整・開発推進',
        color: 'bg-amber-300',
        items: [
          '要望・仕様・実装状況の認識合わせ',
          '確認待ちや仕様の曖昧さを整理し、開発が止まらない状態を支援',
          '変更内容をタスクへ落とし込み、リリースに向けた進行を管理',
        ],
      },
    ],
  },

  achievements: [
    {
      title: 'Unity開発推進',
      value: '進行管理・改修',
      description: 'Unityエンジニアのタスク・進捗・確認事項を整理しつつ、自身でも改修を担当',
    },
    {
      title: '複数キャラクター対応',
      value: '5キャラクター対応',
      description: 'キャラクター追加に伴うUnity側の改修範囲と確認事項を整理',
    },
    {
      title: '仕様整理',
      value: '要件化',
      description: '関係者の要望を実装可能な仕様・タスクへ落とし込み',
    },
  ],

  techStack: {
    client: ['Unity', 'Live2D'],
    ai: ['AIキャラクター', '音声合成サービス'],
    streaming: ['YouTube', 'ライブ配信'],
    workflow: ['仕様整理', '進行管理', 'Unityエンジニアマネジメント'],
  },

  timeline: [
    {
      title: 'Unity開発の要件整理',
      period: '2025年3月〜',
      description: 'AIキャラクターのLive2D配信システムに関する要望を整理し、Unity側で実装可能な仕様・タスクへ落とし込み。',
      achievements: [
        { category: 'プロジェクト推進', text: '要望・仕様・対応範囲を整理' },
        { category: '運用・改善', text: 'Unityエンジニアが着手できる粒度へタスク化' },
      ],
    },
    {
      title: '音声合成サービス変更への対応整理',
      period: '2026年5月',
      description: '音声合成サービス変更に伴い、キャラクター表現やUnity側改修への影響を整理しながら開発を推進。',
      achievements: [
        { category: 'プロジェクト推進', text: '変更内容とUnity側の対応範囲を整理' },
        { category: '運用・改善', text: '関係者間の認識合わせを支援' },
      ],
    },
    {
      title: '複数キャラクター対応の進行管理',
      period: '2026年5月',
      description: '5キャラクター対応に向けたUnity側の改修について、タスク・進捗・確認事項を整理し、自身でも改修を担当。',
      achievements: [
        { category: 'プロジェクト推進', text: 'Unity開発の進行管理を担当' },
        { category: '技術開発', text: 'キャラクター追加に伴うUnity側の改修を担当' },
      ],
    },
  ],

  slides: [
    {
      title: 'AI STREAMER ADMIN',
      description: '台本JSONを読み込み、Live2Dキャラクター、表情、音声生成、字幕、シーン演出を確認しながら配信内容をプレビューできる管理画面です。',
      images: [image1],
    },
  ],
};

export default aiStreamer;
