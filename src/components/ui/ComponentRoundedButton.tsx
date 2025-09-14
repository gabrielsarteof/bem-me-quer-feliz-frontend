import React from 'react';
import Image from 'next/image';

interface IRoundedButton {
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
}: IRoundedButton) => {
  return (
    <div
      className={`flex items-center gap-2 p-2 w-fit ${isWhiteVersion ? 'bg-white' : 'bg-[#F205871F]'} rounded-full`}
    >
      {leftIcon ? (
        <Image
          width={24}
          height={24}
          src={leftIcon}
          className="w-6 ml-2"
          alt="ícone"
        />
      ) : null}
      {tag ? (
        <div className="flex items-center justify-center ml-2 px-2 py-1 text-xs font-medium bg-[#FF008C] text-white rounded-full">
          {tag}
        </div>
      ) : null}
      {title ? (
        <p
          className={`mr-2 text-[#FF008C] font-['Satoshi-Bold'] text-xs ${className}`}
        >
          {title}
        </p>
      ) : null}
      {rightIcon ? (
        <Image fill src={rightIcon} className="w-6 mr-2" alt="seta" />
      ) : null}
    </div>
  );
};
export default RoundedButton;
