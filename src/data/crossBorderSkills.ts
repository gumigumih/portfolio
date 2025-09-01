
import { faLayerGroup, faPalette, faCode, faUsers, faEye, faLightbulb, faBrain, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface CrossBorderCategory {
  name: string;
  icon: IconDefinition;
  iconBg: string;
  textColor: string;
  dotColor: string;
  roleColor: string;
  role: string;
  items: string[];
}

export const categoryMetaList: CrossBorderCategory[] = [
  {
    name: 'プロダクト戦略',
    icon: faLayerGroup,
    iconBg: 'bg-blue-500',
    textColor: 'text-blue-800',
    dotColor: 'bg-blue-500',
    roleColor: 'text-blue-600',
    role: 'PdM、プロダクト戦略',
    items: [
      'ビジョン策定・ロードマップ',
      '市場/競合分析',
      '課金モデル・システム構築',
      '料金プラン・機能設計',
      '展示会運営',
      'ユーザーインタビュー・SNS反応分析',
      'Discord運営・意見収集',
      'パートナー/代理店設計',
      '法務・コンプラ対応',
    ],
  },
  {
    name: 'デザイン・UX',
    icon: faPalette,
    iconBg: 'bg-purple-500',
    textColor: 'text-purple-800',
    dotColor: 'bg-purple-500',
    roleColor: 'text-purple-600',
    role: 'メインUIデザイナー、UX設計者',
    items: [
      'UI/UXデザイン設計',
      'ユーザビリティテスト実施',
      'デザインシステム構築',
      'プロトタイピング・検証',
      'ブランディング・ロゴ制作',
      'プロモーション素材制作',
      '展示会ブースデザイン',
    ],
  },
  {
    name: 'エンジニアリング',
    icon: faCode,
    iconBg: 'bg-green-500',
    textColor: 'text-green-800',
    dotColor: 'bg-green-500',
    roleColor: 'text-green-600',
    role: 'メインWEBエンジニア、フルスタックエンジニア',
    items: [
      'Webアプリ開発',
      'GASアプリ開発',
      'DB設計',
      'システム設計',
      'コーポレートサイト制作・運営',
      'プロダクトサイト制作・運営',
      'Stripe月額課金システム構築',
    ],
  },
  {
    name: 'プロジェクトマネジメント',
    icon: faUsers,
    iconBg: 'bg-orange-500',
    textColor: 'text-orange-800',
    dotColor: 'bg-orange-500',
    roleColor: 'text-orange-600',
    role: 'PM、ディレクター',
    items: [
      'チームマネジメント',
      'タスク管理',
      'プロジェクト要件・仕様共有',
      '外注管理',
      'チームコミュニケーション促進',
      '技術・ノウハウ蓄積',
      'アバターアプリ用3Dキャラクター制作管理',
      'Unityアプリディレクション',
    ],
  },
  {
    name: 'カスタマーサクセス',
    icon: faEye,
    iconBg: 'bg-red-500',
    textColor: 'text-red-800',
    dotColor: 'bg-red-500',
    roleColor: 'text-red-600',
    role: 'CS、プロダクト運用',
    items: [
      '問い合わせサポート対応',
      '改善提案',
      'Discordコミュニティ運営',
      'アップデートお知らせ文作成',
      '法人向け契約更新サポート',
      'ユーザーフィードバック時の操作案内・サポート',
      'ヘルプページの作成・サポート体制の構築',
    ],
  },
  {
    name: '広報・マーケティング',
    icon: faBullhorn,
    iconBg: 'bg-pink-500',
    textColor: 'text-pink-800',
    dotColor: 'bg-pink-500',
    roleColor: 'text-pink-600',
    role: '広報、マーケティング',
    items: [
      'プレスリリース作成・配信',
      'メディア取材対応',
      '展示会出展・運営',
      'SNS運用・コンテンツ制作',
      '広告運用・効果測定',
      'ブランディング戦略',
      'パートナーシップ構築',
    ],
  },
  {
    name: '企画・アイデア',
    icon: faLightbulb,
    iconBg: 'bg-yellow-500',
    textColor: 'text-yellow-800',
    dotColor: 'bg-yellow-500',
    roleColor: 'text-yellow-600',
    role: '企画、アイデア発想',
    items: [
      '新機能企画・提案',
      'ユーザー体験改善提案',
      '競合分析・差別化戦略',
      '市場トレンド分析',
      'クリエイティブアイデア発想',
      'プロダクトロードマップ策定',
      'ユーザーストーリー作成',
    ],
  },
  {
    name: '学習・研究',
    icon: faBrain,
    iconBg: 'bg-indigo-500',
    textColor: 'text-indigo-800',
    dotColor: 'bg-indigo-500',
    roleColor: 'text-indigo-600',
    role: '学習、研究開発',
    items: [
      '新技術調査・学習',
      '業界動向研究',
      'ベストプラクティス調査',
      '技術文書作成',
      '社内勉強会開催',
      '外部セミナー参加・情報共有',
      '技術ブログ執筆',
    ],
  },
];
