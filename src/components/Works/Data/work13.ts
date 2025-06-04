import image1 from '../../../assets/images/works/13/image1.png';
import image2 from '../../../assets/images/works/13/image2.png';
import image3 from '../../../assets/images/works/13/image3.png';
import image4 from '../../../assets/images/works/13/image4.png';
import image5 from '../../../assets/images/works/13/image5.jpg';
import image6 from '../../../assets/images/works/13/image6.png';

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
      color: 'bg-pink-400',
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
      color: 'bg-teal-300',
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
      color: 'bg-yellow-300',
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
      description: 'プロダクト紹介・機能説明・価格案内を網羅した公式WEBサイト。SEOとUIを意識した設計を行いました。',
      images: [image1],
      link: 'https://nicecamera.kidsplates.jp/',
    },
    {
      title: 'アカウント管理画面・Admin管理画面',
      description: 'ユーザー登録・課金管理を行うアカウント管理画面と、運営側のモニタリング・設定を行う管理画面を構築しました。',
      images: [image2, image3],
    },
    {
      title: 'UIデザイン',
      description: 'アプリの操作を直感的に行えるように、アイコン設計・色設計・レイアウト最適化などを行いました。',
      images: [image4],
    },
    {
      title: '展示会 会場・チラシ',
      description: '展示会での来場者に向けたデモブースの構成と、配布用チラシ・説明資料のデザイン・編集を担当しました。',
      images: [image5, image6],
    },
  ],
};

export default projectData;
