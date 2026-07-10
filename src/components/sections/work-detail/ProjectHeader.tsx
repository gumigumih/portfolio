import type { ProjectData } from '../../../data/works/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { formatProjectPeriod } from '../../../utils/dateUtils';

interface Props {
  project: ProjectData;
}

export default function ProjectHeader({ project }: Props) {
  return (
    <header>
      <div className="inline-flex border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
        {formatProjectPeriod(project.startDate, project.endDate, project.isOngoing)}
      </div>
      <h2 className="mt-5 text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
        {project.heading}
      </h2>
      <p className="mt-3 text-lg font-semibold leading-relaxed text-slate-600 md:text-xl">
        {project.lead}
      </p>

      <p className="mt-6 max-w-4xl whitespace-pre-wrap text-base leading-8 text-slate-700 md:text-lg">
        {project.description}
      </p>

      {project.productUrl && (
        <div className="mt-7">
          <a 
            href={project.productUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex cursor-pointer items-center border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-500 hover:bg-slate-50"
          >
            サイトへ
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
          </a>
        </div>
      )}
    </header>
  );
}
