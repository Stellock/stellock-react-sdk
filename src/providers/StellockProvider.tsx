import React, { createContext, useContext, useState } from "react";
import { StellockContextType, StellockProviderProps } from "../lib/interfaces";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { TwitchAuthProvider } from "./TwitchProvider";
import { GithubAuthProvider } from "./GithubProvider";

const StellockContext = createContext<StellockContextType | undefined>(
  undefined
);

export const StellockProvider: React.FC<StellockProviderProps> = ({
  googleClientId,
  twitchClientId,
  githubClientId,
  redirectUrl,
  twitchScope,
  githubScope,
  children,
}) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <TwitchAuthProvider
        clientId={twitchClientId}
        redirectUri={redirectUrl}
        scope={twitchScope}
      >
        <GithubAuthProvider
          clientId={githubClientId}
          redirectUrl={redirectUrl}
          scope={githubScope}
        >
          <StellockContext.Provider value={{ loggedIn, setLoggedIn }}>
            {children}
          </StellockContext.Provider>
        </GithubAuthProvider>
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
