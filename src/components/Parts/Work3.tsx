import image1 from '../../assets/images/works/3/image1.png';
import image2 from '../../assets/images/works/3/image2.png';
import image3 from '../../assets/images/works/3/image3.png';
import image4 from '../../assets/images/works/3/image4.png';

export default function Work3() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2019年5月〜2020年4月</div>
        <div className="text-[min(2vw,2rem)]">ARコンテンツによるお菓子パッケージプロモーション</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          本プロジェクトは、お菓子のパッケージにQRコードを掲載し、ARコンテンツを活用したプロモーションを行うものです。
          <br />
          受験・行楽シーズン向けに、合格祈願AR、ひらがなクイズ、顔ハメフィルターの制作を担当しました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FF72D0] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className="marker:text-gray-300">全体のスケジュール調整と進捗管理</li>
                <li className="marker:text-gray-300">3Dモデルの制作管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className="marker:text-gray-300">AR体験の設計と実装</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FEEE16] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className="marker:text-gray-300">ARコンテンツのUIデザイン</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]">
        <div className="flex gap-[min(2vw,2rem)] w-[80%]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)]">プロジェクト全体構成</p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">3D神社</p>
          </div>
        </div>
        <div className="flex gap-[min(2vw,2rem)] w-[70%]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image3} alt="" />
            <p className="text-[min(1vw,1rem)]">UI設計</p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image4} alt="" />
            <p className="text-[min(1vw,1rem)]">UIデザイン</p>
          </div>
        </div>
      </div>
    </div>
  );
}
