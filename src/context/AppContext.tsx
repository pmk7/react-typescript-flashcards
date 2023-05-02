// AppContext.tsx
import { createContext, useContext, useState } from "react";

interface AppContextValue {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
}

const AppContext = createContext<AppContextValue>({
  menuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
});

export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AppContext.Provider value={{ menuOpen, toggleMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  );
};
