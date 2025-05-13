import React, { useLayoutEffect, useState } from 'react';

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
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0});
  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrollPosition({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return scrollPosition;
};
