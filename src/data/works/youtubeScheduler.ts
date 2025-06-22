import { ProjectData } from './types';
import image1 from '../../assets/images/works/2/image1.png';
import image2 from '../../assets/images/works/2/image2.png';
import image3 from '../../assets/images/works/2/image3.png';

export const youtubeScheduler: ProjectData = {
  type: 'promotion',
  startDate: { year: 2019, month: 4 },
  endDate: { year: 2019, month: 5 },
  heading: 'YouTube動画管理システム',
  lead: '非公開日時予約管理WEBアプリ',
  coverImage: image1,
  description: `本プロジェクトは、YouTubeの非公開日時予約プロセスを効率化するGAS WEBアプリの開発です。
GASとVue.jsを用いて、スプレッドシートをデータベースとして活用し、直感的なWEB UIを設計・実装しました。
GASの最適化により処理時間を60秒から2秒に短縮し、業務効率を大幅に向上させました。`,

  // 2. 課題
  issues: [
    {
      title: "業務プロセスの効率化",
      description: "YouTubeの非公開日時予約プロセスが手作業で時間がかかり、業務効率が悪い状況でした。直感的なWEB UIによる自動化システムの構築が必要でした。"
    },
    {
      title: "処理速度の大幅改善",
      description: "既存のGASシステムでは1回の処理に60秒もかかり、実用性に問題がありました。パフォーマンスの最適化により、実用的な処理速度の実現が課題でした。"
    }
  ],

  // 3. 自分の役割
  roles: {
    overall: [
      'フルスタックエンジニア',
      'システム最適化エンジニア'
    ],
    details: [
      {
        title: 'エンジニアリング',
        color: 'bg-teal-300',
        items: [
          'WEBアプリの実装（Vue.jsを使用したSPA開発）',
          'GASの最適化によるパフォーマンス改善（処理時間60秒 → 2秒）',
          'WEB UIの設計・実装、業務フローの効率化',
        ],
      },
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "処理速度改善",
      value: "30倍高速化",
      description: "60秒 → 2秒への大幅な処理時間短縮"
    },
    {
      title: "開発期間",
      value: "1ヶ月",
      description: "要件定義から完成まで"
    }
  ],

  // 5. 技術スタック
  techStack: {
    frontend: ['Vue.js', 'JavaScript', 'HTML', 'CSS'],
    backend: ['Google Apps Script'],
    database: ['Google Spreadsheet'],
  },

  // 6. 具体的な制作物
  slides: [
    {
      title: 'システム構成',
      description: 'GASとVue.jsを組み合わせた構成。スプレッドシートをデータベースとして使用し、予約管理の自動化を実現しました。',
      images: [image1],
    },
    {
      title: '1回の処理時間が60秒から2秒に短縮',
      description: 'GASの最適化を行い、スプレッドシートのデータ処理速度を大幅に改善。業務負荷の軽減に貢献しました。',
      images: [image2],
    },
    {
      title: 'GASアプリ画面',
      description: '直感的に操作できるWEB UIをVue.jsで実装。担当者が迷わず使える設計とし、運用の定着を支援しました。',
      images: [image3],
    },
  ],
}; 

export default youtubeScheduler;