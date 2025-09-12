import React from 'react';
import Image from 'next/image';

interface IInfoCard {
  name: string;
  description: string;
  imageUrl: string;
}
const ComponentInfoCard = ({ name, description, imageUrl }: IInfoCard) => {
  return (
    <div className="p-4">
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="w-full h-32 mb-2 object-cover rounded-md"
      />
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ComponentInfoCard;
