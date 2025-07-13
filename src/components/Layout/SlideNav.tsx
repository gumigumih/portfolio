import { useState } from 'react';
import parse from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

// OUTLINE の項目
const outlineLinks = [
  { id: 'top', title: 'TOP' },
  { id: 'ability', title: '強み' },
  { id: 'productManagementSkills', title: 'プロダクトマネジメントスキル' },
  { id: 'technicalSkills', title: 'テクニカルスキル' },
  { id: 'aiTools', title: '生成AI活用状況' },
  { id: 'projects', title: 'プロジェクト一覧' },
  { id: 'career', title: 'キャリアについて' },
  { id: 'last', title: 'さいごに' },
];

const projects = [
  {
    start: { year: 2018, month: 10 },
    end: { year: 2019, month: 3 },
    text: 'VTuberTV番組',
    textClass: 'right-0',
    row: 1,
    jumpTo: 'nijisanjiKuji',
  },
  {
    start: { year: 2019, month: 5 },
    end: { year: 2019, month: 5 },
    text: 'Youtube管理アプリ',
    row: 2,
    jumpTo: 'youtubeScheduler',
  },
  {
    start: { year: 2019, month: 5 },
    end: { year: 2020, month: 4 },
    text: 'お菓子パッケージARコンテンツ',
    row: 1,
    jumpTo: 'snackAR',
  },
  {
    start: { year: 2020, month: 4 },
    end: { year: 2020, month: 4 },
    text: 'バーチャル名刺背景ジェネレーター',
    row: 2,
    jumpTo: 'virtualBusinessCard',
  },
  {
    start: { year: 2020, month: 8 },
    end: { year: 2021, month: 3 },
    text: '歴史体験型デジタルコンテンツ開発',
    textClass: 'tracking-[0.2rem]',
    row: 3,
    jumpTo: 'miuraKamakura',
  },
  {
    start: { year: 2021, month: 7 },
    end: { year: 2022, month: 3 },
    text: '',
    row: 3,
    jumpTo: 'streamingManager',
  },
  {
    start: { year: 2022, month: 10 },
    end: { year: 2023, month: 2 },
    text: '歴史体験コンテンツ活用・バスツアー企画',
    row: 3,
    jumpTo: 'fukuokaVsapo',
  },
  {
    start: { year: 2024, month: 1 },
    end: { year: 2024, month: 1 },
    text: '',
    row: 3,
    jumpTo: 'fukuokaVsapo',
  },
  {
    start: { year: 2024, month: 7 },
    end: { year: 2025, month: 3 },
    text: '新規バスツアー企画・音声ガイド開発',
    row: 3,
    jumpTo: 'majikaruLove',
  },
  {
    start: { year: 2022, month: 9 },
    end: { year: 2023, month: 3 },
    text: '文化財3Dスキャンプロジェクト',
    textClass: 'right-0',
    row: 1,
    jumpTo: 'culturalHeritage3D',
  },
  {
    start: { year: 2023, month: 6 },
    end: { year: 2023, month: 7 },
    text: 'Youtube24時間配信システム',
    row: 1,
    jumpTo: 'streamingManager',
  },
  {
    start: { year: 2023, month: 2 },
    end: { year: 2023, month: 5 },
    text: 'TV番組3Dキャラ支援',
    textClass: 'left-[1rem] tracking-[0.2rem]',
    row: 2,
    jumpTo: 'youtubeScheduler',
  },
  {
    start: { year: 2023, month: 12 },
    end: { year: 2024, month: 2 },
    text: '',
    row: 2,
  },
  {
    start: { year: 2023, month: 4 },
    end: { year: 2023, month: 9 },
    text: 'アバター個別相談アプリ',
    textClass: 'right-0',
    row: 5,
    jumpTo: 'niceCamera',
  },
  {
    start: { year: 2020, month: 6 },
    end: { year: 2025, month: 3 },
    text: 'NICE CAMERA（アバタートラッキングアプリ）',
    row: 4,
    jumpTo: 'niceCamera',
  },
  {
    start: { year: 2024, month: 3 },
    end: { year: 2025, month: 3 },
    text: 'AI-KATA S2P',
    row: 5,
    jumpTo: 'aiKataS2p',
  },
];

const minYear = Math.min(...projects.map((p) => p.start.year));
const maxYear = Math.max(...projects.map((p) => p.end.year));
const totalYears = maxYear - minYear + 1;
const totalMonths = totalYears * 12;
const totalRows = Math.max(...projects.map((p) => p.row));
const barHeight = 1.5;
const barSpaceY = 0.5;

export default function SlideNav() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isOutlineOpen, setIsOutlineOpen] = useState(true);
  const navigate = useNavigate();

  const handleProjectClick = (projectId: string) => {
    setIsTimelineOpen(false);
    navigate(`/projects/${projectId}`);
  };

  return (
    <div className='sticky top-0 ml-[min(-12vw,-12rem)] max-md:hidden z-50'>
      {/* 📌 OUTLINE メニュー */}
      <div
        className={`transition-all absolute top-[3rem] left-[1rem] bg-white/80 backdrop-blur-lg shadow-md rounded-lg cursor-pointer z-20 ${
          isOutlineOpen ? 'py-[0.3rem] px-[0.8rem]' : 'px-[0.8rem] py-0'
        }`}
      >
        <button
          className="text-[1rem] font-bold pointer-event-none w-full text-left flex items-center gap-2"
          onClick={() => setIsOutlineOpen(!isOutlineOpen)}
        >
          <FontAwesomeIcon icon={isOutlineOpen ? faChevronLeft : faChevronRight} className="text-sm" />
          OUTLINE
        </button>
        <nav
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            isOutlineOpen
              ? 'max-h-[500px] max-w-[10rem] opacity-100 pt-[0.3rem]'
              : 'max-h-0 max-w-0 opacity-0 pt-0'
          }`}
        >
          <ul>
            {outlineLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[1rem] text-gray-700 hover:text-blue-500 transition duration-200 py-[0.3rem] border-b border-gray-300 last:border-0"
              >
                {parse(item.title)}
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 📌 TIMELINE メニュー */}
      <div className={`absolute top-0 left-0 w-full z-20`}>
        <button
          className="absolute top-[1rem] left-[1rem] px-[0.8rem] bg-white/80 backdrop-blur-lg shadow-md rounded-lg text-[1rem] font-semibold z-20 flex items-center gap-2"
          onClick={() => setIsTimelineOpen(!isTimelineOpen)}
        >
          <FontAwesomeIcon icon={isTimelineOpen ? faChevronLeft : faChevronRight} className="text-sm" />
          TIMELINE
        </button>

        <div
          className={`w-full bg-gray-100 overflow-x-hidden rounded-b-lg shadow-md transition-all duration-500 ease-in-out
            ${isTimelineOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}`}
        >
          <div className="py-[1rem] pr-[2rem] ml-[6rem] overflow-x-scroll">
            <div className="w-[105rem]">
              <h2 className="text-[1.5rem] absolute top-[2.5rem] left-[2rem] font-bold text-gray-600">
                実績
              </h2>

              <div className="flex justify-around text-gray-700 font-semibold text-sm">
                {Array.from({ length: totalYears }, (_, i) => (
                  <span key={i}>{minYear + i}</span>
                ))}
              </div>

              <div
                className="relative w-full mt-[1rem]"
                style={{
                  height: `min(${totalRows * (barHeight + barSpaceY)}vw,${totalRows * (barHeight + barSpaceY)}rem)`,
                }}
              >
                {projects.map((project, index) => {
                  const startMonthIndex = (project.start.year - minYear) * 12 + (project.start.month - 1);
                  const startOffset = (startMonthIndex / totalMonths) * 100;
                  const durationMonths =
                    (project.end.year - project.start.year) * 12 + (project.end.month - project.start.month) + 1;
                  const durationWidth = (durationMonths / totalMonths) * 100;
                  const rowOffset = project.row - 1;

                  return (
                    <div
                      key={index}
                      className="absolute flex justify-content items-center"
                      style={{
                        top: `min(${rowOffset * (barHeight + barSpaceY)}vw,${rowOffset * (barHeight + barSpaceY)}rem)`,
                        left: `${startOffset}%`,
                        width: `${durationWidth}%`,
                        height: `${barHeight}vw`,
                      }}
                    >
                      <div
                        className={`absolute rounded-full shadow w-full h-full cursor-pointer hover:border-2 hover:border-gray-500 bg-white`}
                        onClick={() => {
                          if (project.jumpTo) {
                            handleProjectClick(project.jumpTo);
                          }
                        }}
                      ></div>
                      <span
                        className={`absolute px-2 text-gray-700 text-[1rem] font-semibold whitespace-nowrap pointer-events-none z-10 ${project.textClass}`}
                      >
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
    </div>
  );
}