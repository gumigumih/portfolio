import React from 'react';
import image1 from '../../assets/images/works/9/image1.png';
import image2 from '../../assets/images/works/9/image2.png';
import image3 from '../../assets/images/works/9/image3.png';
import image4 from '../../assets/images/works/9/image4.png';
import image5 from '../../assets/images/works/9/image5.png';
import image6 from '../../assets/images/works/9/image6.png';

export default function Work9() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2022年9月〜2023年3月</div>
        <div className="text-[min(2vw,2rem)]">文化財3DスキャンWEB公開システム開発</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          本プロジェクトは、文化財の3DスキャンデータをWEB上で公開するシステムの開発です。
          <br />
          ユーザーがスクロール操作でカメラアングルを次々と切り替えながら、魅せたい場所と角度を意図的に演出し、音声ガイドも再生できるインターフェースを実装しました。
          <br />
          また、複数の文化財データをWEBサイトに埋め込めるよう、3Dビューアーの基本機能をVue.jsでプラグイン化しました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FF72D0] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className="marker:text-gray-300">チーム管理・スケジュール調整・進行管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className="marker:text-gray-300">3Dビューアーの機能設計・UI設計</li>
                <li className="marker:text-gray-300">3Dビューアーの開発・Vue.jsによるプラグイン化</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]">
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image1} alt="" />
            <p className="text-[min(1vw,1rem)]">
              須磨寺
              <br />
              <a href="https://hacosco.com/suma/" target="_blank" rel="noreferrer" className="text-blue-500 underline">
                https://hacosco.com/suma/
              </a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image2} alt="" />
            <p className="text-[min(1vw,1rem)]">
              針尾送信所
              <br />
              <a href="https://hacosco.com/hario/" target="_blank" rel="noreferrer" className="text-blue-500 underline">
                https://hacosco.com/hario/
              </a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image3} alt="" />
            <p className="text-[min(1vw,1rem)]">
              竹田城跡
              <br />
              <a
                href="https://hacosco.com/takeda/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                https://hacosco.com/takeda/
              </a>
            </p>
          </div>
        </div>
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image4} alt="" />
            <p className="text-[min(1vw,1rem)]">
              熊本の近代化遺産 三池炭鉱万田坑と三角西港
              <br />
              <a
                href="https://hacosco.com/kumamoto-heritage/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                https://hacosco.com/kumamoto-heritage/
              </a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image5} alt="" />
            <p className="text-[min(1vw,1rem)]">
              姫路城
              <br />
              <a
                href="https://hacosco.com/himeji-castle/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                https://hacosco.com/himeji-castle/
              </a>
            </p>
          </div>
          <div className="mt-[min(2vw,2rem)]">
            <img src={image6} alt="" />
            <p className="text-[min(1vw,1rem)]">
              神戸市兵庫区の近代化遺産 湊川隧道
              <br />
              <a
                href="https://hacosco.com/hyogoku/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                https://hacosco.com/hyogoku/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
