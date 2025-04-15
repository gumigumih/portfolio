import image1 from '../../assets/images/works/12/image1.png';
import image2 from '../../assets/images/works/12/image2.png';

const projectData = {
  period: '2023年4月～2023年9月',
  heading: 'アバター個別相談アプリ「FukuokaVsapo©」開発',
  description: `本プロジェクトは、福岡県の委託事業として開発した、支援者と相談者が利用するアバター相談アプリです。
クライアントの要件を整理し、仕様決定・UI/UXデザイン・3Dアバター制作を担当しました。
相談の予約システムとアカウント管理は別企業が開発し、アプリからログイン後、予約がある場合に入室できるようAPI連携を実装しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: '#FF72D0',
      items: [
        'プロジェクト全体の管理',
        '開発チーム管理',
        '関係者との調整・仕様説明資料の作成',
        '展示会向け資料作成・デモ実施',
      ],
    },
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        '要件整理・画面フロー設計',
        '品質管理・テスト・デバッグ作業の監督',
      ],
    },
    {
      title: 'デザイン',
      color: '#FEEE16',
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
