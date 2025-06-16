import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-medium-image-zoom/dist/styles.css';

interface SlideData {
  title: string;
  description?: string;
  images: string[];
  link?: string;
}

interface TimelineItem {
  period: string;
  phase: string;
  description: string;
  roles: string[];
  activities?: {
    category: string;
    description: string;
  }[];
  achievements?: string[];
  personalAchievements?: string[];
}

interface Challenge {
  title: string;
  description: string;
  solution: string;
}

interface TechStack {
  frontend: string[];
  backend: string[];
  infrastructure: string[];
  tools: string[];
}

interface Achievement {
  title: string;
  value: string;
  description: string;
}

interface Props {
  period: string;
  heading: string;
  description: string;
  roles: {
    overall: string[];
    details: {
      title: string;
      color: string;
      items: string[];
    }[];
  };
  slides: SlideData[];
  challenges?: Challenge[];
  techStack?: TechStack;
  achievements?: Achievement[];
  timeline?: TimelineItem[];
}

export default function WorkDetail({ period, heading, description, roles, slides, challenges, techStack, achievements, timeline }: Props) {
  return (
    <div className="px-10 md:px-20">
      <h2 className="mt-20 font-bold text-gray-600">
        <div className="text-[1rem]">{period}</div>
        <div className="text-[2rem]">{heading}</div>
        <span className="my-2 block w-full h-px bg-gray-300"></span>
      </h2>

      <p className="mt-5 text-gray-600 text-[1.2rem] text-justify whitespace-pre-wrap">{description}</p>

      <div className="mt-10">
        <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">役割</h3>
        
        {/* 全体の役割 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[1.2rem] text-gray-700 bg-gray-50 p-6 rounded-lg">
            {roles.overall.map((role, index) => (
              <div key={role} className="flex items-center">
                <span>{role}</span>
                {index < roles.overall.length - 1 && (
                  <span className="mx-2 text-gray-400">/</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 役割詳細 */}
        <div>
          <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-4">役割詳細</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.details.map((role) => (
              <div key={role.title} className="bg-gray-50 p-6 rounded-lg">
                <h5 className="font-semibold text-[1.1rem] flex items-center mb-4">
                  <span className={`inline-block mr-2 w-[1.1rem] h-[1.1rem] rounded-full ${role.color}`}></span>
                  {role.title}
                </h5>
                <ul className="space-y-3 list-disc text-[1rem] ml-6 [&>li::marker]:text-gray-400">
                  {role.items.map((item) => (
                    <li key={item} className="text-gray-600">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {challenges && challenges.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">課題背景</h3>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3">{challenge.title}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {achievements && achievements.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">成果</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <p className="text-[1.2rem] font-semibold text-gray-700">{achievement.title}</p>
                <p className="text-[2rem] font-bold text-gray-800 my-2">{achievement.value}</p>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {techStack && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">技術スタック</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(techStack).map(([category, technologies]) => (
              <div key={category} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3 capitalize">{category}</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {timeline && timeline.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">プロジェクトの歩み</h3>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12">
                  <div className="absolute left-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h4 className="text-[1.2rem] font-semibold text-gray-700">{item.phase}</h4>
                      <span className="text-gray-500 text-sm mt-1 md:mt-0">{item.period}</span>
                    </div>
                    <div className="mb-4">
                      <p className="text-gray-600 whitespace-pre-wrap">{item.description}</p>
                    </div>
                    {item.activities && item.activities.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-gray-700 font-bold mb-2">実施内容</h5>
                        {item.activities.map((activity, idx) => (
                          <div key={idx} className="mb-3">
                            <h6 className="text-gray-600 font-medium mb-1">{activity.category}</h6>
                            <div className="ml-4">
                              <p className="text-gray-600 text-sm">
                                {activity.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mb-4">
                      <h5 className="text-gray-700 font-bold mb-2">担当</h5>
                      <div className="flex flex-wrap gap-2">
                        {item.roles.map((role, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 text-sm">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                    {item.personalAchievements && item.personalAchievements.length > 0 && (
                      <div>
                        <h5 className="text-gray-700 font-bold mb-2">工夫したこと・成果</h5>
                        <ul className="space-y-2">
                          {item.personalAchievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-purple-500 mr-2">•</span>
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

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
          {slides.map((slide, index) => (
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
