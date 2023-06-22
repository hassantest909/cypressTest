const crypto = require('crypto');

export class TestUtils {
    //key 9213eccd434c9bed8848485fefc80d49
    encrypt(text, key) {
        const keyBytes = Buffer.alloc(16);
        const keyBuffer = Buffer.from(key, 'utf-8');
        const len = Math.min(keyBuffer.length, keyBytes.length);
        keyBuffer.copy(keyBytes, 0, 0, len);
        const cipher = crypto.createCipheriv('aes-128-cbc', keyBytes, keyBytes);
        let encrypted = cipher.update(text, 'utf-8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
    }
    //key 9213eccd434c9bed8848485fefc80d49
    decrypt(encryptedText, key) {
        const keyBytes = Buffer.alloc(16);
        const keyBuffer = Buffer.from(key, 'utf-8');
        const len = Math.min(keyBuffer.length, keyBytes.length);
        keyBuffer.copy(keyBytes, 0, 0, len); 
        const decipher = crypto.createDecipheriv('aes-128-cbc', keyBytes, keyBytes);
        let decrypted = decipher.update(encryptedText, 'base64', 'utf-8');
        decrypted += decipher.final('utf-8');
        return decrypted;
      }
}