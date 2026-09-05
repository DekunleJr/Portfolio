import { useEffect, useRef, useState } from 'react';

/**
 * Observes an element and reports when it first enters the viewport.
 * Falls back to "always visible" when IntersectionObserver is unavailable.
 */
const useInView = ({ threshold = 0.12, rootMargin = '0px 0px -8% 0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};

export default useInView;
