import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { VennDiagram } from '../ui';
import { strengths } from '../../data/strengths';

const vennStrengths = {
  top: '技術理解',
  left: 'プロジェクト推進',
  right: 'ビジネス翻訳',
};

export default function StrengthsSection() {
  return (
    <>
      {/* ベン図 */}
      <div className="flex flex-col items-center justify-center gap-8">
        <VennDiagram
          className="mb-6 max-w-xl md:max-w-2xl"
          inside={{
            left: vennStrengths.left,
            right: vennStrengths.right,
            top: vennStrengths.top,
          }}
          circleColors={{
            left: 'border-2 border-slate-300 bg-transparent',
            right: 'border-2 border-slate-300 bg-transparent',
            top: 'border-2 border-slate-300 bg-transparent',
          }}
          textColors={{
            left: 'text-slate-700',
            right: 'text-slate-700',
            top: 'text-slate-700',
          }}
        />
        <div className="mx-auto w-full max-w-3xl border-y border-slate-200 py-6 text-center">
          <p className="text-sm font-semibold text-slate-500">だから</p>
          <p className="mt-3 text-2xl font-semibold leading-snug tracking-tight text-slate-900 md:text-3xl">
            任せて安心、プロジェクトを前に進めるPM
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            要件・技術・進行の視点をつなぎ、関係者が判断しやすい状態を作ります。
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-12 px-6 md:grid-cols-3 md:px-10">
        {strengths.map((strength, index) => (
          <section
            key={strength.id}
            id={strength.id}
            className="flex h-full flex-col border border-slate-200 bg-white p-5"
          >
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Strength {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{strength.title}</h3>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-slate-700">
                <FontAwesomeIcon icon={strength.icon} className="h-4 w-4" />
              </span>
            </div>

            <div className="flex-grow space-y-4 text-base leading-relaxed text-slate-600">
              {strength.content.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>

            <p className="mt-6 border-t border-slate-200 pt-4 text-sm font-semibold leading-relaxed text-slate-900">
              {strength.conclusion}
            </p>
          </section>
        ))}
      </div>
    </>
  );
}
