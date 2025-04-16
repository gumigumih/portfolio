import CryptoJS from 'crypto-js';

const PASSWORD_HASH = import.meta.env.VITE_PASSWORD_HASH;

export function verifyPassword(plain: string): boolean {
  const hashed = CryptoJS.SHA256(plain).toString();
  return hashed === PASSWORD_HASH;
}
