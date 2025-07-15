import { ProjectData } from './types';
import image1 from '../../assets/images/works/snackAR/image1.png';
import image2 from '../../assets/images/works/snackAR/image2.png';
import image3 from '../../assets/images/works/snackAR/image3.png';
import image4 from '../../assets/images/works/snackAR/image4.png';

export const snackAR: ProjectData = {
  type: 'promotion',
  startDate: { year: 2019, month: 5 },
  endDate: { year: 2020, month: 4 },
  heading: 'お菓子販促コンテンツ',
  lead: 'ARコンテンツによるお菓子パッケージプロモーション',
  coverImage: image1,
  description: `本プロジェクトは、お菓子のパッケージにQRコードを掲載し、ARコンテンツを活用したプロモーションを行うものです。
受験・行楽シーズン向けに、合格祈願AR、ひらがなクイズ、顔ハメフィルターの制作を担当しました。`,

  // 2. 課題
  issues: [
    {
      title: "季節性コンテンツの企画・制作",
      description: "受験・行楽シーズンという限定的な期間での効果的なプロモーション企画が求められました。合格祈願ARやひらがなクイズなど、季節やターゲットに適したコンテンツの企画・制作が課題でした。"
    }
  ],

  // 3. 自分の役割
  roles: {
    overall: [
      'プロジェクトマネージャー',
      'ARエンジニア',
      'UIデザイナー'
    ],
    details: [
      {
        title: 'プロダクト戦略',
        color: 'bg-pink-400',
        items: [
          '季節性プロモーション企画の立案',
          'ターゲット別コンテンツ戦略の策定',
        ],
      },
      {
        title: 'プロジェクト推進',
        color: 'bg-blue-400',
        items: [
          '全体のスケジュール調整と進捗管理',
          '3Dモデルの制作管理',
        ],
      },
      {
        title: '技術開発',
        color: 'bg-teal-300',
        items: [
          'AR体験の設計と実装',
          'QRコード連携システムの構築',
        ],
      },
      {
        title: 'デザイン・制作',
        color: 'bg-yellow-300',
        items: [
          'ARコンテンツのUIデザイン',
        ],
      }
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "コンテンツ種類",
      value: "3種類",
      description: "合格祈願AR・ひらがなクイズ・顔ハメフィルター"
    },
    {
      title: "継続取引",
      value: "2シーズン",
      description: "受験・行楽シーズンでの連続プロモーション実施"
    }
  ],

  // 5. 技術スタック
  techStack: {
    ar: ['A-Frame', 'AR.js'],
    design: ['Photoshop', 'Illustrator'],
  },

  // 6. 具体的な制作物
  slides: [
    {
      title: 'プロジェクト全体構成',
      description: 'ARコンテンツをパッケージ商品ごとに展開。QRコードからアクセス可能な構成としました。',
      images: [image1],
    },
    {
      title: '3D神社',
      description: '合格祈願向けに神社の3Dモデルを制作。実際の神社の雰囲気をARで再現し、受験生の願掛け体験として活用されました。',
      images: [image2],
    },
    {
      title: 'UI設計・UIデザイン',
      description: '子どもでも操作しやすいUIを意識し、イラストや色使いを工夫しました。画面デザインを担当しました。',
      images: [image3, image4],
    },
  ],  
}; 

export default snackAR;