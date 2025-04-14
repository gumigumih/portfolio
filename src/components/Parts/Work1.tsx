import image1 from '../../assets/images/works/1/image1.png';
import image2 from '../../assets/images/works/1/image2.png';
import image3 from '../../assets/images/works/1/image3.png';

export default function Work1() {
  return (
    <div>
      <h2 className="absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">
        <div className="text-[min(1vw,1rem)]">2018年10月～2019年3月</div>
        <div className="text-[min(2vw,2rem)]">にじさんじのくじじゅうじ</div>
      </h2>

      <div className="absolute top-[min(7vw,7rem)] left-[min(2vw,2rem)] w-full">
        <p className="text-gray-600 text-[min(1.2vw,1.2rem)] text-justify">
          本プロジェクトでは、AbemaTV「にじさんじのくじじゅうじ」のVR収録を支援するものです。
          <br />
          毎週の生放送において、演者9人・カメラマン4人、計13人分のVR機材の設営を担当し、3Dスタジオデータの制作進行管理、3DキャラクターのVRM変換を行いました。
          <br />
          また、スプレッドシートで準備素材を管理し、設営手順を標準化することで、VRセンサーのトラブルを減らし、収録準備の効率を向上させました。
        </p>

        <h3 className="mt-[min(2vw,2rem)] text-[min(1vw,1rem)] font-bold text-gray-400">役割</h3>
        <ul className="mt-2 space-y-4">
          {/* マネジメント */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#FF72D0] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">マネジメント</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className="marker:text-gray-300">3Dスタジオデータの制作進行管理</li>
              </ul>
            </div>
          </li>

          {/* エンジニアリング */}
          <li className="flex items-start space-x-3">
            <span className="w-[min(1.2vw,1.2rem)] h-[min(1.2vw,1.2rem)] rounded-full bg-[#55FFDC] mt-[min(1vw,1rem)]"></span>
            <div>
              <h4 className="font-semibold text-[min(1.2vw,1.2rem)]">エンジニアリング</h4>
              <ul className="ml-[min(1.3vw,1.3rem)] space-y-[min(1vw,1rem)] list-disc text-[min(1vw,1rem)]">
                <li className="marker:text-gray-300">VR機材の設置と設定</li>
                <li className="marker:text-gray-300">3DキャラクターのVRM形式変換</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      <div className="absolute top-[min(13vw,13rem)] left-[min(30vw,30rem)] mr-[min(2vw,2rem)]">
        <div className="flex gap-[min(2vw,2rem)]">
          <div className="mt-[min(2vw,2rem)]">
            <img src={image1} alt="" className="w-[60%]" />
            <p className="text-[min(1vw,1rem)]">番組クレジット</p>
          </div>
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
