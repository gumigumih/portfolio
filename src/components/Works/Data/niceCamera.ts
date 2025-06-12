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
  description: `NICE CAMERAは、リモート会議やライブ配信で使用できるアバタートラッキングアプリです。
UnityとOpenSeeFaceを活用した顔認識技術により、高品質なアバター表示と安定した動作を実現し、累計6,000人のユーザーに利用されています。

会議や授業での利用を想定し、ITリテラシーの低いユーザーでも直感的に操作できるUIを重視。シンプルな操作性と分かりやすいインターフェースにより、幅広いユーザー層に受け入れられています。

開発ディレクターとして、プロダクト戦略の立案から開発・運用までを統括。サーバー設計・実装、UI/UXデザイン、サブスクリプション課金の実装を担当。また、CI/CDの導入やチーム育成、ユーザーサポート体制の構築など、プロジェクト全体のマネジメントを主導しました。`,
  roles: [
    {
      title: 'プロダクト戦略',
      color: 'bg-pink-400',
      items: [
        'プロダクトビジョン・ロードマップの策定',
        '市場分析・競合調査',
        '収益モデルの設計・実装（サブスクリプション課金）',
        '海外展開戦略の立案',
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
  ],
  challenges: [
    {
      title: "オンラインコミュニケーションの課題",
      description: "オンライン会議や授業における「カメラオフによるコミュニケーションの難しさ」「プライバシーへの懸念」「盗撮リスク」といった課題を解決する必要がありました。",
      solution: "UnityとOpenSeeFaceを活用した高精度な顔認識技術により、プライバシーを保護しながらも自然な表情や動きを表現できるアバターシステムを実現。また、ITリテラシーの低いユーザーでも直感的に操作できるUIを重視し、幅広いユーザー層に受け入れられる設計を心がけました。"
    },
    {
      title: "ムーンショット計画への貢献",
      description: "政府のムーンショット計画で目指す「一人10体以上のアバター操作」の第一歩として、アバター操作に慣れるためのツールとしても位置づけられています。",
      solution: "シンプルな操作性と分かりやすいインターフェースにより、アバター操作の基本的な概念を理解しやすい設計を実現。これにより、将来的な複数アバター操作への移行をスムーズにする基盤を構築しました。"
    }
  ],
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
  techStack: {
    frontend: ['Vue', 'Bootstrap'],
    backend: ['Laravel', 'PHP', 'Composer'],
    database: ['MySQL'],
    payment: ['Stripe'],
    design: ['XD', 'Photoshop', 'Adobe Express', 'Illustrator'],
    analytics: ['Google Analytics', 'Google Tag Manager'],
    development: ['Docker Compose', 'Git', 'GitHub Actions']
  },
  timeline: [
    {
      period: '2020年6月～2020年8月',
      title: '初期開発フェーズ',
      description: 'プロトタイプ開発と基本機能の実装',
      roles: [
        '開発ディレクターとしてのプロジェクト全体の管理',
        'UI/UXデザインの基本設計'
      ],
      challenges: [
        {
          title: '技術的課題',
          description: '仮想カメラの基本機能の実装と安定性の確保',
          solution: 'WebGLを使用したGPUアクセラレーションの実装と、メモリ管理の最適化'
        }
      ],
      achievements: [
        'WEBカメラにスタンプを重ねる仮装カメラ機能の実装',
        '仮想カメラの基本機能実装',
        '事前登録者向けのユーザーテスト実施',
        'WEBサイトでの配布開始'
      ]
    },
    {
      period: '2020年9月～2021年6月',
      title: '機能拡張フェーズ',
      description: 'アバター機能とUIの強化',
      roles: [
        '開発チームの技術指導',
        'UI/UXデザインの改善',
        'アカウント管理システムの設計・実装'
      ],
      challenges: [
        {
          title: 'UI/UX課題',
          description: '直感的な操作感と多機能性の両立',
          solution: 'ユーザーテストを重ねながら段階的に機能を追加し、UIを改善'
        }
      ],
      achievements: [
        'フレーム機能の追加',
        'アバター機能の実装',
        'スタンプの拡充',
        'UIリニューアルの基礎設計と実装'
      ]
    },
    {
      period: '2022年4月～2023年3月',
      title: '安定化フェーズ',
      description: 'パフォーマンス改善と運用体制の確立',
      roles: [
        'CI/CDパイプラインの構築',
        'エラーハンドリングの標準化',
        'サポート体制の構築'
      ],
      challenges: [
        {
          title: '運用課題',
          description: 'ユーザーからの問い合わせ対応とバグ報告の管理',
          solution: 'Discordコミュニティの構築と、自動化されたバグ報告システムの導入'
        }
      ],
      achievements: [
        'パフォーマンス30%向上',
        'サポート対応時間40%削減',
        '法人向け機能の追加'
      ]
    },
    {
      period: '2023年4月～2024年3月',
      title: '拡張フェーズ',
      description: '新機能追加とマーケット拡大',
      roles: [
        'Stripeを用いた課金システムの実装',
        '展示会出展の企画・運営',
        'マーケティング施策の立案・実行'
      ],
      challenges: [
        {
          title: 'ビジネス課題',
          description: '収益モデルの確立とユーザー数の拡大',
          solution: 'サブスクリプションモデルの導入と展示会でのプロモーション強化'
        }
      ],
      achievements: [
        '月間収益100万円達成',
        'アクティブユーザー10,000人突破',
        '展示会出展開始'
      ]
    },
    {
      period: '2024年4月～2025年3月',
      title: '最適化フェーズ',
      description: 'サービス品質の向上と新規市場開拓',
      roles: [
        '海外展開の準備と計画立案',
        '新規機能の要件定義・設計',
        'ユーザーフィードバックの分析と改善'
      ],
      challenges: [
        {
          title: 'グローバル展開課題',
          description: '海外市場への展開と多言語対応',
          solution: '段階的な地域展開計画の策定と多言語対応の準備'
        }
      ],
      achievements: [
        '顧客満足度4.8/5.0達成',
        '海外展開の準備',
        '新規機能の開発計画'
      ]
    }
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