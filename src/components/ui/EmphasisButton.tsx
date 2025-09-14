import Image from 'next/image';

interface EmphasisButtonProps {
  text: string;
}

function EmphasisButton({ text }: EmphasisButtonProps) {
  return (
    <a
      href=""
      className="flex justify-center items-center gap-2 w-fit px-8 py-4 text-[18px] font-[satoshi-bold] bg-gradient-to-r from-[#F20587] to-[#FF30A1] rounded-xl"
    >
      <p className="text-white font-[600]">{text}</p>
      <Image
        src={'/assets/icons/svg/arrowUpRight.svg'}
        width={24}
        height={24}
        alt="seta pra direita"
        className="w-8"
      />
    </a>
  );
}

export default EmphasisButton;
