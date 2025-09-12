import { ComponentInfoCard } from '../ui';
import ComponentRoundedButton from '../ui/ComponentRoundedButton';
import ComponentSlideVideos from '../ui/ComponentSlideVideos';

const DATA_CARD = [
  {
    name: 'Oficinas Culturais',
    description:
      'Aulas de violão, teclado, bateria e balé que despertam talentos e promovem inclusão.',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    name: 'Esporte e Disciplina',
    description:
      'Jiu-jítsu e taekwondo como ferramentas de desenvolvimento físico, social e emocional.',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    name: 'Fortalecimento de Vínculos',
    description:
      'Atividades coletivas que incentivam convivência, cidadania e solidariedade.',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    name: 'Assistência Social',
    description:
      'Apoio a crianças, jovens e famílias em situação de vulnerabilidade.',
    imageUrl: '/path/to/image1.jpg',
  },
];

const ActionsSection = () => {
  return (
    <section>
      <section className="flex flex-row items-center text-center gap-8 my-8">
        <article>
          <ComponentRoundedButton
            title="Nossas Ações"
            icon="/path/to/icon.svg"
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl mt-4">
            Juntos, construímos<strong> oportunidades.</strong>
            <span>Faça parte.</span>
          </h1>
        </article>
        <div>
          <ComponentSlideVideos />
        </div>
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
