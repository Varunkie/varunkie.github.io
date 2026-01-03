import { Suspense, useRef, useEffect, useState } from 'react';

import Theme from '../../controllers/contexts/ThemeContext';
import Data from '../../controllers/contexts/DataContext';

const Layout = ({ children, transitionStage, displayLocation, ...rest }) => {
  const [muted, setMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.volume = 0.25;
  }, [audioRef.current]);

  useEffect(() => {
    audioRef.current.muted = muted;
    if (!muted) audioRef.current.play();
  }, [muted]);

  return (
    <Data>
      <Theme className={`text-font outfit relative flex flex-col bg-div selection:bg-select selection:text-select-bold`}>
        <div className="fixed w-20 h-20 z-10 flex justify-end items-end">
          <audio autoPlay loop muted ref={audioRef}>
            <source src="theme.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
          <img className={`w-20 h-20 ${muted ? "" : "animate-spin"}`}
            src="https://play-lh.googleusercontent.com/zb-Yzb6XK3F05ebqRJ1MxjN6vv0hA7Fn3nT6u1nhAX-znEPCKJsuaM7bigsWFI90jy1l" alt=""
            onClick={e => setMuted(temp => !temp)} />
        </div>
        
        <Suspense fallback={<main className="min-h-screen grow" />}>
          <main className={`${transitionStage} grow flex flex-col relative`} {...rest}>
            {children}
          </main>
        </Suspense>
      </Theme>
    </Data>
  );
};

export default Layout;
