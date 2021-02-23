const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.map(array => array.filter(item => item === '^^').length).reduce((acc, curr) => acc + curr, 0)
};
