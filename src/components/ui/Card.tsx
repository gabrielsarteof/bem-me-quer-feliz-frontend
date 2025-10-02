'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  imageSrc: string;
  text_esq?: string;
  text_dir?: string;
  title?: string;
  desc?: string;
  arrow?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const sizeCard = {
  sm: 'w-[250px] h-[350px]',
  md: 'w-[320px] h-[450px]',
  lg: 'w-[380px] h-[500px]',
};

export function Card({
  imageSrc,
  text_esq,
  text_dir,
  title,
  desc,
  arrow,
  size = 'md',
}: CardProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl border-[3px] font-satoshi border-white ${sizeCard[size]}`}
    >
      {/* Imagem */}
      <Image
        src={imageSrc}
        alt={title ?? 'Imagem do card'}
        fill
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div
        className="absolute bottom-2 left-2 right-2 p-4 rounded-lg flex justify-between items-end"
        style={{
          background: '#FFFFFF80',
          backdropFilter: 'blur(16px)',
          boxShadow:
            '-12.18px 36.69px 44.9px 0px #7F7CA82E, 1.31px 1.97px 0px 0px #FFFFFF99 inset',
        }}
      >
        {/* Div texto */}
        <div className="flex flex-col space-y-2">
          {(text_esq || text_dir) && (
            <span className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full w-fit">
              {text_esq && (
                <span className="text-xs font-semibold bg-[#F20587] text-pink-100 px-2 py-1 rounded-full">
                  {text_esq}
                </span>
              )}
              {text_dir && (
                <span className="text-pink-600 font-medium text-xs">
                  {text_dir}
                </span>
              )}
            </span>
          )}

          {title && (
            <h3 className="font-bold text-[25px] leading-[120%] text-gray-900">
              {title}
            </h3>
          )}

          {desc && (
            <p className="font-medium text-[14px] leading-[150%] text-[#4B5563]">
              {desc}
            </p>
          )}
        </div>

        {/* Div seta */}
        {arrow && (
          <div className="flex items-center justify-center">
            <ArrowRight className="text-white hover:text-pink-600 transition-colors duration-300 cursor-pointer" />
          </div>
        )}
      </div>
    </div>
  );
}
