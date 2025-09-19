import React from 'react';
import ComponentRoundedButton from '../ui/ComponentRoundedButton';
import ComponentEventsCard from '../ui/ComponentEventsCard';

const DATA_CARD = [
  {
    name: 'Feira do Milho Comunitária',
    description:
      'Teremos comidas típicas feita com milho, brincadeiras, apresentações culturais, sorteios, concursos e muitas surpresas!',
    imageUrl: '/assets/images/ui/milho.svg',
    data: '23 de AGOSTO',
  },
  {
    name: 'Campanha do Agasalho',
    description:
      'Doe roupas de frio para crianças do Otílio Roncete! Ponto de coleta na igreja Batista Betel.',
    imageUrl: '/assets/images/ui/agasalho.svg',
    data: '9 de julho',
  },
  {
    name: 'Apoie a Comunidade de Otílio',
    description:
      'Amigos, empresários e parceiros: precisamos de doações, parcerias e apoio à divulgação. Vamos transformar vidas juntos!',
    imageUrl: '/assets/images/ui/otilio.svg',
    data: '6 DE JUNHO',
  },
];

const EventsSection = () => {
  return (
    <section className="w-full max-w-7xl px-4 m-auto box-border">
      <section className="py-12 text-left">
        <div className="flex justify-start mb-4">
          <ComponentRoundedButton
            title="Nossos Eventos"
            leftIcon="/assets/icons/svg/dots.svg"
            className="uppercase"
          />
        </div>
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-5xl font-['Satoshi-Bold']">Nossas Ações</h2>
          <p className="w-120 mt-2 font-['Satoshi-Medium']">
            Fique por dentro do que está acontecendo na nossa ONG.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {DATA_CARD.map((event, index) => (
          <ComponentEventsCard key={index} event={event} />
        ))}
      </section>
    </section>
  );
};

export default EventsSection;
