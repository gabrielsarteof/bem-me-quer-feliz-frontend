import RoundedButton from '@/components/ui/RoundedButton';
import EmphasisButton from '@/components/ui/EmphasisButton';
import OutlineButton from '@/components/ui/OutlineButton';
import Image from 'next/image';
import IntroVisuals from '../ui/IntroVisuals';

export default function IntroHome() {
  return (
    <div className="relative flex flex-col-reverse md:flex-row">
      <div className="flex h-auto flex-col md:flex-row items-center justify-between">
        <div className="flex w-full h-auto flex-col items-center md:items-start md:w-auto">
          <RoundedButton
            tag="Novo"
            title="Cursos com vagas disponíveis"
            className=""
            rightIcon="/assets/icons/svg/arrowRight.svg"
          />

          <div className="mb-20 flex w-full max-w-[700px] xl:min-w-[650px] flex-col gap-10">
            <h1 className="text-left md:text-left text-[32px] sm:text-[48px] md:text-[64px]  font-satoshi font-bold">
              Transformando vidas com cultura e solidariedade
            </h1>
            <h2 className="md:max-w-[550px] text-left md:text-left text-[16px] sm:text-[20px] font-satoshi font-medium">
              Há 14 anos oferecendo música, dança, esporte e convivência para
              crianças, jovens e famílias.
            </h2>

            <div className="flex gap-4 justify-center md:justify-start">
              <EmphasisButton text="Doe Agora" />
              <OutlineButton
                leftIcon={'/assets/icons/svg/phone.svg'}
                text="Fale Conosco"
              />
            </div>

            <div className="mt-5 flex h-auto max-w-[640px] flex-col gap-8 text-center md:ml-1 md:text-left text-[16px] md:text-[20px] font-[700]">
              <p className="font-satoshi font-bold text-[#6B7280]">
                Desenvolvido por:
              </p>
              <div className="flex w-full md:w-100 gap-4 justify-center md:justify-start">
                <div className="flex justify-center items-center md:full">
                  <Image
                    src="/assets/images/logos/UnderlineLogoDark.svg"
                    width={1000}
                    height={1000}
                    alt="Underline"
                    className="h-auto object-contain w-1/3"
                  />
                  <Image
                    src="/assets/images/content/plus.svg"
                    width={20}
                    height={20}
                    alt="plus"
                    className="h-5  w-1/3"
                  />
                  <Image
                    src="/assets/images/logos/controlLogoDark.svg"
                    width={500}
                    height={450}
                    alt="ControlDev"
                    className="h-auto object-contain w-1/3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <IntroVisuals />
    </div>
  );
}
