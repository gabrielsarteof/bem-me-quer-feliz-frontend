'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ComponentButtonReturnTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-[var(--color-primary-500)] text-white rounded-xl transition cursor-pointer"
        aria-label="Return to top"
      >
        <Image
          src="assets/icons/svg/arrow-top.svg"
          alt="Return to top"
          width={24}
          height={24}
        />
      </button>
    )
  );
};

export default ComponentButtonReturnTop;
