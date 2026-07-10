
import { DividerTitle } from '../ui';

export default function LastSection() {
  return (
    <section id="last" className="px-6 md:px-10">
      <DividerTitle>さいごに</DividerTitle>
      <div className="mx-auto max-w-6xl border border-slate-200 bg-white">
        <div className="grid gap-0 md:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-slate-200 p-8 md:border-b-0 md:border-r md:p-10">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
              Contact
            </span>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              ここまで読んでいただき、ありがとうございます。
            </h3>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              技術PM、プレイングテックリード、エンジニアの視点を行き来しながら、
              判断材料の整理から設計・実装・品質改善まで関わってきました。
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              ご興味を持っていただけましたら、下記よりお気軽にご連絡ください。
            </p>
          </div>

          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
                Profile
              </span>
              <p className="mt-5 text-2xl font-semibold text-slate-900">和田 愛</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                Technical PM / Playing Tech Lead
              </p>
            </div>

            <div className="mt-10 border-t border-slate-200 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                Email
              </p>
              <a
                href="mailto:info@meggumi.com"
                className="mt-3 inline-flex cursor-pointer items-center gap-3 text-base font-semibold text-slate-900 transition hover:text-slate-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                <span
                  className="flex h-9 w-9 items-center justify-center border border-slate-200 text-slate-500"
                  aria-hidden="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0-8.55 5.7a2.25 2.25 0 0 1-2.4 0l-8.55-5.7"
                    />
                  </svg>
                </span>
                info@meggumi.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
