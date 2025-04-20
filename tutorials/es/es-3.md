# ES

## ES6

### Import, export(named,default)

## ES 2016

### Exponentiation (\*\*)

### Exponentiation assignment (\*\*=)

```js
let a = 5;
let a1 = a ** 3;
a **= 2;
console.log(a, a1); // 25 125
```

### Array includes()

## ES 2017

### String Padding

### JavaScript Object Entries

- Object.entries() returns an array of the key/value pairs in an object:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text = Object.entries(person);
console.log(text);
/*
(4) [Array(2), Array(2), Array(2), Array(2)]
0 : (2) ['firstName', 'John']
1 : (2) ['lastName', 'Doe']
2 : (2) ['age', 50]
3 : (2) ['eyeColor', 'blue']
*/
var text2 = "";
for (let [key1, value1] of Object.entries(text)) {
  text2 += key1 + ": " + value1 + " ";
}
console.log(text2); // 0: firstName,John 1: lastName,Doe 2: age,50 3: eyeColor,blue
```

- Object.entries() makes it simple to use objects in loops:

### Object Values

- Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

let text = Object.values(person);
console.log(text); // (4) ['John', 'Doe', 50, 'blue']
```

### Async

### trailing comma

- JavaScript allows trailing commas wherever a comma-separated list of values is accepted.

- In Array and Object Literals, Function Calls, Parameters, Imports and Exports.

```js
function myFunc(x,,,) {};
const myArr = [1,2,3,4,,,];
const myObj = {fname: John, age:50,,,};
```

## ES 2018

### Asynchronous Iteration

- for await () {}

### Promise Finally

### Object Rest Properties

- destruct an object and collect the leftovers onto a new object:

```js
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }
```

### New RegExp Features

- Unicode Property Escapes (\p{...})
- Lookbehind Assertions (?<= ) and (?<! )
- Named Capture Groups
- s (dotAll) Flag

### JavaScript Threads

- In JavaScript you use the Web Workers API to create threads.

- Worker threads are used to execute code in the background so that the main program can continue execution.

- Worker threads run simultaneously with the main program. Simultaneous execution of different parts of a program can be time-saving.

### JavaScript Shared Memory

Shared memory is a feature that allows threads (different parts of a program) to access and update the same data in the same memory.

Instead of passing data between threads, you can pass a SharedArrayBuffer object that points to the memory where data is saved.

### SharedArrayBuffer

A SharedArrayBuffer object represents a fixed-length raw binary data buffer similar to the ArrayBuffer object.
