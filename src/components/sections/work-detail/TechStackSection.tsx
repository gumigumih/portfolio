import { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function TechStackSection({ project }: Props) {
  if (!project.techStack) {
    return null;
  }

  return (
    <div className="mt-10">
      <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">技術スタック</h3>
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {Object.entries(project.techStack).map(([category, technologies]) => (
            <div key={category} className="w-auto max-w-full">
              <h4 className="text-[1rem] font-semibold text-gray-700 mb-2 capitalize">{category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech: string, index: number) => (
                  <span key={index} className="px-2 py-0.5 bg-gray-200 rounded text-gray-700 text-sm whitespace-nowrap">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
