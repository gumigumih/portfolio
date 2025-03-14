import React from "react";
import image1 from "../../assets/images/works/6/image1.jpg";
import image2 from "../../assets/images/works/6/image2.png";
import image3 from "../../assets/images/works/6/image3.png";
import image4 from "../../assets/images/works/6/image4.png";

export default function Work6() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2021年7月〜2022年3月</div>
        <div className="text-[min(2vw,2rem)]">[三浦半島・鎌倉] 歴史体験型デジタルコンテンツ開発</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          本プロジェクトは、クライアントが文化庁の補助金を申請し実施した、三浦半島の歴史体験型デジタルコンテンツ開発です。<br />
          前年度に整備した看板ARマンガを5つの寺に追加制作し、対応言語を2か国語増やしました。<br />
          また、鎌倉の北条家の物語を伝えるため、WEBサイトを制作し、現地の3つの寺に設置された看板からQRコードでアクセスできる多言語対応のWEB看板とARマンガを開発しました。さらに、和賀江嶋の築港遺跡を3Dモデルで再現し、GPS ARを活用して現地の看板から閲覧できる仕組みを導入しました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem) ]rounded-full bg-[#FF72D0] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>プロジェクト全体の進行管理・タスク管理</li>
                <li className='marker:text-gray-300'>関係者との調整・制作フローの管理</li>
                <li className='marker:text-gray-300'>各制作物の要件整理</li>
                <li className='marker:text-gray-300'>多言語化に伴う翻訳管理</li>
                <li className='marker:text-gray-300'>3Dモデルの制作管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem) ]rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>WebARコンテンツ（ARマンガ）の開発（Vue.js）</li>
                <li className='marker:text-gray-300'>満足度計測フォームの開発</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]'>
        <div className="flex gap-[min(2vw,2rem)] w-[80%]">
          <div className="mt-[min(2vw,2rem)] w-[57%]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)]">設置された看板</p>
          </div>
          <div className="mt-[min(2vw,2rem)] w-[43%]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">WEB看板＋ARマンガ</p>
          </div>
        </div>
        <div className="flex gap-[min(2vw,2rem)] w-[70%]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image3} alt="" />
            <p className="text-[min(1vw,1rem)]">北条家の物語のWEBサイト<br />
              <a href="https://kamakurabushi.com/" target="_blank" rel="noreferrer" className="text-blue-500 underline">https://kamakurabushi.com/</a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image4} alt="" />
            <p className="text-[min(1vw,1rem)]">和賀江嶋のAR</p>
          </div>
        </div>
      </div>
    </div>
  );
}