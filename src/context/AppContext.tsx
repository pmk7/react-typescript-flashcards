import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface AppContextValue {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  loginWithRedirect: () => void;
  logout: () => void;
  myUser: any;
}

const AppContext = createContext<AppContextValue>({
  menuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
  loginWithRedirect: () => {},
  logout: () => {},
  myUser: null,
});

export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect, logout, user } = useAuth0();
  const [myUser, setMyUser] = useState<any>(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        menuOpen,
        toggleMenu,
        closeMenu,
        loginWithRedirect,
        logout,
        myUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
