import React from "react";
import image1 from "../../assets/images/works/1/image1.png";
import image2 from "../../assets/images/works/1/image2.png";
import image3 from "../../assets/images/works/1/image3.png";

export default function Work2() {
  return (
    <div>
      <h2 className="absolute top-[min(4vw,4rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2019年4月～5月</div>
        <div className="text-[min(2vw,2rem)]">YouTube非公開日時予約管理WEBアプリ</div>
      </h2>

      <div className="absolute top-[min(9vw,9rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          YouTubeの非公開日時予約プロセスを、GASとVue.YouTubeの非公開日時予約プロセスを、GASとVue.jsを用いたWEBアプリに刷新。<br />
          スプレッドシートをデータベースとして活用し、直感的なUIと強化されたセキュリティを実現。<br />
          GASの最適化により処理時間を60秒から2秒に短縮し、業務効率を大幅に向上させました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#55FFDC] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>WEBアプリの実装</li>
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