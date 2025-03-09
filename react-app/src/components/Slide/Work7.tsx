import React from "react";
import image1 from "../../assets/images/works/1/image1.png";
import image2 from "../../assets/images/works/1/image2.png";
import image3 from "../../assets/images/works/1/image3.png";

export default function Work7() {
  return (
    <div>
      <h2 className="absolute top-[min(4vw,4rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2024年7月〜2025年3月</div>
        <div className="text-[min(2vw,2rem)]">歴史体験型デジタルコンテンツ強化・活用・音声ガイド開発</div>
      </h2>

      <div className="absolute top-[min(9vw,9rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          過去の歴史体験型バスツアーのWEBサイトを大幅改修し、情報整理と利便性を向上。<br />
          WEB看板、ARマンガ、満足度計測を追加し、AI音声生成を活用した多言語対応の音声ガイドを開発。<br />
          三浦半島と鎌倉の武士の歴史を伝えるデジタルコンテンツを提供。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FF72D0] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>プロジェクト全体の進行管理・タスク管理</li>
                <li className='marker:text-gray-300'>関係者との調整・制作フローの管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#55FFDC] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>WebARコンテンツ（ARマンガ）の開発（Vue.js）</li>
                <li className='marker:text-gray-300'>満足度計測フォームの開発</li>
                <li className='marker:text-gray-300'>音声ガイドシステムのシステム設計・データ管理</li>
                <li className='marker:text-gray-300'>AI音声生成APIの導入・実装</li>
                <li className='marker:text-gray-300'>サーバー監視・障害対応</li>
                <li className='marker:text-gray-300'>エラー検知・Slack通知システムの導入・運用</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FEEE16] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>音声ガイドアプリのUI/UXデザイン設計・実装
              </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(17vw,17rem)] left-[min(30vw,30rem)]'>
        <div className="w-[min(40vw,40rem)]">
          <img src={image1} alt="" className="" />
        </div>
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image2} alt="" />
            <h3 className="text-[min(1vw,1rem)]">設営の様子</h3>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image3} alt="" />
            <h3 className="text-[min(1vw,1rem)]">VR機材の設営手順の標準化</h3>
          </div>
        </div>
      </div>
    </div>
  );
}