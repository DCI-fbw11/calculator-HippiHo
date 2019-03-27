class Calc {
  constructor(num) {
    this.num = num;
  }
  add(numToAdd) {
    this.throwOnBadDatatype(numToAdd);
    this.num = this.num + numToAdd;
    return this;
  }

  plus(num) {
    return this.add(num);
  }

  subtract(numToSubtract) {
    this.throwOnBadDatatype(numToSubtract);
    this.num = this.num - numToSubtract;
    return this;
  }

  minus(num) {
    this.subtract(num);
  }

  multiply(numToMultiply) {
    this.throwOnBadDatatype(numToMultiply);
    this.num = this.num * numToMultiply;
    return this;
  }

  asterisk(num) {
    this.multiply(num);
  }

  divide(numToDivide) {
    this.throwOnBadDatatype(numToDivide);
    this.num = this.num / numToDivide;
    return this;
  }

  slash(num) {
    this.divide(num);
  }

  throwOnBadDatatype(nextNum) {
    if (typeof nextNum === "string") {
      throw new Error("No strings allowed");
    }

    //This check needs to come before the object test, because typeOf returns object for arrays

    if (Array.isArray(nextNum) === true) {
      throw new Error("No array allowed");
    }

    if (typeof nextNum === "object") {
      throw new Error("No object allowed");
    }

    if (typeof nextNum === "boolean") {
      throw new Error("No boolean allowed");
    }

    if (typeof nextNum === "undefined") {
      throw new Error("No undefined allowed");
    }
  }

  result() {
    return this.num;
  }
}

module.exports = Calc;
