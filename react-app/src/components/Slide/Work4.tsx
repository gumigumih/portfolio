import React from "react";
import image1 from "../../assets/images/works/4/image1.png";

export default function Work4() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2020年4月</div>
        <div className="text-[min(2vw,2rem)]">バーチャル名刺背景ジェネレーター</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          本プロダクトは、オンライン会議向けに、名前やロゴ、QRコードを含むカスタム背景を生成できるツールです。<br />
          発案から開発・リリースまで3日で完了し、Vue.jsを使用して実装しました。<br />
          リリース後1か月で10,000ユーザーを獲得し、500人以上が日常的に利用する人気ツールへと成長しました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem) ]rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>画像生成ロジックの設計</li>
                <li className='marker:text-gray-300'>Vue.jsを使用した実装</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]'>
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)]">バーチャル名刺背景ジェネレーター<br />
              <a href="https://online-meishi.biz/" target="_blank" rel="noreferrer" className="text-blue-500 underline">https://online-meishi.biz/</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}