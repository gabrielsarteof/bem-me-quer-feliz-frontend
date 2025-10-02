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
    <section className="w-full max-w-7xl px-4  m-auto box-border  font-satoshi">
      <section className="flex flex-col xl:flex-row items-center gap-10 my-10 text-center box-border">
        <article>
          <div className="flex justify-center xl:justify-start">
            <ComponentRoundedButton
              title="Nossas Ações"
              leftIcon="/assets/icons/svg/dots.svg"
              className="uppercase"
            />
          </div>

          <h1 className="mt-4 max-w-4xl text-center font-bold font-satoshi text-3xl sm:text-4xl sm:text-left lg:text-5xl leading-tight text-[var(--color-foreground)]">
            Juntos, construímos
            <strong className="font-black font-satoshi"> oportunidades.</strong>
            <br />
            <span className="font-satoshi text-[var(--color-primary)]">
              Faça parte.
            </span>
          </h1>
        </article>
        <ComponentSlideVideos />
      </section>
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8 items-stretch">
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
