import type { ProjectData } from '../../../data/works/types';

interface Props {
  project: ProjectData;
}

export default function TechStackSection({ project }: Props) {
  if (!project.techStack) {
    return null;
  }

  return (
    <section className="border-t border-slate-200 pt-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">技術スタック</h3>
      <div className="mt-5 border border-slate-200 bg-white p-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {Object.entries(project.techStack).map(([category, technologies]) => (
            <div key={category}>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{category}</h4>
              <div className="flex flex-wrap gap-1.5">
                {technologies.map((tech: string, index: number) => (
                  <span key={index} className="whitespace-nowrap bg-slate-100 px-2 py-1 text-sm text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
