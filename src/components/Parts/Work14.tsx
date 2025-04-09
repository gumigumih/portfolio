import React from 'react';
import image1 from '../../assets/images/works/14/image1.png';
import image2 from '../../assets/images/works/14/image2.png';
import image3 from '../../assets/images/works/14/image3.png';
import image4 from '../../assets/images/works/14/image4.png';
import image5 from '../../assets/images/works/14/image5.png';
import image6 from '../../assets/images/works/14/image6.png';

export default function Work14() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2024年4月～2025年3月</div>
        <div className="text-[min(2vw,2rem)]">AI-KATA S2P 開発・リリース支援</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          AI-KATA S2Pは、ユーザーの描いたオリジナルイラストをAIが解析し、キャラクターを生成する創造力を育むツールです。
          <br />
          展示バージョンからリリースバージョンへの移行を進め、システム設計・機能改善・料金プラン設計、アカウント管理とStripeを用いたサブスクリプション課金を実装しました。
          <br />
          また、アプリストア対応（説明文・スクショ作成）や、利用規約・法人向け契約書の作成を担当。
          <br />
          さらに、展示会のブース掲示物・チラシのデザイン、準備全般を担当し、プロモーション活動を支援しました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FF72D0] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(0.9vw,0.9rem)]">
                <li className="marker:text-gray-300">開発チームの管理・スケジュール調整・進捗管理</li>
                <li className="marker:text-gray-300">料金プランの試算・策定・販売モデルの設計</li>
                <li className="marker:text-gray-300">広報・マーケティング施策の企画・実行・SNS運用</li>
                <li className="marker:text-gray-300">展示会の出展準備・デモ対応</li>
                <li className="marker:text-gray-300">法務対応（利用規約・法人向け契約書の作成・管理）</li>
                <li className="marker:text-gray-300">カスタマーサポート・問い合わせ対応</li>
                <li className="marker:text-gray-300">アプリストア対応</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(0.9vw,0.9rem)]">
                <li className="marker:text-gray-300">サーバー設計・データベース設計・API設計</li>
                <li className="marker:text-gray-300">サーバー機能の開発・API実装</li>
                <li className="marker:text-gray-300">本番環境リリース・CI/CDの導入・アップデート管理</li>
                <li className="marker:text-gray-300">サーバー運用・エラー監視・Slack通知の導入</li>
                <li className="marker:text-gray-300">テスト計画の策定・実施・品質管理・デバッグ対応</li>
                <li className="marker:text-gray-300">Webサイトの設計・実装・UI最適化</li>
              </ul>
            </div>
          </li>

          {/* デザイン */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FEEE16] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">デザイン</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(0.9vw,0.9rem)]">
                <li className="marker:text-gray-300">
                  ソフトウェアのUI設計・デザイン
                  <br />
                  ユーザーエクスペリエンスの最適化
                </li>
                <li className="marker:text-gray-300">展示会・プロモーション用資料のデザイン</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="absolute top-[min(17vw,17rem)] left-[min(33vw,33rem)] mr-[min(2vw,2rem)]">
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)] w-[46%]">
              WEBサイト
              <br />
              <a
                href="https://aikatas2p.kidsplates.jp/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                https://aikatas2p.kidsplates.jp/
              </a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)] w-[27%]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">アカウント管理画面</p>
          </div>
          <div className="mt-[min(2vw,2rem)] w-[27%]">
            <img src={image3} alt="" />
            <p className="text-[min(1vw,1rem)]">Admin管理画面</p>
          </div>
        </div>
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image4} alt="" />
            <p className="text-[min(1vw,1rem)]">UIデザイン</p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image5} alt="" />
            <p className="text-[min(1vw,1rem)]">UIデザイン</p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image6} alt="" />
            <p className="text-[min(1vw,1rem)]">展示会 チラシ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
