export default function PrinciplesSection() {
  return (
    <section className="text-black">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-32">

        <div className="rounded-3xl border border-black/5 bg-white/80 p-8 backdrop-blur-sm shadow-md md:p-12">
          <span className="inline-flex items-center rounded-full border border-slate-200/80 bg-white/80 px-4 py-1 text-xs font-semibold tracking-[0.3em] uppercase text-slate-500">
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
              <h4 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                良いプロダクト
              </h4>
              <p className="mt-4 text-sm md:text-base text-slate-700">
                課題を的確に解決し、日常や業務に持続的な価値をもたらすこと
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                良いUX
              </h4>
              <p className="mt-4 text-sm md:text-base text-slate-700">
                迷わず目的にたどり着けて、そのプロセスで心地よく、価値を実感できること
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                良いクリエイティブ
              </h4>
              <p className="mt-4 text-sm md:text-base text-slate-700">
                目的や意図を的確に表現し、感情や行動をポジティブに動かすこと
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
