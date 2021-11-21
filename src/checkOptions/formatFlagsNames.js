function formatFlagsNames(options) {
  return (options = options.map((item) => {
    return item === "--input"
      ? "-i"
      : item === "--output"
      ? "-o"
      : item === "--config"
      ? "-c"
      : item;
  }));
}

module.exports = formatFlagsNames;
