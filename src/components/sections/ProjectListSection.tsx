import React from 'react';
import WorkCard from './WorkCard';
import WorkDetail from './WorkDetail';
import Button from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import type { ProjectData } from '../../data/works/types';
import { FILTER_CONFIG } from '../../constants/projectTypes';

interface ProjectListSectionProps {
  filteredProjects: [string, ProjectData][];
  sortOrder: string;
  setSortOrder: (order: string) => void;
  handleProjectClick: (projectId: string) => void;
  selectedProject: string | null;
  handleCloseModal: () => void;
  projectData: { [key: string]: ProjectData };
}

const ProjectListSection: React.FC<ProjectListSectionProps> = ({
  filteredProjects,
  sortOrder,
  setSortOrder,
  handleProjectClick,
  selectedProject,
  handleCloseModal,
  projectData,
}) => {
  return (
    <>
      <div className="px-6 md:px-10">
        <div className="mx-auto mb-10 flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">Case Studies</span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              案件領域ごとの代表プロジェクト
            </h3>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              一覧では経験した案件領域を整理し、カード内のタグと詳細ページで自分が担った役割・視点・判断を補足しています。
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={sortOrder === 'chronological' ? 'primary' : 'secondary'}
              onClick={() => setSortOrder('chronological')}
              icon={<FontAwesomeIcon icon={faCalendarAlt} className="h-4 w-4" />}
              title="時系列順"
              className="border border-slate-200 shadow-none"
            >
              時系列順
            </Button>
            <Button
              variant={sortOrder === 'domain' ? 'primary' : 'secondary'}
              onClick={() => setSortOrder('domain')}
              icon={<FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />}
              title="領域別"
              className="border border-slate-200 shadow-none"
            >
              領域別
            </Button>
          </div>
        </div>
      </div>
      {sortOrder === 'domain' ? (
        FILTER_CONFIG.filter(config => config.type !== 'all').map(({ type, label }) => (
          <section key={type} className="mx-auto mb-14 max-w-6xl px-6 md:px-10">
            <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-3">
              <h3 className="text-lg font-semibold text-slate-900">{label}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                {filteredProjects.filter(([, project]) => project.type === type).length} Cases
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects
                .filter(([, project]) => project.type === type)
                .map(([projectId, project]) => (
                  <WorkCard
                    key={projectId}
                    project={project}
                    onClick={() => handleProjectClick(projectId)}
                  />
                ))}
            </div>
          </section>
        ))
      ) : (
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          {Object.entries(
            filteredProjects.reduce((acc, [projectId, project]) => {
              const fiscalYear = project.endDate.month >= 4 ? project.endDate.year : project.endDate.year - 1;
              if (!acc[fiscalYear]) {
                acc[fiscalYear] = [];
              }
              acc[fiscalYear].push([projectId, project]);
              return acc;
            }, {} as { [key: number]: [string, ProjectData][] })
          )
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, projects]) => {
              return (
                <section key={year} className="mb-14">
                  <div className="mb-6 flex items-center gap-4 border-b border-slate-200 pb-3">
                    <h3 className="text-lg font-semibold text-slate-900">{year}年度</h3>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {projects.length} Entries
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map(([projectId, project]) => (
                      <div key={projectId}>
                        <WorkCard
                          project={project}
                          onClick={() => handleProjectClick(projectId)}
                        />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
        </div>
      )}
      {/* モーダル */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center bg-white/50 bg-opacity-50 p-0 md:p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="h-full w-full cursor-default overflow-y-auto rounded-none bg-white shadow-lg md:max-h-[90vh] md:max-w-7xl md:rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="fixed right-4 top-4 z-50 cursor-pointer rounded-full bg-white p-2 text-gray-500 shadow-lg hover:text-gray-700 md:right-6 md:top-6"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-4 md:p-6">
              <WorkDetail project={projectData[selectedProject]} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectListSection; 
