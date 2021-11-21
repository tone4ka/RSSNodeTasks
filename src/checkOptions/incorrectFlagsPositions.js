function incorrectFlagsPositions(options) {
  const isCorrectPos = options.reduce((result, item, index) => {
    if (index === 0 || index % 2 === 0) {
      return result && (item === "-c" || item === "-i" || item === "-o");
    } else {
      return result;
    }
  }, true);
  return !isCorrectPos;
}

module.exports = incorrectFlagsPositions;
