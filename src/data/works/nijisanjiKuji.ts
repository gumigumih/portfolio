import { ProjectData } from './types';
import image1 from '../../assets/images/works/nijisanjiKuji/image1.png';
import image2 from '../../assets/images/works/nijisanjiKuji/image2.png';
import image3 from '../../assets/images/works/nijisanjiKuji/image3.png';
import thumbnail from '../../assets/images/works/nijisanjiKuji/thumbnail.png';

export const nijisanjiKuji: ProjectData = {
  type: 'avatar',
  startDate: { year: 2023, month: 4 },
  endDate: { year: 2024, month: 3 },
  heading: 'にじさんじくじ',
  lead: 'VTuberTV番組のVR収録支援',
  coverImage: thumbnail,
  description: `本プロジェクトでは、AbemaTV「にじさんじのくじじゅうじ」のVR収録を支援するものです。
毎週の生放送において、演者9人・カメラマン4人、計13人分のVR機材の設営を担当し、3Dスタジオデータの制作進行管理、3DキャラクターのVRM変換を行いました。
また、スプレッドシートで準備素材を管理し、設営手順を標準化することで、VRセンサーのトラブルを減らし、収録準備の効率を向上させました。`,

  // 2. 課題
  issues: [
    {
      title: "大規模VR収録の技術的安定性",
      description: "演者9名・カメラマン4名の計13名が同時にVR空間で活動する大規模収録において、VRセンサーのトラブルや機材の不具合を最小限に抑える必要がありました。毎週の生放送という制約の中で、確実な技術サポートが求められました。"
    },
    {
      title: "収録準備の効率化と標準化",
      description: "毎週の収録に向けて、13名分のVR機材設営を短時間で完了させる必要がありました。設営手順の標準化とトラブル対応の体系化により、収録準備の効率化を実現することが課題でした。"
    }
  ],

  // 3. 自分の役割
  roles: {
    overall: [
      'VR技術サポート',
      'プロジェクト管理'
    ],
    details: [
      {
        title: 'プロジェクト推進',
        color: 'bg-blue-300',
        items: [
          '3Dスタジオデータの制作進行管理',
          'スプレッドシートによる準備素材管理',
          '設営手順の標準化とドキュメント作成'
        ],
      },
      {
        title: '技術開発',
        color: 'bg-teal-300',
        items: [
          'VR機材の設置と設定',
          '3DキャラクターのVRM形式変換',
          'VRセンサーのトラブル対応とメンテナンス'
        ],
      },
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "収録回数",
      value: "52回",
      description: "1年間の毎週生放送を技術サポート"
    },
    {
      title: "メタバース空間に入る人数",
      value: "13名",
      description: "演者9名・カメラマン4名のVR収録"
    }
  ],

  // 5. 技術スタック
  techStack: {
    vr: ['VIVE CE', 'VIVE PRO', 'Oculus Rift', 'VRM'],
    management: ['GAS', '進行管理'],
    development: ['3Dモデル変換', 'VR環境構築']
  },

  // 6. 具体的な制作物
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