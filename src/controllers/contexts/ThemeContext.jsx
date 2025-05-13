import { useLocalStorage } from '../../utils/hooks/useStorage';
import { createContext } from 'react';
export const Context = createContext();

const Provider = ({ className = "", children }) => {
  const defaultDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", defaultDarkMode);

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
