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
