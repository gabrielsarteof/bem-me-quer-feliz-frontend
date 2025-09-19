// components/sections/HeroImages.tsx
import Image from 'next/image';
import VolunteerCard from '@/components/ui/VolunteerCard';

function IntroVisuals() {
  return (
    <div className="relative md:w-full md:min-w-[1000px] md:-translate-y-10 h-90 sm:h-150">
      <Image
        src="/assets/images/content/dropForm.png"
        width={1000}
        height={1000}
        alt="Crianças Se Abraçando"
        className="absolute z-10 top-0 right-[-10] sm:top-30 sm:right-20 md:top-40 md:right-70 w-[30%] sm:w-[30%] md:w-[25%]"
      />
      <Image
        src="/assets/images/content/cloudForm.png"
        width={1000}
        height={1000}
        alt="Crianças Segurando Medalhas"
        className="absolute z-10 top-30 right-[-10] sm:top-70 sm:right-20 md:top-100 md:right-70 w-[40%] sm:w-[45%] md:w-[35%]"
      />
      <VolunteerCard className="absolute z-10 left-5 sm:left-auto sm:right-75 sm:top-60 md:right-140 md:top-90" />
      <Image
        src="/assets/images/content/pinkBlur.png"
        width={1050}
        height={1050}
        alt="Fundo decorativo"
        className="md:absolute z-[-1] sm:min-w-[500px] md:min-w-[900px]"
        style={{
          filter: 'drop-shadow(25px 25px 25px rgba(255, 0, 150, 0.4))',
        }}
      />
    </div>
  );
}

export default IntroVisuals;
