import { ProjectData, CategoryType } from '../../../data/works/types';

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
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-gray-600 mb-5">プロジェクトの歩み</h3>
      <div className="space-y-8">
        {project.timeline.map((phase, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-xl font-semibold text-gray-700">{phase.title}</h4>
              <span className="text-sm text-gray-500">{phase.period}</span>
            </div>
            <p className="text-gray-600 mb-6">{phase.description}</p>
            <div className="space-y-3">
              <h5 className="text-base font-semibold text-gray-700 mb-3">私の取り組み</h5>
              {phase.achievements.map((achievement, i) => (
                <div key={i} className="flex items-start">
                  <span className={`inline-block px-2 py-1 text-xs font-bold rounded-full mr-3 ${getCategoryStyle(achievement.category)}`}>
                    {getCategoryLabel(achievement.category)}
                  </span>
                  <span className="text-gray-800">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
