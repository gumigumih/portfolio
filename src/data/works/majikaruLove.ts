import type { ProjectData } from './types';
import image1 from '../../assets/images/works/majikaruLove/image1.png';
import image2 from '../../assets/images/works/majikaruLove/image2.png';

export const majikaruLove: ProjectData = {
  type: 'avatar',
  startDate: { year: 2023, month: 2 },
  endDate: { year: 2024, month: 2 },
  heading: 'マヂカルラブリーの全力！アニシャド応援部',
  lead: '3Dキャラクター制作ディレクション・モーション撮影',
  coverImage: image1,
  description: `本プロジェクトは、TV番組「マヂカルラブリーの全力！アニシャド応援部」向けの3Dキャラクター制作ディレクション・モーション撮影です。
外注で制作された3Dキャラクターの品質確認・修正方針の整理を行い、番組で使用できる品質までブラッシュアップしました。
また、モーション撮影ツール「NICE CAMERA」を活用し、番組内で使用するモーション撮影とデータ調整を担当しました。`,

  // 2. 課題
  issues: [
    {
      title: "外注3Dキャラクターの品質統一",
      description: "外注で制作された複数の3Dキャラクターの品質にばらつきがあり、TV番組で使用するレベルまで品質を統一する必要がありました。形状・メッシュ・テクスチャの修正から、一部では完全な作り直しが必要でした。"
    },
    {
      title: "モーション撮影データの最適化",
      description: "TV番組の撮影スケジュールに合わせて、効率的なモーション撮影とデータ調整が求められました。「NICE CAMERA」を活用したモーション撮影から、番組で使用可能なクオリティまでの最適化が課題でした。"
    }
  ],

  // 3. 自分の役割
  roles: {
    overall: [
      '3D制作ディレクター',
      'モーション撮影担当'
    ],
    details: [
      {
        title: '制作ディレクション',
        color: 'bg-blue-300',
        items: [
          '3Dキャラクター制作の外注管理',
          '納品モデルの品質確認・修正方針の整理',
          '番組利用に向けた制作進行管理',
        ],
      },
      {
        title: 'モーション撮影',
        color: 'bg-teal-300',
        items: [
          'NICE CAMERAを活用したモーション撮影',
          'モーション撮影データの調整',
        ],
      },
      {
        title: 'デザイン・制作',
        color: 'bg-yellow-300',
        items: [
          '外注3Dキャラクターの品質チェック・改善',
          '形状修正・デザイン調整を行い、納品対応',
        ],
      },
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "3Dキャラクター",
      value: "複数体",
      description: "TV番組品質まで修正・制作完了"
    },
    {
      title: "モーション撮影",
      value: "NICE CAMERA",
      description: "効率的なモーション撮影システム活用"
    }
  ],

  // 5. 技術スタック
  techStack: {
    modeling: ['Blender', 'VRM'],
    motion: ['NICE CAMERA', 'モーション撮影'],
    management: ['外注管理', '品質管理']
  },

  // 6. 成果物・実績
  slides: [
    {
      title: '3Dモデルの修正作業（形状・メッシュ・テクスチャ・シェーダー）',
      description: '複数のキャラクターでクオリティを一定に保つため、外注から納品された3Dモデルに対してBlenderを用いて形状・メッシュ・テクスチャの修正、VRM設定の調整を行いました。（左側は修正前、右側は修正後の状態）',
      images: [image1],
    },
    {
      title: '後頭部の髪の毛を全て作り直し',
      description: '一部キャラクターでは後頭部の髪の毛に立体形状の破綻が見られたため、Blenderで一からモデリングし直しました。全体のバランスと自然な見た目に配慮しています。（左側は修正前、右側は修正後の状態）',
      images: [image2],
    },
  ]
}; 

export default majikaruLove;
