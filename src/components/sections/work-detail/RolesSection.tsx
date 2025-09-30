import { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function RolesSection({ project }: Props) {
  if (!project.roles) {
    return null;
  }

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-gray-600 mb-5">自分の役割</h3>
      
      {/* 全体の役割 */}
      {'overall' in project.roles && project.roles.overall && project.roles.overall.length > 0 && (
        <div className="mb-6">
          <ul className="text-xl flex items-start gap-2 bg-gray-50 p-6 rounded-lg">
            {project.roles.overall.map((role, idx) => (
              <li key={idx} className="flex items-start">
                {idx > 0 && <span className="text-gray-500 mr-2">/</span>}
                <span className="text-gray-600">{role}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 詳細な役割 */}
      {('details' in project.roles && project.roles.details && project.roles.details.length > 0) || 
       (Array.isArray(project.roles) && project.roles.length > 0) ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(Array.isArray(project.roles) ? project.roles : project.roles.details!).map((role, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold text-gray-700 mb-3 flex items-center align-items-center">
                <span className={`inline-block w-5 h-5 rounded-full ${role.color} mr-2`}></span>
                {role.title}
              </h4>
              <ul className="space-y-2">
                {role.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="text-gray-500 mr-2">•</span>
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}
