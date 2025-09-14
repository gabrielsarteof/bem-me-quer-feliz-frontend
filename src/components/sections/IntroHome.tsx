import Image from 'next/image';

import RoundedButton from '../ui/RoundedButton';
import EmphasisButton from '../ui/EmphasisButton';
import OutlineButton from '../ui/OutlineButton';
import BackgroundPinkBlur from '../ui/BackgrounPinkBlur';

function IntroHome() {
  return (
    <div className="m-20">
      <div className="flex flex-col md:flex-row items-center justify-between md:ml-35 h-auto">
        <div className="flex flex-col items-center md:items-start w-full md:w-auto h-auto">
          <RoundedButton
            tag="Novo"
            title="Cursos com vagas disponíveis"
            className=""
            rightIcon="/assets/icons/svg/arrowRight.svg"
          />

          <div className="flex flex-col gap-10 w-full max-w-[700px] xl:min-w-[650px] xl:max-h-[433px] mb-20">
            <h1 className="text-center md:text-left text-[32px] sm:text-[48px] md:text-[64px] font-[700] font-[satoshi-bold]">
              Transformando vidas com cultura e solidariedade
            </h1>
            <h2 className="text-center md:text-left md:max-w-[550px] text-[16px] sm:text-[20px] font-[500] font-[satoshi-medium]">
              Há 14 anos oferecendo música, dança, esporte e convivência para
              crianças, jovens e famílias.
            </h2>

            <div className="flex justify-center md:justify-start gap-4">
              <EmphasisButton text="Doe Agora" />
              <OutlineButton text="Fale Conosco" />
            </div>

            <div className="flex flex-col gap-8 text-center md:text-left md:ml-1 text-[16px] md:text-[20px] font-[700] h-auto md:max-w-[640px] mt-5">
              <p className="text-[#6B7280] font-[satoshi-bold]">
                Patrocinadores & Parceiros
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Image
                  src={'/assets/images/content/reviews.png'}
                  width={500}
                  height={500}
                  alt="Reviews"
                  className="w-[25%] xs:w-[80px] sm:w-[120px] h-auto object-contain"
                />
                <Image
                  src={'/assets/images/content/trustPilot.png'}
                  width={500}
                  height={500}
                  alt="TrustPilot"
                  className="w-[25%] xs:w-[80px] sm:w-[120px] h-auto object-contain"
                />
                <Image
                  src={'/assets/images/content/capterra.png'}
                  width={500}
                  height={500}
                  alt="Capterra"
                  className="w-[25%] xs:w-[80px] sm:w-[120px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
        <BackgroundPinkBlur />
      </div>
    </div>
  );
}

export default IntroHome;
