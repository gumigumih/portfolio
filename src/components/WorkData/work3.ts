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

export default projectData;
