import { Dispatch, ReactNode, SetStateAction } from "react";

export interface StellockContextType {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export interface StellockProviderProps {
  children: ReactNode;
}
