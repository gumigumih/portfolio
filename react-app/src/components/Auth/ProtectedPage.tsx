import React from 'react';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import imageMainvisual from "../../assets/images/mainvisual@2x.png";
import SkillCircle from "../Slide/SkillCircle";
import SkillMap from "../Slide/SkillMap";
import AchievementsTimeline from "../Slide/AchievementsTimeline";
import Work1 from "../Slide/Work1";
import Work2 from "../Slide/Work2";
import Work3 from "../Slide/Work3";
import Work4 from "../Slide/Work4";
import Work5p1 from "../Slide/Work5_1";
import Work5p2 from "../Slide/Work5_2";
import Work6 from "../Slide/Work6";
import Work7 from "../Slide/Work7";
import Work8 from "../Slide/Work8";
import Work9 from "../Slide/Work9";
import Work10 from "../Slide/Work10";
import Work11 from "../Slide/Work11";
import Work12 from "../Slide/Work12";
import Work13 from "../Slide/Work13";

export default function ProtectedPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useScrollSnap({ ref: containerRef as React.MutableRefObject<HTMLDivElement>, duration: 300 });

  return (
    <div ref={containerRef} className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory">
      <div className="max-w-screen-2xl w-full mx-auto">

        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-end relative">
          <img src={imageMainvisual} alt="MainVisual" className="absolute h-full left-0 bottom-0" />
          <div className="pt-[min(4vw,4rem)] mr-[min(5vw,5rem)] font-[Montserrat] font-medium text-right">
            <h1 className="text-[min(6vw,6rem)]">MEGUMI WADA</h1>
            <p className="text-[min(2.5vw,2.5rem)] -mt-[min(2vw,2rem)] text-gray-600">(旧姓 HAYASHIBARA)</p>
            <p className="text-[min(4vw,4rem)]">Director</p>
          </div>
        </div>

        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(1.5vw,1.5rem)] font-bold text-gray-600">能力</h2>

          <SkillCircle />
        </div>

        <div className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(2vw,2rem)] font-bold text-gray-600">テクニカルスキル</h2>

          <SkillMap />
        </div>

        <div id="work1" className="snap-start w-full aspect-[16/9] relative">
          <AchievementsTimeline />

          <Work1 />
        </div>

        <div id="work2" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work2 />
        </div>

        <div id="work3" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work3 />
        </div>

        <div id="work4" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work4 />
        </div>

        <div id="work5" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work5p1 />
        </div>

        <div id="" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work5p2 />
        </div>

        <div id="work6" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work6 />
        </div>

        <div id="work7" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work7 />
        </div>

        <div id="work8" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work8 />
        </div>

        <div id="work9" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work9 />
        </div>

        <div id="work10" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work10 />
        </div>

        <div id="work11" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work11 />
        </div>

        <div id="work12" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work12 />
        </div>

        <div id="work13" className="snap-start w-full aspect-[16/9] flex flex-col justify-center items-center relative">
          <Work13 />
        </div>

      </div>
    </div>
  );
}
