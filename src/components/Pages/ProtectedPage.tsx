import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { ProjectType } from '../../data/works/types';
import NiceCameraData from '../../data/works/niceCamera';
import AiKataS2pData from '../../data/works/aiKataS2p';
import MiuraKamakuraData from '../../data/works/miuraKamakura';
import FukuokaVsapoData from '../../data/works/fukuokaVsapo';
import MajikaruLoveData from '../../data/works/majikaruLove';
import VirtualBusinessCardData from '../../data/works/virtualBusinessCard';
import StreamingManagerData from '../../data/works/streamingManager';
import CulturalHeritage3DData from '../../data/works/culturalHeritage3D';
import NijisanjiKujiData from '../../data/works/nijisanjiKuji';
import YoutubeSchedulerData from '../../data/works/youtubeScheduler';
import SnackARData from '../../data/works/snackAR';
import imageMainvisual from '../../assets/images/mainvisual.png';
import SkillMatrix from '../Skills/SkillMatrix.tsx';
import ProductManagementSkills from '../Skills/ProductManagementSkills.tsx';
import TechnicalSkillMap from '../Skills/TechnicalSkillMap.tsx';
import SlideNav from '../Layout/SlideNav.tsx';
import HeartShape from '../UI/HeartShape.tsx';
import FadeInSection from '../UI/FadeInSection.tsx';
import WorkCard from '../Works/WorkCard.tsx';
import WorkDetail from '../Works/WorkDetail.tsx';

type ProjectData = {
  period: string;
  heading: string;
  description: string;
  endDate: {
    year: number;
    month: number;
  };
  roles: {
    title: string;
    color: string;
    items: string[];
  }[];
  slides: {
    title: string;
    description?: string;
    images: string[];
    link?: string;
  }[];
  challenges?: {
    title: string;
    description: string;
    solution: string;
  }[];
  techStack?: {
    frontend: string[];
    backend: string[];
    infrastructure: string[];
    tools: string[];
  };
  achievements?: {
    title: string;
    value: string;
    description: string;
  }[];
  timeline?: {
    period: string;
    title: string;
    description: string;
    achievements: string[];
  }[];
  coverImage?: string;
  type: string;
};

const projectData: { [key: string]: ProjectData } = {
  virtualBusinessCard: VirtualBusinessCardData,
  culturalHeritage3D: CulturalHeritage3DData,
  streamingManager: StreamingManagerData,
  miuraKamakura: MiuraKamakuraData,
  majikaruLove: MajikaruLoveData,
  fukuokaVsapo: FukuokaVsapoData,
  niceCamera: NiceCameraData,
  aiKataS2p: AiKataS2pData,
  nijisanjiKuji: NijisanjiKujiData,
  youtubeScheduler: YoutubeSchedulerData,
  snackAR: SnackARData,
};

type ProjectType = 'product' | 'tourism' | 'avatar' | 'promotion';

const FILTER_CONFIG = [
  { type: 'all' as const, label: 'すべて', color: 'bg-gray-800' },
  { type: 'product' as const, label: 'プロダクト開発・運営', color: 'bg-blue-500' },
  { type: 'tourism' as const, label: '観光・地域振興系', color: 'bg-green-500' },
  { type: 'avatar' as const, label: 'アバター活用支援', color: 'bg-purple-500' },
  { type: 'promotion' as const, label: '販促・その他', color: 'bg-orange-500' },
] as const;

export default function ProtectedPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<ProjectType | 'all'>('all');
  const navigate = useNavigate();
  const location = useLocation();

  const filteredProjects = useMemo(() => {
    if (selectedType === 'all') {
      return Object.entries(projectData).sort((a, b) => {
        const dateA = new Date(a[1].endDate.year, a[1].endDate.month - 1);
        const dateB = new Date(b[1].endDate.year, b[1].endDate.month - 1);
        return dateB.getTime() - dateA.getTime();
      });
    }

    return Object.entries(projectData)
      .filter(([_, project]) => project.type === selectedType)
      .sort((a, b) => {
        const dateA = new Date(a[1].endDate.year, a[1].endDate.month - 1);
        const dateB = new Date(b[1].endDate.year, b[1].endDate.month - 1);
        return dateB.getTime() - dateA.getTime();
      });
  }, [selectedType, projectData]);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    const searchParams = new URLSearchParams(location.search);
    navigate(`/projects/${projectId}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`, { replace: true });
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    const searchParams = new URLSearchParams(location.search);
    navigate(`/${searchParams.toString() ? `?${searchParams.toString()}` : ''}`, { replace: true });
  };

  // URLからプロジェクトIDを取得してモーダルを開く
  useEffect(() => {
    const pathParts = location.pathname.split('/');
    if (pathParts[1] === 'projects' && pathParts[2]) {
      const projectId = pathParts[2];
      if (projectData[projectId]) {
        setSelectedProject(projectId);
      }
    }
  }, [location]);

  return (
    <div className="relative max-w-screen-2xl w-full mx-auto md:pl-[12rem]">
      <SlideNav />

      <FadeInSection>
        <div
          id="top"
          className="w-full aspect-auto md:aspect-[16/9] flex flex-col md:flex-row justify-between items-center md:items-end relative"
        >
          {/* メインビジュアル */}
          <img
            src={imageMainvisual}
            alt="MainVisual"
            className="mt-20 md:mt-0 w-1/3 md:w-2/5 h-auto object-cover md:absolute md:left-0 md:bottom-0"
          />

          {/* テキストエリア */}
          <div className="md:absolute md:top-1/2 md:right-0 z-10 px-5 md:pr-[min(5vw,5rem)] font-[Montserrat] font-medium text-center md:text-right w-full md:w-auto">
            <h1 className="text-[min(8vw,4rem)] md:text-[min(6vw,6rem)]">MEGUMI WADA</h1>
            <p className="text-[min(3vw,1.5rem)] md:text-[min(2.5vw,2.5rem)] -mt-2 text-gray-600">(旧姓 HAYASHIBARA)</p>
            <p className="text-[min(5vw,2rem)] md:text-[min(4vw,4rem)]">Director</p>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="ability">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            強み
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          <SkillMatrix />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="productManagementSkills">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            プロダクトマネジメントスキル
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          <ProductManagementSkills />
        </div>
      </FadeInSection>

      <FadeInSection>
        <div id="technicalSkills">
          <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
            <span className="flex-grow h-px bg-gray-300"></span>
            テクニカルスキル
            <span className="flex-grow h-px bg-gray-300"></span>
          </h2>
          <TechnicalSkillMap />
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
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {FILTER_CONFIG.map(({ type, label, color }) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-[1rem] font-medium transition-colors
                  ${selectedType === type
                    ? `${color} text-white`
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
          
          {/* プロジェクトセクション */}
          {FILTER_CONFIG.filter(config => config.type !== 'all').map(({ type, label }) => (
            (selectedType === 'all' || selectedType === type) && (
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
            )
          ))}
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
        <h2 className="my-20 flex items-center gap-4 text-[1.5rem] font-bold text-gray-600 text-center">
          <span className="flex-grow h-px bg-gray-300"></span>
          さいごに
          <span className="flex-grow h-px bg-gray-300"></span>
        </h2>

        <div
          id="last"
          className="relative bg-white shadow-lg rounded-[1rem] p-[3rem] max-w-4xl mx-auto my-20 
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
            <p className="text-[1.2rem] leading-relaxed text-gray-700">
              私は、ToCとToBの両方の領域で、それぞれの特性を活かしたプロダクトマネジメントを目指しています。<br />
              ToCでは、ユーザーの心に響く価値提案と、明確な立ち位置の確立を通じて、<br />
              持続的な成長を実現するプロダクトづくりを大切にしています。<br />
              <br />
              ToBでは、顧客の課題やニーズを深く理解し、<br />
              ビジネスプロセスの改善と効率化を通じて、具体的な価値提供を実現します。<br />
              技術・デザイン・ビジネスの知見を活かし、<br />
              プロダクトの成功と組織の成長に貢献したいと考えています。<br />
              <br />
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
      </FadeInSection>
    </div>
  );
}

