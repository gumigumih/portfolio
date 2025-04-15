import image1 from '../../assets/images/works/3/image1.png';
import image2 from '../../assets/images/works/3/image2.png';
import image3 from '../../assets/images/works/3/image3.png';
import image4 from '../../assets/images/works/3/image4.png';

const projectData = {
  period: '2019年5月〜2020年4月',
  heading: 'ARコンテンツによるお菓子パッケージプロモーション',
  description: `本プロジェクトは、お菓子のパッケージにQRコードを掲載し、ARコンテンツを活用したプロモーションを行うものです。
受験・行楽シーズン向けに、合格祈願AR、ひらがなクイズ、顔ハメフィルターの制作を担当しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: '#FF72D0',
      items: [
        '全体のスケジュール調整と進捗管理',
        '3Dモデルの制作管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        'AR体験の設計と実装',
      ],
    },
    {
      title: 'デザイン',
      color: '#FEEE16',
      items: [
        'ARコンテンツのUIデザイン',
      ],
    },
  ],
  slides: [
    {
      title: 'プロジェクト全体構成',
      images: [image1],
    },
    {
      title: '3D神社',
      images: [image2],
    },
    {
      title: 'UI設計',
      images: [image3],
    },
    {
      title: 'UIデザイン',
      images: [image4],
    },
  ],
};

export default projectData;
