import React from 'react';
import Image from 'next/image';

interface ICommentCard {
  userName: string;
  typeUser?: string;
  userImage: string;
  commentText: string;
}

const ComponentCommentsCard = ({
  userName,
  commentText,
  userImage,
  typeUser,
}: ICommentCard) => {
  return (
    <div className="flex flex-col gap-2 justify-between h-full min-h-[220px] p-4 rounded-[var(--radius-md)] bg-[var(--color-border-lighter)] font-satoshi shadow-[var(--shadow-card)] overflow-hidden">
      <p className="mt-2 font-medium font-satoshi ">{commentText}</p>
      <div className="flex items-start mt-4">
        <Image
          src={userImage}
          alt={`${userName}'s avatar`}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex flex-col gap-0.5 ml-3">
          <h3 className="font-bold font-satoshi text-base">{userName}</h3>
          {typeUser && (
            <span className="text-sm text-[var(--color-text-muted)] font-satoshi">
              {typeUser}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentCommentsCard;
