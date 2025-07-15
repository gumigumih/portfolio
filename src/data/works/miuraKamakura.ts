import { ProjectData } from './types';
import image1 from '../../assets/images/works/miuraKamakura/image1.jpg';
import image2 from '../../assets/images/works/miuraKamakura/image2.png';
import image3 from '../../assets/images/works/miuraKamakura/image3.png';
import image4 from '../../assets/images/works/miuraKamakura/image4.png';
import image5 from '../../assets/images/works/miuraKamakura/image5.png';
import image6 from '../../assets/images/works/miuraKamakura/image6.png';
import image7 from '../../assets/images/works/miuraKamakura/image7.png';
import image8 from '../../assets/images/works/miuraKamakura/image8.png';
import image9 from '../../assets/images/works/miuraKamakura/image9.png';
import image10 from '../../assets/images/works/miuraKamakura/image1.jpg';
import image11 from '../../assets/images/works/miuraKamakura/image2.png';
import image12 from '../../assets/images/works/miuraKamakura/image3.png';
import image13 from '../../assets/images/works/miuraKamakura/image4.png';
import image14 from '../../assets/images/works/miuraKamakura/image1.png';
import image15 from '../../assets/images/works/miuraKamakura/image2.png';
import image17 from '../../assets/images/works/miuraKamakura/image2.png';
import image18 from '../../assets/images/works/miuraKamakura/image3.png';
import image19 from '../../assets/images/works/miuraKamakura/image4.png';
import image20 from '../../assets/images/works/miuraKamakura/image5.png';
import image21 from '../../assets/images/works/miuraKamakura/image6.png';

export const miuraKamakura: ProjectData = {
  type: 'tourism',
  startDate: { year: 2020, month: 8 },
  endDate: { year: 2025, month: 3 },
  heading: '三浦半島・鎌倉の歴史体験デジタルコンテンツ',
  lead: '歴史体験をデジタルコンテンツとして開発',
  coverImage: image1,
  description: `文化庁・観光庁の補助金を活用し、三浦半島・鎌倉エリアの文化財を活用したデジタル歴史体験コンテンツを企画・開発しました。WEBサイト、ARマンガ、VR体験、3Dモデル、音声ガイド、バスツアーなど、多様な制作物を最大7ヶ国語対応で展開し、地域振興と歴史文化の普及を目的としたプロジェクトを推進しました。`,

  // 2. 課題
  issues: [
    {
      title: "複数制作物の進捗管理と品質保証",
      description: "性質の異なる複数制作物（ARマンガ、VR体験、音声ガイド、WEBサイト等）の進捗と納期を可視化し、関係者間での調整を通じてスムーズな全体進行を実現する必要がありました。ガントチャートを活用し、翻訳作業のタイミングを揃える必要性にも配慮した管理が課題でした。"
    },
    {
      title: "多言語翻訳工程の効率化と品質管理",
      description: "最大7ヶ国語対応において、Excelベースの翻訳進捗管理による効率的な多言語展開が必要でした。翻訳者別の進捗可視化とクライアントによる品質チェック工程の管理により、専門用語の統一性を保ちながら翻訳期間の短縮を実現することが課題でした。"
    },
    {
      title: "デジタルコンテンツの継続運用と改善サイクルの確立",
      description: "長期間にわたる複数のデジタルコンテンツの安定運用と、満足度計測に基づく継続的な改善サイクルの構築が必要でした。サーバー監視・保守対応から満足度データの集計サポート、そしてUX改善への反映まで、一連の運用フローを確立することが課題でした。"
    }
  ],

  // 3. 自分の役割
  roles: {
    details: [
      {
        title: 'プロジェクトマネジメント',
        color: 'bg-pink-400',
        items: [
          'ガントチャートを活用した複数制作物の進捗と納期管理',
          '関係者間の定期的な進捗同期とスケジュール調整',
          'スケジュール管理・タスク進行・関係者調整',
          '報告資料作成支援・クライアントとの調整',
          '予算管理・外注費・実働工数の管理',
          '制作・開発の外注調整',
          'プロジェクトリスクの最小化',
        ],
      },
      {
        title: 'システム設計・開発・運用',
        color: 'bg-teal-300',
        items: [
          'WebARコンテンツ（ARマンガ）の開発（Vue.js）',
          'AI音声ガイドAPI連携（Amazon Polly TTS）',
          '多言語CMS設計・体験データ管理システム構築',
          'サーバー監視・保守対応・cronジョブ管理',
          'GitHub Actions・Slack通知システムの導入・運用',
          '満足度計測システム・データ分析・UX改善',
          'Docker開発環境構築',
        ],
      },
      {
        title: 'UI/UX設計・実装',
        color: 'bg-yellow-300',
        items: [
          'WebAR設計・UI構成・デザイン',
          '満足度計測フォーム設計',
          'Webサイト構成設計・CMS品質管理・UI改善提案',
          'Adobe XD・Photoshop・After Effects（アニメーション制作）',
          'WordPress（テーマカスタマイズ）',
          'Google Analytics・Google Tag Manager設定',
        ],
      },
      {
        title: 'ステークホルダー管理・翻訳工程管理',
        color: 'bg-purple-300',
        items: [
          'Excelベースの翻訳進捗管理による効率的な多言語展開',
          '翻訳者別の進捗可視化とクライアントによる品質チェック工程管理',
          '制作物に応じて最大7カ国語対応を実現',
          '翻訳作業のタイミング調整と関係者間での調整',
        ],
      },
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: '制作物',
      value: '7種類',
      description: 'WEBサイト・ARマンガ・VR体験・音声ガイド等の多様なコンテンツ'
    },
    {
      title: '満足度',
      value: '90%+',
      description: '「歴史理解が深まった」との肯定的評価'
    },
    {
      title: '対応言語',
      value: '最大7ヶ国語',
      description: '制作物に応じた多言語対応を実現'
    }
  ],

  // 5. 技術スタック
  techStack: {
    frontend: ['Vue.js', 'WebAR（AR.js）'],
    backend: ['Laravel', 'MySQL'],
    voice: ['Amazon Polly（TTS）'],
    infrastructure: ['さくらレンタルサーバー', 'GitHub Actions', 'Slack通知', 'cronジョブ管理', 'Docker（開発環境）'],
    design: ['Adobe XD', 'Photoshop', 'After Effects（アニメーション制作）'],
    cms: ['WordPress（テーマカスタマイズ）'],
    analytics: ['Google Analytics', 'Google Tag Manager'],
    management: ['Excel（タスク／翻訳管理）']
  },

  // 6. プロジェクトの歩み
  timeline: [
    {
      title: "第1期：三浦一族の物語",
      period: "2020年8月～2021年3月",
      description: "三浦一族の物語を伝えるWEBサイトとARマンガの開発",
      achievements: [
        { category: "プロジェクト推進", text: "プロジェクト進行管理・多言語翻訳管理" },
        { category: "技術開発", text: "ARマンガシステム開発と4つの寺への実装" },
        { category: "プロジェクト推進", text: "三浦一族の歴史物語の企画・絵コンテ・イラスト発注ディレクション" },
        { category: "デザイン・制作", text: "三浦一族の歴史物語のアニメーション制作" },
        { category: "デザイン・制作", text: "WEBサイト群（三浦一族・VR発願・現地体験）の外注納品物ブラッシュアップ" },
        { category: "デザイン・制作", text: "体験説明タブレットアプリUI/UXデザイン" }
      ]
    },
    {
      title: "第2期：北条家の物語と和賀江嶋",
      period: "2021年7月～2022年3月",
      description: "北条家の物語と和賀江嶋のARコンテンツ開発",
      achievements: [
        { category: "プロジェクト推進", text: "プロジェクト進行管理・多言語翻訳管理" },
        { category: "技術開発", text: "ARマンガシステム拡張と5つの寺への追加実装" },
        { category: "技術開発", text: "和賀江嶋GPS AR実装" },
        { category: "デザイン・制作", text: "和賀江嶋の3Dモデル制作" },
        { category: "デザイン・制作", text: "北条家関連WEBサイト群の制作" },
        { category: "運用・改善", text: "対応言語を2か国語増加（5ヶ国語対応）" }
      ]
    },
    {
      title: "第3期：ツアー紹介WEBサイト制作",
      period: "2022年10月～2024年2月", 
      description: "バスツアー向けのWordpressテーマをカスタマイズし、ツアー紹介WEBサイトを制作",
      achievements: [
        { category: "デザイン・制作", text: "ツアー紹介WEBサイトの制作（WordPressカスタマイズ・UI/UXデザイン）" },
        { category: "運用・改善", text: "WEBサイトの保守運用" }
      ]
    },
    {
      title: "第4期：新規バスツアーと音声ガイド",
      period: "2024年7月～2025年3月",
      description: "新規バスツアー向けの音声ガイド開発と既存WEBサイトの改善",
      achievements: [
        { category: "プロジェクト推進", text: "プロジェクト予算管理" },
        { category: "技術開発", text: "音声ガイドシステムの要件定義・システム構成・画面設計・実装（AI音声生成API実装）" },
        { category: "デザイン・制作", text: "WEBサイト群の制作・改善（音声ガイド紹介・新規ツアー向け・既存サイト整理改善）" },
      ]
    }
  ],

  // 7. 具体的な制作物
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
      title: '三浦一族紹介サイト',
      description: '三浦一族の歴史を紹介するWEBサイト。歴史背景・物語構成を直感的に伝える構成で、観光前の予習や現地での理解促進に活用されました。',
      images: [image7],
      link: 'https://unkeibushido.com/',
    },
    {
      title: '現地体験プログラム紹介サイト',
      description: '寺院で体験できる写経・彩色・彫像などのプログラム内容を紹介したサイト。体験説明タブレットアプリと連携し、体験時の写真を保管できる機能も提供しています。',
      images: [image8],
      link: 'https://kamakurabushi.com/',
    },
    {
      title: 'VR発願体験紹介サイト',
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
  ]
};

export default miuraKamakura; 