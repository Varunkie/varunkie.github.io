import { useLocalStorage } from '../../utils/hooks/useStorage';
import { createContext } from 'react';
export const Context = createContext();

const template = {};

const Provider = ({ children }) => {
  const [localData, setLocalData] = useLocalStorage("local-data", template);

  return (
    <Context.Provider value={{ localData, setLocalData }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
