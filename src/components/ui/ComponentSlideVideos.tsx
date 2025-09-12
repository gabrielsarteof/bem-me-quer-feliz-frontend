'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const videos = [
  { id: 1, thumbnail: '/path/to/thumb1.jpg', title: 'Como funciona?' },
  { id: 2, thumbnail: '/path/to/thumb2.jpg', title: 'Nossos Projetos' },
  { id: 3, thumbnail: '/path/to/thumb3.jpg', title: 'Depoimentos' },
  { id: 4, thumbnail: '/path/to/thumb4.jpg', title: 'Equipe' },
  { id: 5, thumbnail: '/path/to/thumb5.jpg', title: 'Parceiros' },
];

const VideoCarousel = () => {
  return (
    <div
      className="relative flex items-center justify-center
    before:absolute before:top-1/2 before:left-1/2 
    before:-translate-x-1/2 before:-translate-y-1/2 
    before:-z-10 before:w-[400px] before:h-[200px] 
    before:bg-pink-500/30 before:rounded-full before:blur-[100px]
    before:content-['']"
    >
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={[EffectCoverflow]}
      >
        {videos.map(video => (
          <SwiperSlide key={video.id}>
            <Image fill src={video.thumbnail} alt={video.title} />
            <button>▶ {video.title}</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
