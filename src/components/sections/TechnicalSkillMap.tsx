
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { skills, subCategoryIcons } from '../../data/skills'; // SkillGroup, Skill などの型インポートは不要になる場合があります
import { SkillLevel } from '../ui';

export default function SkillMap() {
  return (
    <section className="px-6 md:px-10 py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Technical Skills</span>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            実装・設計・運用を横断する技術スタック
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            技術PMとして判断材料を揃えるために、実装・設計・分析・運用まで手を動かして理解しています。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {skills.map(({ title, skills: skillGroups, icon }, index) => (
            <section key={title} className="flex h-full flex-col border border-slate-200 bg-white p-5">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Skill {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold text-slate-900">{title}</h3>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-200 bg-slate-50 text-slate-700">
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </span>
              </div>

              <div className="space-y-6">
                {skillGroups.map((group, gidx) => (
                  <div key={gidx} className="space-y-2">
                    <div className="mb-3 flex items-center gap-3 border-b border-slate-100 pb-2">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                        {subCategoryIcons[group.title] && (
                          <FontAwesomeIcon icon={subCategoryIcons[group.title]} className="h-4 w-4 text-slate-500" />
                        )}
                        {group.title}
                      </span>
                    </div>
                    {group.items.map((item, sidx) => (
                      <div key={sidx} className="flex items-center justify-between gap-4">
                        <span className="text-sm leading-relaxed text-slate-600 whitespace-pre-line">
                          {item.title}
                        </span>
                        <SkillLevel level={item.level} color="bg-slate-900" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
