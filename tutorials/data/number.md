# Number in JS

> ```js has a single Number type, which can represent both integer and floating-point values.
>
> ```

## Types of Numbers:

### Integers:

- Whole numbers (positive, negative, or zero) without any decimal points.

```js
let count = 10;
let negativeNumber = -5;
let zero = 0;
```

### Floating-Point Numbers (Floats):

- Numbers with a decimal point, representing fractional values.

```js

let price = 99.99;
let pi = 3.14159;
let smallNumber = 0.001;
Special Numeric Values:

```

> Also has a few special numeric values you should be aware of:

### NaN (Not-a-Number):

- Represents a value that is not a valid number. This often results from operations that don't produce a meaningful numeric result (e.g., trying to multiply a string by a number).

```js

let result = "hello" \* 5;
console.log(result); // Output: NaN
console.log(typeof result); // Output: "number" (surprisingly!)
console.log(Number.isNaN(result)); // Output: true (the correct way to check for NaN)
```

> **Important:** You should use Number.isNaN() to reliably check if a value is NaN. The global isNaN() function has some quirks.

### Infinity:

- Represents positive infinity. It's a numeric value greater than any other number.

```js
let infinitePositive = 1 / 0;
console.log(infinitePositive); // Output: Infinity
```

### Infinity:

Represents negative infinity, a numeric value less than any other number.

```js
let infiniteNegative = -1 / 0;
console.log(infiniteNegative); // Output: -Infinity
```

## Basic Arithmetic Operators:

- supports standard arithmetic operators:

1. Addition: +
2. Subtraction: -
3. Multiplication: \*
4. Division: /
5. Modulo (Remainder): %
6. Exponentiation: \*\* (ES2016)

```js

let a = 10;
let b = 5;

console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a \* b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
console.log(a \*\* b); // Output: 100000 (10 to the power of 5)
```

## Increment and Decrement Operators:

- **Increment (++):** Adds 1 to the operand. Can be used as a prefix (++a) or postfix (a++).
- **Decrement (--):** Subtracts 1 from the operand. Can be used as a prefix (--a) or postfix (a--).

```js
let counter = 0;
console.log(counter++); // Output: 0 (returns the value before incrementing)
console.log(counter); // Output: 1

let anotherCounter = 5;
console.log(++anotherCounter); // Output: 6 (increments before returning the value)
```

## Assignment Operators:

- These operators perform an operation and assign the result to the left operand:

1. = (Assignment)
2. += (Add and assign)
3. -= (Subtract and assign)
4. \*= (Multiply and assign)
5. /= (Divide and assign)
6. %= (Modulo and assign)
7. \*\*= (Exponentiation and assign)

```js
let x = 10;
x += 5; // Equivalent to x = x + 5; (x is now 15)
console.log(x);

let y = 8;
y **= 2; // Equivalent to y = y ** 2; (y is now 64)
console.log(y);
```

## Number Methods:

- JS provides built-in methods to work with numbers:

### toFixed(digits):

- Formats a number using fixed-point notation (a specified number of digits after the decimal point). Returns a string.

```js
let num = 3.14159;
console.log(num.toFixed(2)); // Output: "3.14"
console.log(num.toFixed(0)); // Output: "3"
```

### toPrecision(precision):

- Formats a number to a specified length (total number of digits). Returns a string.

```js
let num = 123.456;
console.log(num.toPrecision(5)); // Output: "123.46"
console.log(num.toPrecision(2)); // Output: "1.2e+2"
```

### toString(radix):

- Returns a string representing the number. The optional radix argument specifies the base to use for representing the number (e.g., 2 for binary, 16 for hexadecimal).

```js
let num = 255;
console.log(num.toString()); // Output: "255" (base 10 by default)
console.log(num.toString(16)); // Output: "ff" (hexadecimal)
console.log(num.toString(2)); // Output: "11111111" (binary)
```

## Number():

- Can be used to convert other data types to a number.

1. Number("123") returns 123
2. Number("3.14") returns 3.14
3. Number("hello") returns NaN
4. Number(true) returns 1
5. Number(false) returns 0
6. Number(null) returns 0
7. Number(undefined) returns NaN

### parseInt(string, radix):

- Parses a string and returns an integer. The radix argument specifies the base of the number in the string.

```js
console.log(parseInt("10")); // Output: 10
console.log(parseInt("10.5")); // Output: 10 (integer part only)
console.log(parseInt("0xF", 16)); // Output: 15 (hexadecimal)
console.log(parseInt("101", 2)); // Output: 5 (binary)
console.log(parseInt("hello")); // Output: NaN
```

### parseFloat(string):

- Parses a string and returns a floating-point number.

```js
console.log(parseFloat("3.14")); // Output: 3.14
console.log(parseFloat("10")); // Output: 10
console.log(parseFloat("10.99xyz")); // Output: 10.99 (parses until it encounters a non-numeric character)
console.log(parseFloat("xyz")); // Output: NaN
```

## Math Object:

> JS has a built-in Math object that provides a wide range of mathematical constants and functions (e.g., Math.PI, Math.round(), Math.floor(), Math.ceil(), Math.random(), Math.abs(), Math.pow(), Math.sqrt(), etc.). You'll use this extensively for more complex mathematical operations.

## Important Considerations:

- **Floating-Point Precision:** Be aware that floating-point arithmetic in ```js (and many other programming languages) can sometimes lead to small inaccuracies due to the way numbers are represented internally. For example, 0.1 + 0.2 might not be exactly 0.3.

```js
console.log(0.1 + 0.2); // Output: 0.30000000000000004
```

- When comparing floating-point numbers for equality, it's often better to check if the absolute difference between them is within a small tolerance (epsilon).

- **Type Coercion:** JS can sometimes automatically convert between different data types. This can lead to unexpected results when performing operations with numbers and strings. Be mindful of this and use explicit conversion functions (Number(), parseInt(), parseFloat()) when needed.

- Understanding how numbers work in JS is crucial for performing calculations, handling data, and building robust applications.
