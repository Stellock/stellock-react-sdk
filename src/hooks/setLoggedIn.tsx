import { useStellock } from "../providers/StellockProvider";

const setLoggedIn = (state: boolean): void => {
  const stellock = useStellock();

  stellock.setLoggedIn(state);
};

export default setLoggedIn;
