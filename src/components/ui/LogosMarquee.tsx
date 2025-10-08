'use client';
import Marquee from 'react-fast-marquee';
import { useEffect, useState } from 'react';

interface Logo {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

interface LogosMarqueeProps {
  logos?: Logo[];
}

export default function LogoMarquee({ logos = [] }: LogosMarqueeProps) {
  const [gradientWidth, setGradientWidth] = useState(96);

  //diminui o gradiente em telas menores
  useEffect(() => {
    const updateGradient = () => {
      if (window.innerWidth < 640) {
        setGradientWidth(40);
      } else if (window.innerWidth < 768) {
        setGradientWidth(64);
      } else {
        setGradientWidth(96);
      }
    };

    updateGradient();
    window.addEventListener('resize', updateGradient);

    return () => window.removeEventListener('resize', updateGradient);
  }, []);

  return (
    <div className="relative w-full overflow-hidden py-6">
      <Marquee
        gradient={true}
        gradientWidth={gradientWidth}
        speed={50}
        pauseOnHover={true}
      >
        {logos.map(({ src, width, height, className }, i) => (
          <img
            key={i}
            src={src}
            alt={`Logo ${i}`}
            className={`mx-8 object-contain ${className || ''}`}
            style={{
              width: width ? `${width}px` : 'auto',
              height: height ? `${height}px` : 'auto',
            }}
          />
        ))}
      </Marquee>
    </div>
  );
}
