import React from 'react';
import Image from 'next/image';

interface IInfoCard {
  name: string;
  description: string;
  imageUrl: string;
}
const ComponentInfoCard = ({ name, description, imageUrl }: IInfoCard) => {
  return (
    <div className="p-4 rounded-[var(--radius-md)] font-satoshi ">
      <Image
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
        className="mb-2 object-cover rounded-md"
      />
      <h4 className="text-lg font-bold font-satoshi text-[var(--color-foreground)]">
        {name}
      </h4>
      <p className="text-body font-satoshi">{description}</p>
    </div>
  );
};

export default ComponentInfoCard;
