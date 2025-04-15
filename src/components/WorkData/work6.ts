import image1 from '../../assets/images/works/6/image1.jpg';
import image2 from '../../assets/images/works/6/image2.png';
import image3 from '../../assets/images/works/6/image3.png';
import image4 from '../../assets/images/works/6/image4.png';

const projectData = {
  period: '2021年7月〜2022年3月',
  heading: '[三浦半島・鎌倉] 歴史体験型デジタルコンテンツ開発',
  description: `本プロジェクトは、クライアントが文化庁の補助金を申請し実施した、三浦半島の歴史体験型デジタルコンテンツ開発です。
前年度に整備した看板ARマンガを5つの寺に追加制作し、対応言語を2か国語増やしました。
また、鎌倉の北条家の物語を伝えるため、WEBサイトを制作し、現地の3つの寺に設置された看板からQRコードでアクセスできる多言語対応のWEB看板とARマンガを開発しました。
さらに、和賀江嶋の築港遺跡を3Dモデルで再現し、GPS ARを活用して現地の看板から閲覧できる仕組みを導入しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: '#FF72D0',
      items: [
        'プロジェクト全体の進行管理・タスク管理',
        '関係者との調整・制作フローの管理',
        '各制作物の要件整理',
        '多言語化に伴う翻訳管理',
        '3Dモデルの制作管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        'WebARコンテンツ（ARマンガ）の開発（Vue.js）',
        '満足度計測フォームの開発',
      ],
    },
  ],
  slides: [
    {
      title: 'WEB看板＋ARマンガ',
      images: [image2, image1],
    },
    {
      title: '北条家の物語のWEBサイト',
      images: [image3],
      link: 'https://kamakurabushi.com/',
    },
    {
      title: '和賀江嶋のAR',
      images: [image4],
    },
  ],
};

export default projectData;
