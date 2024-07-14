import { getUint8ArrayFromLocalStorage } from "../helpers/base64Helpers";

const ReconstructKeyButton = (email: string) => {
  const getKey = async () => {
    const dataToSend = getUint8ArrayFromLocalStorage("pkPart1");
    const response = await fetch(`http://localhost:3000/get-wallet/${email}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ keyPart1: dataToSend }),
    });
    const data = await response.json();
    console.log(data);
  };
  return <div>Reconstruct</div>;
};

export default ReconstructKeyButton;