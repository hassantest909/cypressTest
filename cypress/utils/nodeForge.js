const forge = require('node-forge');

export class NodeForgeCrypto {
  encryptData(data, secretKey) {
    const cipher = forge.cipher.createCipher('AES-CBC', secretKey);
    cipher.start({ iv: forge.random.getBytesSync(16) });
    cipher.update(forge.util.createBuffer(data, 'utf8'));
    cipher.finish();
    return {
      iv: forge.util.encode64(cipher.iv),
      encryptedData: forge.util.encode64(cipher.output.getBytes())
    };
  }

  decryptData(encryptedData, secretKey) {
    const decipher = forge.cipher.createDecipher('AES-CBC', secretKey);
    decipher.start({ iv: forge.util.decode64(encryptedData.iv) });
    decipher.update(forge.util.createBuffer(forge.util.decode64(encryptedData.encryptedData)));
    decipher.finish();
    return decipher.output.toString('utf8');
  }
}