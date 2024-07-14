import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthData {
  token: string;
}

interface GithubAuthContextType {
  authData: AuthData | null;
  login: () => void;
  logout: () => void;
  handleAuthResponse: (hash: string) => void;
}

const GithubAuthContext = createContext<GithubAuthContextType | undefined>(
  undefined
);

interface GithubAuthProviderProps {
  clientId: string;
  redirectUrl: string;
  scope: string;
  children: ReactNode;
}

export const GithubAuthProvider: React.FC<GithubAuthProviderProps> = ({
  clientId,
  redirectUrl,
  scope,
  children,
}) => {
  const [authData, setAuthData] = useState<AuthData | null>(null);

  const login = () => {
    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope}&response_type=token`;
  };

  const logout = () => {
    setAuthData(null);
    // Optionally, clear tokens from localStorage or cookies
  };

  const handleAuthResponse = (hash: string) => {
    const params = new URLSearchParams(hash.replace("#", "?"));
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
    <GithubAuthContext.Provider
      value={{ authData, login, logout, handleAuthResponse }}
    >
      {children}
    </GithubAuthContext.Provider>
  );
};

export const useGithubAuth = (): GithubAuthContextType => {
  const context = React.useContext(GithubAuthContext);
  if (!context) {
    throw new Error("useGithubAuth must be used within a GithubAuthProvider");
  }
  return context;
};
