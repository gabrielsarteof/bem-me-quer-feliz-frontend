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
    <div className="flex items-center gap-2 p-2 bg-linear-to-r from-[#F20587] to-[#FF2DA0] rounded-[10px] w-[237px] h-[58]">
      {tag ? (
        <div className="flex ml-8 px-2 py-1 items-center justify-center bg-[#FF008C] text-white text-xs font-medium rounded-full" >
          {tag}
        </div>
      ) : null}
      <p className="text-white font-[satoshi-bold] text-[16px] ml-5">{title}</p>
      {arrowIcon ? (
        <Image width={24} height={24} src={arrowIcon} className="" alt="seta" />
      ) : null}
    </div>
  );
};

export default SquareRoundedButton;