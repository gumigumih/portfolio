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
      phase: "要件定義・設計",
      period: "2023年4月 - 5月",
      roles: [
        "プロダクト戦略の立案と要件定義",
        "技術選定とアーキテクチャ設計",
        "開発チームの編成と役割分担"
      ],
      activities: [
        {
          category: "技術選定",
          description: "UnityとOpenSeeFaceを活用した高精度な顔認識技術の選定と実装計画の立案。プライバシーを保護しながらも自然な表情や動きを表現できるアバターシステムの設計を行いました。"
        },
        {
          category: "要件定義",
          description: "ユーザー要件の分析と技術検証を実施。オンライン会議や授業での利用シーンを想定したUI/UX設計を行い、設計ドキュメントを作成しました。"
        }
      ]
    },
    {
      phase: "開発フェーズ",
      period: "2023年6月 - 8月",
      roles: [
        "開発プロセスの確立と管理",
        "コードレビューと品質管理",
        "チーム間のコミュニケーション調整"
      ],
      activities: [
        {
          category: "開発環境構築",
          description: "Docker Composeを使用した開発環境の標準化と、GitHub ActionsによるCI/CDパイプラインの構築を実施。複数の開発者が効率的に開発を進められる環境を整備しました。"
        },
        {
          category: "品質管理",
          description: "コードレビューと品質管理を徹底し、チーム間のコミュニケーションを円滑に進めました。また、開発進捗の管理とリスク対策を実施しました。"
        }
      ]
    },
    {
      phase: "テスト・改善",
      period: "2023年9月 - 10月",
      roles: [
        "ユーザーテストの実施と分析",
        "フィードバックに基づく改善",
        "パフォーマンス最適化"
      ],
      activities: [
        {
          category: "ユーザビリティ改善",
          description: "ユーザーテストを重ね、直感的な操作性と分かりやすいインターフェースの実現に取り組みました。特に、アバターの選択や表情の調整など、重要な機能へのアクセスを容易にする設計を重視しました。"
        },
        {
          category: "パフォーマンス最適化",
          description: "フィードバックの収集と分析を実施し、改善点の特定と優先順位付けを行いました。また、パフォーマンステストと最適化を繰り返し実施しました。"
        }
      ]
    },
    {
      phase: "リリース・運用",
      period: "2023年11月 - 現在",
      roles: [
        "リリース計画の立案と実行",
        "ユーザーサポート体制の構築",
        "継続的な改善と新機能開発"
      ],
      activities: [
        {
          category: "サポート体制構築",
          description: "FAQの充実とサポートチームの育成により、効果的なユーザーサポート体制を構築。また、教育機関や企業への導入を促進するための営業活動を展開しました。"
        },
        {
          category: "マーケット展開",
          description: "ユーザーサポートとパートナー企業との協業を進め、導入支援と運用サポートを実施。また、継続的な改善と新機能開発の計画立案を行いました。"
        }
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