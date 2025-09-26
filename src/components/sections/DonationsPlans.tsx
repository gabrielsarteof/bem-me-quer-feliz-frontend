import DonationCards from './DonationsCards';
import MonthlyFees from '../ui/MonthlyFees';
import RoundedButton from '../ui/RoundedButton';

function DonationsPlans() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col xl:flex-row justify-between">
        <div>
          <RoundedButton
            title="PLANOS DE DOAÇÃO"
            leftIcon="/assets/icons/svg/dots.svg"
          />
          <h1 className="text-[48px] sm:text-[60px] md:text-[64px] font-satoshi font-bold text-[var(--foreground)]">
            Doe e transforme vidas
          </h1>
          <p className="w-[82%] text-[20px] font-satoshi font-medium text-[var(--color-text-muted)]">
            Escolha o plano que combina com você e transforme vidas todos os
            meses. ❤️
          </p>
        </div>

        <div className="flex items-center mt-25">
          <MonthlyFees />
        </div>
      </div>

      <div
        className="
          relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4
          w-full gap-6
          p-6
          bg-white rounded-2xl shadow-2xl
        "
      >
        {/* Linhas horizontais (mobile) */}
        <div className="absolute top-1/4 left-0 right-0 border-t border-gray-200 block sm:hidden xl:hidden" />
        <div className="absolute top-2/4 left-0 right-0 border-t border-gray-200 block sm:block xl:hidden" />
        <div className="absolute top-3/4 left-0 right-0 border-t border-gray-200 block sm:hidden xl:hidden" />

        {/* Linhas verticais (desktop) */}
        <div className="absolute top-0 bottom-0 left-1/4 border-l border-gray-200 hidden md:hidden xl:block" />
        <div className="absolute top-0 bottom-0 left-2/4 border-l border-gray-200 hidden sm:block xl:block" />
        <div className="absolute top-0 bottom-0 left-3/4 border-l border-gray-200 hidden md:hidden xl:block" />

        {/* Cards */}
        <DonationCards
          title="Plano Flexível"
          subtitle="Contribua com qualquer valor"
          description="Você decide como contribuir."
          buttonTitle="Doar Agora"
          items={[
            'Apoio proporcional',
            'Receba atualizações',
            'Participação em eventos',
            'Reconhecimento digital',
            'Impacto direto na comunidade',
          ]}
        />
        <DonationCards
          title="Amigo da Causa"
          subtitle="Apoio a 1 criança ou jovem"
          description="Com acompanhamento do impacto."
          value={20}
          buttonTitle="Quero Doar"
          items={[
            'Boletim mensal de atividades',
            'Apoio direto em aulas culturais',
            'Participação em eventos',
            'Reconhecimento nas redes',
            'Impacto direto',
          ]}
        />
        <DonationCards
          title="Parceiro Solidário"
          subtitle="Apoio a 3 crianças ou jovens"
          description="Com relatórios de impacto."
          value={50}
          buttonTitle="Quero Doar"
          items={[
            'Boletim de impacto mensal',
            'Participação em oficinas culturais',
            'Convite para workshops',
            'Reconhecimento em campanhas',
            'Apoio direto',
          ]}
        />
        <DonationCards
          title="Patrocinador"
          subtitle="Apoio a 6 crianças ou jovens "
          description="Com acesso a relatórios completos."
          value={99}
          buttonTitle="Quero Doar"
          items={[
            'Relatórios detalhados',
            'Participação em eventos',
            'Reconhecimento em campanhas',
            'Apoio a 6 crianças ou jovens',
            'Inclusão em newsletters',
          ]}
        />
      </div>
    </div>
  );
}

export default DonationsPlans;
