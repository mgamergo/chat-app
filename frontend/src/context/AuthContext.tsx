import { createContext, useContext, useState, ReactNode } from "react";

type AuthContextType = {
  authUser: {};
  setAuthUser: (user: any) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return context;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [authUser, setAuthUser] = useState<any>(JSON.parse(localStorage.getItem("chat-user")!) || null); 

  return <AuthContext.Provider value={{ authUser, setAuthUser }}>{children}</AuthContext.Provider>;
};


//TODO: You stopped here. Set the localstorage item and complete the type definitions in this file