import { useProtectedPage } from '../../hooks/useProtectedPage';
import CrossBorderSkills from '../sections/CrossBorderSkills';
import AIToolsUsage from '../sections/AIToolsUsage';
import ProductDevelopmentSection from '../sections/ProductDevelopmentSection';
import ProductStrategySection from '../sections/ProductStrategySection';
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
import CareerSection from '../sections/CareerSection';
import LastSection from '../sections/LastSection';
import ProjectListSection from '../sections/ProjectListSection';

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

const FILTER_CONFIG = [
  { type: 'all', label: 'すべて', color: 'bg-gray-800' },
  { type: 'product', label: 'プロダクト開発・運営', color: 'bg-blue-500' },
  { type: 'tourism', label: '観光・地域振興系', color: 'bg-green-500' },
  { type: 'avatar', label: 'アバター活用支援', color: 'bg-purple-500' },
  { type: 'promotion', label: '販促・その他', color: 'bg-orange-500' },
];

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
    <div className="relative max-w-screen-2xl w-full mx-auto md:pl-[12rem]">
      <SlideNav />

      <FadeInSection>
        <MainVisual />
      </FadeInSection>

      <FadeInSection>
        <CareerSection />
      </FadeInSection>

      <FadeInSection>
        <div id="skills">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            スキル・強み
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          
          {/* 越境型人材としてのスキルセット */}
          <div id="cross-border-skills" className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">越境型人材としてのスキルセット</h3>
            <CrossBorderSkills />
          </div>

          {/* プロダクト戦略・マネジメント */}
          <div id="product-strategy" className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">プロダクト戦略・マネジメント</h3>
            <ProductStrategySection />
          </div>

          {/* 統合プロダクト開発プロセス */}
          <div id="integrated-process" className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">統合プロダクト開発プロセス</h3>
            <ProductDevelopmentSection />
          </div>

          {/* テクニカルスキル */}
          <div id="technical-skills" className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">テクニカルスキル</h3>
            <TechnicalSkillMap />
          </div>

        </div>
      </FadeInSection>

      {/* 生成AI活用状況：独立セクション */}
      <FadeInSection>
        <div id="ai-tools-usage">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            生成AI活用状況
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          <AIToolsUsage />
        </div>
      </FadeInSection>


      <FadeInSection>
        <div id="projects">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            プロジェクト一覧
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <ProjectListSection
            filteredProjects={filteredProjects}
            sortOrder={sortOrder}
            setSortOrder={handleSortOrder}
            handleProjectClick={handleProjectClick}
            selectedProject={selectedProject}
            handleCloseModal={handleCloseModal}
            projectData={projectData}
            FILTER_CONFIG={FILTER_CONFIG}
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
  );
}

