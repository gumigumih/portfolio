import parse from 'html-react-parser';

// OUTLINE の項目
const outlineLinks = [
  { id: 'about', title: '自己紹介', sub: false },
  { id: 'strengths', title: '強み', sub: false },
  { id: 'skills', title: 'テクニカルスキル', sub: false },
  { id: 'ai-tools-usage', title: '生成AI活用状況', sub: false },
  { id: 'projects', title: 'プロジェクト一覧', sub: false },
  { id: 'last', title: 'さいごに', sub: false },
];

/* TIMELINE 機能は削除 */
/* const projects = [
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
]; */

export default function SlideNav() {

  return (
    <div className='sticky top-0 -ml-[24rem] max-lg:hidden z-50'>
      {/* 📌 OUTLINE メニュー */}
      <div className="absolute left-[1rem] bg-slate-900/95 shadow-lg rounded-none border border-white/10 w-[22rem] cursor-default z-20 text-white py-[0.3rem] px-[0.8rem]">
        <nav className="pt-[0.3rem]">
          <ul>
            {outlineLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={
                  `${item.sub ? 'pl-6 text-sm text-slate-400' : 'text-lg text-slate-100'} ` +
                  'hover:text-white transition duration-200 py-[0.3rem]'
                }
              >
                {parse(item.title)}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
    </div>
  );
}
