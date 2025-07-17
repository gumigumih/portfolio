import { ProjectData } from '../../data/works/types';

interface WorkCardProps {
  project: ProjectData;
  onClick: () => void;
}

const WorkCard = ({ project, onClick }: WorkCardProps) => {
  const typeLabels: { [key: string]: string } = {
    product: 'プロダクト開発・運営',
    tourism: '観光・地域振興系',
    avatar: 'アバター活用支援',
    promotion: '販促・その他'
  };

  const typeColors: { [key: string]: string } = {
    product: 'bg-blue-500',
    tourism: 'bg-green-500',
    avatar: 'bg-purple-500',
    promotion: 'bg-orange-500'
  };

  const formatPeriod = () => {
    return `${project.startDate.year}年${project.startDate.month}月 〜 ${project.endDate.year}年${project.endDate.month}月`;
  };

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
      onClick={onClick}
    >
      <div className="relative h-48">
        <img
          src={project.coverImage}
          alt={project.heading}
          className="w-full h-full object-cover"
        />
        <div className={`absolute top-2 right-2 px-2 py-1 rounded text-white text-[1.05rem] ${typeColors[project.type]}`}>
          {typeLabels[project.type]}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-[1.2rem] font-bold mb-1">{project.heading}</h3>
        <p className="text-gray-600 text-[1.1rem] mb-2">{project.lead}</p>
        <p className="text-gray-500 text-[1rem] mb-2">{formatPeriod()}</p>
        {project.achievements && project.achievements.length > 0 && (
          <div className="grid grid-cols-1 gap-3 mt-3">
            {project.achievements.slice(0, 4).map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-200 p-4 flex flex-col items-center hover:scale-[1.03] transition-transform duration-200"
              >
                <div className="text-gray-700 font-semibold text-[1rem] mb-1 text-center">
                  {achievement.title}
                </div>
                <div className="text-[1.3rem] font-extrabold text-gray-800 mb-1 leading-none">
                  {achievement.value}
                </div>
                <div className="text-gray-600 text-[0.95rem] text-center whitespace-pre-line">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkCard; 