# Higher Order Function

> Higher Order Function is which takes another function as argument or returns functions

## Example

```js
function x() {
  console.log("x");
}
function y(x) {
  x();
}
```

## Old Approach

```js
const radius = [1, 3, 4, 7, 5];
function calculateArea(array) {
  var output = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index] * array[index] * Math.PI;
    output.push(element);
  }
  return output;
}
function calculateCircumference(array) {
  var output = [];
  for (let index = 0; index < array.length; index++) {
    const element = 2 * array[index] * Math.PI;
    output.push(element);
  }
  return output;
}
function calculateDiameter(array) {
  var output = [];
  for (let index = 0; index < array.length; index++) {
    const element = 2 * array[index];
    output.push(element);
  }
  return output;
}
console.log(calculateArea(radius));
console.log(calculateCircumference(radius));
console.log(calculateDiameter(radius));
```

## Modular, DRY code

- don't use above function instead use higher order function

```js
function area(x) {
  return x * x * Math.PI;
}
function surface(x) {
  return 2 * x * Math.PI;
}
function diameter(x) {
  return 2 * x;
}
function calculate(array, logic) {
  var output = [];
  for (let index = 0; index < array.length; index++) {
    output.push(logic(array[index]));
  }
  return output;
}
console.log(calculate(radius, area));
console.log(calculate(radius, surface));
console.log(calculate(radius, diameter));
console.log(radius.map(area));
```

## Use polyfill which will work on array

```js
Array.prototype.calc = function (logic) {
  var output = [];
  for (let index = 0; index < this.length; index++) {
    output.push(logic(this[index]));
  }
  return output;
};
console.log(radius.calc(area));
```

## map

- it used when transform whole array in to new variable

```js
const arr = [1, 4, 3, 8, 23, 5];
function double(x) {
  return x * 2;
}
let o1 = arr.map(double);
let o2 = arr.map(function triple(x) {
  return x * 3;
});
let o3 = arr.map((x) => x.toString(2)); // if single line return only use this
console.log(o1, o2, o3);
```

## filter

- it used filter array element on basis of the condition to new variable

```js
const arr = [1, 4, 3, 8, 23, 5];
function isODD(x) {
  return x % 2;
}
function isEven(x) {
  return x % 2 === 0;
}
let o4 = arr.filter(isODD);
let o5 = arr.filter(isEven);
console.log(o4, o5);
```

## reduce

- iterate all array elements and return a single value upon functionality

```js
const arr = [1, 4, 3, 8, 23, 5];
const sum = arr.reduce(function (sum, currentElement) {
  sum += currentElement;
  return sum;
}, 0); // 0 is sum's initial value
const max = arr.reduce(function (max, currentElement) {
  if (element > max) {
    max = currentElement;
  }
  return max;
}, 0); // 0 is max's initial value
console.log(sum, max);
```
