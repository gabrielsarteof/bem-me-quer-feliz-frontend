import Image from 'next/image';
import OutlineButton from '../ui/OutlineButton';

interface DonationCardsProps {
  title: string;
  subtitle: string;
  description: string;
  value?: number;
  items: string[];
  className?: string;
  buttonTitle: string;
}

function DonationCards({
  title,
  subtitle,
  description,
  value,
  items,
  buttonTitle,
  className = '',
}: DonationCardsProps) {
  return (
    <div className={`flex flex-col mx-5 my-2 p-4 gap-10 ${className}`}>
      <div>
        <h1 className="text-[24px] font-satoshi font-bold text-[var(--foreground)]">
          {title}
        </h1>
        <h3 className="text-[16px] font-satoshi font-medium text-[var(--color-text-muted)]">
          {subtitle}
        </h3>

        {value ? (
          <div className="mt-4 flex items-baseline gap-1 leading-none">
            <span className="relative -top-3 text-[20px] font-satoshi font-medium text-[var(--color-text-muted)]">
              R$
            </span>
            <span className="text-[40px] font-satoshi font-bold text-[var(--color-primary)]">
              {value}
            </span>
            <span className="text-[16px] font-satoshi font-bold text-[var(--color-text-muted)]">
              /mês
            </span>
          </div>
        ) : (
          <div className="mt-4 flex items-baseline gap-1 leading-none">
            <span className="text-[40px] font-satoshi font-bold text-[var(--color-primary)]">
              R$
            </span>
            <span className="text-[40px] font-satoshi font-bold text-[var(--color-primary)]">
              ...
            </span>
          </div>
        )}

        <h4 className="text-[14px] font-satoshi font-medium text-[var(--color-text-muted)]">
          {description}
        </h4>
      </div>

      <OutlineButton
        text={buttonTitle}
        rightIcon="/assets/icons/svg/longArrowRight.svg"
        hover={true}
        className="w-full"
      />

      <div className="flex flex-col flex-grow mt-4">
        <ul className="flex flex-col h-full gap-6">
          {items.map((item, idx) => (
            <li key={idx} className="flex flex-1 items-center gap-x-2">
              <Image
                src="/assets/icons/svg/check.svg"
                alt="check icon"
                width={20}
                height={20}
              />
              <p className="text-[18px] font-satoshi font-medium text-[var(--foreground)]">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DonationCards;
