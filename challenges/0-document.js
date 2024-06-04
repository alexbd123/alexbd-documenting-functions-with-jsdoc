// TODO (Ex.0): document and write tests for this function

//Test cases
console.log(asNegative(10));
console.log(asNegative(5));
console.log(asNegative(3));
console.log(asNegative(100));
console.log(asNegative(-45));
console.log(asNegative(0));
console.log(asNegative(-300));


/**
 * Takes a number and returns a negative version of the number
 * @param {number} n - input number
 * @returns {number} the negative version of input number
 */
function asNegative(n) {
  if (n <= 0) {
    return n;
  }
  return -n
}

// export { asNegative };
