function incorrectOptNames(options) {
  const incorrectOptNamesArr = options.filter((item) => {
    if (item[0] === "-") {
      return (
        item.length != 2 ||
        !(item[1] === "c" || item[1] === "i" || item[1] === "o")
      );
    }
    return false;
  });
  if (incorrectOptNamesArr.length > 0) {
    return true;
  }
  return false;
}

module.exports = incorrectOptNames;
