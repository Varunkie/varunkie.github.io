import { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

export const useBrowserAnimation = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  const onAnimationEnded = useCallback(() => {
    if (transitionStage === "fadeOut") {
      setTransistionStage("fadeIn");
      setDisplayLocation(location);
    }
  }, [transitionStage, location]);

  return { displayLocation, transitionStage, onAnimationEnded };
};

export const useScrollAnimation = (onScroll = () => {}) => {
  
  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => onScroll(window.scrollY)); 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);
  
  /*
  useEffect(() => {
    const handleScroll = (event) => { 
      event.preventDefault();
      const nextScrollY = window.scrollY + event.deltaY;
      onScroll(nextScrollY);
      window.scrollTo(0, nextScrollY);
    };

    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScroll]);
  */
};
