import { Dispatch, ReactNode, SetStateAction } from "react";

export interface StellockContextType {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export interface StellockProviderProps {
  googleClientId: string;
  twitchClientId: string;
  githubClientId: string;
  redirectUrl: string;
  twitchScope: string;
  githubScope: string;
  children: ReactNode;
}

export interface CustomJwtPayload {
  email: string;
}
