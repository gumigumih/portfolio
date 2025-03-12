import React from "react";
import image1 from "../../assets/images/works/1/image1.png";
import image2 from "../../assets/images/works/1/image2.png";
import image3 from "../../assets/images/works/1/image3.png";

export default function Work11() {
  return (
    <div>
      <h2 className="absolute top-[min(4vw,4rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2023年4月～2023年9月</div>
        <div className="text-[min(2vw,2rem)]">アバター個別相談アプリ「FukuokaVsapo©」開発</div>
      </h2>

      <div className="absolute top-[min(9vw,9rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          福岡県の委託事業として、引きこもり支援を目的としたアバター相談アプリを開発。<br />
          アバターを通じた対話で心理的負担を軽減し、支援をより身近なものに。<br />
          ユーザー体験を重視し、クライアントとの調整を行いながら、3Dアバターのデザインやシステムの最適化を進めた。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FF72D0] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>全体のスケジュール調整と進捗管理</li>
                <li className='marker:text-gray-300'>関係者との調整・制作フローの管理</li>
                <li className='marker:text-gray-300'>展示会向け資料作成・デモ実施</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#55FFDC] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>要件整理・画面フロー設計</li>
                <li className='marker:text-gray-300'>品質管理・テスト・デバッグ作業の監督</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FEEE16] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>3Dアバターのデザイン企画・制作・最適化</li>
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