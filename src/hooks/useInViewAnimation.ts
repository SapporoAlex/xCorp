import { useEffect, useRef } from "react";

export function useInViewAnimation(className: string) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new window.IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                el.classList.add(className);
                observer.unobserve(el);
            }
        },
        { threshold: 0.2 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [className]);

  return ref;
} 