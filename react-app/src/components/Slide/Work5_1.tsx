import React from "react";
import image1 from "../../assets/images/works/5/image1.jpg";
import image2 from "../../assets/images/works/5/image2.png";
import image3 from "../../assets/images/works/5/image3.png";
import image4 from "../../assets/images/works/5/image4.png";

export default function Work5() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2020年8月～2021年3月</div>
        <div className="text-[min(2vw,2rem)]">[三浦半島・鎌倉] 歴史体験型デジタルコンテンツ開発</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          本プロジェクトは、クライアントが文化庁の補助金を申請し実施した、三浦半島の歴史体験型デジタルコンテンツ開発です。<br />
          三浦一族の物語を伝えるため、WEBサイトを制作し、4つの寺に多言語対応のWEB看板とARマンガを設置しました。<br />
          また、鎌倉時代の武士文化を体験できる写経・彩色・彫像のプログラム、仏師の儀式と武士の祈りを再現したVR体験を開発し、それぞれ専用のWEBサイトを制作しました。<br />
          予約管理には外部サービス「Select-Type」を導入しました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem) rounded-full bg-[#FF72D0] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>プロジェクト全体の進行管理・タスク管理</li>
                <li className='marker:text-gray-300'>関係者との調整・制作フローの管理</li>
                <li className='marker:text-gray-300'>各制作物の要件整理</li>
                <li className='marker:text-gray-300'>開発チーム・外注デザイナーの調整</li>
                <li className='marker:text-gray-300'>多言語化に伴う翻訳管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem) rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>WebARコンテンツ（ARマンガ）の開発（Vue.js）</li>
                <li className='marker:text-gray-300'>満足度計測フォームの開発</li>
                <li className='marker:text-gray-300'>API開発・データ管理システムの構築</li>
                <li className='marker:text-gray-300'>サーバー監視・障害対応</li>
                <li className='marker:text-gray-300'>エラー検知・Slack通知システムの導入・運用</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem) rounded-full bg-[#FEEE16] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
              <li className='marker:text-gray-300'>外注制作のWEBサイトを品質チェック・改善<br/>機能追加・デザイン調整を行い、リリース対応</li>
              <li className='marker:text-gray-300'>After Effectsを用いたアニメーション動画の制作</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]'>
        <div className="flex gap-[min(2vw,2rem)] w-[80%]">
          <div className="mt-[min(2vw,2rem)] w-[57%]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)]">ARマンガを試す様子</p>
          </div>
          <div className="mt-[min(2vw,2rem)] w-[43%]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">WEB看板＋ARマンガ</p>
          </div>
        </div>
        <div className="flex gap-[min(2vw,2rem)] w-[70%]">
          <div className="mt-[min(2vw,2rem)] w-[68%]">
            <img src={image3} alt="" />
            <p className="text-[min(1vw,1rem)]">現地体験プログラムの説明・補助タブレット</p>
          </div>
          <div className="mt-[min(2vw,2rem)] w-[32%]">
            <img src={image4} alt="" />
            <p className="text-[min(1vw,1rem)]">体験写真を保管するシステム</p>
          </div>
        </div>
      </div>
    </div>
  );
}