import type { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function IssuesSection({ project }: Props) {
  if (!project.issues || project.issues.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">課題背景</h3>
      <div className="mt-5 space-y-4">
        {project.issues.map((issue, index) => (
          <div key={index} className="border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-400">ISSUE {String(index + 1).padStart(2, '0')}</p>
            <h4 className="mt-2 text-lg font-semibold text-slate-900">{issue.title}</h4>
            <p className="mt-3 leading-7 text-slate-600">{issue.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
