export function uint8ArrayToBase64(uint8Array: Uint8Array) {
  let binary = "";
  const len = uint8Array.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binary);
}

export function base64ToUint8Array(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

export function storeUint8ArrayInLocalStorage(
  key: string,
  uint8Array: Uint8Array
) {
  const base64String = uint8ArrayToBase64(uint8Array);
  localStorage.setItem(key, base64String);
}

export function getUint8ArrayFromLocalStorage(key: string) {
  const base64String = localStorage.getItem(key);
  if (base64String) {
    return base64ToUint8Array(base64String);
  }
  return null;
}
