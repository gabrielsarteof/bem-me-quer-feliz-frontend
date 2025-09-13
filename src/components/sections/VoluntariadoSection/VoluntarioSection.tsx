'use client';

import Image from 'next/image';
import { VoluntarioCard } from '../../ui/VoluntarioCard';

export function VoluntarioSection() {
  return (
    <section className="relative w-full min-h-screen bg-[#F20587] flex items-center justify-center px-6 py-12">
      {/* Logo no canto */}
      <Image
        src="/assets/icons/svg/Logo_img.svg"
        width={461}
        height={496}
        alt="Logo"
        className="absolute bottom-0 left-0 w-[50%] max-w-[461px] h-auto opacity-8"
      />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-white relative">
        {/* Coluna Esquerda */}
        <div className="flex flex-col justify-center space-y-6 relative">
          {/* Ícone do foguete */}
          <Image
            src="/assets/icons/svg/Foguete.svg"
            width={36}
            height={36}
            alt="Foguete"
          />

          {/* Título principal */}
          <h2 className="text-4xl font-[Satoshi-Medium] font-bold leading-tight">
            Transforme vidas <br />
            com{' '}
            <span className="text-white font-[Satoshi-Black] font-extrabold">
              a gente!
            </span>
          </h2>

          {/* Lista de benefícios */}
          <ul className="space-y-3 text-lg font-[Satoshi-Medium]">
            <li className="flex items-start gap-2">
              <img
                src="/assets/icons/svg/Confirm_img.svg"
                alt="Ícone_confirm"
                className="w-5 h-5 mt-1"
              />
              Participe de aulas culturais e esportivas
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/icons/svg/Confirm_img.svg"
                alt="Ícone_confirm"
                className="w-5 h-5 mt-1"
              />
              Fortaleça vínculos e promova cidadania
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/icons/svg/Confirm_img.svg"
                alt="Ícone_confirm"
                className="w-5 h-5 mt-1"
              />
              Apoie projetos que transformam vidas
            </li>
            <li className="flex items-start gap-2">
              <img
                src="/assets/icons/svg/Confirm_img.svg"
                alt="Ícone_confirm"
                className="w-5 h-5 mt-1"
              />
              Desenvolva habilidades e experiências
            </li>
          </ul>
        </div>

        {/* Coluna Central */}
        <div className="flex items-center justify-center">
          <VoluntarioCard imageSrc="/assets/images/content/karate_img.svg" />
        </div>

        {/* Coluna Direita */}
        <div className="flex flex-col justify-center space-y-8 text-white font-[Satoshi-Medium] font-medium leading-[150%] tracking-[0]">
          <div className="space-y-3">
            <Image
              src="/assets/icons/svg/Clique_img.svg"
              width={32}
              height={32}
              alt="Clique"
              className="mb-3"
            />
            <h3 className="text-xl font-semibold">Por que ser voluntário?</h3>
            <p className="text-base text-white/90">
              Cada ação gera impacto real na vida de crianças, jovens e
              famílias.
            </p>
          </div>

          <hr className="border-white/40 w-2/3" />

          <div className="space-y-3">
            <h3 className="text-xl font-semibold">Como você ajuda</h3>
            <p className="text-base text-white/90">
              Dedique seu tempo e talento em oficinas, eventos e em nossos
              projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
