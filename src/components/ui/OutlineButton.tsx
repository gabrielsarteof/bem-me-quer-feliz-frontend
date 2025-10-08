import Image from 'next/image';

interface OutlineButtonProps {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  hover?: boolean;
  className?: string;
}

function OutlineButton({
  text,
  leftIcon,
  rightIcon,
  hover = false,
  className = '',
}: OutlineButtonProps) {
  const baseClasses = `
    flex justify-between items-center gap-2
    w-fit px-8 py-4
    text-[18px] font-satoshi font-bold
    border border-[var(--foreground)] rounded-xl
  `;

  const hoverClasses = hover
    ? `
      group
      hover:bg-gradient-to-l hover:from-[var(--color-secondary-500)] hover:to-[var(--color-primary-500)]
      hover:text-white hover:border-white
    `
    : '';

  return (
    <a href="" className={`${hoverClasses} ${baseClasses} ${className}`}>
      {leftIcon && (
        <Image
          src={leftIcon}
          width={24}
          height={24}
          alt="leftIcon"
          className="w-7"
          style={{ color: 'var(--background)' }}
        />
      )}
      <p
        className={`
          text-[var(--foreground)] font-satoshi font-bold
          ${hover ? 'group-hover:text-white' : ''}
        `}
      >
        {text}
      </p>
      {rightIcon && (
        <Image
          src={rightIcon}
          width={50}
          height={30}
          alt="rightIcon"
          className={`
            w-7
            ${hover ? 'group-hover:brightness-0 group-hover:invert' : ''}
          `}
          style={{ color: 'var(--background)' }}
        />
      )}
    </a>
  );
}

export default OutlineButton;
