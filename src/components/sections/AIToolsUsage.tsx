
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { aiUsageItems } from '../../data/aiTools';

export default function AIToolsUsage() {
  return (
    <section className="px-6 md:px-10 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">AI-assisted Work</span>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            生成AIの実務活用
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            生成AIは判断の代替ではなく、判断材料の整理・検証・ドキュメント整備・レビュー観点の補助として活用しています。
            最終的な技術判断や要件化は、自分で確認した内容をもとに行います。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {aiUsageItems.map((item, index) => (
            <section key={item.title} className="flex h-full flex-col border border-slate-200 bg-white p-5">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    AI {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-slate-700">
                  <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Purpose</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.purpose}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Examples</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.examples.map((example) => (
                      <span key={example} className="border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-medium text-slate-600">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-auto border-t border-slate-200 pt-4 text-sm font-semibold leading-relaxed text-slate-900">
                  {item.humanRole}
                </p>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
} 
