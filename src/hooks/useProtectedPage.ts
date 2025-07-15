import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ProjectData } from '../data/works/types';
import NiceCameraData from '../data/works/niceCamera';
import AiKataS2pData from '../data/works/aiKataS2p';
import MiuraKamakuraData from '../data/works/miuraKamakura';
import FukuokaVsapoData from '../data/works/fukuokaVsapo';
import MajikaruLoveData from '../data/works/majikaruLove';
import VirtualBusinessCardData from '../data/works/virtualBusinessCard';
import StreamingManagerData from '../data/works/streamingManager';
import CulturalHeritage3DData from '../data/works/culturalHeritage3D';
import NijisanjiKujiData from '../data/works/nijisanjiKuji';
import YoutubeSchedulerData from '../data/works/youtubeScheduler';
import SnackARData from '../data/works/snackAR';

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

type SortOrder = 'chronological' | 'genre';

export function useProtectedPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>('genre');
  const navigate = useNavigate();
  const location = useLocation();

  const filteredProjects = useMemo(() => {
    const projects = Object.entries(projectData);
    if (sortOrder === 'chronological') {
      return projects.sort((a, b) => {
        const dateA = new Date(a[1].endDate.year, a[1].endDate.month - 1);
        const dateB = new Date(b[1].endDate.year, b[1].endDate.month - 1);
        return dateB.getTime() - dateA.getTime();
      });
    } else {
      return projects.sort((a, b) => {
        const typeA = a[1].type;
        const typeB = b[1].type;
        if (typeA === typeB) {
          const dateA = new Date(a[1].endDate.year, a[1].endDate.month - 1);
          const dateB = new Date(b[1].endDate.year, b[1].endDate.month - 1);
          return dateB.getTime() - dateA.getTime();
        }
        return typeA.localeCompare(typeB);
      });
    }
  }, [sortOrder]);

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

  return {
    filteredProjects,
    selectedProject,
    setSelectedProject,
    sortOrder,
    setSortOrder,
    handleProjectClick,
    handleCloseModal,
    projectData,
  };
} 