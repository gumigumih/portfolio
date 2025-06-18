import image1 from '../../assets/images/works/12/image1.png';
import image2 from '../../assets/images/works/12/image2.png';

const projectData = {
  type: 'avatar',
  period: '2023年4月～9月',
  startDate: { year: 2023, month: 4 },
  endDate: { year: 2023, month: 9 },
  heading: 'FukuokaVsapo',
  lead: '引きこもり支援のアバター個別相談アプリ',
  coverImage: image1,
  description: `本プロジェクトは、福岡市の観光案内をアバターで行うアプリの開発です。
クライアントの要件を整理し、仕様決定・UI/UXデザイン・3Dアバター制作を担当しました。
相談の予約システムとアカウント管理は別企業が開発し、アプリからログイン後、予約がある場合に入室できるようAPI連携を実装しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: 'bg-pink-400',
      items: [
        'プロジェクト全体の管理',
        '開発チーム管理',
        '関係者との調整・仕様説明資料の作成',
        '展示会向け資料作成・デモ実施',
      ],
    },
    {
      title: 'エンジニアリング',
      color: 'bg-teal-300',
      items: [
        '要件整理・画面フロー設計',
        '品質管理・テスト・デバッグ作業の監督',
      ],
    },
    {
      title: 'デザイン',
      color: 'bg-yellow-300',
      items: [
        'アプリのUI・UXデザイン',
        '3Dアバター制作',
      ],
    },
  ],
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

export default projectData; 