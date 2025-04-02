# Function Currying in JavaScript

> Function currying is a technique where a function with multiple parameters is transformed into a sequence of functions, each taking a single parameter.

## Why Use Currying?

* **Reusability:** Breaks functions into smaller, reusable parts.

* **Avoids redundancy:** Helps avoid passing the same arguments multiple times.

* **Improves readability:** Makes function calls more structured.

* **Partial application:** Allows fixing some arguments while leaving others open for later.

## By bind method

```js
function multiply(a, b) {
    return a * b
}

let multiplyByTwo = multiply.bind(this, 2)
console.log(multiplyByTwo(3), multiplyByTwo(4)) // 6 8

let multiplyByThree = multiply.bind(this, 3)
console.log(multiplyByThree(3), multiplyByThree(4)) // 9 12
```

## By Closure 

```js
function multiply(a) {
  return function (b) {

    console.log(a * b)

  }
}

let multiplyByTwo = multiply(2)

multiplyByTwo(2)
multiplyByTwo(4)

let multiplyByThree = multiply(3)
multiplyByThree(2)
multiplyByThree(4)
/* 
4
8 
6
12
*/
```