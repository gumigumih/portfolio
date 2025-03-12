import React from "react";
import image1 from "../../assets/images/works/1/image1.png";
import image2 from "../../assets/images/works/1/image2.png";
import image3 from "../../assets/images/works/1/image3.png";

export default function Work8() {
  return (
    <div>
      <h2 className="absolute top-[min(4vw,4rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2022年9月〜2023年3月</div>
        <div className="text-[min(2vw,2rem)]">文化財3DスキャンWEB公開システム開発</div>
      </h2>

      <div className="absolute top-[min(9vw,9rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          文化財の3DスキャンデータをWEB上で公開するシステムを開発。<br />
          ユーザーがスクロール操作でカメラアングルを変えながら文化財を鑑賞できるインターフェースを実装。<br />
          複数の文化財データを効率的に管理できるよう、3Dビューアーの基本機能をVue.jsでプラグイン化。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FF72D0] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>チーム管理・スケジュール調整・進行管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#55FFDC] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>3Dビューアーの機能設計・UI設計</li>
                <li className='marker:text-gray-300'>3Dビューアーの開発・Vue.jsによるプラグイン化</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(15vw,15rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]'>
        <div className="w-[min(40vw,40rem)]">
          <img src={image1} alt="" />
        </div>
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">設営の様子</p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image3} alt="" />
            <p className="text-[min(1vw,1rem)]">VR機材の設営手順の標準化</p>
          </div>
        </div>
      </div>
    </div>
  );
}