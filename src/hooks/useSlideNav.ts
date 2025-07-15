import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const outlineLinks = [
  { id: 'career', title: 'キャリアについて' },
  { id: 'skills', title: 'スキル・強み' },
  { id: 'technicalSkills', title: 'テクニカルスキル' },
  { id: 'projects', title: 'プロジェクト一覧' },
  { id: 'last', title: 'さいごに' },
];

export const projects = [
  // ...（SlideNav.tsxのprojects配列をそのままコピー）
  { start: { year: 2018, month: 10 }, end: { year: 2019, month: 3 }, text: 'VTuberTV番組', textClass: 'right-0', row: 1, jumpTo: 'nijisanjiKuji' },
  { start: { year: 2019, month: 5 }, end: { year: 2019, month: 5 }, text: 'Youtube管理アプリ', row: 2, jumpTo: 'youtubeScheduler' },
  { start: { year: 2019, month: 5 }, end: { year: 2020, month: 4 }, text: 'お菓子パッケージARコンテンツ', row: 1, jumpTo: 'snackAR' },
  { start: { year: 2020, month: 4 }, end: { year: 2020, month: 4 }, text: 'バーチャル名刺背景ジェネレーター', row: 2, jumpTo: 'virtualBusinessCard' },
  { start: { year: 2020, month: 8 }, end: { year: 2021, month: 3 }, text: '歴史体験型デジタルコンテンツ開発', textClass: 'tracking-[0.2rem]', row: 3, jumpTo: 'miuraKamakura' },
  { start: { year: 2021, month: 7 }, end: { year: 2022, month: 3 }, text: '', row: 3, jumpTo: 'streamingManager' },
  { start: { year: 2022, month: 10 }, end: { year: 2023, month: 2 }, text: '歴史体験コンテンツ活用・バスツアー企画', row: 3, jumpTo: 'fukuokaVsapo' },
  { start: { year: 2024, month: 1 }, end: { year: 2024, month: 1 }, text: '', row: 3, jumpTo: 'fukuokaVsapo' },
  { start: { year: 2024, month: 7 }, end: { year: 2025, month: 3 }, text: '新規バスツアー企画・音声ガイド開発', row: 3, jumpTo: 'majikaruLove' },
  { start: { year: 2022, month: 9 }, end: { year: 2023, month: 3 }, text: '文化財3Dスキャンプロジェクト', textClass: 'right-0', row: 1, jumpTo: 'culturalHeritage3D' },
  { start: { year: 2023, month: 6 }, end: { year: 2023, month: 7 }, text: 'Youtube24時間配信システム', row: 1, jumpTo: 'streamingManager' },
  { start: { year: 2023, month: 2 }, end: { year: 2023, month: 5 }, text: 'TV番組3Dキャラ支援', textClass: 'left-[1rem] tracking-[0.2rem]', row: 2, jumpTo: 'youtubeScheduler' },
  { start: { year: 2023, month: 12 }, end: { year: 2024, month: 2 }, text: '', row: 2 },
  { start: { year: 2023, month: 4 }, end: { year: 2023, month: 9 }, text: 'アバター個別相談アプリ', textClass: 'right-0', row: 5, jumpTo: 'niceCamera' },
  { start: { year: 2020, month: 6 }, end: { year: 2025, month: 3 }, text: 'NICE CAMERA（アバタートラッキングアプリ）', row: 4, jumpTo: 'niceCamera' },
  { start: { year: 2024, month: 3 }, end: { year: 2025, month: 3 }, text: 'AI-KATA S2P', row: 5, jumpTo: 'aiKataS2p' },
];

export function useSlideNav() {
  const [isTimelineOpen, setIsTimelineOpen] = useState(false);
  const [isOutlineOpen, setIsOutlineOpen] = useState(true);
  const navigate = useNavigate();

  const minYear = Math.min(...projects.map((p) => p.start.year));
  const maxYear = Math.max(...projects.map((p) => p.end.year));
  const totalYears = maxYear - minYear + 1;
  const totalMonths = totalYears * 12;
  const totalRows = Math.max(...projects.map((p) => p.row));
  const barHeight = 1.5;
  const barSpaceY = 0.5;

  const handleProjectClick = (projectId: string) => {
    setIsTimelineOpen(false);
    navigate(`/projects/${projectId}`);
  };

  return {
    isTimelineOpen,
    setIsTimelineOpen,
    isOutlineOpen,
    setIsOutlineOpen,
    handleProjectClick,
    minYear,
    maxYear,
    totalYears,
    totalMonths,
    totalRows,
    barHeight,
    barSpaceY,
    outlineLinks,
    projects,
  };
} 