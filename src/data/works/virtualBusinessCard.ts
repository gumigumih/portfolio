import { ProjectData } from './types';
import image1 from '../../assets/images/works/4/image1.png';

export const virtualBusinessCard: ProjectData = {
  type: 'product',
  startDate: { year: 2020, month: 4 },
  endDate: { year: 2020, month: 4 },
  heading: 'バーチャル名刺背景ジェネレーター',
  lead: 'オンライン会議向けカスタム背景生成ツール',
  coverImage: image1,
  productUrl: 'https://online-meishi.biz/',
  description: `本プロダクトは、オンライン会議向けに、名前やロゴ、QRコードを含むカスタム背景を生成できるツールです。
発案から開発・リリースまで3日で完了し、Vue.jsを使用して実装しました。
リリース後1か月で10,000ユーザーを獲得し、500人以上が日常的に利用する人気ツールへと成長しました。`,

  roles: {
    overall: [
      'メインエンジニア',
      'プロダクト戦略'
    ],
    details: [
      {
        title: 'プロダクト開発',
        color: 'bg-teal-300',
        items: [
          '画像生成ロジックの設計と実装',
          'Vue.jsを使用したフロントエンド開発',
          'Bootstrapを活用したUI実装',
          'パフォーマンス最適化とユーザー体験の向上',
          'デプロイメントと運用の自動化'
        ],
      },
      {
        title: 'カスタマーサポート',
        color: 'bg-pink-400',
        items: [
          '法人向けカスタマイズプランの作成',
          '法人顧客からの問い合わせ対応',
          'カスタマイズ要件のヒアリングと実装'
        ],
      }
    ]
  },

  challenges: {
    issues: [
      {
        title: "オンライン名刺交換の実現",
        description: "コロナ禍でビデオ会議が急速に普及する中、従来の名刺交換ができない状況で、誰でも簡単に名刺の背景画像を作成できる手段が必要でした。個人情報を一切サーバーに送信・保管しないために、画像生成をクライアントサイドで完結させる実装に加え、ブラウザ上での完結という使いやすさの実現が課題でした。"
      }
    ]
  },

  achievements: [
    {
      title: "ユーザー数",
      value: "50,000+",
      description: "リリース後3年間での累計ユーザー数"
    },
    {
      title: "アクティブユーザー",
      value: "500+",
      description: "日常的な利用者数"
    }
  ],

  techStack: {
    frontend: ['Vue.js', 'HTML5', 'CSS3', 'Bootstrap'],
    development: ['Git', 'GitHub'],
    analytics: ['Google Analytics']
  },

  slides: [
    {
      title: 'バーチャル名刺背景ジェネレーター',
      description: 'オンライン会議やウェビナーで活用できる背景画像を、名前・所属・QRコード付きで自動生成。誰でも簡単に使えるUIと、リアルタイムプレビュー機能を実装しました。',
      images: [image1],
      link: 'https://online-meishi.biz/',
    }
  ],
};

export default virtualBusinessCard;