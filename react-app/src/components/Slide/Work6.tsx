import React from "react";
import image1 from "../../assets/images/works/6/image1.png";
import image2 from "../../assets/images/works/6/image2.png";

export default function Work6() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2022年10月〜2023年2月、2024年1月</div>
        <div className="text-[min(2vw,2rem)]">歴史体験型デジタルコンテンツ活用</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          過去に制作した歴史体験型デジタルコンテンツを活用し、バスツアーの企画・制作を実施。<br />
          三浦半島の魅力を発信するため、ツアーのWEBサイトを制作。<br />
          観光体験の価値を高め、地域振興につなげるプロジェクト。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FF72D0] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>関係者との調整・制作フローの管理</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FEEE16] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
              <li className='marker:text-gray-300'>WordPressテーマのカスタマイズ・最適化</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]'>
        <div className="flex gap-[min(2vw,2rem)]">
        <div className="mt-[min(2vw,2rem)]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)]">WEBサイト トップページ</p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">ツアーページ</p>
          </div>
        </div>
      </div>
    </div>
  );
}