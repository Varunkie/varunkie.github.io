import { useMouseClick } from '../../utils/hooks/useEvents';

import { Context } from '../../controllers/contexts/ThemeContext';
import { useContext } from 'react';
import ReactDOM from 'react-dom';

const modal = document.getElementById('modal');
const Container = ({ className = "", style = {}, children }) => {
  const { darkMode } = useContext(Context);

  return ReactDOM.createPortal(
    <div className={`${className} w-screen h-screen fixed flex flex-col ${darkMode ? "dark" : ""}`} 
      style={style}>
      {children}
    </div>
  , modal);
};

export default Container;
