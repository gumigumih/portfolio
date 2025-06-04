import image1 from '../../../assets/images/works/8/image1.png';
import image2 from '../../../assets/images/works/8/image2.png';
import image3 from '../../../assets/images/works/8/image3.png';
import image4 from '../../../assets/images/works/8/image4.png';
import image5 from '../../../assets/images/works/8/image5.png';
import image6 from '../../../assets/images/works/8/image6.png';

const projectData = {
  period: '2024年7月〜2025年3月',
  heading: '[三浦半島・鎌倉] 新規バスツアー企画・音声ガイド開発',
  description: `本プロジェクトは、クライアントが文化庁・観光庁の補助金を申請し実施した、新しいバスツアーの企画および音声ガイド制作の取り組みです。
ツアーは三浦按針・ペリー・ヴェルニーゆかりの地を巡る内容で、観光体験をより深めるためWEB看板とARマンガを制作しました。
また、AI音声生成を活用した多言語対応の音声ガイドを開発し、4つの神社に導入しました。併せて、バスツアーのWEBサイトを改修し、情報整理と利便性の向上を図りました。`,
  roles: [
    {
      title: 'マネジメント',
      color: 'bg-pink-400',
      items: [
        'プロジェクト全体の進行管理・タスク管理',
        '関係者との調整・制作フローの管理',
        '音声ガイドシステムの要件整理',
        'WEBサイトの構成改善整理案の作成',
      ],
    },
    {
      title: 'エンジニアリング',
      color: 'bg-teal-300',
      items: [
        'WebARコンテンツ（ARマンガ）の開発（Vue.js）',
        '満足度計測フォームの開発',
        '音声ガイドシステムのシステム設計・データ管理',
        'AI音声生成APIの導入・実装',
        'サーバー監視・障害対応',
        'エラー検知・Slack通知システムの導入・運用',
      ],
    },
    {
      title: 'デザイン',
      color: 'bg-yellow-300',
      items: [
        '音声ガイドLPデザイン・実装',
        '音声ガイドアプリのUI/UXデザイン設計・実装',
      ],
    },
  ],
  slides: [
    {
      title: 'WEB看板＋ARマンガ',
      description: 'ARマンガは現地に設置されたWEB看板からQRコードでアクセスでき、多言語対応で地域の歴史を視覚的に伝えるコンテンツとして活用されました。',
      images: [image1],
    },
    {
      title: 'WEBサイトの構成改善整理案',
      description: 'ツアー紹介WEBサイトの情報設計を見直し、ユーザーが迷わずアクセスできるよう導線や構成の改善案を提案・反映しました。',
      images: [image6],
      link: 'https://miura.bushido-powerspot.jp/',
    },
    {
      title: '音声ガイドのLP',
      description: '観光客向けに音声ガイドの利用方法や特徴をわかりやすく伝えるためのLPを新たにデザイン・実装しました。',
      images: [image2],
      link: 'https://audioguide.bushido-powerspot.jp/',
    },
    {
      title: '音声ガイド要件・仕様',
      description: '多言語・複数地点対応の音声ガイドを効率的に運用するため、機能要件やシナリオ設計をドキュメント化し、開発に落とし込みました。',
      images: [image3],
    },
    {
      title: '音声ガイド管理画面・体験画面',
      description: 'ガイド音声の登録・更新を行う管理画面、およびユーザーが実際に利用する体験画面をUI/UX設計から実装まで担当しました。',
      images: [image4, image5],
    },
  ],
};

export default projectData;
