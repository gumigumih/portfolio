import { ProjectData } from '../../data/works/types';
import Card from '../ui/Card';
import ProjectTypeBadge from '../ui/ProjectTypeBadge';
import AchievementCard from '../ui/AchievementCard';
import { formatProjectPeriod } from '../../utils/dateUtils';

interface WorkCardProps {
  project: ProjectData;
  onClick: () => void;
}

const WorkCard = ({ project, onClick }: WorkCardProps) => {
  return (
    <Card onClick={onClick}>
      <div className="relative h-48">
        <img
          src={project.coverImage}
          alt={project.heading}
          className="w-full h-full object-cover"
        />
        <ProjectTypeBadge type={project.type} />
      </div>
      <div className="p-4">
        <h3 className="text-[1.2rem] font-bold mb-1">{project.heading}</h3>
        <p className="text-gray-600 text-[1.1rem] mb-2">{project.lead}</p>
        <p className="text-gray-500 text-[1rem] mb-2">
          {formatProjectPeriod(project.startDate, project.endDate)}
        </p>
        {project.achievements && project.achievements.length > 0 && (
          <div className="grid grid-cols-1 gap-3 mt-3">
            {project.achievements.slice(0, 4).map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default WorkCard; 