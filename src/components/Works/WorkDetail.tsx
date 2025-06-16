import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';
import { ProjectData } from './Data/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-medium-image-zoom/dist/styles.css';

interface Props {
  project: ProjectData;
}

const getCategoryStyle = (category: string) => {
  switch (category) {
    case '実装':
      return 'bg-teal-300 text-teal-900';
    case '戦略':
      return 'bg-pink-400 text-pink-900';
    case 'デザイン':
      return 'bg-yellow-300 text-yellow-900';
    case '運営':
      return 'bg-purple-300 text-purple-900';
    case 'チームマネジメント':
      return 'bg-blue-300 text-blue-900';
    default:
      return 'bg-gray-300 text-gray-900';
  }
};

const getCategoryLabel = (category: string) => {
  return category;
};

export default function WorkDetail({ project }: Props) {
  return (
    <div className="px-10 md:px-20">
      <h2 className="mt-20 font-bold text-gray-600">
        <div className="text-[1rem]">{project.period}</div>
        <div className="text-[2rem]">{project.heading}</div>
        <span className="my-2 block w-full h-px bg-gray-300"></span>
      </h2>

      <p className="mt-5 text-gray-600 text-[1.2rem] text-justify whitespace-pre-wrap">{project.description}</p>

      {/* 0. プロダクト概要 */}
      {project.overview && project.overview.product && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">プロダクト概要</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3">基本情報</h4>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-gray-600">プロダクト名</dt>
                    <dd className="text-gray-800 font-medium">{project.overview.product.name}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">タイプ</dt>
                    <dd className="text-gray-800 font-medium">{project.overview.product.type}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-600">ターゲット</dt>
                    <dd className="text-gray-800 font-medium">{project.overview.product.target}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3">主要機能</h4>
                <ul className="space-y-2 list-disc ml-6 [&>li::marker]:text-gray-400">
                  {project.overview.product.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 1. 課題背景 */}
      {project.challenges && project.challenges.issues && project.challenges.issues.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">課題背景</h3>
          <div className="space-y-6">
            {project.challenges.issues.map((issue, index) => (
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
          {project.roles.overall && project.roles.overall.length > 0 && (
            <div className="mb-8">
              <ul className="text-[1.2rem] flex items-start gap-2 bg-gray-50 p-6 rounded-lg">
                {project.roles.overall.map((role, idx) => (
                  <li key={idx} className="flex items-start">
                    {idx > 0 && <span className="text-gray-500">/</span>}
                    <span className="text-gray-600">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 詳細な役割 */}
          {project.roles.details && project.roles.details.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.roles.details.map((role, idx) => (
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
          )}
        </div>
      )}

      {/* 3. 解決アプローチ */}
      {project.challenges && project.challenges.solution && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">解決アプローチ</h3>
          
          {/* 解決アプローチの概要 */}
          <div className="mb-8">
            <p className="text-[1.2rem] text-gray-600 bg-gray-50 p-6 rounded-lg">{project.challenges.solution.overview}</p>
          </div>

          {/* 具体的なアプローチ */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.challenges.solution.approaches.map((approach) => (
              <div key={approach.title} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-4">{approach.title}</h4>
                <ul className="space-y-3 list-disc text-[1rem] ml-6 [&>li::marker]:text-gray-400">
                  {approach.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
            <div className="flex flex-wrap gap-4">
              {Object.entries(project.techStack).map(([category, technologies]) => (
                <div key={category} className="flex-1 min-w-[200px]">
                  <h4 className="text-[1rem] font-semibold text-gray-700 mb-2 capitalize">{category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-2 py-0.5 bg-gray-200 rounded text-gray-700 text-sm">
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

      {/* 7. プロジェクトの歩み */}
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

      {/* 6. 具体的な制作物 */}
      <div className="mt-10">
        <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">具体的な制作物</h3>
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
                        <img src={img} alt="" className="max-h-[500px] w-auto object-contain cursor-zoom-in rounded-lg shadow-md" />
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
                      className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      サイトを見る
                    </a>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
