export default function PrinciplesSection() {
  return (
    <section className="px-6 md:px-10 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Principles</span>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            私の考える「良い進め方」
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            技術PMとしての意思決定・優先順位付けの拠り所にしている3つの観点です。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="border border-slate-200 bg-white p-5">
            <div className="mb-5 flex h-9 w-9 items-center justify-center bg-slate-900 text-sm font-semibold text-white">
              01
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
                良い要件
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              誰が、何のために、どこまで作るのかが判断できること。目的・制約・優先順位がチームで共有されていること。
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5">
            <div className="mb-5 flex h-9 w-9 items-center justify-center bg-slate-900 text-sm font-semibold text-white">
              02
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
                良い設計
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              責務・状態・データの置き場所が説明できること。個別修正ではなく、継続的に改善できる構造であること。
            </p>
          </div>

          <div className="border border-slate-200 bg-white p-5">
            <div className="mb-5 flex h-9 w-9 items-center justify-center bg-slate-900 text-sm font-semibold text-white">
              03
            </div>
            <h4 className="text-lg font-semibold text-slate-900">
                良いレビュー
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              指摘で終わらず、次の判断と実装が明確になること。品質・スケジュール・リスクのバランスを見ながら前に進めること。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
