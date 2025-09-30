import Image from 'next/image';
import RoundedButton from './RoundedButton';

interface VolunteerCardProps {
  className: string;
}

function VolunteerCard({ className }: VolunteerCardProps) {
  return (
    <div className={className}>
      <div className="relative w-[70%] h-auto sm:w-55 sm:h-80 md:w-60 md:h-80">
        <div
          className="
            relative z-10 flex flex-col items-center
            w-full h-full p-4 gap-2
            text-center text-[100%] font-medium
            bg-white/40 backdrop-blur-md border-t border-l border-white/40 rounded-xl shadow-md
          "
        >
          <Image
            src="/assets/images/content/volunteers.png"
            width={2000}
            height={2000}
            alt="Voluntários"
            className="w-[95%] rounded-xl"
          />
          <h3 className="text-[110%] sm:text-[130%] font-satoshi font-bold">
            Seja um Voluntário
          </h3>
          <p className="sm:w-[70%] md:w-[80%] font-satoshi font-medium">
            Dedique seu tempo e talento em oficinas.
          </p>
          <RoundedButton
            rightIcon="/assets/icons/svg/arrowRight.svg"
            isWhiteVersion={true}
            title="Saiba Mais"
            tag="Novo"
          />
        </div>
      </div>
    </div>
  );
}

export default VolunteerCard;
