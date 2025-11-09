import { useEffect, useRef } from "react";

export function useHorizontalParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      // The main container is the one scrolling, not the window
      const scrollContainer = document.querySelector('.horizontal-scroll-container');
      if (scrollContainer) {
        const offset = scrollContainer.scrollLeft * speed;
        ref.current.style.transform = `translateX(${offset}px)`;
      }
    };

    const scrollContainer = document.querySelector('.horizontal-scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, [speed]);

  return ref;
}
