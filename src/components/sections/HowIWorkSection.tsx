const roles = [
  {
    role: '技術PM',
    perspective: '判断材料を揃え、意思決定できる状態を作る',
    outputs: ['現状調査', '論点整理', 'リスク整理', 'WBS確認'],
    description: '事業側・PM・開発側が判断できるように、技術的な論点や選択肢を整理します。',
  },
  {
    role: 'プロジェクト推進',
    perspective: '方針を実行可能な要件や計画へ落とし込む',
    outputs: ['仕様整理', '優先順位', '課題管理', '進行調整'],
    description: '決まった方針を、関係者が動ける要件・タスク・レビュー観点へ変換します。',
  },
  {
    role: 'プレイングテックリード',
    perspective: '設計品質・実装品質を整える',
    outputs: ['設計レビュー', 'PRレビュー', '技術方針', '品質改善'],
    description: '設計や実装の妥当性を確認し、個別修正で終わらない改善方針をチームへ返します。',
  },
  {
    role: 'エンジニア',
    perspective: '自分で実装・検証し、判断の解像度を上げる',
    outputs: ['検証実装', '調査コード', '運用改善', '不具合調査'],
    description: 'レビューだけでは判断できない箇所は、自分で手を動かして検証し、設計と実装のギャップを埋めます。',
  },
];

const notes = [
  '一つの肩書きだけで動くのではなく、状況に応じて見るべきものを切り替える',
  '判断材料、方針、設計、実装、品質をつなぎ、開発が止まらない状態を作る',
  'PM・事業側・開発チームの間で、認識と次のアクションを揃える',
];

export default function HowIWorkSection() {
  return (
    <section className="px-6 md:px-10 py-8 md:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">How I Work</span>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            役割ごとに視点を切り替え、開発を前へ進める
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            私は一つの肩書きだけで仕事をしているわけではありません。プロジェクトの状況に応じて役割を切り替えながら、関係者が判断し、協力会社や開発チームが動ける状態を作ります。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {roles.map((item, index) => (
            <div key={item.role} className="border border-slate-200 bg-white p-5">
              <div className="mb-5 flex h-9 w-9 items-center justify-center bg-slate-900 text-sm font-semibold text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{item.role}</p>
              <h4 className="mt-3 text-lg font-semibold leading-snug text-slate-900">{item.perspective}</h4>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.outputs.map((output) => (
                  <span key={output} className="border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600">
                    {output}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-slate-200 bg-slate-50 p-6">
          <h4 className="text-lg font-semibold text-slate-900">役割を切り替える理由</h4>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {notes.map((note) => (
              <p key={note} className="border-l-2 border-slate-900 bg-white px-4 py-3 text-sm leading-relaxed text-slate-700">
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
