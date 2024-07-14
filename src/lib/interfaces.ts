import { Dispatch, ReactNode, SetStateAction } from "react";

export interface StellockContextType {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export interface StellockProviderProps {
  googleClientId: string;
  twitchClientId: string;
  children: ReactNode;
}

export interface CustomJwtPayload {
  email: string;
}
