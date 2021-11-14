function atbashCipher(str) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const cipherLetters = "ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba";
  return str
    .split("")
    .map((letter) => {
      const index = letters.indexOf(letter);
      if (index > -1) {
        return cipherLetters[index];
      } else {
        return letter;
      }
    })
    .join("");
}

module.exports = atbashCipher;
