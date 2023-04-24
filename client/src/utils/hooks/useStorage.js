/**
 * Storage hooks module.
 * @module hooks/storage
 */

import { useState , useCallback } from 'react';

/**
 * Set given value to local storage.
 */
export const setLocalStorage = (key, value, type = 'object') => {
  const item = type === 'object' ? JSON.stringify(value) : value;
  window.localStorage.setItem(key, item); return value;
};

/**
 * Get value from given key in local storage.
 */
export const getLocalStorage = (key, type = 'object') => {
  const item = window.localStorage.getItem(key);
  return item && type === 'object' ? JSON.parse(item) : item;
};

/**
 * Returns a stateful local storage value, and a function to update it.
 */
export const useLocalStorage = (key, initialValue = {}, type ="object") => {
  const [local, setLocal] = useState(() => {
    try {
      const item = getLocalStorage(key, type); if (item === null) {
        return setLocalStorage(key, initialValue, type);
      } return item;
    } catch (e) {
      return initialValue;
    }
  });

  const setValue = useCallback(value => {
    setLocal((state) => { try {
      const result = typeof value === "function" ? value(state) : value;
      setLocalStorage(key, result, type); return result;
    } catch (e) { return state; }}); 
  }, [key, type]);
  
  return [local, setValue];
};