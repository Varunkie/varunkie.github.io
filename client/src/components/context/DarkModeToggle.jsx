import { Context } from "../../controllers/contexts/ThemeContext";
import React, { useContext, useCallback } from "react";

const DarkModeToggle = ({ className = "" }) => {
  const { darkMode, setDarkMode } = useContext(Context);
  const handleClick = useCallback(() => setDarkMode(state => !state), [setDarkMode]); 
  return (
    <button className={`${className} rounded-full cursor-pointer duration-300 ease-in-out`} 
      type="button" onClick={handleClick}>
      <div className={`w-7 h-7 bg-sun dark:bg-half-moon ${darkMode ? `ml-7` : ``} bg-no-repeat bg-cover rounded-full duration-300 ease-in-out`} />
    </button>
  );
};

export default DarkModeToggle;
