import { useProtectedPage } from '../../hooks/useProtectedPage';
import AIToolsUsage from '../sections/AIToolsUsage';
import SlideNav from '../layout/SlideNav';
import FadeInSection from '../ui/animations/FadeInSection';
import MainVisual from '../sections/MainVisual';
import WorkDetail from '../sections/WorkDetail';
import { ProjectData } from '../../data/works/types';
import virtualBusinessCard from '../../data/works/virtualBusinessCard';
import culturalHeritage3D from '../../data/works/culturalHeritage3D';
import streamingManager from '../../data/works/streamingManager';
import miuraKamakura from '../../data/works/miuraKamakura';
import majikaruLove from '../../data/works/majikaruLove';
import fukuokaVsapo from '../../data/works/fukuokaVsapo';
import niceCamera from '../../data/works/niceCamera';
import aiKataS2p from '../../data/works/aiKataS2p';
import nijisanjiKuji from '../../data/works/nijisanjiKuji';
import youtubeScheduler from '../../data/works/youtubeScheduler';
import snackAR from '../../data/works/snackAR';
import TechnicalSkillMap from '../sections/TechnicalSkillMap';
import AboutSection from '../sections/AboutSection';
import { DividerTitle } from '../ui';
import StrengthsSection from '../sections/StrengthsSection';
import LastSection from '../sections/LastSection';
import ProjectListSection from '../sections/ProjectListSection';
import PrinciplesSection from '../sections/PrinciplesSection';

const projectData: { [key: string]: ProjectData } = {
  virtualBusinessCard: virtualBusinessCard,
  culturalHeritage3D: culturalHeritage3D,
  streamingManager: streamingManager,
  miuraKamakura: miuraKamakura,
  majikaruLove: majikaruLove,
  fukuokaVsapo: fukuokaVsapo,
  niceCamera: niceCamera,
  aiKataS2p: aiKataS2p,
  nijisanjiKuji: nijisanjiKuji,
  youtubeScheduler: youtubeScheduler,
  snackAR: snackAR,
};



export default function ProtectedPage() {
  const {
    filteredProjects,
    selectedProject,
    // setSelectedProject, // 未使用のため削除
    sortOrder,
    setSortOrder,
    handleProjectClick,
    handleCloseModal,
  } = useProtectedPage();
  // setSortOrder型対応
  const handleSortOrder = (order: string) => {
    if (order === 'chronological' || order === 'genre') {
      setSortOrder(order);
    }
  };
  return (
    <div className="relative bg-white text-slate-900">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sky-200/30 blur-3xl" />
        <div className="absolute top-[34rem] -left-32 h-[26rem] w-[26rem] rounded-full bg-teal-200/25 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-16rem] h-[36rem] w-[36rem] rounded-full bg-emerald-200/25 blur-3xl" />
        <div className="absolute top-[72rem] right-[35%] h-[22rem] w-[22rem] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute top-[110rem] left-[10%] h-[28rem] w-[28rem] rounded-full bg-amber-200/25 blur-3xl" />
        <div className="absolute top-[150rem] right-[8%] h-[24rem] w-[24rem] rounded-full bg-pink-200/25 blur-3xl" />
        <div className="absolute bottom-[-22rem] left-[30%] h-[30rem] w-[30rem] rounded-full bg-purple-200/25 blur-3xl" />
        <div className="absolute bottom-[18rem] right-[45%] h-[18rem] w-[18rem] rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="relative">
        <div className="max-w-screen-xl w-full mx-auto">
          {/* メインビジュアル */}
          <FadeInSection>
            <MainVisual />
          </FadeInSection>
        </div>

        <div className="relative max-w-screen-2xl w-full mx-auto lg:pl-[24rem] pb-1">

          <SlideNav />

          {/* 自己紹介 */}
          <FadeInSection>
            <AboutSection />
          </FadeInSection>

          {/* 考え方 */}
          <FadeInSection>
            <div id="principles">
              <DividerTitle>考え方</DividerTitle>
              <PrinciplesSection />
            </div>
          </FadeInSection>

          {/* 強み */}
          <FadeInSection>
            <div id="strengths">
              <DividerTitle>強み</DividerTitle>
              <StrengthsSection />
            </div>
          </FadeInSection>

          {/* テクニカルスキル */}
          <FadeInSection>
            <div id="skills">
              <DividerTitle>テクニカルスキル</DividerTitle>
              <TechnicalSkillMap />
            </div>
          </FadeInSection>

          {/* 生成AI活用状況：独立セクション */}
          <FadeInSection>
            <div id="ai-tools-usage">
              <DividerTitle>生成AI活用状況</DividerTitle>
              <AIToolsUsage />
            </div>
          </FadeInSection>

          <FadeInSection>
            <div id="projects">
              <DividerTitle>プロジェクト一覧</DividerTitle>
              <ProjectListSection
                filteredProjects={filteredProjects}
                sortOrder={sortOrder}
                setSortOrder={handleSortOrder}
                handleProjectClick={handleProjectClick}
                selectedProject={selectedProject}
                handleCloseModal={handleCloseModal}
                projectData={projectData}
              />
            </div>
          </FadeInSection>

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

          <FadeInSection>
            <LastSection />
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}
