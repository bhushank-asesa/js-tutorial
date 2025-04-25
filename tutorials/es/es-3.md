# ES

## ES6

### Import, export(named, default)
- await import

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

* Object.entries() returns an array of the key/value pairs in an object:

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

* Object.entries() makes it simple to use objects in loops:

### Object Values

* Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

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

* JavaScript allows trailing commas wherever a comma-separated list of values is accepted.

* In Array and Object Literals, Function Calls, Parameters, Imports and Exports.

```js
function myFunc(x, , , ) {};
const myArr = [1, 2, 3, 4, , , ];
const myObj = {
    fname: John,
    age: 50,
    ,
    ,
};
```

## ES 2018

### Asynchronous Iteration

* for await () {}

### Promise Finally

### Object Rest Properties

* destruct an object and collect the leftovers onto a new object:

```js
let {
    x,
    y,
    ...z
} = {
    x: 1,
    y: 2,
    a: 3,
    b: 4
};
x; // 1
y; // 2
z; // { a: 3, b: 4 }
```

### New RegExp Features

* Unicode Property Escapes (\p{...})
* Lookbehind Assertions (?<= ) and (?<! )
* Named Capture Groups
* s (dotAll) Flag

### JavaScript Threads

* In JavaScript you use the Web Workers API to create threads.

* Worker threads are used to execute code in the background so that the main program can continue execution.

* Worker threads run simultaneously with the main program. Simultaneous execution of different parts of a program can be time-saving.

### JavaScript Shared Memory

Shared memory is a feature that allows threads (different parts of a program) to access and update the same data in the same memory.

Instead of passing data between threads, you can pass a SharedArrayBuffer object that points to the memory where data is saved.

### SharedArrayBuffer

A SharedArrayBuffer object represents a fixed-length raw binary data buffer similar to the ArrayBuffer object.

### Optional catch Binding

* From ES2019 you can omit the catch parameter if you don't need it:.

```js
// Before 2019:

try {
    // code
} catch (err) {
    // code
}
// After 2019:

try {
    // code
} catch {
    // code
}
```

### Revised Function

#### JSON.stringify

Before 2019, JSON could not stringify character encoded with \.

```js
let text = JSON.stringify("\u26D4");
```

#### Separator Symbols

* Line separators and paragraph separator symbols (\u2028 and \u2029) are now allowed in string literals.

* Before 2019, these were treated as line terminators and resulted in error exceptions:

```js
// This is valid in ES2019:
let text = "\u2028";
```

#### Revised Function toString()

* The toString() method returns a string representing the source code of a function.

* From 2019, toString() must return the source code of the function including comments, spaces, and syntax details.

* Before 2019, different browsers returned different variants of the function (like without comments and spaces). From 2019 the function should be returned exactly as it is written.

```js 
function myFunction(p1, p2) {
  return p1 * p2; 
}

```

### The Nullish Coalescing Operator (??)

- The ?? operator returns the first argument if it is not nullish (null or undefined).

- Otherwise it returns the second.

```js
let name = null;
let text = "missing";
let result = name ?? text;
```

* The nullish operator is supported in all modern browsers since March 2020:

### The Optional Chaining Operator (?.)

* The Optional Chaining Operator returns undefined if an object is undefined or null (instead of throwing an error).

```js
const car = {
    type: "Fiat",
    model: "500",
    color: "white"
};
let name = car?.name;
```

### The &&= Operator

* The Logical AND Assignment Operator is used between two values.

* If the first value is true, the second value is assigned.

```js
let x = 10;
x && = 5;
```

### The ||= Operator

* The Logical OR Assignment Operator is used between two values.

* If the first value is false, the second value is assigned.

```js
let x = 10;
x || = 5;
```

### The ??= Operator

* The Nullish Coalescing Assignment Operator is used between two values.

* If the first value is undefined or null, the second value is assigned.

```js
let x;
x ?? = 5;
```

### Error Cause

* ES2022 let you specify the reason behind an error with error.cause.

```js
try {
    connectData();
} catch (err) {
    throw new Error("Connecting failed.", {
        cause: err
    });
}
```
