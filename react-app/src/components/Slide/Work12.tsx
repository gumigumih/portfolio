import React from "react";
import image1 from "../../assets/images/works/1/image1.png";
import image2 from "../../assets/images/works/1/image2.png";
import image3 from "../../assets/images/works/1/image3.png";

export default function Work12() {
  return (
    <div>
      <h2 className="absolute top-[min(4vw,4rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2020年6月～2025年3月</div>
        <div className="text-[min(2vw,2rem)]">NICE CAMERA 開発・運用</div>
      </h2>

      <div className="absolute top-[min(9vw,9rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          NICE CAMERAは、PC一台でアバターを使ったリモート会議やライブ配信を支援する仮想カメラソフトウェア。<br />
          開発チームのディレクターとして、サーバー設計やUI/UXデザインを担当し、テストとデプロイの自動化を導入してリリースサイクルを短縮。<br />
          インフラ運用やカスタマーサポート、広報・展示会対応にも関与し、開発効率とユーザー満足度の向上を実現。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FF72D0] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>開発チームの管理・スケジュール調整・進捗管理</li>
                <li className='marker:text-gray-300'>広報・マーケティング施策の企画・実行</li>
                <li className='marker:text-gray-300'>展示会の出展準備・デモ対応</li>
                <li className='marker:text-gray-300'>法務対応（利用規約・法人向け契約書の作成・管理）</li>
                <li className='marker:text-gray-300'>カスタマーサポート・問い合わせ対応</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#55FFDC] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>サーバー設計・データベース設計・API設計</li>
                <li className='marker:text-gray-300'>サーバー機能の開発・API実装</li>
                <li className='marker:text-gray-300'>Webサイトの設計・実装・UI最適化</li>
                <li className='marker:text-gray-300'>テスト計画の策定・実施・品質管理・デバッグ対応</li>
                <li className='marker:text-gray-300'>本番環境リリース・CI/CDの導入・アップデート管理</li>
                <li className='marker:text-gray-300'>サーバー運用・エラー監視・Slack通知の導入</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-[#FEEE16] mt-1"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-1 list-disc text-[min(1vw,1rem)]">
                <li className='marker:text-gray-300'>ソフトウェアのUI設計・デザイン</li>
                <li className='marker:text-gray-300'>プリセットコンテンツのデザイン</li>
                <li className='marker:text-gray-300'>展示会・プロモーション用資料のデザイン</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className='absolute top-[min(17vw,17rem)] left-[min(33vw,33rem)]'>
        <ul className="mt-2 space-y-4">
        </ul>

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