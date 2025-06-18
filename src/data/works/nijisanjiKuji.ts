import { ProjectData } from './types';
import image1 from '../../assets/images/works/1/image1.png';
import image2 from '../../assets/images/works/1/image2.png';
import image3 from '../../assets/images/works/1/image3.png';

export const nijisanjiKuji: ProjectData = {
  type: 'avatar',
  startDate: { year: 2023, month: 4 },
  endDate: { year: 2024, month: 3 },
  heading: 'にじさんじくじ',
  lead: 'VTuberTV番組のVR収録支援',
  coverImage: image1,
  description: `本プロジェクトでは、AbemaTV「にじさんじのくじじゅうじ」のVR収録を支援するものです。
毎週の生放送において、演者9人・カメラマン4人、計13人分のVR機材の設営を担当し、3Dスタジオデータの制作進行管理、3DキャラクターのVRM変換を行いました。
また、スプレッドシートで準備素材を管理し、設営手順を標準化することで、VRセンサーのトラブルを減らし、収録準備の効率を向上させました。`,
  roles: [
    {
      title: 'マネジメント',
      color: 'bg-pink-400',
      items: [
        '3Dスタジオデータの制作進行管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: 'bg-teal-300',
      items: [
        'VR機材の設置と設定',
        '3DキャラクターのVRM形式変換',
      ],
    },
  ],
  slides: [
    {
      title: '番組クレジット',
      description: '番組放送内のクレジットにて、技術協力として名前が掲載されました。',
      images: [image1],
    },
    {
      title: '設営の様子',
      description: '演者9名とカメラマン4名、合計13名のVR収録機材を毎週設営。VR空間上でのパフォーマンスを支える環境づくりを担いました。',
      images: [image2],
    },
    {
      title: 'VR機材の設営手順の標準化',
      description: '設営トラブルを減らすため、VRセンサーの設営手順を標準化。収録準備の効率が大幅に向上しました。',
      images: [image3],
    },
  ],
}; 

export default nijisanjiKuji;