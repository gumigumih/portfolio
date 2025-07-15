import { ProjectData } from './types';
import image1 from '../../assets/images/works/fukuokaVsapo/image1.png';
import image2 from '../../assets/images/works/fukuokaVsapo/image2.png';
import thumbnail from '../../assets/images/works/fukuokaVsapo/thumbnail.png';

export const fukuokaVsapo: ProjectData = {
  type: 'avatar',
  startDate: { year: 2023, month: 4 },
  endDate: { year: 2023, month: 9 },
  heading: 'FukuokaVsapo',
  lead: '引きこもり支援のアバター個別相談アプリ',
  coverImage: thumbnail,
  description: `本プロジェクトは、福岡市の観光案内をアバターで行うアプリの開発です。
クライアントの要件を整理し、仕様決定・UI/UXデザイン・3Dアバター制作を担当しました。
相談の予約システムとアカウント管理は別企業が開発し、アプリからログイン後、予約がある場合に入室できるようAPI連携を実装しました。`,

  // 2. 課題
  issues: [
    {
      title: "複数企業間での開発連携",
      description: "予約システムとアカウント管理を別企業が開発する中で、API連携の仕様調整と開発進行の管理が課題でした。各社の開発スケジュールを調整し、統合テストまでスムーズに進める必要がありました。"
    },
    {
      title: "相談者に適したアバター設計",
      description: "引きこもり支援という繊細な用途において、相談者が親しみやすく、安心感を持てるアバターデザインと操作性の実現が重要な課題でした。"
    }
  ],

  // 3. 自分の役割
  roles: {
    overall: [
      'プロジェクトマネージャー',
      'UI/UXデザイナー',
      '3Dアバター制作者'
    ],
    details: [
      {
        title: 'プロダクト戦略',
        color: 'bg-pink-400',
        items: [
          '要件整理・画面フロー設計',
          '展示会向け資料作成・デモ実施',
        ],
      },
      {
        title: 'プロジェクト推進',
        color: 'bg-blue-400',
        items: [
          'プロジェクト全体の管理',
          '開発チーム管理',
          '関係者との調整・仕様説明資料の作成',
          '品質管理・テスト・デバッグ作業の監督',
        ],
      },
      {
        title: '技術開発',
        color: 'bg-teal-300',
        items: [
          'API連携の仕様調整と実装監督',
          'システム統合テストの管理',
        ],
      },
      {
        title: 'デザイン・制作',
        color: 'bg-yellow-300',
        items: [
          'アプリのUI・UXデザイン',
          '3Dアバター制作',
          'システム構成図の作成',
        ],
      },
      {
        title: '運用・改善',
        color: 'bg-purple-300',
        items: [
          '相談者向けアバター親和性の検証',
          'ユーザビリティテストの実施',
        ],
      },
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "アバター親和性",
      value: "高評価",
      description: "相談者に親しみやすいアバターデザインを実現"
    },
    {
      title: "システム連携",
      value: "シームレス",
      description: "ログインAPI・チャット保存・予約システムなど多岐にわたる連携を実現"
    }
  ],

  // 5. 技術スタック
  techStack: {
    design: ['VRoid Studio', 'XD', 'Photoshop', 'Illustrator'],
  },

  // 6. 具体的な制作物
  slides: [
    {
      title: 'VRoidで制作したモデル',
      description: '相談者が親しみやすく感じるよう、VRoidで柔らかな雰囲気のアバターモデルを制作しました。対話に集中しやすいよう表情や動きも調整しています。',
      images: [image1],
    },
    {
      title: 'UIデザイン・画面説明・サーバ構成',
      description: '相談予約の状態に応じた画面遷移やアカウント連携を整理し、シンプルで迷いのない操作設計を実現。開発チームとの連携を円滑にするため構成図も作成しました。',
      images: [image2],
    },
  ],
};

export default fukuokaVsapo; 