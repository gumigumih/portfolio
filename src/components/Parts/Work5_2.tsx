import image5 from '../../assets/images/works/5/image5.png';
import image6 from '../../assets/images/works/5/image6.png';
import image7 from '../../assets/images/works/5/image7.png';
import image8 from '../../assets/images/works/5/image8.png';
import image9 from '../../assets/images/works/5/image9.png';

export default function Work5() {
  return (
    <div>
      <div className="absolute top-[min(3vw,3rem)] left-[min(3vw,3rem)] mr-[min(2vw,2rem)]">
        <div className="flex gap-[min(2vw,2rem)] w-[70%]">
          <div className="mt-[min(2vw,2rem)] w-[43%]">
            <img src={image5} alt="" />
            <p className="text-[min(1vw,1rem)]">絵コンテ</p>
          </div>
          <div className="mt-[min(2vw,2rem)] w-[57%]">
            <img src={image6} alt="" />
            <p className="text-[min(1vw,1rem)]">アニメーション</p>
          </div>
        </div>
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image7} alt="" />
            <p className="text-[min(1vw,1rem)]">
              WEBサイト➀ 三浦一族の物語紹介サイト
              <br />
              <a href="https://unkeibushido.com/" target="_blank" rel="noreferrer" className="text-blue-500 underline">
                https://unkeibushido.com/
              </a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image8} alt="" />
            <p className="text-[min(1vw,1rem)]">
              WEBサイト➁ 現地体験型プログラム紹介サイト
              <br />
              <a href="https://kamakurabushi.com/" target="_blank" rel="noreferrer" className="text-blue-500 underline">
                https://kamakurabushi.com/
              </a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image9} alt="" />
            <p className="text-[min(1vw,1rem)]">
              WEBサイト➂ ＶＲ発願体験紹介サイト
              <br />
              <a href="https://virtualunkei.com/" target="_blank" rel="noreferrer" className="text-blue-500 underline">
                https://virtualunkei.com/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
