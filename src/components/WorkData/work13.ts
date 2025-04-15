import image1 from '../../assets/images/works/13/image1.png';
import image2 from '../../assets/images/works/13/image2.png';
import image3 from '../../assets/images/works/13/image3.png';
import image4 from '../../assets/images/works/13/image4.png';
import image5 from '../../assets/images/works/13/image5.jpg';
import image6 from '../../assets/images/works/13/image6.png';

const projectData = {
  period: '2020年6月～2025年3月',
  heading: 'NICE CAMERA 開発・運用',
  description: `NICE CAMERAは、PC一台でアバターを使ったリモート会議やライブ配信を支援する仮想カメラソフトです。
開発ディレクターとして、サーバーの設計・実装やUI/UXデザインを担当し、アカウント管理とStripeを用いたサブスクリプション課金を実装しました。
また、WEBサーバーのテスト・デプロイを自動化し、開発チームの環境整備やGitルールの浸透、API利用時のエラーハンドリングを指導。チームの成長を支援しました。
さらに、ユーザー向けのヘルプページを作成し、Discordコミュニティを活用したサポート体制を構築。利用規約や法人向け契約書の作成も担当しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: '#FF72D0',
      items: [
        '開発チームの管理・スケジュール調整・進捗管理',
        '広報・マーケティング施策の企画・実行',
        '展示会の出展準備・デモ対応',
        '法務対応（利用規約・法人向け契約書の作成・管理）',
        'カスタマーサポート・問い合わせ対応\nユーザーフィードバックの収集・改善反映',
      ],
    },
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        'サーバー設計・データベース設計・API設計',
        'サーバー機能の開発・API実装',
        '本番環境リリース・CI/CDの導入・アップデート管理',
        'サーバー運用・エラー監視・Slack通知の導入',
        'テスト管理・品質管理・デバッグ対応',
        'Webサイトの設計・実装・UI最適化',
      ],
    },
    {
      title: 'デザイン',
      color: '#FEEE16',
      items: [
        'WEBサイトデザイン・実装',
        'ソフトウェアのUI設計・デザイン',
        'プリセットコンテンツのデザイン',
        '展示会・プロモーション用資料のデザイン',
      ],
    },
  ],
  slides: [
    {
      title: 'WEBサイト',
      images: [image1],
      link: 'https://nicecamera.kidsplates.jp/',
    },
    {
      title: 'アカウント管理画面',
      images: [image2],
    },
    {
      title: 'Admin管理画面',
      images: [image3],
    },
    {
      title: 'UIデザイン',
      images: [image4],
    },
    {
      title: '展示会 会場',
      images: [image5],
    },
    {
      title: '展示会 チラシ',
      images: [image6],
    },
  ],
};

export default projectData;
