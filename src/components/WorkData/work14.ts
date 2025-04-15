import image1a from '../../assets/images/works/14/image1a.png';
import image1b from '../../assets/images/works/14/image1b.png';
import image1c from '../../assets/images/works/14/image1c.png';
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
      description: 'サービス概要や利用方法、料金プランを分かりやすく掲載し、問い合わせ・利用登録へスムーズに誘導できる構成にしました。',
      images: [image1a, image1b, image1c],
      link: 'https://aikatas2p.kidsplates.jp/',
    },
    {
      title: 'アカウント管理画面・Admin管理画面',
      description: 'ユーザー向けにアカウント管理・課金情報の確認機能を提供し、運営者向けにデータ管理・状況把握ができる管理画面を開発しました。',
      images: [image2, image3],
    },
    {
      title: 'UIデザイン',
      description: 'AIキャラクター生成という独自性を活かしつつ、直感的な操作感を意識したUI設計を行いました。利用者の年齢層に配慮したトーン設計も含まれます。',
      images: [image4, image5],
    },
    {
      title: '展示会 チラシ',
      description: 'サービスの特長が一目で伝わるよう、利用シーンを交えたチラシを制作。展示ブースでの配布用としてデザインしました。',
      images: [image6],
    },
  ],
};

export default projectData;
