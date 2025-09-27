import AnimatedNumbers from "./AnimatedNumbers";

interface CardWithAnimatedNumbersProps {
    title: string;
    value: number;
}

const CardWithAnimatedNumbers = (props: CardWithAnimatedNumbersProps) => {
    return (
        <div className="flex flex-row gap-2">
            <div className="flex">
                <div>
                    <AnimatedNumbers value={props.value} />
                </div>
                <p className="
                    lg:mt-[5px] sm:ml-[1px] lg:ml-[2px]
                    text-[12px] sm:text-[16px] lg:text-[24px]
                    font-[satoshi-medium]
                    text-neutral-900
                ">
                    %
                </p>
            </div>
            <div className="flex items-center">
                <p className="
                    inline-block align-middle
                    text-[10px] sm:text-[16px]
                    font-[satoshi-medium]
                    text-neutral-900
                ">
                    {props.title}
                </p>
            </div>
        </div>
    );
};

export default CardWithAnimatedNumbers;
