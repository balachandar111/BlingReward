import { useEffect, useRef } from "react";
import "./reveal.css";

/**
 * Scroll-reveal helper.
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal"> <div className="reveal-item" style={{ "--i": 0 }} /> … </div>
 * Adds `is-in` to the wrapper once ~12% of it is visible (runs once).
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (!("IntersectionObserver" in window)) {
      el.classList.add("is-in");
      return undefined;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-in");
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
