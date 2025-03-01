import React from 'react';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import imageMainvisual from "../../assets/images/mainvisual@2x.png";
import SkillCircle from "../Slide/SkillCircle";
import SkillMap from "../Slide/SkillMap";
import AchievementsTimeline from "../Slide/AchievementsTimeline";

export default function ProtectedPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollSnap({ ref: containerRef as React.MutableRefObject<HTMLDivElement>, duration: 300 });

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="max-w-screen-2xl w-full mx-auto">

        {/* セクション 1 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-end relative">
          <img src={imageMainvisual} alt="MainVisual" className="absolute h-full left-0 bottom-0" />
          <div className="pt-[min(4vw,4rem)] mr-[min(5vw,5rem)] font-[Montserrat] font-medium text-right">
            <h1 className="text-[min(6vw,6rem)]">MEGUMI WADA</h1>
            <p className="text-[min(2.5vw,2.5rem)] -mt-[min(2vw,2rem)] text-gray-600">(旧姓 HAYASHIBARA)</p>
            <p className="text-[min(4vw,4rem)]">Director</p>
          </div>
        </div>

        {/* セクション 2 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2vw,2rem)] left-[min(1.5vw,1.5rem)] font-bold text-gray-600">能力</h2>

          <SkillCircle />
        </div>

        {/* セクション 3 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600">テクニカルスキル</h2>

          <SkillMap />
        </div>

        {/* セクション 4 */}
        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2vw,2rem)] left-[min(2vw,2rem)] font-bold text-gray-600 z-10">実績</h2>

          <AchievementsTimeline />
        </div>

      </div>
    </div>
  );
}
