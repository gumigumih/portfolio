import image1 from '../../../assets/images/works/13/image1.png';
import image2 from '../../../assets/images/works/13/image2.png';
import image3 from '../../../assets/images/works/13/image3.png';
import image4 from '../../../assets/images/works/13/image4.png';
import image5 from '../../../assets/images/works/13/image5.jpg';
import image6 from '../../../assets/images/works/13/image6.png';

const projectData = {
  type: 'product',
  period: '2020年6月～2025年3月',
  startDate: { year: 2020, month: 6 },
  endDate: { year: 2025, month: 3 },
  heading: 'NICE CAMERA',
  lead: 'アバタートラッキングアプリ',
  coverImage: image1,
  description: `UnityとOpenSeeFaceを活用した顔認識技術により、高品質なアバター表示と安定した動作を実現するリモート会議・ライブ配信用アプリ。
ITリテラシーの低いユーザーでも直感的に操作できるUIを重視し、累計6,000人のユーザーに利用されています。`,

  // 2. 自分の役割
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
          'プロダクトビジョン・ロードマップの策定',
          '市場分析・競合調査',
          '収益モデルの設計・実装（サブスクリプション課金）',
          '展示会出展によるマーケット開拓',
        ],
      },
      {
        title: 'プロダクト開発',
        color: 'bg-teal-300',
        items: [
          '要件定義・機能設計',
          '開発チームの技術指導・環境整備',
          'CI/CDパイプラインの構築',
          '品質管理・テスト戦略の策定',
          'パフォーマンス最適化（30%向上）',
        ],
      },
      {
        title: 'ユーザー体験',
        color: 'bg-yellow-300',
        items: [
          'UI/UXデザインの設計・改善',
          'ユーザーテストの実施・分析',
          'ヘルプページの作成',
          'Discordコミュニティの運営',
          'カスタマーサポート体制の構築',
        ],
      },
      {
        title: 'チームマネジメント',
        color: 'bg-purple-300',
        items: [
          '開発チームの管理・スケジュール調整',
          'Gitルールの策定・浸透',
          'エラーハンドリングの標準化',
          'チームの成長支援・技術指導',
          '法務対応（利用規約・契約書）',
        ],
      },
    ]
  },

  // 3. 課題と解決アプローチ
  challenges: {
    issues: [
      {
        title: "オンラインコミュニケーションの課題",
        description: "オンライン会議や授業における「カメラオフによるコミュニケーションの難しさ」「プライバシーへの懸念」「盗撮リスク」といった課題を解決する必要がありました。",
      },
      {
        title: "ムーンショット計画への貢献",
        description: "政府のムーンショット計画で目指す「一人10体以上のアバター操作」の第一歩として、アバター操作に慣れるためのツールとしても位置づけられています。",
      }
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "ユーザー数",
      value: "6,000+",
      description: "累計ユーザー数"
    },
    {
      title: "導入実績",
      value: "16",
      description: "企業・団体・学校"
    },
    {
      title: "代理店",
      value: "3",
      description: "販売代理店"
    },
  ],

  // 5. 技術スタック
  techStack: {
    frontend: ['Vue', 'Bootstrap'],
    backend: ['Laravel', 'PHP', 'Composer'],
    database: ['MySQL'],
    payment: ['Stripe'],
    design: ['XD', 'Photoshop', 'Adobe Express', 'Illustrator'],
    analytics: ['Google Analytics', 'Google Tag Manager'],
    development: ['Docker Compose', 'Git', 'GitHub Actions']
  },

  // 6. 具体的な制作物
  slides: [
    {
      title: 'プロダクトマーケティングサイト',
      description: 'プロダクト紹介・機能説明・価格案内を網羅した公式WEBサイト。SEOとUIを意識した設計により、ユーザーにとって分かりやすい情報提供を実現。',
      images: [image1],
      link: 'https://nicecamera.kidsplates.jp/',
    },
    {
      title: '運用管理システム',
      description: 'ユーザー管理と運営管理を統合したシステム。左：ユーザー登録・課金管理を行うアカウント管理画面、右：運営側のモニタリング・設定を行う管理画面。',
      images: [image2, image3],
    },
    {
      title: 'プロダクトUIデザイン',
      description: 'ユーザー中心設計に基づくUIデザイン。直感的な操作性を実現するためのアイコン設計・色設計・レイアウト最適化。',
      images: [image4],
    },
    {
      title: '展示会・マーケティング活動',
      description: '展示会でのデモブース構成と配布用チラシ・説明資料。プロダクトの価値提案と導入メリットを効果的に伝える資料設計。',
      images: [image5, image6],
    }
  ],

  // 7. プロジェクトの歩み
  timeline: [
    {
      title: "初期リリースと基本機能の確立",
      period: "2020年7月〜2021年2月",
      description: "カメラオフ時でも表現豊かなコミュニケーションを実現する基本機能を確立。直感的なUI設計により、ITリテラシーの低いユーザーでも利用可能なプロダクトを実現。",
      achievements: [
        { category: "戦略", text: "プロダクトビジョンの策定と開発スケジュールの作成" },
        { category: "デザイン", text: "プロダクトサイト・ロゴ・UIデザインなど、一貫性のあるブランディングを実現" },
        { category: "デザイン", text: "機能ごとにUI色分けによる直感的な操作性を実現" },
        { category: "運営", text: "ユーザーテストに基づく初期フィードバックの収集と分析" }
      ]
    },
    {
      title: "アバター機能の導入と有料プランへの移行",
      period: "2021年4月〜2021年12月",
      description: "VRM形式のサポートや独自アバターの提供により、ユーザーの個性表現を促進。サブスクリプション課金モデルの導入により、持続可能なビジネスモデルを確立。",
      achievements: [
        { category: "戦略", text: "料金プラン案をだして、有料と無料の機能の違いを確定" },
        { category: "デザイン", text: "UIリニューアル、機能拡張に耐えうるUIに変更" },
        { category: "実装", text: "Laravelフレームワークを使用したアカウント管理システムの構築" },
        { category: "実装", text: "Stripe APIを活用した課金システムの実装" },
        { category: "実装", text: "アカウント管理サーバーの集計分析システムの構築" },
        { category: "運営", text: "ヘルプガイドサイトの設計と実装" }
      ]
    },
    {
      title: "プラットフォーム対応と代理店展開",
      period: "2022年2月〜2022年6月",
      description: "Mac版のリリースと外部アバタープラットフォームとの連携により、ユーザーベースを拡大。代理店契約システムの構築により、ビジネス展開の基盤を整備。",
      achievements: [
        { category: "戦略", text: "デジタルハリウッド大学との代理店契約（beCAMing）の契約管理・請求書発行業務の担当" },
        { category: "戦略", text: "代理店を前提とした法人契約向けの仕組みの考案" },
        { category: "実装", text: "代理店向け管理画面の設計と実装" },
        { category: "実装", text: "Admin管理画面の機能拡張と最適化" },
        { category: "チームマネジメント", text: "GitHub運用ルールの制定とチームへの浸透" }
      ]
    },
    {
      title: "メタバース連携と教育機関展開",
      period: "2022年7月〜2022年12月",
      description: "メタバース機能の特許取得により、技術的な優位性を確立。教育機関や観光施設での導入事例を創出し、サービスの社会的価値を高める。",
      achievements: [
        { category: "戦略", text: "教育機関・観光施設での導入実績創出" },
        { category: "戦略", text: "ソフトウェアテストの標準的手法の導入による品質向上" },
        { category: "デザイン", text: "オンライン観光案内用のアバターコンシェルジュの衣装制作" },
        { category: "運営", text: "スタンプコンテストの企画・運営を主導" },
        { category: "チームマネジメント", text: "テスト一覧表の作成と標準化による品質向上" }
      ]
    },
    {
      title: "AI機能の導入とパフォーマンス改善",
      period: "2023年3月〜2023年12月",
      description: "AI-Kata機能の導入により、より自然なコミュニケーションを実現。Live2DやVRM1.0への対応により、表現の幅を拡大。",
      achievements: [
        { category: "実装", text: "AI-Kata機能の導入による自然なコミュニケーション実現" },
        { category: "実装", text: "Live2D・VRM1.0対応による表現力の向上" },
        { category: "実装", text: "パフォーマンスの最適化による快適な利用環境の提供" },
        { category: "運営", text: "Discordサーバーによるユーザーコミュニティの形成" },
        { category: "運営", text: "ユーザーサポート体制の強化と顧客満足度の向上" }
      ]
    },
    {
      title: "機能の洗練とサービス連携の強化",
      period: "2024年2月〜2025年2月",
      description: "マウスによる直感的なアバター操作機能の実装と、ウィジェットを活用したスタンプ表示や表情切り替え機能の追加により、ユーザビリティを大幅に向上。",
      achievements: [
        { category: "戦略", text: "競合アプリと比べて劣っていた直観的アバター移動機能の考案と推進" },
        { category: "戦略", text: "RURAとのパートナーシップ構築の提案書作成と推進" },
        { category: "デザイン", text: "ウィジェットベースのスタンプ・表情切り替え機能のUIデザイン" },
        { category: "運営", text: "新機能のユーザーテスト実施と改善" }
      ]
    }
  ]
};

export default projectData; 