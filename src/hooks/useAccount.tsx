import { useStellock } from "../providers/StellockProvider";

export const useAccount = (): string | null => {
  const stellock = useStellock();

  try {
    if (!stellock.loggedIn) {
      throw new Error("Not Logged In");
    }

    // await fetch()
    return "account";
  } catch (error) {
    console.error(error);
    return null;
  }
};
