function multiply(x, y) {
  console.log(x * y);
}
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);
multiplyByTwo(6);
let multiplyFixed = multiply.bind(this, 2, 7);
multiplyFixed(5); // will ignore 5 will always give 14
// multiplyFixed(6); // will ignore 5 will always give 14
let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);
multiplyByThree(6);

// this is currying  by bind method

function calc(x) {
  return function calc2(y) {
    console.log(x * y);
  };
}
const calcByTwo = calc(2);
const calcByThree = calc(3);
calcByTwo(8);
calcByTwo(9);
calcByThree(10);

// Currying allows you to create partially applied functions, where you fix some of the arguments in advance and leave the rest to be supplied later
