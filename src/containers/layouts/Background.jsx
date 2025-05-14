import { useWindowScroll, useWindowSize } from '../../utils/hooks/useWindow';
import { useScrollAnimation } from '../../utils/hooks/useAnimation';
import { useMemo, useCallback, useState } from "react";

const Background = ({ src = "", naturalWidth = 1, naturalHeight = 1, parallaxSpeed = 0 }) => {
  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [position, setPosition] = useState(0);
  //const { y: yScroll } = useWindowScroll();
  
  const maxHeight = useMemo(() => {
    const innerHeight = (windowWidth * naturalHeight) / naturalWidth;
    return Math.min(windowHeight - innerHeight, 0);
  }, [naturalWidth, naturalHeight, windowWidth, windowHeight]);

  /*const lgPosition = useMemo(() => {
    return Math.max(Math.round(yScroll * -parallaxSpeed), maxHeight);
  }, [parallaxSpeed, yScroll, maxHeight]);*/

  useScrollAnimation(useCallback((scrollY) => {
    setPosition(Math.max(Math.round(scrollY * -parallaxSpeed), maxHeight));
  }, [maxHeight]));

  return (
    <>
      <div className="z-0 w-full h-screen bg-cover bg-no-repeat 
        size-[200%_auto] sm:bg-size-[125%_auto] md:bg-size-[125%_auto] lg:bg-size-[100%_auto]"
        style={{ backgroundImage: `url(${src})`, backgroundPosition: `50% ${position}px` }}>
        
      </div>
    </>
  );
};

export default Background;
