# Javascript array

## Array Prototype Modification/Access Methods:

- add/remove/move/partition/merge/sort/fill

## at and length

- _length_ => A property that returns the number of elements in the array
- _at_ => Returns the element at the specified index

```js
const a = [1, 7, 5, 9, 11, 19, 23];
console.log(
  "array.at(index )",
  a.at(5),
  a.at(-2),
  a.at(a.length - 2),
  "array.length",
  a.length
); // array.at(index ) 19 undefined array.length 7
```

- at(-2) = length-2

## indexOf(element, fromIndex):

- Returns the first index at which a given element can be found in the array, or -1 if it is not present.
- `fromIndex` is optional and specifies the index to start searching from.

```js
const a = [1, 7, 5, 9, 11, 19, 23];

console.log(a.indexOf(2)); // -1
console.log(a.indexOf(19, 2)); // 5
console.log(a.indexOf(5)); // 2
```

## lastIndexOf(element, fromIndex):

- Returns the last index at which a given element can be found in the array, or -1 if it is not present.
- `fromIndex` is optional

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];

console.log(a.lastIndexOf(2)); // -1
console.log(a.lastIndexOf(19, 6)); // 5; search from 6 to 0
console.log(a.lastIndexOf(5)); // 8
```

## slice(startIndex, endIndex):

- Returns a shallow copy of a portion of an array into a new array object selected from startIndex to endIndex (not included).
- `endIndex` is optional

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];

console.log(a.slice(1, 4)); // [7, 5, 9]
console.log(a.slice(1, 12)); // gives till end if index is greater than length
console.log(a.slice(2)); // [5, 9, 11, 19, 23, 19, 5]
```

## includes(valueToFind, fromIndex)

- Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
- - `fromIndex` is optional

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];

console.log(a.includes(27)); // false
console.log(a.includes(19, 6)); // true
console.log(a.includes(11)); // true
```

## push and pop

- `push(newItem)` Adds one or more elements to the end of an array and returns the new length of the array.
- `pop()` Removes the last element from an array and returns that element. Modifies the original array

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];
a.push(15);
console.log(a); // [ 1,  7,  5, 9, 11,  19, 23, 19, 5, 15 ]
let popA = a.pop(); // 15
console.log(a, popA);
```

## shift

- Removes the first element from an array and returns that element. Modifies the original array

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];
a.shift();
console.log(a); // [ 7,  5,  9, 11, 19, 23, 19,  5 ]
```

## unshift(element1, ..., elementN)

- Adds one or more elements to the beginning of an array and returns the new length of the array. Modifies the original array

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];
a.unshift(2, 4);
console.log(a); // [   2,  4,  1,  7,  5,  9, 11, 19, 23, 19,  5]
```

## reverse

- Reverses the order of the elements in an array in place.

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];
a.reverse();
console.log(a); // [  5, 19, 23, 19, 11,  9,  5,  7,  1  ]
```

## splice(start, deleteCount, item1, ..., itemX):

- Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. Very versatile.

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];
a.splice(2, 2, 51, 91); // removes 2 element from index 2 and add 51,91 from 2
console.log(a); // [ 1,  7, 51, 91, 11, 19, 23, 19,  5   ]
```

## sort(compareFunction)

> Sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values. You can provide a compareFunction to define a custom sort order

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];
a.sort(); // sort by element string wise
console.log(a); // [  1, 11, 19, 19, 23,  5,  5,  7,  9 ]
a.sort((a1, a2) => a1 - a2);
console.log(a); // [ 1,  5,  5,  7, 9, 11, 19, 19, 23]
```

## fill(value, start, end):

- Fills all the elements of an array from a start index to an end index with a static value. The end index is not included.

```js
const a = [1, 7, 5, 9, 11, 19, 23, 19, 5];
a.fill(44, 2, 4); // sort by element string wise
console.log(a); //[   1,  7, 44, 44, 11, 19, 23, 19,  5    ]
let a = Array(5).fill(2);
console.log(a); // [ 2, 2, 2, 2, 2 ]
```

## concat

- Returns a new array that is the result of joining two or more arrays.

```js
const a = [1, 7, 5, 9];
const b = [2, 6];
const c = a.concat(b);
console.log(a, b, c); // [ 1, 7, 5, 9 ] [ 2, 6 ] [ 1, 7, 5, 9, 2, 6 ]
```

## join(separator):

- Returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string

```js
const a = [1, 7, 5, 9];
const b = a.join(); // ,
const c = a.join("-");
console.log(a, b, c); // [ 1, 7, 5, 9 ] 1,7,5,9 1-7-5-9
```

## toString

```js
let a = fruits.toString(); // join by comma only
console.log(a);
// output
Orange, Lemon, Apple, Mango, Kiwis;
```

## flat

- The flat() method creates a new array with sub-array elements concatenated to a specified depth.

```js
const myArr = [[1, 2], [3, 4], [5, 6], "sd", { a: 5 }];

const newArr = myArr.flat();
console.log(newArr);
// output [ 1, 2, 3, 4, 5, 6, 'sd', { a: 5 } ]
```

## Array(n)
