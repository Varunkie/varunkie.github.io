import { useMouseClick } from '../../utils/hooks/useEvents';

import { Context } from '../../controllers/contexts/ThemeContext';
import React, { useEffect, useContext } from 'react';
import ReactDOM from 'react-dom';

const modal = document.getElementById('modal');
const Container = ({ className = "", children, onClose }) => {
  const [ref, events] = useMouseClick(() => { if (onClose) onClose(null); });
  const { darkMode } = useContext(Context);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return ReactDOM.createPortal(
    <div className={`${className} w-screen h-screen z-50 fixed flex flex-col overflow-y-scroll ${onClose ? 'cursor-pointer' : ''} hide-scroll background-modal ${darkMode ? "dark" : ""}`} ref={ref} {...events}>
      {children}
    </div>
  , modal);
};

export default Container;
