const caesarCipher = require("./caesarCipher");
const ROT8cipher = require("./ROT8cipher");
const atbashCipher = require("./atbashCipher");

function encrypt(str, encryptionMethod, encriptionDirection) {
  let res;
  switch (encryptionMethod) {
    case "C":
      console.log("caesarCipher");
      res = caesarCipher(str, encriptionDirection);
      break;
    case "R":
      console.log("ROT8cipher");
      res = ROT8cipher(str, encriptionDirection);
      break;
    case "A":
      console.log("atbashCipher");
      res = atbashCipher(str);
      break;
    default:
      console.log("default");
      break;
  }
  return res;
}

module.exports = encrypt;
