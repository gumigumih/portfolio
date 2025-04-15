import image1 from '../../assets/images/works/10/image1.png';
import image2 from '../../assets/images/works/10/image2.png';

const projectData = {
  period: '2023年6月～7月',
  heading: '24時間365日ストリーミング配信管理システム',
  description: `本プロジェクトは、YouTube向けの自動動画配信管理システムの開発です。
配信ごとに必要だった専用パソコンを不要にし、サクラVPS上で複数配信を一括管理できるようにしました。
ストリーミングの自動切り替え・モニタリング・再配信機能を実装し、24時間365日の運用を効率化しました。`,
  roles: [
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        'WEBアプリの設計・開発',
        '配信管理システムの実装',
        'ストリーミングのモニタリング・\n自動再配信機能の開発',
        'サーバー管理・Slack通知の実装',
      ],
    },
  ],
  slides: [
    {
      title: 'ライブ配信',
      images: [image1],
    },
    {
      title: '管理画面',
      images: [image2],
    },
  ],
};

export default projectData;
