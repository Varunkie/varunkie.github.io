import tokens from "../../resources/constants/routes/token.routes";
import { useLocalStorage } from '../../utils/hooks/useStorage';
import React, { createContext } from 'react';
export const Context = createContext();

const Provider = ({ className = "", children }) => {
  const defaultDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useLocalStorage(tokens.darkMode, defaultDarkMode);

  return (
    <Context.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>
        <div className={`${className} h-auto min-h-screen flex flex-col`}>
          {children}
        </div>
      </div>
    </Context.Provider>
  );
}

export default Provider;
