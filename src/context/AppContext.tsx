// AppContext.tsx
import { createContext, useContext, useState } from "react";

interface AppContextValue {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const AppContext = createContext<AppContextValue>({
  menuOpen: false,
  toggleMenu: () => {},
});

export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu");
    setMenuOpen(!menuOpen);
  };

  return (
    <AppContext.Provider value={{ menuOpen, toggleMenu }}>
      {children}
    </AppContext.Provider>
  );
};
