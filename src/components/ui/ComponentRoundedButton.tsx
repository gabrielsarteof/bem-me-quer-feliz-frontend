import React from 'react';
import Image from 'next/image';

const RoundedButton = ({
  tag,
  title,
  icon,
  arrowIcon,
}: {
  tag?: string;
  title: string;
  icon?: string;
  arrowIcon?: string;
}) => {
  return (
    <div className="flex items-center gap-2 p-2 bg-[#F205871F] rounded-full w-fit">
      {icon ? <Image fill src={icon} className="w-6 ml-2" alt="ícone" /> : null}
      {tag ? (
        <div className="flex ml-2 px-2 py-1 items-center justify-center bg-[#FF008C] text-white text-xs font-medium rounded-full">
          {tag}
        </div>
      ) : null}
      <p className="text-[#FF008C] font-medium mr-2">{title}</p>
      {arrowIcon ? (
        <Image fill src={arrowIcon} className="w-6 mr-2" alt="seta" />
      ) : null}
    </div>
  );
};

export default RoundedButton;
