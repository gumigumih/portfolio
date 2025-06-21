import { ProjectData } from './types';
import image1a from '../../assets/images/works/14/image1a.png';
import image1b from '../../assets/images/works/14/image1b.png';
import image1c from '../../assets/images/works/14/image1c.png';
import image2 from '../../assets/images/works/14/image2.png';
import image3 from '../../assets/images/works/14/image3.png';
import image4 from '../../assets/images/works/14/image4.png';
import image5 from '../../assets/images/works/14/image5.png';
import image6 from '../../assets/images/works/14/image6.png';

export const aiKataS2p: ProjectData = {
  type: 'product',
  startDate: { year: 2024, month: 4 },
  endDate: { year: 2025, month: 3 },
  heading: 'AI-KATA S2P',
  lead: 'AIによるイラスト解析・キャラクター生成ツール',
  coverImage: image1a,
  productUrl: 'https://aikatas2p.kidsplates.jp/',
  description: `AI-KATA S2Pは、子どもたちの描いたイラストをAIが解析し、キャラクターを生成する教育ツールです。
展示バージョンからリリースバージョンへの移行を担当し、システム設計から機能改善、料金プラン設計までを実施。
Stripeを用いたサブスクリプション課金システムの実装や、アプリストア対応、利用規約の作成も担当しました。
また、展示会のブースデザインやプロモーション活動を通じて、サービスの普及を支援しています。`,

  roles: {
    overall: [
      'プロダクトマネージャー',
      'メインデザイナー',
      'メインWEBエンジニア'
    ],
    details: [
      {
        title: 'プロダクト戦略',
        color: 'bg-pink-400',
        items: [
          'プロダクトビジョン・ロードマップの策定と実行',
          '市場分析・競合調査に基づく差別化戦略の立案',
          '収益モデルの設計とStripeを用いた課金システムの実装',
          'GPT・音声API等の複数サービスを統合した独自ポイント制の設計',
          '展示会出展を通じた市場開拓とフィードバック収集',
          '展示会ブースデザイン・プロモーション資料の制作',
        ],
      },
      {
        title: 'プロダクト開発',
        color: 'bg-teal-300',
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
        title: 'ユーザー体験',
        color: 'bg-yellow-300',
        items: [
          'UI/UXデザインの設計・改善',
          'ユーザーテストの実施と操作性の検証',
          'カスタマーサポート体制の構築と運用',
        ],
      },
      {
        title: 'チームマネジメント',
        color: 'bg-purple-300',
        items: [
          '開発チームのマネジメントとスケジュール最適化',
          '品質管理プロセスの標準化と運用',
          'Android/iOS向けアプリストア対応とガイドライン順守',
          'アプリ体験に必要な準備プロセスの標準化',
          '法務対応（利用規約・契約書）とコンプライアンス管理',
        ],
      },
    ]
  },

  issues: [
    {
      title: "展示版から商用版への移行",
      description: "展示バージョンから商用版への移行において、説明なしでも直感的に使えるUIの実現が主要な課題でした。複数回のユーザーテストを通じて、直感的な操作性を実現する必要がありました。"
    },
    {
      title: "複数AIサービスの料金統合システム",
      description: "秒数・トークン・文字数など異なる課金単位を統合するシステムの構築が必要でした。"
    },
    {
      title: "法務・運用面での整備",
      description: "利用規約の整備、アプリストア対応、コンプライアンス管理など、サービスリリースに必要な法務・運用面の課題を包括的に解決する必要がありました。特にアプリストアのガイドライン順守には時間を要しました。"
    }
  ],

  achievements: [
    {
      title: "リリース期間",
      value: "1.5ヶ月",
      description: "展示版から商用版への移行"
    },
    {
      title: "展示会成果",
      value: "150件",
      description: "名刺交換数（商談設定率10%）"
    },
    {
      title: "料金体系",
      value: "独自ポイント制",
      description: "GPT・音声API等の料金を吸収する独自ポイント制の設計"
    }
  ],

  techStack: {
    frontend: ['Vue', 'Bootstrap'],
    backend: ['Laravel', 'PHP', 'Composer'],
    database: ['MySQL'],
    payment: ['Stripe'],
    development: ['Docker Compose', 'Git', 'GitHub Actions'],
    design: ['XD', 'Photoshop', 'Adobe Express', 'Illustrator'],
    analytics: ['Google Analytics', 'Google Tag Manager', 'Looker Studio'],
  },

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

  timeline: [
    {
      title: "展示版開発",
      period: "2024年4月〜2024年5月",
      description: "展示会用デモンストレーション版の開発と準備を実施しました。",
      achievements: [
        { category: "デザイン", text: "キッズ向けUIデザインの開発" },
        { category: "デザイン", text: "展示会用プロモーション資料の制作" },
        { category: "実装", text: "展示会ブース用の自動フォローアップメールシステム（GAS）の構築" },
        { category: "運営", text: "展示会用営業資料の作成とブース設営準備" }
      ]
    },
    {
      title: "商用版開発・アプリストア展開",
      period: "2024年5月〜2024年10月",
      description: "展示版から商用版への移行、本格サービスリリース、アプリストア展開に向けた開発を推進しました。",
      achievements: [
        { category: "デザイン", text: "一般ユーザー向けUI/UXデザインの開発" },
        { category: "デザイン", text: "サービス紹介・利用案内サイトのデザイン・制作" },
        { category: "デザイン", text: "アプリストア向けスクリーンショット・アイコン等の制作" },
        { category: "戦略", text: "秒数・トークン・文字数など異なる課金単位を統合する独自ポイント制の料金プラン設計" },
        { category: "実装", text: "サーバー・DB・APIの設計と実装" },
        { category: "実装", text: "ユーザー管理・プラン管理システムの開発" },
        { category: "実装", text: "Stripeを活用したサブスクリプション課金システムの実装" },
        { category: "実装", text: "アプリストア課金システムとの連携実装" },
        { category: "運営", text: "アプリストア審査対応とリリース準備" }
      ]
    }
  ]
};

export default aiKataS2p;