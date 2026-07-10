import type { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function RolesSection({ project }: Props) {
  if (!project.roles) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">自分の役割</h3>
      
      {/* カードにも表示する主要な役割の要約 */}
      {'overall' in project.roles && project.roles.overall && project.roles.overall.length > 0 && (
        <div className="mt-5">
          <ul className="flex flex-wrap gap-2">
            {project.roles.overall.map((role, idx) => (
              <li key={idx}>
                <span className="inline-flex border border-slate-300 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700">
                  {role}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 具体的に担当した内容 */}
      {('details' in project.roles && project.roles.details && project.roles.details.length > 0) || 
       (Array.isArray(project.roles) && project.roles.length > 0) ? (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {(Array.isArray(project.roles) ? project.roles : project.roles.details!).map((role, idx) => (
            <div key={idx} className="border border-slate-200 bg-white p-5">
              <h4 className="mb-4 flex items-center text-lg font-semibold text-slate-900">
                <span className={`mr-3 inline-block h-3 w-3 ${role.color}`}></span>
                {role.title}
              </h4>
              <ul className="space-y-2.5">
                {role.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 shrink-0 bg-slate-300"></span>
                    <span className="leading-7 text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
