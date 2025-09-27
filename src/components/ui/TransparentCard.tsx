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
        absolute left-1/8 lg:left-0
        -bottom-[-20px] sm:bottom-[3em] md:bottom-[2em] lg:bottom-[8em]
        ml-[1em] sm:ml-[2em] md:ml-[1em] lg:ml-[4vw] xl:mr-2
        transform -translate-x-1/2 lg:transform-none
        w-[140px] sm:w-[150px] lg:w-[180px]
        h-fit md:h-[30vh] lg:h-[270px]
        py-4 md:py-6
        z-50
        backdrop-blur
        rounded-2xl
        bg-white/40
        border-t-2 border-[#ffffff80]
      "
    >
      <div className="
        flex flex-col items-center
        gap-1 lg:gap-[10px]
        px-2 space-y-4 md:space-y-4
      ">
        <h3 className={classNames('text-center', fontStyle)}>
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
                  ? "w-10 h-10 md:w-[49px] md:h-[49px] lg:w-[69px] lg:h-[69px]"
                  : "w-6 h-6 md:w-[39px] md:h-[39px] lg:w-[49px] lg:h-[49px]",
                // Visual
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
        <div className="flex flex-row m-0">
          {Array.from({ length: starCount }).map((_, index) => (
            <div key={index}>
              <Image
                src="/assets/icons/svg/star.svg"
                alt="star"
                width={24}
                height={24}
                className="md:w-5 md:h-5 lg:w-7 lg:h-7 rounded-full m-[-2px]"
              />
            </div>
          ))}
        </div>
        <div className="w-full px-2">
          {description && (
            <p className="
              text-center
              text-[10px] text-sm md:text-[14px]
              font-[satoshi-medium]
              text-neutral-600
            ">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransparentCard;
