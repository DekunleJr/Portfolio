import { useEffect, useState } from 'react';

/**
 * Counts from 0 to `target` once `start` becomes true.
 * Uses requestAnimationFrame with an ease-out curve.
 */
const useCountUp = (target, { duration = 1500, start = false } = {}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;
    if (duration <= 0) {
      setValue(target);
      return undefined;
    }
    if (typeof window === 'undefined' || typeof window.requestAnimationFrame !== 'function') {
      setValue(target);
      return undefined;
    }

    let raf;
    const t0 = window.performance.now();
    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) {
        raf = window.requestAnimationFrame(tick);
      }
    };
    raf = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(raf);
  }, [start, target, duration]);

  return value;
};

export default useCountUp;
