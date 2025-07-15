import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';
import { ProjectData, CategoryType } from '../../data/works/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-medium-image-zoom/dist/styles.css';

interface Props {
  project: ProjectData;
}

const CATEGORY_STYLES: Record<CategoryType, string> = {
  'プロダクト戦略': 'bg-pink-200 text-pink-800',
  'プロジェクト推進': 'bg-blue-200 text-blue-800',
  '技術開発': 'bg-teal-200 text-teal-800',
  'デザイン・制作': 'bg-yellow-200 text-yellow-800',
  '運用・改善': 'bg-purple-200 text-purple-800',
} as const;

const getCategoryStyle = (category: CategoryType) => {
  return CATEGORY_STYLES[category] || 'bg-gray-300 text-gray-900';
};

const getCategoryLabel = (category: CategoryType) => {
  return category;
};

export default function WorkDetail({ project }: Props) {
  return (
    <div className="p-10 md:p-20">
      <h2 className="font-bold text-gray-600">
        <div className="text-[1rem]">{project.startDate.year}年{project.startDate.month}月〜{project.endDate.year}年{project.endDate.month}月</div>
        <div className="text-[2rem]">{project.heading}</div>
        <span className="my-2 block w-full h-px bg-gray-300"></span>
      </h2>

      <p className="mt-5 text-gray-600 text-[1.2rem] text-justify whitespace-pre-wrap">{project.description}</p>

      {project.productUrl && (
        <div className="mt-6 text-center">
          <a 
            href={project.productUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center px-6 py-2 bg-white text-blue-600 border-1 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
          >
            サイトへ
            <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
          </a>
        </div>
      )}



      {/* 1. 課題背景 */}
      {project.issues && project.issues.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">課題背景</h3>
          <div className="space-y-6">
            {project.issues.map((issue, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3">{issue.title}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600">{issue.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. 自分の役割 */}
      {project.roles && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">自分の役割</h3>
          
          {/* 全体の役割 */}
          {'overall' in project.roles && project.roles.overall && project.roles.overall.length > 0 && (
            <div className="mb-6">
              <ul className="text-[1.2rem] flex items-start gap-2 bg-gray-50 p-6 rounded-lg">
                {project.roles.overall.map((role, idx) => (
                  <li key={idx} className="flex items-start">
                    {idx > 0 && <span className="text-gray-500 mr-2">/</span>}
                    <span className="text-gray-600">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 詳細な役割 */}
          {('details' in project.roles && project.roles.details && project.roles.details.length > 0) || 
           (Array.isArray(project.roles) && project.roles.length > 0) ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {(Array.isArray(project.roles) ? project.roles : project.roles.details!).map((role, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3 flex items-center align-items-center">
                    <span className={`inline-block w-5 h-5 rounded-full ${role.color} mr-2`}></span>
                    {role.title}
                  </h4>
                  <ul className="space-y-2">
                    {role.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start">
                        <span className="text-gray-500 mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      )}

      {/* 4. 成果 */}
      {project.achievements && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">成果</h3>
          
          {project.achievements && project.achievements.length > 0 && (
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.achievements.map((achievement, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                    <p className="text-[1.2rem] font-semibold text-gray-700">{achievement.title}</p>
                    <p className="text-[2rem] font-bold text-gray-800 my-2">{achievement.value}</p>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. 技術スタック */}
      {project.techStack && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">技術スタック</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-wrap gap-x-10 gap-y-4">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="w-auto max-w-full">
                  <h4 className="text-[1rem] font-semibold text-gray-700 mb-2 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-2 py-0.5 bg-gray-200 rounded text-gray-700 text-sm whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 6. プロジェクトの歩み */}
      {project.timeline && project.timeline.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">プロジェクトの歩み</h3>
          <div className="space-y-8">
            {project.timeline.map((phase, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-[1.2rem] font-semibold text-gray-700">{phase.title}</h4>
                  <span className="text-sm text-gray-500">{phase.period}</span>
                </div>
                <p className="text-gray-600 mb-6">{phase.description}</p>
                <div className="space-y-3">
                  <h5 className="text-[1rem] font-semibold text-gray-700 mb-3">私の取り組み</h5>
                  {phase.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start">
                      <span className={`inline-block px-2 py-1 text-xs font-bold rounded-full mr-3 ${getCategoryStyle(achievement.category)}`}>
                        {getCategoryLabel(achievement.category)}
                      </span>
                      <span className="text-gray-800">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. 成果物・実績 */}
      {project.slides && project.slides.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">成果物・実績</h3>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="bg-gray-50 rounded-lg"
          >
            {project.slides.map((slide, index) => (
            <SwiperSlide key={index} className="pt-10 pb-15 px-4 md:px-20">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-[1.5rem] font-bold text-gray-700 mb-4">{slide.title}</h3>
                <p className="text-[1.1rem] mb-8 text-justify text-gray-600 leading-relaxed">{slide.description ?? ""}</p>
                <div className={`grid ${slide.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
                  {slide.images.map((img, i) => (
                    <div key={i} className="flex justify-center">
                      <Zoom>
                        <img src={img} alt="" className="max-h-[500px] w-auto object-contain cursor-zoom-in rounded-lg shadow-lg" />
                      </Zoom>
                    </div>
                  ))}
                </div>
                {slide.link && (
                  <div className="mt-6 text-center">
                    <a 
                      href={slide.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      サイトを見る
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-2 text-sm" />
                    </a>
                  </div>
                )}
              </div>
            </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}
