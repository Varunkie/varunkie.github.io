import { useMouseClick } from '../../utils/hooks/useEvents';

import { Context } from '../../controllers/contexts/ThemeContext';
import { useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ id = "modal", className = "", style = {}, children }) => {
  const { darkMode } = useContext(Context);

  return ReactDOM.createPortal(
    <div className={`${className} w-screen h-screen fixed flex flex-col ${darkMode ? "dark" : ""}`} 
      style={style}>
      {children}
    </div>
  , document.getElementById(id));
};

export const ModalPopup = ({ id = "modal", className = "", style = {}, children, onClose }) => {
  const [ref, events] = useMouseClick(() => { if (onClose) onClose(null); });
  const { darkMode } = useContext(Context);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => document.body.style.overflow = 'unset';
  }, []);

  return ReactDOM.createPortal(
    <div className={`${className} w-screen h-screen fixed flex flex-col ${onClose ? 'cursor-pointer' : ''} hide-scroll bg-modal ${darkMode ? "dark" : ""} z-50`} 
      ref={ref} style={style} {...events}>
      {children}
    </div>
  , document.getElementById(id));
};

export default Modal;
