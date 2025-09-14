import Image from 'next/image';

interface OutlineButtonProps {
  text: string;
}

function OutlineButton({ text }: OutlineButtonProps) {
  return (
    <a
      href=""
      className="flex justify-center items-center gap-2 w-fit px-8 py-4 text-[18px] font-[satoshi-bold] border border-[var(--foreground)] rounded-xl"
    >
      <Image
        src={'/assets/icons/svg/phone.svg'}
        width={24}
        height={24}
        alt="Telefone"
        className="w-7"
        style={{ color: 'var(--background)' }}
      />
      <p className="text-[var(--foreground)] font-[600] font-[satoshi-bold]">
        {text}
      </p>
    </a>
  );
}

export default OutlineButton;
