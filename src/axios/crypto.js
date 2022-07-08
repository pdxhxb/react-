const CryptoJS = require('crypto-js')
const key = CryptoJS.enc.Utf8.parse("0000000000000000");
const iv = CryptoJS.enc.Utf8.parse("0000000000000000");


function decrypt(data) {
  let dat = data.replace(/[\n]/g, '')
  const encrypted = CryptoJS.AES.decrypt(dat, key, {
    iv: iv,
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
    // padding: CryptoJS.pad.NoPadding
  });

  const decryptedStr = encrypted.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedStr);
}
export default decrypt