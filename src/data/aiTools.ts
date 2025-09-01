
import { faCode, faLightbulb, faBrain, faLayerGroup, faWrench, faUsers } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface ToolUsage {
  title: string;
  items: string[];
}

export interface AITool {
  name: string;
  icon: IconDefinition;
  color: string;
  titleColor: string;
  dotColor: string;
  description: string;
  usage: ToolUsage[];
}

export interface AIEffectCard {
  icon: IconDefinition;
  bg: string;
  title: string;
  description: string;
}

// サブカテゴリ名ごとのアイコン割り当て
export const subCategoryIcons: Record<string, IconDefinition> = {
  '開発': faCode,
  'ドキュメント': faLayerGroup,
  '企画・アイデア': faLightbulb,
  'コミュニケーション': faWrench,
  '学習・検証': faBrain,
  '会議・プロジェクト': faLayerGroup,
  '学習・セミナー': faBrain,
  '顧客対応': faUsers,
};

export const toolMetaList: AITool[] = [
  {
    name: 'Cursor',
    icon: faCode,
    color: 'bg-blue-500',
    titleColor: 'text-blue-800',
    dotColor: 'bg-blue-500',
    description: 'AI搭載コードエディタ',
    usage: [
      {
        title: '開発',
        items: ['コーディング', 'リファクタリング', 'コードレビュー']
      },
      {
        title: 'ドキュメント',
        items: ['要件定義書作成', '仕様作成', '文章作成']
      }
    ]
  },
  {
    name: 'ChatGPT & Gemini',
    icon: faBrain,
    color: 'bg-green-500',
    titleColor: 'text-green-800',
    dotColor: 'bg-green-500',
    description: '汎用AIチャットボット（併用）',
    usage: [
      {
        title: '企画・アイデア',
        items: ['企画アイディア出し', 'デザインアイディア（画像生成）']
      },
      {
        title: 'コミュニケーション',
        items: ['メール返信サポート', 'SNS用文章添削']
      },
      {
        title: '学習・検証',
        items: ['学習支援', 'ファクトチェック']
      }
    ]
  },
  {
    name: 'Notebook LM',
    icon: faLightbulb,
    color: 'bg-purple-500',
    titleColor: 'text-purple-800',
    dotColor: 'bg-purple-500',
    description: 'GoogleのAI研究アシスタント',
    usage: [
      {
        title: '会議・プロジェクト',
        items: ['会議の議事録のまとめ', 'プロジェクト文章の整理・活用']
      },
      {
        title: '学習・セミナー',
        items: ['参加セミナー内容のまとめ', 'まとめ音声作成']
      },
      {
        title: '顧客対応',
        items: ['お客様サポート']
      }
    ]
  },
];

export const aiEffectCards: AIEffectCard[] = [
  {
    icon: faCode,
    bg: 'bg-blue-500',
    title: '開発効率の向上',
    description: 'コーディング時間の短縮と品質向上を実現',
  },
  {
    icon: faLightbulb,
    bg: 'bg-green-500',
    title: '創造性の拡張',
    description: '新しいアイデアの発想と問題解決の多様化',
  },
  {
    icon: faBrain,
    bg: 'bg-purple-500',
    title: '学習の加速',
    description: '新しい技術や概念の理解を迅速化',
  },
];
