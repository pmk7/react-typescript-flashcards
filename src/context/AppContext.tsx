import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface AppContextValue {
  menuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  loginWithRedirect: () => void;
  logout: () => void;
  myUser: any;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: any;
}

const AppContext = createContext<AppContextValue>({
  menuOpen: false,
  toggleMenu: () => {},
  closeMenu: () => {},
  loginWithRedirect: () => {},
  logout: () => {},
  myUser: null,
  isLoading: false,
  isAuthenticated: false,
  user: null,
});

export const useAppContext = () => useContext(AppContext);

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();
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
        isLoading,
        user,
        logout,
        isAuthenticated,
        myUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
