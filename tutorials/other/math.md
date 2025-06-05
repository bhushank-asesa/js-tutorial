# Math

## Basic Operations

### Absolute Value:

- Math.abs(x) returns the absolute value of a number x. This means it always returns a non-negative value.

```js
console.log(Math.abs(-10)); // Output: 10
console.log(Math.abs(5)); // Output: 5
console.log(Math.abs(0)); // Output: 0
```

### Rounding: JavaScript offers several rounding methods:

- Math.round(x): Returns the value of the number x rounded to the nearest integer.

```js
console.log(Math.round(4.3)); // Output: 4
console.log(Math.round(4.7)); // Output: 5
console.log(Math.round(-4.3)); // Output: -4
console.log(Math.round(-4.7)); // Output: -5
```

### Math.ceil(x):

- Returns the smallest integer greater than or equal to x (rounds up).

```js
console.log(Math.ceil(4.3)); // Output: 5
console.log(Math.ceil(4.7)); // Output: 5
console.log(Math.ceil(-4.3)); // Output: -4
console.log(Math.ceil(-4.7)); // Output: -4
```

### Math.floor(x):

- Returns the largest integer less than or equal to x (rounds down).

```js
console.log(Math.floor(4.3)); // Output: 4
console.log(Math.floor(4.7)); // Output: 4
console.log(Math.floor(-4.3)); // Output: -5
console.log(Math.floor(-4.7)); // Output: -5
```

### Math.trunc(x):

- Returns the integer part of x, removing any fractional digits.

```js
console.log(Math.trunc(4.3)); // Output: 4
console.log(Math.trunc(4.7)); // Output: 4
console.log(Math.trunc(-4.3)); // Output: -4
console.log(Math.trunc(-4.7)); // Output: -4
```

### Minimum and Maximum:

- Math.min(a, b, c, ...): Returns the smallest of zero or more numbers.

- Math.max(a, b, c, ...): Returns the largest of zero or more numbers.

```js
console.log(Math.min(10, 5, 20, 1)); // Output: 1
console.log(Math.max(10, 5, 20, 1)); // Output: 20
```

## Constants

- The Math object also provides access to some fundamental mathematical constants:

### Math.PI

- Represents the ratio of a circle's circumference to its diameter, approximately 3.14159.

```js
console.log(Math.PI); // Output: 3.141592653589793
```

### Math.E:

- Represents Euler's number, the base of the natural logarithm, approximately 2.71828.

```js
console.log(Math.E); // Output: 2.718281828459045
```
