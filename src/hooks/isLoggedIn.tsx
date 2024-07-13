import { useStellock } from "../providers/StellockProvider";

const isLoggedIn = (): boolean => {
  const stellock = useStellock();

  return stellock.loggedIn ? true : false;
};

export default isLoggedIn;
