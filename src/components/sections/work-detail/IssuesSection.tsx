import { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function IssuesSection({ project }: Props) {
  if (!project.issues || project.issues.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">課題背景</h3>
      <div className="space-y-6">
        {project.issues.map((issue, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3">{issue.title}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
