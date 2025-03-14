import React from "react";
import image1 from "../../assets/images/works/12/image1.png";
import image2 from "../../assets/images/works/12/image2.png";

export default function Work12() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2023年4月～2023年9月</div>
        <div className="text-[min(2vw,2rem)]">アバター個別相談アプリ「FukuokaVsapo©」開発</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          本プロジェクトは、福岡県の委託事業として開発した、支援者と相談者が利用するアバター相談アプリです。<br />
          クライアントの要件を整理し、仕様決定・UI/UXデザイン・3Dアバター制作を担当しました。<br />
          相談の予約システムとアカウント管理は別企業が開発し、アプリからログイン後、予約がある場合に入室できるようAPI連携を実装しました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FF72D0] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>プロジェクト全体の管理</li>
                <li className='marker:text-gray-300'>開発チーム管理</li>
                <li className='marker:text-gray-300'>関係者との調整・仕様説明資料の作成</li>
                <li className='marker:text-gray-300'>展示会向け資料作成・デモ実施</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>要件整理・画面フロー設計</li>
                <li className='marker:text-gray-300'>品質管理・テスト・デバッグ作業の監督</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FEEE16] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>アプリのUI・UXデザイン</li>
                <li className='marker:text-gray-300'>3Dアバター制作</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]'>
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)]">VRoidで制作したモデル</p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">UIデザイン・画面説明・サーバ構成</p>
          </div>
        </div>
      </div>
    </div>
  );
}