import React from "react";
import { useState } from "react";

const projects = [
  {
    start: { year: 2018, month: 10 },
    end: { year: 2019, month: 3 },
    text: "VTuberTV番組",
    textClass: "right-0",
    row: 1,
    jumpTo: "work1"
  }, {
    start: { year: 2019, month: 5 },
    end: { year: 2019, month: 5 },
    bgClass: "bg-[#55FFDC]/50",
    text: "Youtube管理アプリ",
    row: 2,
    jumpTo: "work2"
  }, {
    start: { year: 2019, month: 5 },
    end: { year: 2020, month: 4 },
    bgClass: "bg-[linear-gradient(#55FFDC_50%,#FEEE16_50%)] opacity-50",
    text: "お菓子パッケージARコンテンツ",
    row: 1,
    jumpTo: "work3"
  }, {
    start: { year: 2020, month: 4 },
    end: { year: 2020, month: 4 },
    bgClass: "bg-[#55FFDC]/50",
    text: "バーチャル名刺背景ジェネレーター",
    row: 2,
    jumpTo: "work4"
  }, {
    start: { year: 2020, month: 8 },
    end: { year: 2021, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "歴史体験型デジタルコンテンツ開発",
    textClass: "tracking-[min(0.2vw,0.2rem)]",
    row: 1,
    jumpTo: "work5"
  }, {
    start: { year: 2021, month: 7 },
    end: { year: 2022, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "",
    row: 1,
    jumpTo: "work5"
  }, {
    start: { year: 2022, month: 10 },
    end: { year: 2023, month: 2 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "歴史体験型デジタルコンテンツ活用",
    row: 1,
    jumpTo: "work6"
  }, {
    start: { year: 2024, month: 1 },
    end: { year: 2024, month: 1 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "",
    row: 1,
    jumpTo: "work6"
  }, {
    start: { year: 2024, month: 7 },
    end: { year: 2025, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "歴史体験型デジタルコンテンツ強化・開発",
    row: 1,
    jumpTo: "work7"
  }, {
    start: { year: 2022, month: 9 },
    end: { year: 2023, month: 3 },
    bgClass: "bg-[#55FFDC]/50",
    text: "文化財3Dスキャンプロジェクト",
    textClass: "right-0",
    row: 2,
    jumpTo: "work8"
  }, {
    start: { year: 2023, month: 6 },
    end: { year: 2023, month: 7 },
    bgClass: "bg-[#55FFDC]/50",
    text: "Youtube24時間配信システム",
    row: 2,
    jumpTo: "work9"
  }, {
    start: { year: 2023, month: 2 },
    end: { year: 2023, month: 5 },
    text: "TV番組3Dキャラ支援",
    bgClass: "bg-[#FF72D0]/50",
    textClass: "left-[min(1vw,1rem)] tracking-[min(0.2vw,0.2rem)]",
    row: 3,
    jumpTo: "work10"
  }, {
    start: { year: 2023, month: 12 },
    end: { year: 2024, month: 2 },
    bgClass: "bg-[#FF72D0]/50",
    text: "",
    row: 3
  }, {
    start: { year: 2023, month: 4 },
    end: { year: 2023, month: 9 },
    bgClass: "bg-[linear-gradient(#FF72D0_50%,#FEEE16_50%)] opacity-50",
    text: "アバター個別相談アプリ",
    textClass: "right-0",
    row: 5,
    jumpTo: "work11"
  }, {
    start: { year: 2020, month: 6 },
    end: { year: 2025, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "NICE CAMERA（アバタートラッキングアプリ）",
    row: 4,
    jumpTo: "work12"
  }, {
    start: { year: 2024, month: 3 },
    end: { year: 2025, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "AI-Kata S2P",
    row: 5,
    jumpTo: "work13"
  },
];

const minYear = Math.min(...projects.map(p => p.start.year));
const maxYear = Math.max(...projects.map(p => p.end.year));
const totalYears = maxYear - minYear + 1;
const totalMonths = totalYears * 12;
const totalRows = Math.max(...projects.map(p => p.row));
const barHeight = 1.5;
const barSpaceY = 0.5;

export default function AchievementsTimeline() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-100 z-10">
      <button
        className="absolute top-[min(1vw,1rem)] left-[min(1vw,1rem)] px-[min(0.8vw,0.8rem)] bg-gray-500 text-white text-[min(1vw,1rem)] font-semibold rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "≪ CLOSE" : "≫ TIMELINE"}
      </button>


      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="py-[min(1vw,1rem)] pr-[min(2vw,2rem)] ml-[min(6vw,6rem)] overflow-x-scroll">
          <div className="w-[min(105vw,105rem)]">
            <h2 className="text-[min(1.5vw,1.5rem)] absolute top-[min(2.5vw,2.5rem)] left-[min(2vw,2rem)] font-bold text-gray-600">実績</h2>

            <div className="flex justify-around text-gray-700 font-semibold text-sm">
              {Array.from({ length: totalYears }, (_, i) => (
                <span key={i}>{minYear + i}</span>
              ))}
            </div>

            <div className="relative w-full mt-[min(1vw,1rem)]"
              style={{
                height: `min(${totalRows * (barHeight + barSpaceY)}vw,${totalRows * (barHeight + barSpaceY)}rem)`,
              }}
            >
              {projects.map((project, index) => {
                const startMonthIndex = (project.start.year - minYear) * 12 + (project.start.month - 1);
                const startOffset = (startMonthIndex / totalMonths) * 100;
                const durationMonths = (project.end.year - project.start.year) * 12 + (project.end.month - project.start.month) + 1;
                const durationWidth = (durationMonths / totalMonths) * 100;
                const rowOffset = (project.row - 1); // 各行のオフセットを計算
                console.log(rowOffset, durationMonths);

                return (
                  <div key={index} className="absolute flex justify-content items-center"
                    style={{
                      top: `min(${rowOffset * (barHeight + barSpaceY)}vw,${rowOffset * (barHeight + barSpaceY)}rem)`,
                      left: `${startOffset}%`,
                      width: `${durationWidth}%`,
                      height: `${barHeight}vw`,
                    }}
                  >
                    <div
                      className={`absolute rounded-full shadow w-full h-full cursor-pointer hover:border-2 hover:border-gray-500 ${project.bgClass ? project.bgClass : 'bg-white'}`}
                      onClick={() => {
                        setIsOpen(!isOpen);
                        const targetId = project.jumpTo || "";
                        document.getElementById(targetId)?.scrollIntoView({behavior: 'smooth' });
                      }}
                    ></div>
                    <span className={`absolute px-2 text-gray-700 text-[min(1vw,1rem)] font-semibold whitespace-nowrap pointer-events-none z-10 ${project.textClass}`}>
                      {project.text}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
