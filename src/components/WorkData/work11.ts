import image1 from '../../assets/images/works/11/image1.png';
import image2 from '../../assets/images/works/11/image2.png';

const projectData = {
  period: '2023年2月〜2023年5月、2023年12月～2024年2月',
  heading: 'TV番組「マヂカルラブリーの全力！アニシャド応援部」3Dキャラクター制作・撮影支援',
  description: `本プロジェクトは、TV番組「マヂカルラブリーの全力！アニシャド応援部」向けの3Dキャラクター制作・撮影支援です。
モーション撮影ツール「NICE CAMERA」を活用し、モーションデータの調整・追加を担当しました。
クラウドソーシングで制作された3Dキャラクターをブラッシュアップし、一定の品質を確保しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: '#FF72D0',
      items: [
        'プロジェクト全体の管理',
        '3Dキャラクター制作の外注管理',
        'モーション撮影の進行管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        'モーション撮影データの収録・調整',
        '「NICE CAMERA」へのモーションデータ追加',
      ],
    },
    {
      title: 'デザイン',
      color: '#FEEE16',
      items: [
        '外注3Dキャラクターの品質チェック・改善\n形状修正・デザイン調整を行い、納品対応',
      ],
    },
  ],
  slides: [
    {
      title: '3Dモデルの修正作業（形状・メッシュ・テクスチャ・シェーダー）',
      images: [image1],
    },
    {
      title: '後頭部の髪の毛を全て作り直し',
      images: [image2],
    },
  ],
};

export default projectData;
