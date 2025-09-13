import { ComponentInfoCard } from '../ui';
import ComponentRoundedButton from '../ui/ComponentRoundedButton';
import ComponentSlideVideos from '../ui/ComponentSlideVideos';

const DATA_CARD = [
  {
    name: 'Oficinas Culturais',
    description:
      'Aulas de violão, teclado, bateria e balé que despertam talentos e promovem inclusão.',
    imageUrl: '/assets/images/ui/oficinas.svg',
  },
  {
    name: 'Esporte e Disciplina',
    description:
      'Jiu-jítsu e taekwondo como ferramentas de desenvolvimento físico, social e emocional.',
    imageUrl: '/assets/images/ui/esporte.svg',
  },
  {
    name: 'Fortalecimento de Vínculos',
    description:
      'Atividades coletivas que incentivam convivência, cidadania e solidariedade.',
    imageUrl: '/assets/images/ui/fortalecimento.svg',
  },
  {
    name: 'Assistência Social',
    description:
      'Apoio a crianças, jovens e famílias em situação de vulnerabilidade.',
    imageUrl: '/assets/images/ui/assistencia.svg',
  },
];

const ActionsSection = () => {
  return (
    <section className="w-full max-w-7xl px-4 m-auto box-border">
      <section className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row items-center gap-10 my-10 text-center box-border">
        <article>
          <div className="flex justify-center sm:justify-center md:justify-center lg:justify-venter xl:justify-start">
            <ComponentRoundedButton
              title="Nossas Ações"
              icon="/assets/icons/svg/dots.svg"
              className="uppercase"
            />
          </div>

          <h1 className=" mt-4 max-w-4xl text-center font-['Satoshi-Medium'] text-3xl sm:text-4xl sm:text-left lg:text-5xl leading-tight">
            Juntos, construímos
            <strong className="font-['Satoshi-Black']"> oportunidades.</strong>
            <br />
            <span className="font-['sans-serif'] text-[#F20587]">
              Faça parte.
            </span>
          </h1>
        </article>
        <ComponentSlideVideos />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {DATA_CARD.map((card, index) => (
          <ComponentInfoCard
            key={index}
            name={card.name}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </section>
    </section>
  );
};

export default ActionsSection;
