import type { ProjectData } from '../../../data/works/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface Props {
  project: ProjectData;
}

export default function ProjectHeader({ project }: Props) {
  return (
    <>
      <h2 className="font-bold text-gray-600">
        <div className="text-base">
          {project.startDate.year}年{project.startDate.month}月〜{project.endDate.year}年{project.endDate.month}月
        </div>
        <div className="text-3xl">{project.heading}</div>
        <span className="my-2 block w-full h-px bg-gray-300"></span>
      </h2>

      <p className="mt-5 text-gray-600 text-xl text-justify whitespace-pre-wrap">
        {project.description}
      </p>

      {project.productUrl && (
        <div className="mt-6 text-center">
          <a 
            href={project.productUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="border-1 inline-flex cursor-pointer items-center rounded-lg border-blue-600 bg-white px-6 py-2 text-blue-600 transition-colors hover:bg-blue-50"
          >
            サイトへ
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
          </a>
        </div>
      )}
    </>
  );
}
