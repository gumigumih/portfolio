import React from "react";
import image1 from "../../assets/images/works/1/image1.png";
import image2 from "../../assets/images/works/1/image2.png";
import image3 from "../../assets/images/works/1/image3.png";

export default function Work9() {
  return (
    <div>
      <h2 className="absolute top-[min(4vw,4rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2023年6月～7月</div>
        <div className="text-[min(2vw,2rem)]">24時間365日ストリーミング配信管理システム</div>
      </h2>

      <div className="absolute top-[min(9vw,9rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          YouTube向けの自動動画配信管理システムを開発。<br />
          動画のスケジュール設定や自動切り替え、ストリーミング状況のモニタリングを行い、配信中断時には自動再配信を実行。<br />
          Slack通知機能を搭載し、24/7の連続ストリーミングを効率的に運用可能にした。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#55FFDC] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>WEBアプリの設計・開発</li>
                <li className='marker:text-gray-300'>配信管理システムの実装</li>
                <li className='marker:text-gray-300'>ストリーミングのモニタリング・<br/>自動再配信機能の開発</li>
                <li className='marker:text-gray-300'>サーバー管理・Slack通知の実装</li>
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