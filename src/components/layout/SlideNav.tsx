import parse from 'html-react-parser';

// OUTLINE の項目
const outlineLinks = [
  { id: 'about', title: '自己紹介', sub: false },
  { id: 'strengths', title: '強み', sub: false },
  { id: 'principles', title: '考え方', sub: false },
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
    <div className="sticky top-0 -ml-[24rem] z-50 max-lg:hidden">
      {/* 📌 OUTLINE メニュー */}
      <div className="absolute left-4 w-[22rem] cursor-default">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/60 bg-white/90 text-slate-900 shadow-[0_18px_35px_-18px_rgba(15,23,42,0.55)] backdrop-blur">
          <div className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full bg-sky-200/30 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 left-12 h-48 w-48 rounded-full bg-emerald-200/30 blur-3xl" aria-hidden="true" />

          <div className="relative p-6">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-400">
              <span>Outline</span>
              <span>TOC</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">ページの目次</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              気になるセクションへワンクリックで移動できます。
            </p>

            <div className="relative mt-6">
              <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-slate-200 md:block" aria-hidden="true" />

              <nav aria-label="ページ内ナビゲーション" className="relative pl-0 md:pl-8">
                <ul className="space-y-2">
                  {outlineLinks.map((item, index) => {
                    const label = `${index + 1}`.padStart(2, '0');
                    const isSub = item.sub;
                    return (
                      <li key={item.id} className="group/list">
                        <button
                          type="button"
                          onClick={() => {
                            document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className={`relative flex w-full items-center gap-3 rounded-2xl border border-transparent px-3 py-2 text-left transition duration-200 focus:outline-none focus-visible:border-slate-300 focus-visible:ring-2 focus-visible:ring-slate-200 hover:border-slate-200 ${
                            isSub
                              ? 'text-sm font-medium text-slate-500 hover:bg-slate-100/70'
                              : 'bg-white/50 text-sm font-semibold text-slate-700 hover:bg-slate-100'
                          }`}
                        >
                          <span
                            className={`flex items-center justify-center rounded-xl font-semibold transition duration-200 ${
                              isSub
                                ? 'h-6 w-6 text-[10px] text-slate-400 group-hover/list:text-slate-600'
                                : 'h-8 w-8 bg-slate-900/90 text-xs text-white group-hover/list:bg-slate-900'
                            }`}
                            aria-hidden="true"
                          >
                            {isSub ? '・' : label}
                          </span>
                          <span
                            className={`${
                              isSub
                                ? 'group-hover/list:text-slate-700'
                                : 'group-hover/list:text-slate-900'
                            } transition duration-200`}
                          >
                            {parse(item.title)}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
