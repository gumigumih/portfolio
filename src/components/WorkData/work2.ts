import image1 from '../../assets/images/works/2/image1.png';
import image2 from '../../assets/images/works/2/image2.png';
import image3 from '../../assets/images/works/2/image3.png';

const projectData = {
  period: '2019年4月～5月',
  heading: 'YouTube非公開日時予約管理WEBアプリ',
  description: `本プロジェクトは、YouTubeの非公開日時予約プロセスを効率化するGAS WEBアプリの開発です。
GASとVue.jsを用いて、スプレッドシートをデータベースとして活用し、直感的なWEB UIを設計・実装しました。
GASの最適化により処理時間を60秒から2秒に短縮し、業務効率を大幅に向上させました。`,
  roles: [
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        'WEBアプリの実装（Vue.jsを使用したSPA開発）',
        'GASの最適化によるパフォーマンス改善\n（処理時間60秒 → 2秒）',
        'WEB UIの設計・実装、業務フローの効率化',
      ],
    },
  ],
  slides: [
    {
      title: 'システム構成',
      images: [image1],
    },
    {
      title: '1回の処理時間が60秒から2秒に短縮',
      images: [image2],
    },
    {
      title: 'GASアプリ画面',
      images: [image3],
    },
  ],
};

export default projectData;
