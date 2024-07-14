import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthData {
  token: string;
}

interface TwitchAuthContextType {
  authData: AuthData | null;
  login: () => void;
  logout: () => void;
}

const TwitchAuthContext = createContext<TwitchAuthContextType | undefined>(
  undefined
);

interface TwitchAuthProviderProps {
  clientId: string;
  redirectUri: string;
  scope: string;
  children: ReactNode;
}

export const TwitchAuthProvider: React.FC<TwitchAuthProviderProps> = ({
  clientId,
  redirectUri,
  scope,
  children,
}) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  const login = () => {
    window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;
  };

  const logout = () => {
    setAuthData(null);
    // Optionally, clear tokens from localStorage or cookies
  };

  const handleAuthResponse = (hash: string) => {
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");

    if (token) {
      setAuthData({ token });
      // Store the token as needed (e.g., localStorage)
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      handleAuthResponse(hash);
    }
  }, []);

  return (
    <TwitchAuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </TwitchAuthContext.Provider>
  );
};

export const useTwitchAuth = (): TwitchAuthContextType => {
  const context = React.useContext(TwitchAuthContext);
  if (!context) {
    throw new Error("useTwitchAuth must be used within a TwitchAuthProvider");
  }
  return context;
};
