import image1 from '../../../assets/images/works/5/image1.jpg';
import image2 from '../../../assets/images/works/5/image2.png';
import image3 from '../../../assets/images/works/5/image3.png';
import image4 from '../../../assets/images/works/5/image4.png';
import image5 from '../../../assets/images/works/5/image5.png';
import image6 from '../../../assets/images/works/5/image6.png';
import image7 from '../../../assets/images/works/5/image7.png';
import image8 from '../../../assets/images/works/5/image8.png';
import image9 from '../../../assets/images/works/5/image9.png';

const projectData = {
  period: '2020年8月～2021年3月',
  heading: '[三浦半島・鎌倉] 歴史体験型デジタルコンテンツ開発',
  description: `本プロジェクトは、クライアントが文化庁の補助金を申請し実施した、三浦半島の歴史体験型デジタルコンテンツ開発です。
三浦一族の物語を伝えるため、WEBサイトを制作し、4つの寺に多言語対応のWEB看板とARマンガを設置しました。
また、鎌倉時代の武士文化を体験できる写経・彩色・彫像のプログラム、仏師の儀式と武士の祈りを再現したVR体験を開発し、それぞれ専用のWEBサイトを制作しました。
さらに、予約管理には外部サービス「Select-Type」を導入しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: 'bg-pink-400',
      items: [
        'プロジェクト全体の進行管理・タスク管理',
        '関係者との調整・制作フローの管理',
        '各制作物の要件整理',
        '開発チーム・外注デザイナーの調整',
        '多言語化に伴う翻訳管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: 'bg-teal-300',
      items: [
        'WebARコンテンツ（ARマンガ）の開発（Vue.js）',
        '満足度計測フォームの開発',
        'API開発・データ管理システムの構築',
        'サーバー監視・障害対応',
        'エラー検知・Slack通知システムの導入・運用',
      ],
    },
    {
      title: 'デザイン',
      color: 'bg-yellow-300',
      items: [
        '外注制作のWEBサイトを品質チェック・改善\n機能追加・デザイン調整を行い、リリース対応',
        'After Effectsを用いたアニメーション動画の制作',
      ],
    },
  ],
  slides: [
    {
      title: 'WEB看板＋ARマンガ',
      description: '現地に設置された看板のQRコードを読み込むと、各国語対応のWEB看板が表示され、そのままARマンガを閲覧。歴史背景を楽しく学べる仕組みで、体験後にはアンケート回答も促されます。',
      images: [image1, image2]
    },
    {
      title: '現地体験プログラムの説明・補助タブレット',
      description: '現地で行われる写経・彩色・彫像などの体験プログラムをわかりやすく案内する補助タブレットを導入。操作性と視認性を意識し、観光客にもやさしい設計を実現しました。',
      images: [image3, image4]
    },
    {
      title: 'アニメーション制作工程',
      description: '歴史の魅力を伝えるアニメーション動画の制作工程。絵コンテをもとに外注イラストレーターに作画を依頼し、After Effectsによるアニメーション制作は自身で担当しました。',
      images: [image5, image6]
    },
    {
      title: 'WEBサイト➀ 三浦一族紹介サイト',
      description: '三浦一族の歴史を紹介するWEBサイト。歴史背景・物語構成を直感的に伝える構成で、観光前の予習や現地での理解促進に活用されました。',
      images: [image7],
      link: 'https://unkeibushido.com/',
    },
    {
      title: 'WEBサイト➁ 現地体験プログラム紹介サイト',
      description: '寺院で体験できる写経・彩色・彫像などのプログラム内容を紹介したサイト。予約システムと連携し、体験参加者の利便性向上と情報提供を両立しています。',
      images: [image8],
      link: 'https://kamakurabushi.com/',
    },
    {
      title: 'WEBサイト➂ VR発願体験紹介サイト',
      description: '仏師の儀式や武士の祈りを再現したVR体験の専用サイト。体験の背景・意図を丁寧に説明し、仮想空間での歴史的没入体験を補完しています。',
      images: [image9],
      link: 'https://virtualunkei.com/',
    },
  ],
};

export default projectData;
