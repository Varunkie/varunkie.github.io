import { useRef, useLayoutEffect, useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [size, setSize] = useState({ width: 0, height: 0});
  useLayoutEffect(() => {
    function updateSize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const useWindowScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  useLayoutEffect(() => {
    const handleScroll = (e) => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollPosition;
};

export const useResizeObserver = (containerRef) => {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef && containerRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          setSize({
            width: entry.contentRect.width,
            height: entry.contentRect.height,
          });
        }
      });

      resizeObserver.observe(containerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [containerRef]);

  return size;
};
