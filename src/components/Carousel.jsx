import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Carousel.css";

/**
 * Reusable carousel built on native scroll-snap.
 *
 *  - Slides per view is controlled in CSS with the `--pv` custom property, so
 *    each usage can set it per breakpoint (no JS resize logic needed).
 *  - Autoplay (ms) pauses on hover / focus / touch / drag, when the carousel is
 *    off-screen, and is disabled entirely for `prefers-reduced-motion`.
 *  - Mouse drag, touch swipe, keyboard arrows, arrow buttons and progress dots.
 */
function Carousel({
  children,
  className = "",
  label = "Carousel",
  autoplay = 0,
  loop = true,
  arrows = true,
  dots = true,
  tone = "light", // "light" | "dark" – controls arrow/dot colours
  controlsAlign = "between", // "between" | "center" | "end"
}) {
  const slides = React.Children.toArray(children);
  const trackRef = useRef(null);
  const rootRef = useRef(null);
  const points = useRef([0]);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const [pages, setPages] = useState(1);
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const [inView, setInView] = useState(true);

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- measure snap points (works for any slides-per-view) ---- */
  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = Math.max(0, el.scrollWidth - el.clientWidth);
    const padLeft = parseFloat(getComputedStyle(el).paddingLeft) || 0;
    const pts = [];
    Array.from(el.children).forEach((child) => {
      const x = Math.round(Math.min(Math.max(child.offsetLeft - padLeft, 0), max));
      if (!pts.includes(x)) pts.push(x);
    });
    pts.sort((a, b) => a - b);
    points.current = pts.length ? pts : [0];
    setPages(points.current.length);
  }, []);

  const nearest = useCallback(() => {
    const el = trackRef.current;
    if (!el) return 0;
    let best = 0;
    let bestDist = Infinity;
    points.current.forEach((p, i) => {
      const d = Math.abs(p - el.scrollLeft);
      if (d < bestDist) {
        bestDist = d;
        best = i;
      }
    });
    return best;
  }, []);

  const goTo = useCallback(
    (i) => {
      const el = trackRef.current;
      if (!el) return;
      const idx = Math.max(0, Math.min(i, points.current.length - 1));
      el.scrollTo({ left: points.current[idx], behavior: reduced ? "auto" : "smooth" });
    },
    [reduced]
  );

  const next = useCallback(() => {
    const i = nearest();
    if (i >= points.current.length - 1) {
      if (loop) goTo(0);
    } else {
      goTo(i + 1);
    }
  }, [goTo, loop, nearest]);

  const prev = useCallback(() => {
    const i = nearest();
    if (i <= 0) {
      if (loop) goTo(points.current.length - 1);
    } else {
      goTo(i - 1);
    }
  }, [goTo, loop, nearest]);

  /* ---- layout + scroll tracking ---- */
  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el || typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    Array.from(el.children).forEach((c) => ro.observe(c));
    return () => ro.disconnect();
  }, [measure, slides.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return undefined;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setActive(nearest()));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [nearest]);

  /* ---- only autoplay while visible ---- */
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const running = Boolean(autoplay) && !reduced && !hold && inView && pages > 1;

  useEffect(() => {
    if (!running) return undefined;
    const t = setTimeout(next, autoplay);
    return () => clearTimeout(t);
  }, [running, autoplay, active, next]);

  /* ---- mouse drag (touch uses native scrolling) ---- */
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    const el = trackRef.current;
    drag.current = { active: true, startX: e.clientX, startLeft: el.scrollLeft, moved: false };
    setHold(true);

    const move = (ev) => {
      const dx = ev.clientX - drag.current.startX;
      if (Math.abs(dx) > 5 && !drag.current.moved) {
        drag.current.moved = true;
        el.classList.add("is-dragging");
      }
      if (drag.current.moved) el.scrollLeft = drag.current.startLeft - dx;
    };
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      el.classList.remove("is-dragging");
      if (drag.current.moved) goTo(nearest());
      drag.current.active = false;
      setHold(false);
      // let the click-capture handler see `moved`, then reset
      setTimeout(() => {
        drag.current.moved = false;
      }, 0);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
  };

  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  const showControls = pages > 1 && (arrows || dots);

  return (
    <div
      ref={rootRef}
      className={`carousel carousel--${tone} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHold(true)}
      onPointerLeave={(e) =>
        e.pointerType === "mouse" && !drag.current.active && setHold(false)
      }
      onFocus={() => setHold(true)}
      onBlur={() => setHold(false)}
      onTouchStart={() => setHold(true)}
      onTouchEnd={() => setHold(false)}
    >
      <div
        className="carousel__track"
        ref={trackRef}
        tabIndex={0}
        onPointerDown={onPointerDown}
        onClickCapture={onClickCapture}
        onKeyDown={onKeyDown}
        onDragStart={(e) => e.preventDefault()}
      >
        {slides.map((slide, i) => (
          <div
            className="carousel__slide"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            key={slide.key ?? i}
          >
            {slide}
          </div>
        ))}
      </div>

      {showControls && (
        <div className={`carousel__controls is-${controlsAlign}`}>
          {dots ? (
            <div className="carousel__dots" role="tablist" aria-label={`${label} slides`}>
              {Array.from({ length: pages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`carousel__dot ${i === active ? "is-active" : ""}`}
                  onClick={() => goTo(i)}
                >
                  {i === active && running && (
                    <span
                      className="carousel__dot-fill"
                      key={`${active}-run`}
                      style={{ animationDuration: `${autoplay}ms` }}
                    />
                  )}
                </button>
              ))}
            </div>
          ) : (
            <span />
          )}

          {arrows && (
            <div className="carousel__arrows">
              <button
                type="button"
                className="carousel__arrow"
                onClick={prev}
                aria-label="Previous slide"
                disabled={!loop && active === 0}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                className="carousel__arrow"
                onClick={next}
                aria-label="Next slide"
                disabled={!loop && active === pages - 1}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Carousel;
