import image1 from '../../assets/images/works/11/image1.png';
import image2 from '../../assets/images/works/11/image2.png';

const projectData = {
  type: 'avatar',
  period: '2023年2月～2024年2月',
  startDate: { year: 2023, month: 2 },
  endDate: { year: 2024, month: 2 },
  heading: 'マヂカルラブリーの全力！アニシャド応援部',
  lead: '3Dキャラクター制作・撮影支援',
  coverImage: image1,
  description: `本プロジェクトは、TV番組「マヂカルラブリーの全力！アニシャド応援部」向けの3Dキャラクター制作・撮影支援です。
モーション撮影ツール「NICE CAMERA」を活用し、モーションデータの調整・追加を担当しました。
クラウドソーシングで制作された3Dキャラクターをブラッシュアップし、一定の品質を確保しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: 'bg-pink-400',
      items: [
        'プロジェクト全体の管理',
        '3Dキャラクター制作の外注管理',
        'モーション撮影の進行管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: 'bg-teal-300',
      items: [
        'モーション撮影データの収録・調整',
        '「NICE CAMERA」へのモーションデータ追加',
      ],
    },
    {
      title: 'デザイン',
      color: 'bg-yellow-300',
      items: [
        '外注3Dキャラクターの品質チェック・改善\n形状修正・デザイン調整を行い、納品対応',
      ],
    },
  ],
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

export default projectData; 