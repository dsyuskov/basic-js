const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(value)
    
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position || position > this.result.length-1)) {
      this.result = [];
      throw new Error();
    }

    this.result.splice(position-1, 1)
    
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const length = this.result.length;
    
    const result = this.result.map((item, index) => {
      if (length === 1) {
        return `( ${item} )`
      }
      if (index === 0) {
        return `( ${item} )~`
      }
      if (index === length - 1) {
        return `~( ${item} )`
      }
      return `~( ${item} )~`
    }).join('');
    this.result = [];
    return result;
  }
};

module.exports = chainMaker;
