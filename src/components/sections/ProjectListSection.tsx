import React from 'react';
import WorkCard from './WorkCard';
import WorkDetail from './WorkDetail';
import Button from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { ProjectData } from '../../data/works/types';
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
      {/* フィルタリングUI */}
      <div className="flex justify-center -mt-10 mb-12">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Button
              variant={sortOrder === 'chronological' ? 'primary' : 'secondary'}
              onClick={() => setSortOrder('chronological')}
              icon={<FontAwesomeIcon icon={faCalendarAlt} className="h-4 w-4" />}
              title="時系列順"
            >
              時系列順
            </Button>
            <Button
              variant={sortOrder === 'genre' ? 'primary' : 'secondary'}
              onClick={() => setSortOrder('genre')}
              icon={<FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />}
              title="ジャンル順"
            >
              ジャンル順
            </Button>
          </div>
        </div>
      </div>
      {/* プロジェクトセクション */}
      {sortOrder === 'genre' ? (
        FILTER_CONFIG.filter(config => config.type !== 'all').map(({ type, label }) => (
          <div key={type} className="mb-16 px-10">
            <h3 className="text-xl font-bold text-gray-800 mb-8">{label}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          </div>
        ))
      ) : (
        <div className="px-10">
          {Object.entries(
            filteredProjects.reduce((acc, [projectId, project]) => {
              const startYear = project.startDate.year;
              const endYear = project.endDate.year;
              const periodText = `${project.startDate.year}年${project.startDate.month}月 〜 ${project.endDate.year}年${project.endDate.month}月`;
              if (startYear !== endYear) {
                if (!acc[startYear]) {
                  acc[startYear] = [];
                }
                acc[startYear].push([projectId, project, 'start', periodText] as const);
              }
              if (!acc[endYear]) {
                acc[endYear] = [];
              }
              acc[endYear].push([projectId, project, 'end', periodText] as const);
              return acc;
            }, {} as { [key: number]: [string, ProjectData, 'start' | 'end', string][] })
          )
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, projects]) => {
              return (
                <div key={year} className="mb-16">
                  <h3 className="text-xl font-bold text-gray-800 mb-8 flex items-center gap-2">{year}年</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(([projectId, project, type]) => (
                      <div key={`${projectId}-${type}`}>
                        <WorkCard
                          project={project}
                          onClick={() => handleProjectClick(projectId)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {/* モーダル */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-white/50 bg-opacity-50 z-50 flex items-center justify-center p-0 md:p-4"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white shadow-lg rounded-none md:rounded-lg w-full h-full md:max-w-7xl md:max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="fixed top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-gray-700 z-50 bg-white rounded-full p-2 shadow-lg"
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