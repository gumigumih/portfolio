import type { ProjectData, CategoryType } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

const CATEGORY_STYLES: Record<CategoryType, string> = {
  'プロダクト戦略': 'bg-pink-200 text-pink-800',
  'プロジェクト推進': 'bg-blue-200 text-blue-800',
  '技術開発': 'bg-teal-200 text-teal-800',
  'デザイン・制作': 'bg-yellow-200 text-yellow-800',
  '運用・改善': 'bg-purple-200 text-purple-800',
} as const;

const getCategoryStyle = (category: CategoryType) => {
  return CATEGORY_STYLES[category] || 'bg-gray-300 text-gray-900';
};

const getCategoryLabel = (category: CategoryType) => {
  return category;
};

export default function TimelineSection({ project }: Props) {
  if (!project.timeline || project.timeline.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">プロジェクトの歩み</h3>
      <div className="mt-6 space-y-5">
        {project.timeline.map((phase, index) => (
          <div key={index} className="border-l-2 border-slate-300 pl-5">
            <div className="border border-slate-200 bg-white p-5">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <h4 className="text-lg font-semibold text-slate-900">{phase.title}</h4>
                <span className="shrink-0 text-sm font-semibold text-slate-500">{phase.period}</span>
              </div>
              <p className="mt-3 leading-7 text-slate-600">{phase.description}</p>
              <div className="mt-5 space-y-3">
                <h5 className="text-sm font-semibold text-slate-900">私の取り組み</h5>
                {phase.achievements.map((achievement, i) => (
                  <div key={i} className="flex flex-col gap-2 sm:flex-row sm:items-start">
                    <span className={`inline-flex w-fit px-2 py-1 text-xs font-bold ${getCategoryStyle(achievement.category)}`}>
                      {getCategoryLabel(achievement.category)}
                    </span>
                    <span className="leading-7 text-slate-700">{achievement.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
