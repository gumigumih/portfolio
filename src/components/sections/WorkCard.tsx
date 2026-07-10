import type { ProjectData } from '../../data/works/types';
import ProjectTypeBadge from '../ui/ProjectTypeBadge';
import AchievementCard from '../ui/AchievementCard';
import { formatProjectPeriod } from '../../utils/dateUtils';
import { imageSrc } from '../../utils/imageSrc';

interface WorkCardProps {
  project: ProjectData;
  onClick: () => void;
}

const getRoleTags = (project: ProjectData) => {
  if (!project.roles) {
    return [];
  }

  if (Array.isArray(project.roles)) {
    return project.roles.map((role) => role.title).slice(0, 3);
  }

  if (project.roles.overall?.length) {
    return project.roles.overall.slice(0, 3);
  }

  return project.roles.details?.map((role) => role.title).slice(0, 3) ?? [];
};

const WorkCard = ({ project, onClick }: WorkCardProps) => {
  const roleTags = getRoleTags(project);

  return (
    <button
      type="button"
      onClick={onClick}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden border border-slate-200 bg-white text-left transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
    >
      <div className="relative h-44 w-full overflow-hidden border-b border-slate-200">
        <img
          src={imageSrc(project.coverImage)}
          alt={project.heading}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <ProjectTypeBadge type={project.type} />
      </div>
      <div className="flex flex-grow flex-col p-5">
        <h3 className="text-xl font-semibold leading-snug text-slate-900">{project.heading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.lead}</p>
        {roleTags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {roleTags.map((role) => (
              <span key={role} className="border border-slate-200 bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-600">
                {role}
              </span>
            ))}
          </div>
        )}
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
          {formatProjectPeriod(project.startDate, project.endDate, project.isOngoing)}
        </p>
        {project.achievements && project.achievements.length > 0 && (
          <div className="mt-5 grid grid-cols-1 gap-3">
            {project.achievements.slice(0, 3).map((achievement, index) => (
              <AchievementCard key={index} achievement={achievement} />
            ))}
          </div>
        )}
      </div>
    </button>
  );
};

export default WorkCard; 
