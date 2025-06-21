import { ProjectData } from './types';
import image1 from '../../assets/images/works/5/image1.jpg';
import image2 from '../../assets/images/works/5/image2.png';
import image3 from '../../assets/images/works/5/image3.png';
import image4 from '../../assets/images/works/5/image4.png';
import image5 from '../../assets/images/works/5/image5.png';
import image6 from '../../assets/images/works/5/image6.png';
import image7 from '../../assets/images/works/5/image7.png';
import image8 from '../../assets/images/works/5/image8.png';
import image9 from '../../assets/images/works/5/image9.png';
import image10 from '../../assets/images/works/6/image1.jpg';
import image11 from '../../assets/images/works/6/image2.png';
import image12 from '../../assets/images/works/6/image3.png';
import image13 from '../../assets/images/works/6/image4.png';
import image14 from '../../assets/images/works/7/image1.png';
import image15 from '../../assets/images/works/7/image2.png';
import image17 from '../../assets/images/works/8/image2.png';
import image18 from '../../assets/images/works/8/image3.png';
import image19 from '../../assets/images/works/8/image4.png';
import image20 from '../../assets/images/works/8/image5.png';
import image21 from '../../assets/images/works/8/image6.png';

export const miuraKamakura: ProjectData = {
  type: 'tourism',
  startDate: { year: 2020, month: 8 },
  endDate: { year: 2025, month: 3 },
  heading: '三浦半島・鎌倉の歴史体験デジタルコンテンツ',
  lead: '歴史体験をデジタルコンテンツとして開発',
  coverImage: image1,
  description: `本プロジェクトは、三浦半島・鎌倉の歴史体験をデジタルコンテンツとして開発するものです。
文化庁・観光庁の補助金を活用し、WEBサイト制作、ARマンガ、VR体験、音声ガイドなど、多様なデジタルコンテンツを開発しました。
また、これらのコンテンツを活用したバスツアーを企画・実施し、地域の魅力発信と観光促進に貢献しています。`,
  roles: [
    {
      title: 'マネジメント',
      color: 'bg-pink-400',
      items: [
        'プロジェクト全体の進行管理・タスク管理',
        '関係者との調整・制作フローの管理',
        '各制作物の要件整理',
        '開発チーム・外注デザイナーの調整',
        '多言語化に伴う翻訳管理',
        '音声ガイドシステムの要件整理',
        'WEBサイトの構成改善整理案の作成',
      ],
    },
    {
      title: 'エンジニアリング',
      color: 'bg-teal-300',
      items: [
        'WebARコンテンツ（ARマンガ）の開発（Vue.js）',
        '満足度計測フォームの開発',
        'API開発・データ管理システムの構築',
        'サーバー監視・障害対応',
        'エラー検知・Slack通知システムの導入・運用',
        '音声ガイドシステムのシステム設計・データ管理',
        'AI音声生成APIの導入・実装',
      ],
    },
    {
      title: 'デザイン',
      color: 'bg-yellow-300',
      items: [
        '外注制作のWEBサイトを品質チェック・改善\n機能追加・デザイン調整を行い、リリース対応',
        'After Effectsを用いたアニメーション動画の制作',
        '音声ガイドLPデザイン・実装',
        '音声ガイドアプリのUI/UXデザイン設計・実装',
      ],
    },
  ],
  timeline: [
    {
      title: "第1期：三浦一族の物語",
      period: "2020年8月～2021年3月",
      description: "三浦一族の物語を伝えるWEBサイトとARマンガの開発",
      achievements: [
        { category: "マネジメント", text: "プロジェクト進行管理・タスク管理" },
        { category: "エンジニアリング", text: "WebARコンテンツ（ARマンガ）の開発" },
        { category: "デザイン", text: "WEBサイト品質チェック・改善対応" },
        { category: "制作物", text: "WEBサイト制作（三浦一族紹介サイト）" },
        { category: "制作物", text: "4つの寺に多言語対応のWEB看板とARマンガを設置" },
        { category: "制作物", text: "写経・彩色・彫像のプログラム開発" },
        { category: "制作物", text: "VR体験の開発と専用WEBサイト制作" }
      ]
    },
    {
      title: "第2期：北条家の物語と和賀江嶋",
      period: "2021年7月～2022年3月",
      description: "北条家の物語と和賀江嶋のARコンテンツ開発",
      achievements: [
        { category: "エンジニアリング", text: "ARマンガ追加開発" },
        { category: "マネジメント", text: "多言語対応の翻訳管理" },
        { category: "デザイン", text: "北条家WEBサイト制作" },
        { category: "エンジニアリング", text: "GPS AR実装" },
        { category: "制作物", text: "5つの寺にARマンガを追加制作" },
        { category: "制作物", text: "対応言語を2か国語増加（5ヶ国語対応）" },
        { category: "制作物", text: "北条家の物語WEBサイト制作" },
        { category: "制作物", text: "和賀江嶋の3Dモデル制作とGPS AR実装" }
      ]
    },
    {
      title: "第3期：バスツアー企画・実施",
      period: "2022年10月～2023年2月",
      description: "デジタルコンテンツを活用したバスツアーの企画・実施",
      achievements: [
        { category: "マネジメント", text: "バスツアー企画・調整" },
        { category: "デザイン", text: "ツアー紹介WEBサイト制作" },
        { category: "マネジメント", text: "デジタルコンテンツ活用戦略立案" },
        { category: "エンジニアリング", text: "満足度計測フォーム開発" },
        { category: "制作物", text: "源頼朝ゆかりの地を巡るバスツアー実施" },
        { category: "制作物", text: "ツアー紹介WEBサイト制作" },
        { category: "制作物", text: "デジタルコンテンツの活用方法の確立" }
      ]
    },
    {
      title: "第4期：新規バスツアーと音声ガイド",
      period: "2024年7月～2025年3月",
      description: "新規バスツアーの企画と音声ガイドの開発",
      achievements: [
        { category: "エンジニアリング", text: "音声ガイドシステム設計・開発" },
        { category: "エンジニアリング", text: "AI音声生成API実装" },
        { category: "デザイン", text: "音声ガイドUI/UXデザイン" },
        { category: "デザイン", text: "バスツアーWEBサイト改修" },
        { category: "制作物", text: "三浦按針・ペリー・ヴェルニーゆかりの地を巡るバスツアー企画" },
        { category: "制作物", text: "AI音声生成を活用した多言語対応の音声ガイド開発" },
        { category: "制作物", text: "4つの神社への音声ガイド導入" },
        { category: "制作物", text: "バスツアーWEBサイトの改修" }
      ]
    }
  ],
  achievements: [
    {
      title: 'デジタルコンテンツ',
      value: '12+',
      description: '開発したARマンガ・WEBサイト・VR体験の総数'
    },
    {
      title: '対応言語',
      value: '5ヶ国語',
      description: '日本語・英語・中国語・韓国語・ベトナム語'
    },
    {
      title: '満足度',
      value: '87.8%',
      description: 'AR歴史マンガ体験者アンケート'
    }
  ],
  issues: [
    {
      title: "多言語対応の管理と品質保証",
      description: "5ヶ国語対応において、翻訳管理システムの導入と言語切り替えテストの自動化が必要でした。特に、文化的背景を考慮した翻訳品質の維持と、各言語でのUI表示崩れの対応に時間を要しました。"
    },
    {
      title: "オフライン環境でのAR体験の実現",
      description: "現地の通信環境が不安定な場合でも、ARマンガが正常に動作するシステムの構築が課題でした。GPS補正アルゴリズムの開発とキャッシュシステムの最適化により、安定したAR体験を実現しました。"
    },
    {
      title: "AI音声生成による音声ガイドの実装",
      description: "5ヶ国語対応の音声ガイドを効率的に制作するため、AI音声生成APIの導入と位置情報連動システムの実装が必要でした。品質の担保と運用コストのバランスを取ることが課題でした。"
    }
  ],
  techStack: {
    frontend: ['Vue.js', 'TypeScript', 'WebGL', 'AR.js', 'Three.js'],
    backend: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    infrastructure: ['AWS', 'Docker', 'GitHub Actions', 'CloudFront'],
    tools: ['Figma', 'After Effects', 'Blender', 'Git', 'Slack']
  },
  slides: [
    {
      title: 'WEB看板＋ARマンガ',
      description: '現地に設置された看板のQRコードを読み込むと、各国語対応のWEB看板が表示され、そのままARマンガを閲覧。歴史背景を楽しく学べる仕組みで、体験後にはアンケート回答も促されます。',
      images: [image1, image2, image10, image11]
    },
    {
      title: '現地体験プログラムの説明・補助タブレット',
      description: '現地で行われる写経・彩色・彫像などの体験プログラムをわかりやすく案内する補助タブレットを導入。操作性と視認性を意識し、観光客にもやさしい設計を実現しました。',
      images: [image3, image4]
    },
    {
      title: 'アニメーション制作工程',
      description: '歴史の魅力を伝えるアニメーション動画の制作工程。絵コンテをもとに外注イラストレーターに作画を依頼し、After Effectsによるアニメーション制作は自身で担当しました。',
      images: [image5, image6]
    },
    {
      title: 'WEBサイト➀ 三浦一族紹介サイト',
      description: '三浦一族の歴史を紹介するWEBサイト。歴史背景・物語構成を直感的に伝える構成で、観光前の予習や現地での理解促進に活用されました。',
      images: [image7],
      link: 'https://unkeibushido.com/',
    },
    {
      title: 'WEBサイト➁ 現地体験プログラム紹介サイト',
      description: '寺院で体験できる写経・彩色・彫像などのプログラム内容を紹介したサイト。予約システムと連携し、体験参加者の利便性向上と情報提供を両立しています。',
      images: [image8],
      link: 'https://kamakurabushi.com/',
    },
    {
      title: 'WEBサイト➂ VR発願体験紹介サイト',
      description: '仏師の儀式や武士の祈りを再現したVR体験の専用サイト。体験の背景・意図を丁寧に説明し、仮想空間での歴史的没入体験を補完しています。',
      images: [image9],
      link: 'https://virtualunkei.com/',
    },
    {
      title: '北条家の物語のWEBサイト',
      description: '北条家ゆかりの地を紹介する特設WEBサイト。北条家の物語を視覚的に楽しんでもらう構成です。',
      images: [image12],
      link: 'https://kamakurabushi.com/',
    },
    {
      title: '和賀江嶋のAR',
      description: '日本最古の築港遺跡「和賀江嶋」を3Dで復元し、GPS連動のAR体験として提供。現地の看板から閲覧することで、リアルな視点で歴史を体感できます。',
      images: [image13],
    },
    {
      title: 'バスツアーWEBサイト',
      description: 'バスツアーの内容や日程、体験内容を紹介するWEBサイト。訪問地の見どころや、過去に制作されたARマンガ・WEB看板の活用シーンも交えて、ツアーの魅力を発信しました。',
      images: [image14, image15],
      link: 'https://miura.bushido-powerspot.jp/',
    },
    {
      title: '音声ガイドのLP',
      description: '観光客向けに音声ガイドの利用方法や特徴をわかりやすく伝えるためのLPを新たにデザイン・実装しました。',
      images: [image17],
      link: 'https://audioguide.bushido-powerspot.jp/',
    },
    {
      title: '音声ガイド要件・仕様',
      description: '多言語・複数地点対応の音声ガイドを効率的に運用するため、機能要件やシナリオ設計をドキュメント化し、開発に落とし込みました。',
      images: [image18],
    },
    {
      title: '音声ガイド管理画面・体験画面',
      description: 'ガイド音声の登録・更新を行う管理画面、およびユーザーが実際に利用する体験画面をUI/UX設計から実装まで担当しました。',
      images: [image19, image20],
    },
    {
      title: 'WEBサイトの構成改善整理案',
      description: 'ツアー紹介WEBサイトの情報設計を見直し、ユーザーが迷わずアクセスできるよう導線や構成の改善案を提案・反映しました。',
      images: [image21],
      link: 'https://miura.bushido-powerspot.jp/',
    },
  ],
};

export default miuraKamakura; 