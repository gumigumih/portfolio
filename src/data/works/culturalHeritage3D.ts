import { ProjectData } from './types';
import image1 from '../../assets/images/works/9/image1.png';
import image2 from '../../assets/images/works/9/image2.png';
import image3 from '../../assets/images/works/9/image3.png';
import image4 from '../../assets/images/works/9/image4.png';
import image5 from '../../assets/images/works/9/image5.png';
import image6 from '../../assets/images/works/9/image6.png';

export const culturalHeritage3D: ProjectData = {
  type: 'tourism',
  startDate: { year: 2022, month: 9 },
  endDate: { year: 2023, month: 3 },
  heading: '文化財3Dビューアー',
  lead: 'VR技術で文化財を没入感のある3D体験として公開するシステム',
  coverImage: image1,
  description: `本プロジェクトは、文化財の3DスキャンデータをWEB上で公開するシステムの開発です。
ユーザーがスクロール操作でカメラアングルを次々と切り替えながら、魅せたい場所と角度を意図的に演出し、音声ガイドも再生できるインターフェースを実装しました。
また、複数の文化財データをWEBサイトに埋め込めるよう、3Dビューアーの基本機能をVue.jsでプラグイン化しました。`,

  // 2. 課題
  issues: [
    {
      title: "直感的なUI/UXの実現",
      description: "複雑な3D操作を、文化財に詳しくない一般ユーザーでも直感的に操作できるインターフェースの設計が課題でした。スクロール操作によるカメラ制御と音声ガイドの連携により、没入感のある体験を実現する必要がありました。"
    },
    {
      title: "汎用性の確保とプラグイン化",
      description: "複数の文化財サイトで再利用できるよう、Vue.jsコンポーネントとしてプラグイン化し、異なるデータ形式や表示要件に対応できる柔軟な設計が求められました。"
    }
  ],
  
  // 3. 自分の役割
  roles: {
    overall: [
      'プロジェクトマネージャー',
      'メインエンジニア'
    ],
    details: [
      {
        title: 'プロジェクト推進',
        color: 'bg-blue-300',
        items: [
          'チーム管理・スケジュール調整・進行管理',
        ],
      },
      {
        title: '技術開発',
        color: 'bg-teal-300',
        items: [
          '3Dビューアーの機能設計・UI設計',
          '3Dビューアーの開発・Vue.jsによるプラグイン化',
        ],
      },
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "対応文化財",
      value: "6件",
      description: "須磨寺、針尾送信所、竹田城跡、熊本遺産、姫路城、湊川隧道"
    },
    {
      title: "プラグイン化",
      value: "Vue.js",
      description: "再利用可能なコンポーネントとして実装"
    }
  ],

  // 5. 技術スタック
  techStack: {
    frontend: ['Vue.js', 'A-Frame'],
  },

  // 6. 具体的な制作物
  slides: [
    {
      title: '須磨寺',
      description: '須磨寺の3Dビューアー。スクロール操作でカメラアングルを切り替えながら、魅せたい場所と角度を意図的に演出し、音声ガイドも再生できるインターフェースを実装。',
      images: [image1],
      link: 'https://hacosco.com/suma/',
    },
    {
      title: '針尾送信所',
      description: '針尾送信所の3Dビューアー。文化財の3DスキャンデータをWEB上で公開し、没入感のある3D体験を提供。',
      images: [image2],
      link: 'https://hacosco.com/hario/',
    },
    {
      title: '竹田城跡',
      description: '竹田城跡の3Dビューアー。Vue.jsでプラグイン化した基本機能により、複数の文化財データをWEBサイトに埋め込み可能。',
      images: [image3],
      link: 'https://hacosco.com/takeda/',
    },
    {
      title: '熊本の近代化遺産 三池炭鉱万田坑と三角西港',
      description: '熊本の近代化遺産の3Dビューアー。三池炭鉱万田坑と三角西港の歴史的価値を3D体験として公開。',
      images: [image4],
      link: 'https://hacosco.com/kumamoto-heritage/',
    },
    {
      title: '姫路城',
      description: '姫路城の3Dビューアー。世界遺産の詳細な3Dスキャンデータを活用し、高品質な文化財体験を提供。',
      images: [image5],
      link: 'https://hacosco.com/himeji-castle/',
    },
    {
      title: '神戸市兵庫区の近代化遺産 湊川隧道',
      description: '神戸市兵庫区の近代化遺産・湊川隧道の3Dビューアー。地域の歴史的価値を3D技術で保存・公開。',
      images: [image6],
      link: 'https://hacosco.com/hyogoku/',
    },
  ],
};

export default culturalHeritage3D; 