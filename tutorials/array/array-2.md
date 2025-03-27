# Javascript array

> JavaScript's Array prototype provides a rich set of methods that enhance array manipulation and functionality. These methods are available to all array instances, making them incredibly powerful.

## Array Prototype Iteration Methods:

### foreach

- The forEach() method calls a function for each element in an array.

- The forEach() method is not executed for empty elements.

```js
const a = [1, 4, 3, 15, 6, 7, 43, 21, 54, 49];

let sum = 0;
a.forEach((item, index) => {
  console.log(item, index); // 1 0, 4 1 ....
  sum += item;
});
console.log(sum); // 203
```

### map

- Creates a new array
- populated with the results of calling a provided function on every element in the calling array.

```js
const a = [1, 4, 3, 15, 6, 7, 43, 21, 54, 49];

let a1 = a.map((item, index) => {
  console.log(item, index); // 1 0, 4 1 ....
  return item * 2;
});
console.log(a1); // [ 2,  8,  6,  30, 12, 14, 86, 42, 108, 98 ]
let a2 = a.map((item) => item * item);
console.log(a2); //[ 1,   16,    9, 225, 36,   49, 1849, 441, 2916, 2401 ]
function square(i) {
  return i * i;
}
let a3 = a.map(square);
console.log(a3); // [ 1,   16,    9, 225, 36,   49, 1849, 441, 2916, 2401 ]
```

### filter

- Creates a new array with all elements that pass the test implemented by the provided function.

```js
const a = [1, 4, 3, 15, 6, 7, 43, 21, 54, 49];

let a1 = a.filter((item, index) => {
  console.log(item, index); // 1 0, 4 1 ....
  return item % 2 == 0;
});
console.log(a1); // [ 4, 6, 54 ]
let a2 = a.filter((item) => item % 2 == 0);
console.log(a2); // [ 4, 6, 54 ]
function isEven(i) {
  return i % 2 == 0;
}
let a3 = a.filter(isEven);
console.log(a3); // [ 4, 6, 54 ]; blank for if not found
```

### reduce

- iterates over an array, applying a reducer function to each element, accumulating a single output value

```js
const a = [1, 4, 3, 15, 6, 7, 43, 21, 54, 49];

let sum = a.reduce((carry, item, index) => {
  console.log(carry, item, index); // 0 1 0,1 4 1 ,5 3 2,8 15 3
  return (carry += item);
}, 0);
console.log(sum); // 203

function add(c, i) {
  return c + i;
}
let sum2 = a.reduce(add, 0);
let sum3 = a.reduce(add, 100);
console.log(sum2, sum3); // 203 303; return initial value if condition not satisfied
```

### Find

- Returns the value of the first element in the provided array that satisfies the provided testing function

```js
const a = [1, 4, 3, 15, 6, 7, 43, 21, 54, 49];

let findItem = a.find((item, index) => {
  console.log(item, index); // 1 0, 4 1 and stops
  return item % 2 == 0;
}, 0);
console.log(findItem); // 4

function findElement(c) {
  return c == 15;
}
let findItem2 = a.find(findElement);
console.log(findItem2); // 15; undefined if not find; works on also object element
```

### findIndex

- Returns the index of the first element in the array that satisfies the provided testing function

```js
const a = [1, 4, 3, 15, 6, 7, 43, 21, 54, 49];

let findItem = a.findIndex((item, index) => {
  console.log(item, index); // 1 0, 4 1 and stops
  return item % 2 == 0;
}, 0);
console.log(findItem); // 1; -1 if not find; works on also object element

function findElement(c) {
  return c == 15;
}
let findItem2 = a.findIndex(findElement);
console.log(findItem2); // 3
```

### Every

- Tests whether all elements in the array pass the test implemented by the provided function

```js
const a = [2, 1, 4, 3, 15, 6, 7, 43, 21, 54, 49];
const a1 = [2, 4, 6];

let everyEven = a.every((item, index) => {
  console.log(item, index); // 2 0 1 1 and stops after one fail
  return item % 2 == 0;
}, 0);
console.log(everyEven); // false

function isEveryEven(c) {
  return c % 2 == 0;
}
let everyEven2 = a.every(isEveryEven);
let everyEven3 = a1.every(isEveryEven);
console.log(everyEven2, everyEven3); // false true
```

### some

- Tests whether at least one element in the array passes the test implemented by the provided function

```js
const a = [2, 1, 4, 3, 15, 6, 7, 43, 21, 54, 49];
const a1 = [2, 4, 6];
const a2 = [1, 7, 5];

let someEven = a.some((item, index) => {
  console.log(item, index); // 2 0 and stops after one find
  return item % 2 == 0;
}, 0);
console.log(someEven); // false

function isEveryEven(c) {
  return c % 2 == 0;
}
let someEven2 = a.some(isEveryEven);
let someEven3 = a1.some(isEveryEven);
let someEven4 = a2.some(isEveryEven);
console.log(someEven2, someEven3, someEven4); // true true false
```

## keys and values

- **keys()** => Returns a new Array Iterator object that contains the keys for each index in the array.
- **values()** => Returns a new Array Iterator object that contains the values for each index in the array.

```js
const a = [1, 7, 5];

let allKeys = a.keys();
console.log(allKeys); // Object [Array Iterator] {}

let allValues = a.values();
console.log(allValues); // Object [Array Iterator] {}

for (let x of allValues) {
  console.log("value", x); // value 1 value 7 value 5
}
for (let x of allKeys) {
  console.log("key", x); // key 0 key 1 key 2
}
```

## Custom prototype function for array

```js
const a = [1, 7, 5];
function makeDouble(num) {
  return num + num;
}
Array.prototype.calculate = function (logic) {
  const output = [];
  // this here refers to array in example it is a
  for (let index = 0; index < this.length; index++) {
    const element = logic(this[index]);
    output.push(element);
  }
  return output;
};

let calResult = a.calculate(makeDouble);
console.log(calResult);
```

---
