import React, { createContext, useContext, useState } from "react";
import { StellockContextType, StellockProviderProps } from "../lib/interfaces";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { TwitchAuthProvider } from "./TwitchProvider";

const StellockContext = createContext<StellockContextType | undefined>(
  undefined
);

export const StellockProvider: React.FC<StellockProviderProps> = ({
  googleClientId,
  twitchClientId,
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <TwitchAuthProvider
        clientId={twitchClientId}
        redirectUri="http://localhost:5173"
        scope="user:read:email"
      >
        <StellockContext.Provider value={{ loggedIn, setLoggedIn }}>
          {children}
        </StellockContext.Provider>
      </TwitchAuthProvider>
    </GoogleOAuthProvider>
  );
};

export const useStellock = (): StellockContextType => {
  const context = useContext(StellockContext);
  if (!context) {
    throw new Error("useStellock must be used within a StellockProvider");
  }
  return context;
};
