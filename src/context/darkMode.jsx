import React, { createContext, useState, useMemo } from 'react';

const DarkModeContext = createContext();
const darkModeValue = localStorage.getItem('darkmode');

const initialTheme = darkModeValue ? JSON.parse(darkModeValue) : false;

const ProviderDarkMode = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(initialTheme);

  const contextValue = useMemo(() => ({ isDarkMode, setIsDarkMode }), [isDarkMode, setIsDarkMode]);

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, ProviderDarkMode };
