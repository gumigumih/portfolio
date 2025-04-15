import image1 from '../../assets/images/works/1/image1.png';
import image2 from '../../assets/images/works/1/image2.png';
import image3 from '../../assets/images/works/1/image3.png';

const projectData = {
  period: '2018年10月～2019年3月',
  heading: 'にじさんじのくじじゅうじ',
  description: `本プロジェクトでは、AbemaTV「にじさんじのくじじゅうじ」のVR収録を支援するものです。
毎週の生放送において、演者9人・カメラマン4人、計13人分のVR機材の設営を担当し、3Dスタジオデータの制作進行管理、3DキャラクターのVRM変換を行いました。
また、スプレッドシートで準備素材を管理し、設営手順を標準化することで、VRセンサーのトラブルを減らし、収録準備の効率を向上させました。`,
  roles: [
    {
      title: 'マネジメント',
      color: '#FF72D0',
      items: [
        '3Dスタジオデータの制作進行管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        'VR機材の設置と設定',
        '3DキャラクターのVRM形式変換',
      ],
    },
  ],
  slides: [
    {
      title: '番組クレジット',
      images: [image1],
    },
    {
      title: '設営の様子',
      images: [image2],
    },
    {
      title: 'VR機材の設営手順の標準化',
      images: [image3],
    },
  ],
};

export default projectData;
