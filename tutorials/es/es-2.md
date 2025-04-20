# ES

## ES6

### Function Rest Parameter

- The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:

```js
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

### Rest

```js
let array = [1, 5, 14, 8, 1411, 61, 78, 154, 144, 546];

let [a1, ...a2] = array; // rest should be at last
let [b1, b2, ...b3] = array;
console.log(a1, a2, b1, b2, b3);
```

### rest vs spread

| Feature  | Rest Parameters (... in function parameters) | Spread Syntax (... in function calls, array/object literals) |
| -------- | -------------------------------------------- | ------------------------------------------------------------ |
| Purpose  | Collects remaining arguments into an array   | Expands an iterable into individual elements/properties      |
| Location | Last parameter in a function definition      | In function calls, array literals, and object literals       |
| Result   | Creates a single array                       | Expands into multiple individual values                      |

- `rest` means collect `remaining` into array at the end
- spread means expand

### spread example

```js
let array = [1, 5, 14, 8, 1411, 61, 78, 154, 144, 546];

let [a1, ...a2] = array; // rest should be at last
let [b1, b2, ...b3] = array;
let d = [...array, 48578, 54544];
let e = [...array, 48578, 54544, ...b3];
console.log(d, e);
```

### String

#### includes

#### startsWith

#### endsWith

### Array

#### entries

#### from

#### keys

#### find

#### findIndex

### Mats

#### trunc

#### sign

#### cbrt

#### log2

#### log10

### Numbers

#### EPSILON

#### MIN_SAFE_INTEGER

#### MAX_SAFE_INTEGER

#### isInteger

#### isSafeInteger

### Global Method

#### isFinite

#### isNaN
