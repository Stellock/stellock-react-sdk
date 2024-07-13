import React, { createContext, useContext, useState } from "react";
import { StellockContextType, StellockProviderProps } from "../lib/interfaces";

const StellockContext = createContext<StellockContextType | undefined>(
  undefined
);

export const StellockProvider: React.FC<StellockProviderProps> = ({
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <StellockContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </StellockContext.Provider>
  );
};

export const useStellock = (): StellockContextType => {
  const context = useContext(StellockContext);
  if (!context) {
    throw new Error("useStellock must be used within a StellockProvider");
  }
  return context;
};
