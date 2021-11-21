function missingCOption(options) {
  if (options.filter((item) => item === "-c").length < 1) {
    return true;
  }
  return false;
}

module.exports = missingCOption;
