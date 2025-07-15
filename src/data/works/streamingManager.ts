import { ProjectData } from './types';
import image1 from '../../assets/images/works/streamingManager/image1.png';
import image2 from '../../assets/images/works/streamingManager/image2.png';

export const streamingManager: ProjectData = {
  type: 'promotion',
  startDate: { year: 2023, month: 6 },
  endDate: { year: 2023, month: 7 },
  heading: 'ストリーミング配信管理システム',
  lead: '24時間365日自動動画配信管理システム',
  coverImage: image1,
  description: `本プロジェクトは、YouTube向けの自動動画配信管理システムの開発です。
配信ごとに必要だった専用パソコンを不要にし、サクラVPS上で複数配信を一括管理できるようにしました。
ストリーミングの自動切り替え・モニタリング・再配信機能を実装し、24時間365日の運用を効率化しました。`,

  // 2. 課題
  issues: [
    {
      title: "複数配信の効率的管理",
      description: "従来は配信ごとに専用パソコンが必要で、複数配信の管理が非効率でした。サーバー上で一括管理し、リソースを最適化する必要がありました。"
    },
    {
      title: "24時間365日の安定運用",
      description: "自動配信システムには高い安定性が求められました。配信エラーの自動検知・再配信機能や、リアルタイムでの状況監視システムの構築が課題でした。"
    }
  ],

  // 3. 自分の役割
  roles: {
    overall: [
      'システムエンジニア',
      'サーバーエンジニア'
    ],
    details: [
      {
        title: '技術開発',
        color: 'bg-teal-300',
        items: [
          'WEBアプリの設計・開発',
          '配信管理システムの実装',
          'ストリーミングのモニタリング・自動再配信機能の開発',
          'サーバー管理・Slack通知の実装',
        ],
      },
      {
        title: '運用・改善',
        color: 'bg-purple-300',
        items: [
          '24時間365日運用監視体制の構築',
          'システム効率化と安定性の向上',
        ],
      },
    ]
  },

  // 4. 成果と実績
  achievements: [
    {
      title: "運用効率化",
      value: "専用PC不要",
      description: "サーバー一括管理による運用コスト削減"
    },
    {
      title: "稼働率",
      value: "24時間365日",
      description: "自動監視・再配信による安定運用"
    }
  ],

  // 5. 技術スタック
  techStack: {
    backend: ['Python', 'Flask'],
    frontend: ['HTML', 'CSS', 'JavaScript'],
    infrastructure: ['サクラVPS', 'Linux'],
    streaming: ['YouTube API', 'FFmpeg'],
    monitoring: ['Slack API']
  },

  // 6. 具体的な制作物
  slides: [
    {
      title: 'ライブ配信のYouTube再生リスト',
      description: '事前に用意した動画を自動で切り替えて配信。各動画のURLや配信順を管理し、24時間365日のスケジュールに沿ってストリーミングを実施しています。',
      images: [image1],
    },
    {
      title: '管理画面',
      description: '配信スケジュールの設定や現在のストリーム状況を一目で確認できる管理画面を構築。再配信やエラー確認もこの画面から実施できます。',
      images: [image2],
    },
  ],
}; 

export default streamingManager;