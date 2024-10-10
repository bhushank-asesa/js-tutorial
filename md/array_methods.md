# Array Loops

> **Questions**
>
> > - Difference between `find()` and `findIndex()` and `slice()`and`splice()`?

## slice

- The slice() method slices out a piece of an array into a new array:

```js
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // start; Slice out a part of an array starting from array element 1 ("Orange"):
```

```bash
[ "Orange", "Lemon", "Apple", "Mango"];
```

```js
const citrus = fruits.slice(1, 3); // start,end(excluded)
```

```bash
[ 'Orange', 'Lemon' ]
```

```js
const citrus = fruits.slice(-3, -1);
```

```bash
[ 'Lemon', 'Apple' ]
```

## Splice and toSpliced

> The difference between the `new toSpliced()` method and the `old splice()` method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

- The first parameter (2) defines the position where new elements should be added (spliced in).

- The second parameter (0) defines how many elements should be removed.

- The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

- The splice() method returns an array with the deleted items:

```js
const fruits_1 = ["Banana", "Orange", "Apple", "Mango"];
fruits_1.splice(2, 0, "Lemon", "Kiwi");

const fruits_2 = ["Banana", "Orange", "Apple", "Mango"];
const f2 = fruits_2.toSpliced(2, 0, "Lemon", "Kiwi"); // fruits_2 will not change

console.log(fruits_1, fruits_2, f2);
```

- output

```bash
 [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
 [ 'Banana', 'Orange', 'Apple', 'Mango' ]
 [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]
```

## at method

- array_1.at(index) is same as array_1[index]

```js
console.log(fruits_1.at(2), fruits_1[2]);
// output
Lemon Lemon
```

## Join

```js
console.log(fruits_1.join(), fruits_1.join("__"));
// output
Banana,Orange,Lemon,Kiwi,Apple,Mango Banana__Orange__Lemon__Kiwi__Apple__Mango
```

## pop (stack) last element and return it use instead of `delete`(which return undefined delete fruits[0];)

```js
let fruit = fruits.pop();
console.log(fruit); // output Mango
```

## push

```js
let length = fruits.push("Kiwi"); // output length of array
```

## Shift

- The shift() method removes the first array element and "shifts" all other elements to a lower index.

```js
fruits.shift();
```

## toString

```js
let a = fruits.toString(); // join by comma only
console.log(a);
// output
Orange, Lemon, Apple, Mango, Kiwis;
```

## indexOf and includes

```js
let position = fruits.indexOf("Banana"); // returns -1 if the item is not found.
let includes = fruits.includes("Banana");
let lastPosition = fruits.lastIndexOf("Banana"); // return last occurrence index
console.log(position, includes, lastPosition);
// output 0 true 3
```

## find

- The find() method returns the value of the first array element that passes a test function.

```js
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
function myFunction(value, index, array) {
  // value is current value
  // index is current index
  // array is whole array
  return value > 18;
}
console.log(first); // 25
```

## Concat

```js
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys); // add as many array in argument
let c = myChildren.concat("abc"); // can add element also
console.log(myChildren); // [ 'Cecilie', 'Lone', 'Emil', 'Tobias', 'Linus' ] concat with duplicate element
```

## flat

- The flat() method creates a new array with sub-array elements concatenated to a specified depth.

```js
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = myArr.flat();
console.log(newArr);
// output [1, 2, 3, 4, 5, 6];
```

## fill

```js
const a1 = Array(5).fill("abc");
console.log(a1); // output [ 'abc', 'abc', 'abc', 'abc', 'abc' ]
```

## Array.forEach:

- **Purpose**: Iterates over each element in an array and executes a provided callback function for each element.
- **Output**: Does not return a new array. It always returns undefined.
- **Use Cases**: When you need to perform an action on each element without creating a new array. Examples include:
  - Logging each element
  - Modifying the original array elements in-place (use with caution to avoid unintended side effects)
  - Triggering side effects based on element values

## Array.map:

- **Purpose**: Iterates over each element in an array and applies a provided callback function to each element.
- **Output**: Returns a new array containing the transformed elements based on the callback function's return values.
- **Use Cases**: When you need to create a new array with modified or transformed versions of the original elements.
- _Examples include_:
  - Doubling all numbers in an array
  - Converting strings to uppercase
  - Filtering elements based on a condition
  - Choosing the Right Method:

## Here's a simple guideline to help you decide:

- **Use Array.forEach:** If you only need to perform an action on each element without creating a new array.
- **Use Array.map:** If you need to create a new array with transformed elements based on a function applied to each element in the original array.
- Both uses callback function

## Difference between `find()` and `findIndex()`?

```js
let a = myChildren.find((item) => item == "Emil"); // first occurrence element
let b = myChildren.findIndex((item) => item == "Emil"); // first occurrence index
console.log(a, b); // output Emil 2
```
