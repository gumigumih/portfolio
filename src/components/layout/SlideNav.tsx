const outlineLinks = [
  { id: 'about', title: '自己紹介' },
  { id: 'principles', title: '考え方' },
  { id: 'how-i-work', title: '進め方' },
  { id: 'strengths', title: '強み' },
  { id: 'skills', title: 'テクニカルスキル' },
  { id: 'ai-tools-usage', title: '生成AI活用状況' },
  { id: 'projects', title: 'プロジェクト一覧' },
  { id: 'last', title: 'さいごに' },
];

export default function SlideNav() {
  return (
    <div className="sticky top-6 -ml-[24rem] z-50 max-lg:hidden">
      <div className="absolute left-4 w-[22rem] cursor-default">
        <div className="border border-slate-200 bg-white/95 text-slate-900">
          <div className="border-b border-slate-200 px-5 py-4">
            <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.32em] text-slate-400">
              <span>Outline</span>
              <span>TOC</span>
            </div>
            <h2 className="mt-3 text-base font-semibold tracking-tight text-slate-900">目次</h2>
          </div>

          <nav aria-label="ページ内ナビゲーション">
            <ol>
              {outlineLinks.map((item, index) => {
                const label = `${index + 1}`.padStart(2, '0');
                return (
                  <li key={item.id} className="border-b border-slate-100 last:border-b-0">
                    <button
                      type="button"
                      onClick={() => {
                        document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group grid w-full cursor-pointer grid-cols-[3rem_1fr] items-center px-5 py-3.5 text-left transition duration-200 hover:bg-slate-50 focus:outline-none focus-visible:bg-slate-50 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-slate-300"
                    >
                      <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-400 transition duration-200 group-hover:text-slate-600">
                        {label}
                      </span>
                      <span className="text-sm font-semibold leading-snug text-slate-700 transition duration-200 group-hover:text-slate-950">
                        {item.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="flex items-center justify-between border-t border-slate-200 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
            <span>Scroll</span>
            <span>Sections</span>
          </div>
        </div>
      </div>
    </div>
  );
}
