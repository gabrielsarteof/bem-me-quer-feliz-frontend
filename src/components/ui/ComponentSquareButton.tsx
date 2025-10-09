import React from 'react';
import Image from 'next/image';

const SquareRoundedButton = ({
  tag,
  title,
  arrowIcon,
}: {
  tag?: string;
  title: string;
  icon?: string;
  arrowIcon?: string;
}) => {
  return (
    <a
      href=""
      className="
        flex items-center gap-2
        w-[30vw] h-[3vh] sm:w-[30vw] sm:h-[5vh] lg:w-[16vw] lg:h-[7vh]
        p-1 sm:px-1 lg:px-5
        rounded-[5px] lg:rounded-[10px]
        bg-gradient-to-r from-[#F20587] to-[#FF2DA0]
      "
    >
      {tag ? (
        <div
          className="
            flex items-center justify-center
            ml-8 px-2 py-1
            rounded-full
            bg-[#FF008C]
            text-white text-xs font-medium
          "
        >
          {tag}
        </div>
      ) : null}
      <p className="ml-2 text-white font-satoshi font-bold text-[8px] sm:text-[16px] lg:text-center">
        {title}
      </p>
      {arrowIcon ? (
        <Image
          width={24}
          height={24}
          src={arrowIcon}
          alt="seta"
          className="w-[3vw] sm:w-[4vw] lg:w-[1.8vw]"
        />
      ) : null}
    </a>
  );
};

export default SquareRoundedButton;
