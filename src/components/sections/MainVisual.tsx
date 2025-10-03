import imageMainvisual from '../../assets/images/mainvisual.png';

export default function MainVisual() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden text-slate-900"
    >
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-6 py-24 md:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="order-2 flex justify-center lg:order-1">
            <div className="relative w-full max-w-[26rem]">
              <div className="absolute -inset-6 rounded-[2.5rem] border border-slate-200/60 bg-white/70 backdrop-blur-md shadow-[0_25px_55px_-20px_rgba(15,23,42,0.45)]" aria-hidden="true" />
              <img
                src={imageMainvisual}
                alt="MainVisual"
                className="relative rounded-[2rem] border border-white shadow-xl"
              />
              <div className="absolute -bottom-10 left-1/2 flex w-[85%] -translate-x-1/2 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-[11px] font-semibold leading-tight text-white">
                  PL
                  <br />
                  UX
                </div>
                <div>
                  <p className="text-xs font-semibold tracking-[0.35em] text-slate-400">フォーカス</p>
                  <p className="text-sm font-medium text-slate-700">課題解決 × 価値共創の設計</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 space-y-6 font-[Montserrat] lg:order-2 lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
              プロジェクトデザイン／UXリード
            </span>
            <h1 className="text-5xl font-semibold tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Megumi Wada
            </h1>
            <div className="grid gap-3 sm:inline-grid sm:grid-flow-col sm:auto-cols-fr">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                プロジェクトを見る
              </a>
              <a
                href="#last"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white/80"
              >
                コンタクト
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
              <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1">プロダクト戦略</span>
              <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1">UI設計</span>
              <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1">Webエンジニアリング</span>
              <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1">クリエイティブディレクション</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
