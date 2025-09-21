'use client';

import { Card } from '../../ui/Card';

export default function EquipeSection() {
  const equipe = [
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Ana Souza',
      desc: 'Coordenadora Geral',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Carlos Lima',
      desc: 'Instrutor de Música',
    },
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Fernanda Ribeiro',
      desc: 'Professora de Ballet',
    },
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Bruno Santos',
      desc: 'Instrutor de Jiu-jitsu',
    },
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Mariana Oliveira',
      desc: 'Assistente Social',
    },
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Lucas Pereira',
      desc: 'Voluntário de Projetos',
    },
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Camila Ferreira',
      desc: 'Coordenadora de Voluntariado',
    },
    {
      imageSrc: '/assets/images/content/karate_img.svg',
      title: 'Thiago Mendes',
      desc: 'Comunicação e Marketing',
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white px-6 py-12">
      {/* Título da Seção */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Nossa Equipe
        </h2>
        <p className="text-gray-600">
          Conheça as pessoas dedicadas que tornam nosso trabalho possível todos
          os dias.
        </p>
      </div>

      {/* Container responsivo */}
      <div className="flex gap-[30px] overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-[30px] md:overflow-visible max-w-[1314px] min-h-[836px] mx-auto">
        {equipe.map((membro, index) => (
          <div key={index} className="flex-shrink-1 md:flex-shrink">
            <Card
              imageSrc={membro.imageSrc}
              title={membro.title}
              desc={membro.desc}
              size="md"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
