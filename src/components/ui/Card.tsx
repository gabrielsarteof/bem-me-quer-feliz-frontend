'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react'; // ícone seta

{
  /* Passar essas informacoes quando chamar o card na pagina*/
}
interface CardProps {
  imageSrc: string; // imagem do card
  text_esq?: string; // texto do selo pequeno
  text_dir?: string; // label ao lado do selo
  title?: string; // título principal
  desc?: string; // descrição do card
  arrow?: boolean; // se true, mostra a seta
  size?: 'sm' | 'md' | 'lg'; // tamanho do card (pequeno, médio, grande)
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
      className={`relative rounded-2xl overflow-hidden shadow-xl border-[3px] border-white ${sizeCard[size]}`}
    >
      {/* <div className="relative w-[320px] md:w-[380px] lg:w-[420px] rounded-2xl overflow-hidden shadow-xl border-[3px] border-white font-['Satoshi-Medium']" > */}
      {/* Imagem */}
      <Image
        src={imageSrc}
        alt={title ?? 'Imagem do card'}
        width={420}
        height={500}
        className="object-cover"
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
        {/* Badge */}
        {(text_esq || text_dir) && (
          <span className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full mb-2">
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

        {/* Título */}
        {title && (
          <h3 className="font-bold text-[25px] leading-[120%] tracking-[0] text-gray-900">
            {title}
          </h3>
        )}

        {/* Descrição */}
        {desc && (
          <p className="font-medium text-[14px] leading-[150%] tracking-[0] text-[#4B5563]">
            {desc}
          </p>
        )}

        {/* Ícone de seta dentro do overlay */}
        {arrow && (
          <ArrowRight className="absolute bottom-2 right-2 w-5 h-5 text-pink-600" />
        )}
      </div>
    </div>
  );
}
