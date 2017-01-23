function processSass(data, filename) {
  var result;

  result = sass.renderSync({
    data: data,
    file: filename,
  }).css;

  return result.toString('utf8');
};

module.exports = processSass;
