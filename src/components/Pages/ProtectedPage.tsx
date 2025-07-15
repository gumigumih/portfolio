import { useProtectedPage } from '../../hooks/useProtectedPage';
import CrossBorderSkills from '../features/skills/CrossBorderSkills';
import AIToolsUsage from '../features/skills/AIToolsUsage';
import SlideNav from '../layout/SlideNav';
import HeartShape from '../ui/HeartShape';
import FadeInSection from '../ui/FadeInSection';
import MainVisual from '../ui/MainVisual';
import WorkCard from '../features/works/WorkCard';
import WorkDetail from '../features/works/WorkDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
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

// type SortOrder = 'chronological' | 'genre'; // 未使用のため削除

const FILTER_CONFIG = [
  { type: 'all' as const, label: 'すべて', color: 'bg-gray-800' },
  { type: 'product' as const, label: 'プロダクト開発・運営', color: 'bg-blue-500' },
  { type: 'tourism' as const, label: '観光・地域振興系', color: 'bg-green-500' },
  { type: 'avatar' as const, label: 'アバター活用支援', color: 'bg-purple-500' },
  { type: 'promotion' as const, label: '販促・その他', color: 'bg-orange-500' },
] as const;

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
  return (
    <div className="relative max-w-screen-2xl w-full mx-auto md:pl-[12rem]">
      <SlideNav />

      <FadeInSection>
        <MainVisual />
      </FadeInSection>

      <FadeInSection>
        <div id="career">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            キャリアについて
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <div className="relative bg-white shadow-lg rounded-[1rem] p-[3rem] max-w-4xl mx-auto my-20 
                  before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent_23%,#e5e7eb_24%,transparent_25%)] 
                  before:bg-[length:100%_2.5rem] before:z-0"
          >
            <div className="relative z-10">
              <p className="text-[1.2rem] leading-relaxed text-gray-700">
                WEBエンジニアとしてキャリアをスタートし、<br />
                デザイン技術も活かしてWEBエンジニア兼UIデザイナーとして活動してきました。<br />
                現在は受注開発でチーム制作を行い、ディレクター職としてプロジェクト全体をリードしています。<br />
                <br />
                また、自社プロダクトの企画・開発・運営経験もあり、<br />
                設計・開発からUIデザイン、展示会運営、法務対応、カスタマーサポートまで幅広く担当してきました。<br />
                改善施策の立案・実行から収益化まで一貫して携わり、<br />
                結果的に「フルサイクルエンジニア」と「PdM的立ち回り」を自然に行っており、<br />
                これはまさに今の時代に求められる「越境型人材」そのものです。<br />
                <br />
                特にプロダクトライフサイクル全体での価値提供と、<br />
                持続的なビジネスモデルの構築に深く関心を持っています。<br />
                <br />
                今後はよりプロダクト志向を強め、<br />
                持続的な価値創造にコミットする役割を目指しています。
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="skills">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            スキル・強み
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          
          {/* 越境型人材としてのスキルセット */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">越境型人材としてのスキルセット</h3>
            <CrossBorderSkills />
          </div>

          {/* 生成AI活用状況 */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-gray-800 mb-8 text-center">生成AI活用状況</h3>
            <AIToolsUsage />
          </div>

        </div>
      </FadeInSection>



      <FadeInSection>
        <div id="technicalSkills">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            テクニカルスキル
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          {/* TechnicalSkillMap component was removed from imports, so this section will be empty or require a new import */}
          {/* For now, keeping the structure but noting the missing import */}
          {/* <TechnicalSkillMap /> */}
        </div>
      </FadeInSection>





      <FadeInSection>
        <div id="projects">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            プロジェクト一覧
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          {/* フィルタリングUI */}
          <div className="flex justify-center -mt-10 mb-12">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setSortOrder('chronological')}
                  className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2
                    ${sortOrder === 'chronological'
                      ? 'bg-gray-700 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  title="時系列順"
                >
                  <FontAwesomeIcon icon={faCalendarAlt} className="h-4 w-4" />
                  時系列順
                </button>
                <button
                  onClick={() => setSortOrder('genre')}
                  className={`px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2
                    ${sortOrder === 'genre'
                      ? 'bg-gray-700 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                    }`}
                  title="ジャンル順"
                >
                  <FontAwesomeIcon icon={faLayerGroup} className="h-4 w-4" />
                  ジャンル順
                </button>
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
                  
                  // 開始年と終了年が異なる場合、両方の年に追加
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
              className="fixed top-4 right-4 md:top-6 md:right-6 text-gray-500 hover:text-gray-700 z-50 bg-white rounded-full p-2 shadow-md"
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
        <div id="last">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            さいごに
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>

          <div className="relative bg-white shadow-lg rounded-[1rem] p-[3rem] max-w-4xl mx-auto my-20 
                  before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(to_bottom,transparent_23%,#e5e7eb_24%,transparent_25%)] 
                  before:bg-[length:100%_2.5rem] before:z-0"
          >
            <div className="relative z-10">
              <div className="relative w-[100px] h-[100px] mx-auto mb-10 animate-pulse duration-700">
                <div className="absolute inset-0 blur-sm">
                  <HeartShape />
                </div>

                <HeartShape />
              </div>
              <p className="text-[1.2rem] leading-relaxed text-gray-700 text-center">
                最後までご覧いただき、ありがとうございました。<br />
                もしご興味を持っていただけましたら、ぜひお気軽にご連絡ください。
              </p>
              <p className="text-right text-[1.2rem] mt-[3rem] text-gray-700">
                <span className="block text-[1.4rem] text-pink-500 mb-1">和田 愛</span>
                <a
                  href="mailto:info@meggumi.com"
                  className="inline-flex items-center gap-2 text-pink-400 underline hover:text-pink-600 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-pink-400"
                  >
                    <path d="M12 12.713l11.985-8.713H.015L12 12.713zM12 14.999l-12-8.714V20h24V6.285L12 14.999z" />
                  </svg>
                  info@meggumi.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}

