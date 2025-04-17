import image1 from '../../assets/images/works/9/image1.png';
import image2 from '../../assets/images/works/9/image2.png';
import image3 from '../../assets/images/works/9/image3.png';
import image4 from '../../assets/images/works/9/image4.png';
import image5 from '../../assets/images/works/9/image5.png';
import image6 from '../../assets/images/works/9/image6.png';

const projectData = {
  period: '2022年9月〜2023年3月',
  heading: '文化財3DスキャンWEB公開システム開発',
  description: `本プロジェクトは、文化財の3DスキャンデータをWEB上で公開するシステムの開発です。
ユーザーがスクロール操作でカメラアングルを次々と切り替えながら、魅せたい場所と角度を意図的に演出し、音声ガイドも再生できるインターフェースを実装しました。
また、複数の文化財データをWEBサイトに埋め込めるよう、3Dビューアーの基本機能をVue.jsでプラグイン化しました。`,
  roles: [
    {
      title: 'マネジメント',
      color: 'bg-pink-400',
      items: [
        'チーム管理・スケジュール調整・進行管理',
      ],
    },
    {
      title: 'エンジニアリング',
      color: 'bg-teal-300',
      items: [
        '3Dビューアーの機能設計・UI設計',
        '3Dビューアーの開発・Vue.jsによるプラグイン化',
      ],
    },
  ],
  slides: [
    {
      title: '須磨寺',
      images: [image1],
      link: 'https://hacosco.com/suma/',
    },
    {
      title: '針尾送信所',
      images: [image2],
      link: 'https://hacosco.com/hario/',
    },
    {
      title: '竹田城跡',
      images: [image3],
      link: 'https://hacosco.com/takeda/',
    },
    {
      title: '熊本の近代化遺産 三池炭鉱万田坑と三角西港',
      images: [image4],
      link: 'https://hacosco.com/kumamoto-heritage/',
    },
    {
      title: '姫路城',
      images: [image5],
      link: 'https://hacosco.com/himeji-castle/',
    },
    {
      title: '神戸市兵庫区の近代化遺産 湊川隧道',
      images: [image6],
      link: 'https://hacosco.com/hyogoku/',
    },
  ],
};

export default projectData;
