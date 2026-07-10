import type { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function AchievementsSection({ project }: Props) {
  if (!project.achievements || project.achievements.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">成果</h3>
      
      <div className="mt-5">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {project.achievements.map((achievement, index) => (
            <div key={index} className="border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-slate-500">{achievement.title}</p>
              <p className="my-2 text-3xl font-bold text-slate-900">{achievement.value}</p>
              <p className="text-sm leading-6 text-slate-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
