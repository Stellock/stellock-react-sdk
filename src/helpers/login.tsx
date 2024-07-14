import { storeUint8ArrayInLocalStorage } from "./base64Helpers";

const login = async (email: string) => {
  const response = await fetch("http://localhost:3000/get-new-wallet", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email }),
  });

  const keyPart = await response.json();
  storeUint8ArrayInLocalStorage(
    "pkPart1",
    new Uint8Array(keyPart.KeyPart0.data)
  );
};

export default login;
