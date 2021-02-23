const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const result = [];

  let task = null;
  let prev = null;

  arr.forEach((item) => {
    switch (item) {
      case "--discard-next": {
        task = "--discard-next";
        break;
      }
      case "--discard-prev": {
        result.pop();
        break;
      }
      case "--double-next": {
        task = "--double-next";
        break;
      }
      case "--double-prev": {
        result.push(prev);
        break;
      }
      default: {
        prev = item;
        if (task === "--double-next") {
          result.push(item);
        }
        if (task !== "--discard-next") {
          result.push(item);
        }
        
        if (task === "--discard-next") {
          prev = null;
          result.push(null)
        }
        task = null;
      }
    }
  });
  
  return result.filter(item => item !== null);
}
