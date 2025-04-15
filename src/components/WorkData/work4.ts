import image1 from '../../assets/images/works/4/image1.png';

const projectData = {
  period: '2020年4月',
  heading: 'バーチャル名刺背景ジェネレーター',
  description: `本プロダクトは、オンライン会議向けに、名前やロゴ、QRコードを含むカスタム背景を生成できるツールです。
発案から開発・リリースまで3日で完了し、Vue.jsを使用して実装しました。
リリース後1か月で10,000ユーザーを獲得し、500人以上が日常的に利用する人気ツールへと成長しました。`,
  roles: [
    {
      title: 'エンジニアリング',
      color: '#55FFDC',
      items: [
        '画像生成ロジックの設計',
        'Vue.jsを使用した実装',
      ],
    },
  ],
  slides: [
    {
      title: 'バーチャル名刺背景ジェネレーター',
      description: 'オンライン会議やウェビナーで活用できる背景画像を、名前・所属・QRコード付きで自動生成。誰でも簡単に使えるUIと、リアルタイムプレビュー機能を実装しました。',
      images: [image1],
      link: 'https://online-meishi.biz/',
    },
  ],
};

export default projectData;
