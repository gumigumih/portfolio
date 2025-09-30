import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';
import { ProjectData } from '../../../data/works/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-medium-image-zoom/dist/styles.css';

interface Props {
  project: ProjectData;
}

export default function SlidesSection({ project }: Props) {
  if (!project.slides || project.slides.length === 0) {
    return null;
  }

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-gray-600 mb-5">成果物・実績</h3>
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
              <h3 className="text-2xl font-bold text-gray-700 mb-4">{slide.title}</h3>
              <p className="text-lg mb-8 text-justify text-gray-600 leading-relaxed">{slide.description ?? ""}</p>
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
  );
}
