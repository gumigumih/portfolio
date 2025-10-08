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
                感情が届く導線と、チームが安心して動ける土台があること。<br />
                ユーザーの“体験”と、現場の“実現性”の両立が取れているもの。
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                良いUX
              </h4>
              <p className="mt-4 text-sm md:text-base text-slate-700">
                迷わず使えて、感情の流れを邪魔しないこと。<br />
                情報・動線・体験の設計が、自然に人の心を動かすこと。
              </p>
            </div>

            <div className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm">
              <h4 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true" />
                良いクリエイティブ
              </h4>
              <p className="mt-4 text-sm md:text-base text-slate-700">
                目的を的確に伝えながら、感情を引き出す表現であること。<br />
                世界観やトーンが整理され、体験の意図がぶれないこと。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
