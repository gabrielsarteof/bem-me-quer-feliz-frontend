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
      className={`flex items-center gap-2 p-2 w-fit ${isWhiteVersion ? 'bg-white' : 'bg-[var(--color-primary-500)]/12'} rounded-full`}
    >
      {leftIcon ? (
        <Image
          width={24}
          height={24}
          src={leftIcon}
          className="ml-2"
          alt="ícone"
        />
      ) : null}
      {tag ? (
        <div className="flex items-center justify-center ml-2 px-2 py-1 text-xs font-bold text-white rounded-full">
          {tag}
        </div>
      ) : null}
      {title ? (
        <p
          className={`mr-2 text-[var(--color-primary-500)] font-bold font-satoshi text-xs ${className}`}
        >
          {title}
        </p>
      ) : null}
      {rightIcon ? (
        <Image fill src={rightIcon} className="mr-2" alt="seta" />
      ) : null}
    </div>
  );
};
export default RoundedButton;
