import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-medium-image-zoom/dist/styles.css';

type SlideData = {
  title: string;
  description?: string;
  images: string[];
  link?: string;
};

type TimelineItem = {
  period: string;
  title: string;
  description: string;
  roles: string[];
  challenges?: {
    title: string;
    description: string;
    solution: string;
  }[];
  achievements: string[];
};

type Challenge = {
  title: string;
  description: string;
  solution: string;
};

type TechStack = {
  frontend: string[];
  backend: string[];
  infrastructure: string[];
  tools: string[];
};

type Achievement = {
  title: string;
  value: string;
  description: string;
};

type Props = {
  period: string;
  heading: string;
  description: string;
  roles: {
    title: string;
    color: string;
    items: string[];
  }[];
  slides: SlideData[];
  challenges?: Challenge[];
  techStack?: TechStack;
  achievements?: Achievement[];
  timeline?: TimelineItem[];
};

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((role, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-[1.2rem] flex items-center mb-4">
                <span className={`inline-block mr-2 w-[1.2rem] h-[1.2rem] rounded-full ${role.color}`}></span>
                {role.title}
              </h4>
              <ul className="space-y-3 list-disc text-[1rem] ml-4">
                {role.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {challenges && challenges.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[1.5rem] font-bold text-gray-600 mb-5">課題と解決策</h3>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-[1.2rem] font-semibold text-gray-700 mb-3">{challenge.title}</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 font-medium mb-2">課題</p>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-2">解決策</p>
                    <p className="text-gray-600">{challenge.solution}</p>
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
                  {technologies.map((tech, index) => (
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
                      <h4 className="text-[1.2rem] font-semibold text-gray-700">{item.title}</h4>
                      <span className="text-gray-500 text-sm mt-1 md:mt-0">{item.period}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="mb-4">
                      <h5 className="text-gray-700 font-medium mb-2">役割</h5>
                      <ul className="space-y-2">
                        {item.roles.map((role, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            <span className="text-gray-600">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {item.challenges && item.challenges.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-gray-700 font-medium mb-2">課題と解決策</h5>
                        {item.challenges.map((challenge, idx) => (
                          <div key={idx} className="mb-3">
                            <h6 className="text-gray-600 font-medium mb-1">{challenge.title}</h6>
                            <div className="ml-4">
                              <p className="text-gray-600 text-sm mb-1">
                                <span className="font-medium">課題：</span>
                                {challenge.description}
                              </p>
                              <p className="text-gray-600 text-sm">
                                <span className="font-medium">解決策：</span>
                                {challenge.solution}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div>
                      <h5 className="text-gray-700 font-medium mb-2">成果</h5>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mt-10 bg-gray-100 rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="pt-10 pb-15 px-4 md:px-20 flex flex-col items-center">
            <p className="text-[1rem] mb-5">{slide.title}</p>
            <p className="text-[1rem] mb-5 text-justify text-gray-500">{slide.description ?? ""}</p>
            <div className={`flex gap-2 justify-center items-start w-full`}>
              {slide.images.map((img, i) => (
                <Zoom key={i}>
                  <img src={img} alt="" className="max-h-80 cursor-zoom-in" />
                </Zoom>
              ))}
            </div>
            {slide.link && (
              <a href={slide.link} target="_blank" rel="noreferrer" className="mt-4 text-blue-500 underline break-all">
                {slide.link}
              </a>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
