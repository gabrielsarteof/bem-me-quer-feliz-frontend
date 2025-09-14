import React from 'react';
import Image from 'next/image';

interface RoundedButtonProps {
  tag?: string;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  isWhiteVersion?: boolean;
  className?: string;
}

const RoundedButton = ({
  tag,
  title,
  leftIcon,
  rightIcon,
  isWhiteVersion,
  className,
}: RoundedButtonProps) => {
  return (
    <div
      className={`flex items-center gap-2 w-fit p-2 ${
        isWhiteVersion ? 'bg-white' : 'bg-[#F205871F]'
      } rounded-full`}
    >
      {leftIcon ? (
        <Image
          width={24}
          height={24}
          src={leftIcon}
          alt="ícone esquerdo"
          className="w-6 ml-2"
        />
      ) : null}

      {tag ? (
        <div className="flex items-center justify-center px-2 py-1 ml-2 text-xs font-medium bg-[#FF008C] text-white rounded-full">
          {tag}
        </div>
      ) : null}

      {title ? (
        <p
          className={`text-xs text-[#FF008C] font-['Satoshi-Bold'] mr-2 ${className}`}
        >
          {title}
        </p>
      ) : null}

      {rightIcon ? (
        <Image
          width={24}
          height={24}
          src={rightIcon}
          alt="ícone direito"
          className="w-6 mr-2"
        />
      ) : null}
    </div>
  );
};

export default RoundedButton;
