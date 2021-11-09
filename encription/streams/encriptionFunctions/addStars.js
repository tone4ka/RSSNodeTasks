function addStars(str, encryptionMethod, encriptionDirection) {
  console.log(str);
  return `${str}${encryptionMethod}${encriptionDirection}`;
  // str
  //   .split("")
  //   .map((letter) => `${letter}${encryptionMethod}${encriptionDirection}`)
  //   .join("");
}

module.exports = addStars;
