import { useState, useEffect, useRef } from 'react';

export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current; // Pegue o nó logo no início
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [options]);

  return [ref, isInView] as const;
}
