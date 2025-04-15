import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Zoom from 'react-medium-image-zoom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-medium-image-zoom/dist/styles.css';

type SlideData = {
  title: string;
  images: string[];
  link?: string;
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
};

export default function WorkSection({ period, heading, description, roles, slides }: Props) {
  return (
    <div className="px-10 md:px-20">
      <h2 className="mt-20 font-bold text-gray-600">
        <div className="text-[1rem]">{period}</div>
        <div className="text-[2rem]">{heading}</div>
        <span className="my-2 block w-full h-px bg-gray-300"></span>
      </h2>

      <p className="mt-5 text-gray-600 text-[1.2rem] text-justify whitespace-pre-wrap">{description}</p>

      <div className="mt-6 flex flex-wrap gap-4">
        {roles.map((role, i) => (
          <div key={i} className="flex-1 min-w-[250px]">
            <h4 className="font-semibold text-[1.2rem] flex items-center">
              <span className={`inline-block mr-2 w-[1.2rem] h-[1.2rem] rounded-full`} style={{ backgroundColor: role.color }}></span>
              {role.title}
            </h4>
            <ul className="mt-3 ml-10 space-y-[1rem] list-disc text-[1rem]">
              {role.items.map((item, idx) => (
                <li key={idx} className="marker:text-gray-300">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="mt-10 bg-gray-100 rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="py-10 px-4 md:px-20 flex flex-col items-center">
            <p className="text-[1rem] mb-5">{slide.title}</p>
            <p className="text-[1rem] mb-5 text-justify text-gray-500">{slide.description ?? ""}</p>
            <div className={`flex gap-2 justify-center items-start w-full`}>
              {slide.images.map((img, i) => (
                <Zoom key={i}>
                  <img src={img} alt="" className="w-full h-80 object-contain cursor-zoom-in" />
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
