import { ProjectData } from './Data/types';

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

  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
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
        <p className="text-gray-500 text-[1rem]">{project.period}</p>
      </div>
    </div>
  );
};

export default WorkCard; 