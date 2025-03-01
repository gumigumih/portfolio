import React from "react";

const projects = [
  {
    start: { year: 2018, month: 10 },
    end: { year: 2019, month: 4 },
    text: "VTuberTV番組",
    textClass: "right-0",
    row: 1
  }, {
    start: { year: 2019, month: 5 },
    end: { year: 2019, month: 5 },
    bgClass: "bg-[#55FFDC]/50",
    text: "Youtube管理アプリ",
    row: 2
  }, {
    start: { year: 2019, month: 5 },
    end: { year: 2020, month: 4 },
    bgClass: "bg-[linear-gradient(#55FFDC_50%,#FEEE16_50%)] opacity-50",
    text: "お菓子パッケージARコンテンツ",
    row: 1
  }, {
    start: { year: 2020, month: 4 },
    end: { year: 2020, month: 4 },
    bgClass: "bg-[#55FFDC]/50",
    text: "バーチャル名刺背景ジェネレーター",
    row: 2
  }, {
    start: { year: 2020, month: 8 },
    end: { year: 2021, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "歴史体験アクティビティプロジェクト",
    textClass: "left-[min(4vw,4rem)] tracking-[min(0.6vw,0.6rem)]",
    row: 1
  }, {
    start: { year: 2021, month: 7 },
    end: { year: 2022, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "",
    row: 1
  }, {
    start: { year: 2022, month: 10 },
    end: { year: 2023, month: 2 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "",
    row: 1
  }, {
    start: { year: 2024, month: 7 },
    end: { year: 2025, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "歴史体験アクティビティプロジェクト",
    row: 1
  }, {
    start: { year: 2022, month: 9 },
    end: { year: 2023, month: 3 },
    bgClass: "bg-[#55FFDC]/50",
    text: "文化財3Dスキャンプロジェクト",
    textClass: "right-0",
    row: 2
  }, {
    start: { year: 2023, month: 6 },
    end: { year: 2023, month: 7 },
    bgClass: "bg-[#55FFDC]/50",
    text: "Youtube24時間配信システム",
    row: 1
  }, {
    start: { year: 2023, month: 2 },
    end: { year: 2023, month: 5 },
    text: "TV番組3Dキャラ支援",
    bgClass: "bg-[#FF72D0]/50",
    textClass: "left-[min(1vw,1rem)] tracking-[min(0.2vw,0.2rem)]",
    row: 3
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
    row: 2
  }, {
    start: { year: 2020, month: 6 },
    end: { year: 2025, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "NICE CAMERA（アバタートラッキングアプリ）",
    row: 4
  }, {
    start: { year: 2024, month: 3 },
    end: { year: 2025, month: 3 },
    bgClass: "bg-[linear-gradient(#FF72D0_33%,#55FFDC_33%,#55FFDC_66%,#FEEE16_66%)] opacity-50",
    text: "AI-Kata S2P",
    row: 5
  }, ];

const minYear = Math.min(...projects.map(p => p.start.year));
const maxYear = Math.max(...projects.map(p => p.end.year));
const totalYears = maxYear - minYear + 1;
const totalMonths = totalYears * 12;
const totalRows = Math.max(...projects.map(p => p.row));
const barHeight = 1.5;
const barSpaceY = 0.5;

export default function AchievementsTimeline() {
  return (
    <div className="absolute top-0 left-0 w-full bg-gray-100">
      <div className="py-[min(2vw,2rem)] pr-[min(2vw,2rem)] ml-[min(6vw,6rem)] overflow-x-scroll">
        <div className="w-[120%]">
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
                    className={`absolute rounded-full shadow w-full h-full ${project.bgClass ? project.bgClass: 'bg-white'}`}
                  ></div>
                  <span className={`absolute px-2 text-gray-700 text-[min(1vw,1rem)] font-semibold whitespace-nowrap z-10 ${project.textClass}`}>
                    {project.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
