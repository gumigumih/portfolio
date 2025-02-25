import React from 'react';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import imageMainvisual from "../../assets/images/mainvisual@2x.png";

export function ProtectedPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollSnap({ ref: containerRef as React.MutableRefObject<HTMLDivElement>, duration: 300 });

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="max-w-screen-xl w-full mx-auto">

        {/* セクション 1 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-end relative">
          <img src={imageMainvisual} alt="MainVisual" className="absolute h-full left-0 bottom-0" />
          <div className="pt-[min(4vw,calc(4rem*0.8))] mr-[min(5vw,calc(5rem*0.8))] font-[Montserrat] font-medium text-right">
            <h1 className="text-[min(6vw,calc(6rem*0.8))]">MEGUMI WADA</h1>
            <p className="text-[min(2.5vw,calc(2.5rem*0.8))] -mt-[min(2vw,calc(2rem*0.8))] text-gray-600">(旧姓 HAYASHIBARA)</p>
            <p className="text-[min(4vw,calc(4rem*0.8))]">Director</p>
          </div>
        </div>

        {/* セクション 2 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,calc(1.5rem*0.8))] absolute top-[min(2vw,calc(2rem*0.8))] left-[min(1.5vw,calc(1.5rem*0.8))] font-bold text-gray-600">能力</h2>

          <div className="absolute w-[min(50vw,calc(50rem*0.8))] h-[min(50vw,calc(50rem*0.8))] mx-auto">
            {/* 上の円 */}
            <div className="absolute w-[min(35vw,calc(35rem*0.8))] h-[min(35vw,calc(35rem*0.8))] rounded-full border border-gray-800 top-0 left-1/2 transform -translate-x-1/2"></div>

            {/* 左下の円 */}
            <div className="absolute w-[min(35vw,calc(35rem*0.8))] h-[min(35vw,calc(35rem*0.8))] rounded-full border border-gray-800 bottom-0 left-0 transform"></div>

            {/* 右下の円 */}
            <div className="absolute w-[min(35vw,calc(35rem*0.8))] h-[min(35vw,calc(35rem*0.8))] rounded-full border border-gray-800 bottom-0 right-0 transform"></div>
          </div>

          <div className="absolute bg-gray-800 py-[min(0.5vw,calc(0.5rem*0.8))] px-[min(1.5vw,calc(1.5rem*0.8))] text-white text-[min(2vw,calc(2rem*0.8))] text-center font-bold">
              エンジニアリングとデザインの経験を活かして<br/>
              プロジェクト全体をマネジメントします
          </div>

          <div className="absolute w-[min(50vw,calc(50rem*0.8))] h-[min(50vw,calc(50rem*0.8))] mx-auto">
            {/* 上の円 */}
            <div className="absolute w-[min(35vw,calc(35rem*0.8))] h-[min(35vw,calc(35rem*0.8))] rounded-full top-0 left-1/2 transform -translate-x-1/2">
              <h3 className="absolute bottom-[55%] left-[50%] -translate-x-1/2 text-[min(2.5vw,calc(2.5rem*0.8))] font-bold bg-[#f0f0f3]">
                <span className="bg-[linear-gradient(transparent_70%,#FF72D0_30%)]">
                  マネジメント
                </span>
              </h3>
              <ul className="absolute bottom-[70%] left-[50%] -translate-x-1/2 text-[min(1.5vw,calc(1.5rem*0.8))] w-[min(19vw,calc(19rem*0.8))] bg-[#f0f0f3]/80">
                <li>#プロジェクトマネジメント</li>
                <li>#外注管理</li>
                <li>#提案・見積もり</li>
              </ul>
            </div>

            {/* 左下の円 */}
            <div className="absolute w-[min(35vw,calc(35rem*0.8))] h-[min(35vw,calc(35rem*0.8))] rounded-full bottom-0 left-0 transform">
              <h3 className="absolute top-[55%] right-[45%] text-[2.5vw,calc(55%] right-[45%] text-[min(2.5vw,calc(2.5rem*0.8))] font-bold bg-[#f0f0f3] w-[min(20vw,calc(20rem*0.8))]">
                <span className="bg-[linear-gradient(transparent_70%,#55FFDC_30%)]">
                  エンジニアリング
                </span>
              </h3>
              <ul className="absolute top-[70%] right-[45%] text-[min(1.5vw,calc(1.5rem*0.8))] w-[min(14vw,calc(14rem*0.8))] bg-[#f0f0f3]/80">
                <li>#システム・DB設計</li>
                <li>#フロントエンド・<br/><span className="inline-block w-[min(1vw,calc(1rem*0.8))]"></span>バックエンド開発</li>
                <li>#API設計・実装</li>
              </ul>
            </div>

            {/* 右下の円 */}
            <div className="absolute w-[min(35vw,calc(35rem*0.8))] h-[min(35vw,calc(35rem*0.8))] rounded-full bottom-0 right-0 transform">
              <h3 className="absolute top-[55%] left-[45%] text-[min(2.5vw,calc(2.5rem*0.8))] font-bold bg-[#f0f0f3]">
                <span className="bg-[linear-gradient(transparent_70%,#FEEE16_30%)]">
                  デザイン
                </span>
              </h3>
              <ul className="absolute top-[70%] left-[45%] text-[min(1.5vw,calc(1.5rem*0.8))] w-[min(13.5vw,calc(13.5rem*0.8))] bg-[#f0f0f3]/80">
                <li>#UI/UXデザイン</li>
                <li>#プロトタイピング</li>
                <li>#ロゴ・バナー・<br/><span className="inline-block w-[min(1vw,calc(1rem*0.8))]"></span>チラシデザイン</li>
              </ul>
            </div>
          </div>

        </div>

        {/* セクション 3 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,calc(1.5rem*0.8))] absolute top-[min(2vw,calc(2rem*0.8))] left-[min(2vw,calc(2rem*0.8))] font-bold text-gray-600">テクニカルスキル</h2>
        </div>

      </div>
    </div>
  );
}
