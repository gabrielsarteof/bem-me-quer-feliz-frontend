'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';
import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const videos = [
  {
    id: 1,
    thumbnail: '/assets/images/ui/esporte.svg',
    videoUrl: '/assets/videos/video1.mp4',
    title: 'Nossos Projetos',
  },
  {
    id: 2,
    thumbnail: '/assets/images/ui/oficinas.svg',
    videoUrl: '/assets/videos/video2.mp4',
    title: 'Junte-se a nós',
  },
  {
    id: 3,
    thumbnail: '/assets/images/ui/esporte.svg',
    videoUrl: '/assets/videos/video3.mp4',
    title: 'Aprendizado',
  },
  {
    id: 4,
    thumbnail: '/assets/images/ui/esporte.svg',
    videoUrl: '/assets/videos/video4.mp4',
    title: 'Nossos Impactos',
  },
  {
    id: 5,
    thumbnail: '/assets/images/ui/esporte.svg',
    videoUrl: '/assets/videos/video5.mp4',
    title: 'Depoimentos',
  },
];

const VideoCarousel = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div
      className="relative flex h-80 w-100 sm:w-200 items-center justify-center
    before:absolute before:left-1/2 before:top-1/2 
    before:-translate-x-1/3 before:-translate-y-1/2 
    before:-z-10 before:h-[200px] before:w-[300px] 
    before:rounded-full before:bg-pink-500/30 before:blur-[100px]
    before:content-['']"
    >
      <div className="absolute right-30 top-0 h-10 w-10">
        <Image
          src="/assets/images/ui/estrela2.svg"
          alt="Estrela decorativa"
          fill
          className="object-cover"
        />
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={60}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className="!w-full !py-10"
      >
        {videos.map(video => (
          <SwiperSlide key={video.id} className="!h-[200px] !w-[300px]">
            <div className="relative h-full w-full overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-400 hover:shadow-[inset_0px_-50px_36px_-28px_rgba(0,0,0,0.35)] ">
              <Image
                fill
                src={video.thumbnail}
                alt={video.title}
                className="object-cover"
              />

              <button
                onClick={() => setSelectedVideo(video.videoUrl)}
                className="absolute bottom-4 right-15 z-10 px-4 py-2 font-['Satoshi-Bold'] text-black bg-white/80 shadow-lg backdrop-blur-sm cursor-pointer rounded-full"
              >
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center p-1 w-10 h-10 bg-white/50 backdrop-blur rounded-full">
                    <Image
                      src="/assets/icons/svg/play.svg"
                      alt="Play"
                      width={16}
                      height={16}
                      className="inline-block"
                    />
                  </div>
                  {video.title}
                </div>
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 h-16 w-16">
        <Image
          src="/assets/images/ui/estrela1.svg"
          alt="Estrela decorativa"
          fill
          className="object-cover"
        />
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-3xl text-white cursor-pointer"
            >
              &times;
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full h-150"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCarousel;
