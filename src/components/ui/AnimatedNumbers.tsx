"use client";
import { animated, useSpring } from '@react-spring/web';
import { useInView } from '../../hooks/useInView';
import { useEffect, useRef, useState } from 'react';

interface AnimatedNumberProps {
    value: number;
}

function AnimatedNumbers(props: AnimatedNumberProps) {
    const [ref, isInView] = useInView({
        threshold: 0.01,
    });

    const [width, setWidth] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const tempElement = document.createElement('div');
            tempElement.style.cssText = `
                position: absolute;
                visibility: hidden;
                font-family: inherit;
                font-size: 48px;
                font-weight: 900;
            `;
            tempElement.textContent = '100';
            document.body.appendChild(tempElement);
            setWidth(tempElement.offsetWidth);
            document.body.removeChild(tempElement);
        }
    }, []);

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
            ref={containerRef}
            className="inline-block"
            style={{ minWidth: `${width - 14}px` }}
        >
            <animated.div
                ref={ref}
                className="inline-block text-[48px] font-[satoshi-black] text-black"
            >
                {number.number.to((n) => n.toFixed(0))}
            </animated.div>
        </div>
    );
}

export default AnimatedNumbers;
