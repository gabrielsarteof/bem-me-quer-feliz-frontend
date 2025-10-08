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
    <div className="w-full p-4 rounded-[var(--radius-md)] bg-[var(--color-background)] font-satoshi shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
      <div className="flex flex-col gap-5 h-full p-10 border-2 rounded-[var(--radius-md)] border-[var(--color-border-light)] hover:border-[var(--color-primary)] transition-colors duration-300 focus:outline-2">
        <Image
          src={imageUrl}
          alt={name}
          width={50}
          height={50}
          className="mb-2 object-cover rounded-md"
        />
        <h4 className="text-lg font-bold font-satoshi text-[var(--color-foreground)]">
          {name}
        </h4>
        <p className="text-body font-satoshi mb-4 flex-grow">{description}</p>
        <div className="flex flex-1 items-end">
          <button
            className="flex items-center gap-2 bg-[var(--color-background)] border border-[var(--color-border-light)] transition-all duration-300 rounded-full px-2 py-2 text-sm font-satoshi self-start "
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
              <div className="flex items-center gap-2 px-3 transition-all duration-300 ease-in-out">
                <Image
                  src={'/assets/icons/svg/arrow-right.svg'}
                  alt="Seta"
                  width={20}
                  height={20}
                />
                <span className="font-bold font-satoshi pl-2">Saiba Mais</span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComponentProgramsCard;
