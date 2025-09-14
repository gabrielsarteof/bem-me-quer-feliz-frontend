import VolunteerCard from './VolunteerCard';
import Image from 'next/image';

function BackgroundPinkBlur() {
  return (
    <div>
      <div className="relative w-[330px] sm:w-[700px] md:w-[1000px] mt-65 sm:mt-40 md:mt-25">
        <Image
          src={'/assets/images/content/pinkBlur.png'}
          width={'1000'}
          height={'1000'}
          alt="Fundo decorativo"
          className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1000px] h-auto z-[-1] pointer-events-none"
          style={{
            filter: 'drop-shadow(0 0 15px rgba(255, 0, 150, 0.4))',
          }}
        />

        <div className="relative z-4">
          <Image
            src={'/assets/images/content/dropForm.png'}
            width={1000}
            height={1000}
            alt="Crianças Se Abraçando"
            className="absolute right-0 sm:right-20 md:right-60 top-[-300] sm:top-[-200] md:top-[-110] w-[35%] sm:w-[25%] md:w-[25%]"
          />
          <Image
            src={'/assets/images/content/cloudForm.png'}
            width={1000}
            height={1000}
            alt="Crianças Segurando Medalhas"
            className="absolute right-[-13] sm:right-20 md:right-60 top-[-200] sm:top-[-30] md:top-[90] w-[55%] sm:w-[35%] md:w-[35%]"
          />
          <VolunteerCard className="absolute sm:right-80 md:right-134 top-[-300] sm:top-[-150] md:top-[20]" />
        </div>
      </div>
    </div>
  );
}

export default BackgroundPinkBlur;
