'use client';

import Image from 'next/image';

interface VoluntarioCardProps {
  imageSrc: string;
}

export function VoluntarioCard({ imageSrc }: VoluntarioCardProps) {
  return (
    <div className="relative w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl overflow-hidden shadow-xl border-[3px] border-white font-['Satoshi-Medium'] ">
      {/* Imagem */}
      <Image
        src={imageSrc}
        alt="Voluntariado"
        width={420}
        height={500}
        className="w-full h-auto object-cover"
      />

      {/* Overlay de informações */}
      <div
        className="absolute bottom-2 left-2 right-2 p-4 rounded-lg space-y-3"
        style={{
          background: '#FFFFFF80',
          backdropFilter: 'blur(16px)',
          boxShadow:
            '-12.18px 36.69px 44.9px 0px #7F7CA82E, 1.31px 1.97px 0px 0px #FFFFFF99 inset',
        }}
      >
        <span className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full mb-2">
          <span className="text-xs font-semibold bg-[#F20587] text-pink-100 px-2 py-1 rounded-full">
            Novo
          </span>
          <span className="text-pink-600 font-medium text-xs">
            Junte-se a nós
          </span>
        </span>

        <h3 className="font-bold text-[25px] leading-[120%] tracking-[0] text-gray-900">
          Transforme seu tempo em oportunidades
        </h3>
        <p className="font-medium text-[14px] leading-[150%] tracking-[0] text-[#4B5563]">
          Experiências que ficam para a vida toda.
        </p>
      </div>
    </div>
  );
}
