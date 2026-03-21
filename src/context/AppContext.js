import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [dark, setDark] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );
  const [lang, setLang] = useState(
    () => localStorage.getItem('lang') || 'en'
  );

  const handleDark = (val) => {
    setDark(val);
    localStorage.setItem('theme', val ? 'dark' : 'light');
  };
  const handleLang = (val) => {
    setLang(val);
    localStorage.setItem('lang', val);
  };

  return (
    <AppContext.Provider value={{ dark, setDark: handleDark, lang, setLang: handleLang }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() { return useContext(AppContext); }
