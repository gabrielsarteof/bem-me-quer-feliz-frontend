'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface IInfoCard {
  name: string;
  description: string;
  imageUrl: string;
  icon?: string;
}
const ComponentProgramsCard = ({
  name,
  description,
  imageUrl,
  icon,
}: IInfoCard) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full p-4 shadow-lg rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col gap-5 h-full p-10 border-2 rounded-lg border-[#E5E7EB] hover:border-[#F20587] transition-colors duration-300 focus:outline-2">
        <Image
          src={imageUrl}
          alt={name}
          width={50}
          height={50}
          className="mb-2 object-cover rounded-md"
        />
        <h4 className="text-lg font-['Satoshi-Bold']">{name}</h4>
        <p className="text-gray-600 font-['Satoshi-Medium'] mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-1 items-end">
          <button
            className="flex items-center gap-2 bg-white border border-gray-300 transition-all duration-300 rounded-full px-2 py-2 text-sm font-['Satoshi-Medium'] self-start "
            onClick={() => setIsExpanded(prev => !prev)}
          >
            {!isExpanded ? (
              <Image
                src={icon || '/assets/icons/svg/plus.svg'}
                alt="Mais"
                width={20}
                height={20}
              />
            ) : (
              <div className="flex items-center gap-2 transition-all duration-300 ease-in-out">
                <Image
                  src={'/assets/icons/svg/arrow-right.svg'}
                  alt="Seta"
                  width={20}
                  height={20}
                />
                <span>Saiba Mais</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentProgramsCard;
