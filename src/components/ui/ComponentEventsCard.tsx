import React from 'react';
import Image from 'next/image';
import ComponentRoundedButton from './ComponentRoundedButton';

interface IEvent {
  name: string;
  description: string;
  imageUrl: string;
  data: string;
}

const ComponentEventsCard = ({ event }: { event: IEvent }) => {
  return (
    <div className="event-card">
      <Image
        src={event.imageUrl}
        alt={event.name}
        width={500}
        height={300}
        className="object-cover rounded-[var(--radius-md)] mb-4"
      />
      <ComponentRoundedButton title={event.data} className="uppercase" />
      <div className="flex flex-col gap-2 mt-4 w-full">
        <h3 className="text-lg font-bold font-satoshi text-[var(--color-foreground)]">
          {event.name}
        </h3>
        <p className="text-body font-satoshi">{event.description}</p>
      </div>
    </div>
  );
};

export default ComponentEventsCard;
