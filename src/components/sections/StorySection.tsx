import React from 'react';
import ComponentRoundedButton from '../ui/ComponentRoundedButton';
import ComponentCommentsCard from '../ui/ComponentCommentsCard';

const DATA_CARD = [
  {
    userName: 'Maria Silva',
    typeUser: 'Mãe de Aluno',
    userImage: '/assets/images/ui/maria.svg',
    commentText:
      '“Meu filho participa das aulas de violão há 2 anos e vejo como ele ganhou confiança e disciplina. O projeto tem sido essencial para o crescimento dele.”',
  },
  {
    userName: 'João Pereira',
    typeUser: 'Voluntário',
    userImage: '/assets/images/ui/joao.svg',
    commentText:
      '"Ser voluntário aqui me mostrou o valor de dedicar tempo para transformar vidas. Cada sorriso das crianças me motiva ainda mais."',
  },
  {
    userName: 'Ana Costa',
    typeUser: 'Aluna de Ballet',
    userImage: '/assets/images/ui/ana.svg',
    commentText:
      '"O ballet me ensinou a acreditar em mim mesma. Hoje tenho mais disciplina e coragem."',
  },
  {
    userName: 'Carlos Souza',
    typeUser: 'Patrocinador',
    userImage: '/assets/images/ui/carlos.svg',
    commentText:
      '"Apoiar a ONG é investir em um futuro melhor para nossa comunidade. Saber que minha contribuição ajuda tantas crianças me enche de orgulho."',
  },
];

const StorySection = () => {
  return (
    <section className="flex flex-col xl:flex-row justify-center gap-[var(--spacing-18)] w-full max-w-7xl px-4 py-20 m-auto box-border bg-[var(--color-background)] font-satoshi">
      <section className="xl:w-1/3 py-3 xl:py-12 text-left flex flex-col">
        <ComponentRoundedButton
          title="Depoimentos"
          leftIcon="/assets/icons/svg/dots.svg"
          className="uppercase"
        />
        <div className="flex flex-col items-start gap-2 mt-4">
          <h2 className="w-full max-w-2xl text-5xl font-bold font-satoshi text-[var(--color-foreground)]">
            O que dizem sobre nós
          </h2>
          <p className="w-full max-w-2xl mt-2 text-body font-satoshi">
            Histórias reais de transformação através da cultura, esporte e
            assistência social.
          </p>
        </div>
      </section>
      <section className="flex-1">
        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 items-stretch">
          {DATA_CARD.map((item, index) => {
            const isLastCol = index % 2 === 1;
            const margemExtra = isLastCol ? 'lg:-mt-8' : 'mt-0';
            return (
              <div className={`${margemExtra} h-full`} key={index}>
                <ComponentCommentsCard
                  userName={item.userName}
                  typeUser={item.typeUser}
                  userImage={item.userImage}
                  commentText={item.commentText}
                />
              </div>
            );
          })}
        </section>
      </section>
    </section>
  );
};

export default StorySection;
