import CryptoJS from 'crypto-js';
import config from '../../config';

export const encrypt = (payload: string) => {
  try {
    const secretKey = config.cryptoKey;
    if (!secretKey) {
      throw Error('F800008');
    }
    const encrypted = CryptoJS.AES.encrypt(payload, secretKey).toString();
    return encrypted;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};

export const decrypt = (encrypted: string) => {
  try {
    const secretKey = config.cryptoKey;
    if (!secretKey) {
      throw Error('F800008');
    }
    const decryptedBytes = CryptoJS.AES.decrypt(encrypted, secretKey);
    const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
  } catch (error) {
    console.log(error.message);
    throw Error(error.message);
  }
};
