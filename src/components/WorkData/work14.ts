import image1 from '../../assets/images/works/14/image1.png';
import image2 from '../../assets/images/works/14/image2.png';
import image3 from '../../assets/images/works/14/image3.png';
import image4 from '../../assets/images/works/14/image4.png';
import image5 from '../../assets/images/works/14/image5.png';
import image6 from '../../assets/images/works/14/image6.png';

const projectData = {
  period: '2024年4月～2025年3月',
  heading: 'AI-KATA S2P 開発・リリース支援',
  description: `AI-KATA S2Pは、ユーザーの描いたオリジナルイラストをAIが解析し、キャラクターを生成する創造力を育むツールです。
展示バージョンからリリースバージョンへの移行を進め、システム設計・機能改善・料金プラン設計、アカウント管理とStripeを用いたサブスクリプション課金を実装しました。
また、アプリストア対応（説明文・スクショ作成）や、利用規約・法人向け契約書の作成を担当。
さらに、展示会のブース掲示物・チラシのデザイン、準備全般を担当し、プロモーション活動を支援しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: '#FF72D0',
      items: [
        '開発チームの管理・スケジュール調整・進捗管理',
        '料金プランの試算・策定・販売モデルの設計',
        '広報・マーケティング施策の企画・実行・SNS運用',
        '展示会の出展準備・デモ対応',
        '法務対応（利用規約・法人向け契約書の作成・管理）',
        'カスタマーサポート・問い合わせ対応',
        'アプリストア対応',
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
        'テスト計画の策定・実施・品質管理・デバッグ対応',
        'Webサイトの設計・実装・UI最適化',
      ],
    },
    {
      title: 'デザイン',
      color: '#FEEE16',
      items: [
        'ソフトウェアのUI設計・デザイン\nユーザーエクスペリエンスの最適化',
        '展示会・プロモーション用資料のデザイン',
      ],
    },
  ],
  slides: [
    {
      title: 'WEBサイト',
      images: [image1],
      link: 'https://aikatas2p.kidsplates.jp/',
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
      title: 'UIデザイン（その1）',
      images: [image4],
    },
    {
      title: 'UIデザイン（その2）',
      images: [image5],
    },
    {
      title: '展示会 チラシ',
      images: [image6],
    },
  ],
};

export default projectData;
