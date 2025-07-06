import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export const useGsapReveal = (animationConfig = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        y: 50,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 90%",
        },
        ...animationConfig,
      }
    );
  }, []);

  return ref;
};
