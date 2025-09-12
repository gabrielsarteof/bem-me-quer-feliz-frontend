'use client';

import Image from 'next/image';

interface VoluntarioCardProps {
  imageSrc: string;
}

export function VoluntarioCard({ imageSrc }: VoluntarioCardProps) {
  return (
    <div className="relative w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl overflow-hidden shadow-xl">
      {/* Imagem */}
      <Image
        src={imageSrc}
        alt="Voluntariado"
        width={420}
        height={500}
        className="w-full h-auto object-cover"
      />

      {/* Overlay de informações */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-4">
        <span className="inline-block text-xs font-semibold text-pink-600 bg-pink-100 px-2 py-1 rounded-full mb-2">
          Novo
        </span>
        <h3 className="text-lg font-bold text-gray-900">
          Transforme seu tempo em oportunidades
        </h3>
        <p className="text-sm text-gray-700">
          Experiências que ficam para a vida toda.
        </p>
      </div>
    </div>
  );
}
