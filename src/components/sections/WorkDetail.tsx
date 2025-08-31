import { ProjectData } from '../../data/works/types';
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
    <div className="p-10 md:p-20">
      <ProjectHeader project={project} />
      <IssuesSection project={project} />
      <RolesSection project={project} />
      <AchievementsSection project={project} />
      <TechStackSection project={project} />
      <TimelineSection project={project} />
      <SlidesSection project={project} />
    </div>
  );
}
