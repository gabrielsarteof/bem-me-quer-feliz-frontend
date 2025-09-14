import classNames from 'classnames';
import Image from 'next/image';

interface TransparentCardProps {
  icon?: string[];
  title?: string;
  description?: string;
  fontStyle?: string;
  starCount?: number;
}

const TransparentCard: React.FC<TransparentCardProps> = ({
  icon,
  title,
  description,
  fontStyle,
  starCount = 5,
}) => {
  return (
    <div
      className="
        absolute left-1/2 lg:left-0
        transform -translate-x-1/2 lg:transform-none
        -bottom-16 sm:bottom-[3em] md:bottom-[2em] lg:bottom-[11em] xl:bottom-[6em] max-sm:bottom-[-2em]
        sm:ml-[-12em] md:ml-[-12em] lg:ml-[60px] xl:mr-2
        w-[200px] md:w-[237px]
        h-[280px] sm:h-[210px] max-sm:h-[210px] md:h-[311px]
        py-4 md:py-6
        z-50
        backdrop-blur
        rounded-2xl
        bg-white/40
        border-t-2 border-[#ffffff80]
      "
    >
      <div className="flex flex-col items-center px-2 space-y-4 md:space-y-6">
        <h3 className={classNames('text-center pb-2 md:pb-4', fontStyle)}>
          {title}
        </h3>
        <div className="flex justify-center items-center gap-8 sm:gap-[-2em]">
          {icon?.map((src, index) => (
            <div
              key={index}
              className={classNames(
                // Layout e posição
                "relative",
                index === 1 ? "absolute sm:absolute max-sm:absolute z-50" : "",
                "overflow-hidden",
                index === 1
                  ? "w-12 h-12 md:w-[69px] md:h-[69px]"
                  : "w-8 h-8 md:w-12 md:h-12",
                // Visuais
                index === 1 ? "rounded-full border-2 border-white" : ""
              )}
            >
              <Image
                src={src}
                alt={`Icon ${index + 1}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                className={index === 1 ? "scale-105" : ""}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row m-0 py-2 md:py-3">
          {Array.from({ length: starCount }).map((_, index) => (
            <div key={index}>
              <Image
                src="/assets/icons/svg/star.svg"
                alt="star"
                width={20}
                height={20}
                className="md:w-6 md:h-6 rounded-full"
              />
            </div>
          ))}
        </div>
        <div className="w-full px-2">
          {description && (
            <p className="text-center text-neutral-600 font-[satoshi-medium] text-sm md:text-base">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransparentCard;
