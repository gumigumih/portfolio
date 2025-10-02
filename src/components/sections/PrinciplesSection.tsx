export default function PrinciplesSection() {
  return (
    <section className="text-black">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-32">

        {/* フレーム：課題解決×価値共創 */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/40 bg-gradient-to-br from-slate-200 via-slate-100 to-white p-8 md:p-12 text-slate-900 shadow-md">
          <div className="absolute inset-0 opacity-45" aria-hidden="true">
            <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-sky-100/60 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-emerald-100/55 blur-3xl" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-slate-500">
              FRAME
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              課題解決×価値共創
            </h2>
            <p className="mt-5 text-base md:text-lg text-slate-700">
              プロジェクトを推進する上で大切にしているのは、課題解決と価値共創の両立です。二つの軸を行き来しながら意思決定することで、事業成果とユーザー価値を同時に最大化してきました。
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/60 bg-white/75 p-6 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                  課題解決
                </div>
                <p className="mt-4 text-sm md:text-base text-slate-700">
                  ユーザーや事業の直面する問題を的確に整理し、最適な優先順位で解決すること。
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300/70" aria-hidden="true" />
                    課題を構造化し、インパクトと実現性で優先度を設計。
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300/70" aria-hidden="true" />
                    事業成果につながる解決策を選び抜き、着実に実装。
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/60 bg-white/75 p-6 shadow-inner">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-slate-500">
                  <span className="h-2 w-2 rounded-full bg-sky-400" aria-hidden="true" />
                  価値共創
                </div>
                <p className="mt-4 text-sm md:text-base text-slate-700">
                  ユーザーとともに体験を育て、感情的価値や新しい楽しさを広げること。
                </p>
                <ul className="mt-4 space-y-2 text-sm md:text-base text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-300/70" aria-hidden="true" />
                    定性的な声を拾い、共創の余白を設計して磨き込む。
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-300/70" aria-hidden="true" />
                    感情的価値を高め、体験全体の楽しさを波及させる。
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <div className="rounded-2xl border border-white/70 bg-white/70 p-6 text-sm md:text-base text-slate-700">
                <p className="font-semibold text-slate-800">課題解決</p>
                <p className="mt-2 leading-relaxed">
                  課題を構造化し、優先度を設計。解決策を実装して成果まで導くプロセスを高速に回します。
                </p>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="relative flex min-h-[9rem] min-w-[9rem] items-center justify-center rounded-full border border-slate-200/70 bg-amber-100/90 px-8 py-8 text-center shadow-lg">
                  <span className="flex flex-col items-center gap-1 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                    <span className="text-sm font-semibold text-slate-900 tracking-tight">成果が出る</span>
                    <span className="text-[11px] text-slate-400">×</span>
                    <span className="text-sm font-semibold text-slate-900 tracking-tight">長く愛される</span>
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/70 p-6 text-sm md:text-base text-slate-700">
                <p className="font-semibold text-slate-800">価値共創</p>
×                <p className="mt-2 leading-relaxed">
                  ユーザーと共感を育みながら、感情的価値と楽しさの広がりを共創し、体験の愛着を高めます。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-black/5 bg-white/80 p-8 backdrop-blur-sm shadow-md md:p-12">
          <span className="inline-flex items-center rounded-full bg-black/5 px-4 py-1 text-xs font-semibold tracking-[0.35em] uppercase text-black/60">
            PRINCIPLES
          </span>
          <h3 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-black">
            私の考える「良い◯◯」
          </h3>
          <p className="mt-5 text-base md:text-lg text-black/80">
            PMとしての意思決定・優先順位付けの拠り所にしている3つの「良い◯◯」です。
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 leading-relaxed md:grid-cols-3 md:gap-12">
            <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <h4 className="text-xl md:text-2xl font-semibold">良いプロダクト</h4>
              <p className="mt-3 text-base md:text-lg text-black/80">
                ユーザー（個人／組織）の課題を最小の形で解決し、施策の成果につなげること。
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <h4 className="text-xl md:text-2xl font-semibold">良いUX</h4>
              <p className="mt-3 text-base md:text-lg text-black/80">
                ユーザーが迷わず最短で目的を達成し、そのプロセスで成果を実感できること。
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <h4 className="text-xl md:text-2xl font-semibold">良いクリエイティブ</h4>
              <p className="mt-3 text-base md:text-lg text-black/80">
                目的・目標・意図を的確に表現し、達成へ導く品質を備えていること。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
