'use client';

import Image from 'next/image';
import { VoluntarioCard } from '../../ui/VoluntarioCard';

export function VoluntarioSection() {
  return (
    <section className="w-full h-[812px] bg-[#F20587] flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        {/* Coluna Esquerda */}
        <div className="flex flex-col justify-center space-y-6">
          <Image
            src="/assets/icons/svg/Foguete.svg"
            width={36}
            height={36}
            alt="Foguete"
          />
          <h2 className="text-4xl font-bold leading-tight">
            Transforme vidas <br /> com a{' '}
            <span className="text-white/90 font-extrabold">gente!</span>
          </h2>
          <ul className="space-y-3 text-lg">
            <li> Participe de aulas culturais e esportivas</li>
            <li> Fortaleça vínculos e promova cidadania</li>
            <li> Apoie projetos que transformam vidas</li>
            <li> Desenvolva habilidades e experiências</li>
          </ul>
        </div>

        {/* Coluna Central */}
        <div className="flex items-center justify-center">
          <VoluntarioCard imageSrc="/assets/images/ui/exemplo.jpg" />
        </div>

        {/* Coluna Direita */}
        <div className="flex flex-col justify-center space-y-8 text-white">
          <div>
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

          <div>
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
