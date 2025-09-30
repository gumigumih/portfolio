import { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function AchievementsSection({ project }: Props) {
  if (!project.achievements || project.achievements.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-gray-600 mb-5">成果</h3>
      
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.achievements.map((achievement, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
              <p className="text-xl font-semibold text-gray-700">{achievement.title}</p>
              <p className="text-3xl font-bold text-gray-800 my-2">{achievement.value}</p>
              <p className="text-gray-600">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
