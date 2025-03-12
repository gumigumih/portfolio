import React from "react";
import image1 from "../../assets/images/works/1/image1.png";
import image2 from "../../assets/images/works/1/image2.png";
import image3 from "../../assets/images/works/1/image3.png";

export default function Work10() {
  return (
    <div>
      <h2 className="absolute top-[min(4vw,4rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2023年2月〜2023年5月、2023年12月～2024年2月</div>
        <div className="text-[min(2vw,2rem)]">TV番組「マヂカルラブリーの全力！アニシャド応援部」3Dキャラクター制作・撮影支援</div>
      </h2>

      <div className="absolute top-[min(9vw,9rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          TV番組「マヂカルラブリーの全力！アニシャド応援部」向けに、3Dキャラクター制作と撮影サポートを実施。<br />
          モーション撮影ツール「NICE CAMERA」を活用し、撮影したモーションデータの調整・追加を担当。<br />
          クラウドソーシングで制作された3Dキャラクターの品質を向上させるため、ブラッシュアップを行い、安定した品質を実現した。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FF72D0] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>3Dキャラクター制作の進行管理</li>
                <li className='marker:text-gray-300'>外注3Dキャラクター制作の管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#55FFDC] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>モーション撮影データの収録・調整</li>
                <li className='marker:text-gray-300'>「NICE CAMERA」へのモーションデータ追加</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FEEE16] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>外注3Dキャラクターのブラッシュアップ・品質向上</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(17vw,17rem)] left-[min(32vw,32rem)]'>
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