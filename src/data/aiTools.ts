
import { faCode, faLightbulb, faBrain, faLayerGroup, faWrench, faUsers, faPalette } from '@fortawesome/free-solid-svg-icons';
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

// サブカテゴリ名ごとのアイコン割り当て
export const subCategoryIcons: Record<string, IconDefinition> = {
  '開発': faCode,
  'ドキュメント': faLayerGroup,
  '企画・アイデア': faLightbulb,
  'コミュニケーション': faWrench,
  '学習・検証': faBrain,
  '会議・プロジェクト': faLayerGroup,
  '学習・セミナー': faBrain,
  'デザイン': faPalette,
  '顧客対応': faUsers,
};

export const toolMetaList: AITool[] = [
  {
    name: 'AIコーディング支援',
    icon: faCode,
    color: 'bg-sky-500',
    titleColor: 'text-sky-800',
    dotColor: 'bg-sky-500',
    description: 'Cursor, Gemini, Codex等を活用',
    usage: [
      {
        title: '開発',
        items: ['コーディング支援', 'リファクタリング提案', 'コードレビュー支援']
      },
      {
        title: 'ドキュメント',
        items: ['要件定義・仕様の壁打ち', 'ドキュメント構成案の作成', '文章校正・提案']
      }
    ]
  },
  {
    name: '汎用AIチャット',
    icon: faBrain,
    color: 'bg-teal-500',
    titleColor: 'text-teal-800',
    dotColor: 'bg-teal-500',
    description: 'ChatGPT, Gemini等を活用',
    usage: [
      {
        title: '企画・アイデア',
        items: ['企画の壁打ち・アイデア出し', 'デザインコンセプトの提案']
      },
      {
        title: 'コミュニケーション',
        items: ['メール・チャット返信案の作成', 'SNS投稿文の複数パターン作成']
      },
      {
        title: '学習・検証',
        items: ['不明点の質問・深掘り', '情報ソースの多角的な検証']
      }
    ]
  },
  {
    name: 'AIドキュメント活用',
    icon: faLightbulb,
    color: 'bg-indigo-500',
    titleColor: 'text-indigo-800',
    dotColor: 'bg-indigo-500',
    description: 'Notebook LM等を活用',
    usage: [
      {
        title: '会議・プロジェクト',
        items: ['議事録の要約・タスク洗い出し', 'プロジェクト関連資料の横断検索']
      },
      {
        title: '学習・セミナー',
        items: ['セミナー内容の要約・Q&A作成']
      },
      {
        title: '顧客対応',
        items: ['問い合わせ内容の要約・返信案作成']
      }
    ]
  }
];
