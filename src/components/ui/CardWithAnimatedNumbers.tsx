import AnimatedNumbers from "./AnimatedNumbers";

interface CardWithAnimatedNumbersProps {
    title: string;
    value: number;
}

const CardWithAnimatedNumbers = (props: CardWithAnimatedNumbersProps) => {
    return (
        <div className="flex flex-row gap-5">
            <div className="flex">
                <div>
                    <AnimatedNumbers value={props.value} />
                </div>
                <p className="mt-2 text-[24px] font-[satoshi-medium] text-neutral-900">%</p>
            </div>
            <div className="flex items-center">
                <p className="inline-block align-middle text-[16px] font-[satoshi-medium] text-neutral-900">{props.title}</p>
            </div>
        </div>
    );
};

export default CardWithAnimatedNumbers;
