// map filter reduce
// create map like function
// create array from string
// create array of x to n length

var description = " map => used to transform whole array to new array";
description += " filter => used to filter array by condition to new array";
description +=
  " reduce => iterate all array elements and return single value on functionality";

const array_1 = [1, 2, 19, 3, 15, 4, 11, 5, 6, 7];
function isEven(n) {
  return n % 2 === 0;
}
function isOdd(n) {
  return n % 2;
}
function square(n) {
  return n * n;
}
const evenArr = array_1.filter(isEven);
const oddArr = array_1.filter(isOdd);
const squareArr = array_1.map(square);
const sumArr = array_1.reduce((sum, element) => {
  sum += element;
  return sum;
}, 0); // initial value of sum
const maxArr = array_1.reduce((max, element) => {
  if (max < element) max = element;
  return max;
}, 0); // initial value of sum
// console.log(evenArr, oddArr, squareArr, sumArr, maxArr);
// console.table(evenArr);

// Polyfilly

function areaOfCircle(n) {
  return n * n * Math.PI;
}
Array.prototype.calcArea = function (logic) {
  //  function keyword necessary
  // this Array.prototype creates function like map i.e. Polyfilly
  var output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(parseFloat(logic(this[index]).toFixed(2)));
  }
  return output;
};
// console.log(array_1.calcArea(areaOfCircle));
// console.log(Array.from("ABCDEFGHIJ"));

// create array from single same element
var mr = Math.random();
// console.log(mr, Math.floor(mr * 5));
const nArr = Array(5).fill(1);
const nArr2 = Array(5)
  .fill("")
  .map((element, index) => {
    return Math.floor(Math.random() * 5) + 1;
  });
// console.log(nArr, nArr2);
array_1.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
