import React from 'react';
import ComponentRoundedButton from '../ui/ComponentRoundedButton';
import ComponentProgramsCard from '../ui/ComponenteProgramsCard';
import Image from 'next/image';

const DATA_CARD = [
  {
    name: 'Oficinas de Aprendizagem',
    description:
      'Aulas de reforço escolar, informática e inglês para crianças e jovens.',
    imageUrl: '/assets/icons/svg/bailarina.svg',
  },
  {
    name: 'Esporte e Lazer',
    description: 'Atividades esportivas e de lazer para crianças e jovens.',
    imageUrl: '/assets/icons/svg/kimono.svg',
  },
  {
    name: 'Apoio Psicossocial',
    description:
      'Apoio psicológico e social para crianças e jovens em situação de vulnerabilidade.',
    imageUrl: '/assets/icons/svg/saudacao-ao-sol-ioga 1.svg',
  },
  {
    name: 'Educação Ambiental',
    description:
      'Atividades de educação ambiental para conscientização e preservação.',
    imageUrl: '/assets/icons/svg/teclado-de-piano 1.svg',
  },
  {
    name: 'Oficinas de Aprendizagem',
    description:
      'Aulas de reforço escolar, informática e inglês para crianças e jovens.',
    imageUrl: '/assets/icons/svg/violao.svg',
  },
  {
    name: 'Oficinas de Aprendizagem',
    description:
      'Aulas de reforço escolar, informática e inglês para crianças e jovens.',
    imageUrl: '/assets/icons/svg/tambor 1.svg',
  },
];

const ProgramsSection = () => {
  return (
    <section className="w-full max-w-7xl px-2 py-2  m-auto box-border bg-[var(--color-background)] font-satoshi">
      <section className="py-12 text-center">
        <div className="flex justify-center mb-4">
          <ComponentRoundedButton
            title="Nossos Programas"
            leftIcon="/assets/icons/svg/dots.svg"
            className="uppercase"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-5xl font-bold font-satoshi text-[var(--color-foreground)]">
            O que oferecemos
          </h2>
          <p className="w-full max-w-2xl mt-2 text-body font-satoshi">
            Conheça nossos programas e oportunidades de aprendizado, esporte e
            convivência.
          </p>
        </div>
      </section>
      <section className="relative my-8">
        {/* Background */}
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <Image
            width={1000}
            height={900}
            src="/assets/images/ui/background.svg"
            alt="Background"
            className="w-full h-full object-cover pointer-events-none select-none"
          />
        </div>

        {/* Cards */}
        <section className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {DATA_CARD.map((card, index) => {
            const margemExtra = index % 3 === 1 ? 'lg:mt-[-40px]' : '';
            return (
              <div key={index} className={margemExtra}>
                <ComponentProgramsCard
                  name={card.name}
                  description={card.description}
                  imageUrl={card.imageUrl}
                />
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default ProgramsSection;
