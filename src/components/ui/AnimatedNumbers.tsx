"use client";
import { animated, useSpring } from '@react-spring/web';
import { useInView } from '../../hooks/useInView';

interface AnimatedNumberProps {
    value: number;
}

function AnimatedNumbers(props: AnimatedNumberProps) {
    const [ref, isInView] = useInView({
        threshold: 0.01,
    });

    const slowEaseInOut = (t: number) => {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const number = useSpring({
        from: { number: 0 },
        to: { number: isInView ? props.value : 0 },
        config: {
            duration: 3000,
            easing: slowEaseInOut,
        },
        delay: 100, 
    });

    return (
        <div
            className="
                inline-block
                min-w-[26px] sm:min-w-[35px] md:min-w-[40px] lg:min-w-[65px]
            "
        >
            <animated.div
                ref={ref}
                className="
                    inline-block
                    text-[20px] sm:text-[24px] md:text-[30px] lg:text-[48px]
                    font-satoshi
                    text-black
                "
            >
                {number.number.to((n) => n.toFixed(0))}
            </animated.div>
        </div>
    );
}

export default AnimatedNumbers;
