'use client';

import { Card } from '../../ui/Card';

export default function EquipeSection() {
  const equipe = [
    {
      imageSrc: '/assets/images/content/monicaLeite_img.svg',
      title: 'Mônica Leite',
      desc: 'Coordenadora Pedagógica ',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/miriamMansur_img.svg',
      title: 'Miriam Mansur',
      desc: 'Fundadora e Gestora',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/ritaPimentel_img.svg',
      title: 'Rita Pimentel',
      desc: 'Professora de Ballet',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/camilleCastelo_img.svg',
      title: 'Camille Castelo',
      desc: 'Psicóloga',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/marianaOliveira_img.svg',
      title: 'Mariana Oliveira',
      desc: 'Assistente Social',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/lucasPereira_img.svg',
      title: 'Lucas Pereira',
      desc: 'Voluntário de Projetos',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/camilaFerreira_img.svg',
      title: 'Camila Ferreira',
      desc: 'Coordenadora de Voluntariado',
      arrow: true,
    },
    {
      imageSrc: '/assets/images/content/thiagoMendes_img.svg',
      title: 'Thiago Mendes',
      desc: 'Comunicação e Marketing',
      arrow: true,
    },
  ];

  return (
    <section
      className="relative w-full min-h-screen bg-white px-6 py-12 font-satoshi"
      style={{
        backgroundImage: "url('/assets/images/ui/fundo.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Título da Seção */}
      <div className="text-center max-w-2xl mx-auto mb-12 font-satoshi">
        <h2 className="text-3xl md:text-4xl font-satoshi font-bold text-gray-900 mb-4">
          Nossa Equipe
        </h2>
        <p className="text-gray-600">
          Conheça as pessoas dedicadas que tornam nosso trabalho possível todos
          os dias.
        </p>
      </div>

      {/* Container responsivo */}
      <div className="flex gap-[30px] overflow-x-auto pb-4 scrollbar-hide md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-[30px] md:overflow-visible max-w-[1314px] min-h-[836px] mx-auto font-satoshi">
        {equipe.map((membro, index) => (
          <div key={index} className="flex-shrink-1 md:flex-shrink">
            <Card
              imageSrc={membro.imageSrc}
              title={membro.title}
              desc={membro.desc}
              size="md"
              arrow={membro.arrow}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
