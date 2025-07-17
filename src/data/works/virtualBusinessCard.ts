import { ProjectData } from './types';
import image1 from '../../assets/images/works/virtualBusinessCard/image1.png';

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

  // 2. 課題
  issues: [
    {
      title: "個人情報の安全性確保",
      description: "コロナ禍によるビデオ会議の急速な普及に対応し、個人情報を一切サーバーに送信しない安全な仕組みの構築が課題でした。画像生成をクライアントサイドで完結させることで、プライバシーを保護する必要がありました。"
    },
    {
      title: "3日間での迅速なリリース",
      description: "市場のニーズに素早く応えるため、発案から開発・リリースまでを3日間で完了させる必要がありました。限られた時間の中で、ユーザビリティと機能性を両立させることが課題でした。"
    }
  ],

  // 3. 自分の役割
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

  // 4. 成果と実績
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
    },
    {
      title: "超短期間リリース",
      value: "3日",
      description: "発案から開発・リリースまで3日で完遂"
    }
  ],

  // 5. 技術スタック
  techStack: {
    frontend: ['Vue.js', 'HTML5', 'CSS3', 'Bootstrap'],
    development: ['Git', 'GitHub'],
    analytics: ['Google Analytics']
  },

  // 6. 具体的な制作物
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