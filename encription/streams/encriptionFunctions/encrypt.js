const caesarCipher = require("./caesarCipher");
const ROT8cipher = require("./ROT8cipher");
const atbashCipher = require("./atbashCipher");

function encrypt(str, encryptionMethod, encriptionDirection) {
  let res;
  switch (encryptionMethod) {
    case "C":
      res = caesarCipher(str, encriptionDirection);
      break;
    case "R":
      res = ROT8cipher(str, encriptionDirection);
      break;
    case "A":
      res = atbashCipher(str);
      break;
    default:
      break;
  }
  return res;
}

module.exports = encrypt;
