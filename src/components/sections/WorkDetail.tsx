import type { ProjectData } from '../../data/works/types';
import {
  ProjectHeader,
  IssuesSection,
  RolesSection,
  AchievementsSection,
  TechStackSection,
  TimelineSection,
  SlidesSection
} from './work-detail';

interface Props {
  project: ProjectData;
}

export default function WorkDetail({ project }: Props) {
  return (
    <article className="mx-auto max-w-5xl px-4 py-8 md:px-10 md:py-12">
      <ProjectHeader project={project} />
      <div className="mt-12 space-y-14">
        <IssuesSection project={project} />
        <RolesSection project={project} />
        <AchievementsSection project={project} />
        <TechStackSection project={project} />
        <TimelineSection project={project} />
        <SlidesSection project={project} />
      </div>
    </article>
  );
}
