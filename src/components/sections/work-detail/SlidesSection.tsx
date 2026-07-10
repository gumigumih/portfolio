import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';
import type { ProjectData } from '../../../data/works/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { imageSrc } from '../../../utils/imageSrc';

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
    <section className="border-t border-slate-200 pt-8">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">成果物・実績</h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mt-5 border border-slate-200 bg-white"
      >
        {project.slides.map((slide, index) => (
          <SwiperSlide key={index} className="px-4 pb-14 pt-8 md:px-16 md:pt-10">
            <div className="max-w-4xl mx-auto">
              <h3 className="mb-3 text-2xl font-bold text-slate-900">{slide.title}</h3>
              <p className="mb-8 leading-8 text-slate-600">{slide.description ?? ""}</p>
              <div className={`grid ${slide.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-6`}>
                {slide.images.map((img, i) => (
                  <div key={i} className="flex justify-center">
                    <Zoom>
                      <img src={imageSrc(img)} alt="" className="max-h-[500px] w-auto cursor-zoom-in border border-slate-200 object-contain" />
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
                    className="inline-flex cursor-pointer items-center bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
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
    </section>
  );
}
