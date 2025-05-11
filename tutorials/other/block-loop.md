# Loop, block in JS

## Blocks in JavaScript

> A block is a group of zero or more statements enclosed in curly braces {}. Blocks are used to group statements together. You've already seen them used with the Math object examples!

- Key things to know about blocks:

- **Grouping:** Blocks are primarily used to group statements together so they can be treated as a single unit.

- **Scope (with let and const):** Variables declared with let and const have block scope. This means they are only accessible within the block where they are defined (and any nested blocks).

```js
if (true) {
  let x = 10;
  const PI = 3.14;
  console.log(x); // Output: 10
  console.log(PI); // Output: 3.14
}

// console.log(x); // This would cause an error: x is not defined outside the block
// console.log(PI); // This would also cause an error: PI is not defined outside the block
```

- **Scope (with var):** Variables declared with var have function scope (or global scope if declared outside any function). This means they are accessible throughout the function in which they are declared, even if the declaration is inside a block.

```js
if (true) {
  var y = 20;
}
console.log(y); // Output: 20 (var has function scope)
```

- **Control Flow Statements:** Blocks are commonly used with control flow statements like if, else, for, while, and function definitions to define the scope of the code to be executed under certain conditions or repeatedly.

## Loops in JavaScript

> Loops are used to execute a block of code repeatedly, as long as a certain condition is true. JavaScript provides several types of loops:

### for loop:

- The for loop is often used when you know in advance how many times you want to execute a block of code. It has three optional expressions:

- **Initialization:** Executed only once before the loop starts. Typically used to initialize a counter variable.
- **Condition:** Evaluated at the beginning of each loop iteration. If the condition is true, the loop body executes. If it's false, the loop terminates.
- **Increment/Decrement:** Executed at the end of each loop iteration. Typically used to update the counter variable.

```js
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}
// Output:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4
```

### **while loop:**

- The while loop executes a block of code as long as a specified condition is true. - The condition is evaluated before each iteration.

```js
let count = 0;
while (count < 3) {
  console.log("Count is:", count);
  count++;
}
// Output:
// Count is: 0
// Count is: 1
// Count is: 2
```

### do...while loop:

- The do...while loop is similar to the while loop, but it executes the block of code at least once, and then continues to loop as long as the condition is true. The condition is evaluated after each iteration.

```js
let num = 0;
do {
  console.log("Num is:", num);
  num++;
} while (num < 2);
// Output:
// Num is: 0
// Num is: 1
```

### for...in loop:

- The for...in loop iterates over the enumerable properties of an object. For arrays, it iterates over the indices (keys). However, it's generally recommended to use for...of for iterating over array values.

```js
const person = { name: "Alice", age: 30, city: "Mumbai" };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Output:
// name: Alice
// age: 30
// city: Mumbai

const numbers = [10, 20, 30];
for (let index in numbers) {
  console.log("Index:", index, "Value:", numbers[index]);
}
// Output:
// Index: 0 Value: 10
// Index: 1 Value: 20
// Index: 2 Value: 30
```

### for...of loop:

- The for...of loop iterates over iterable objects (like arrays, strings, maps, sets, etc.) and directly accesses the values of the elements. This is the preferred way to iterate over array values.

```js
const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("Color:", color);
}
// Output:
// Color: red
// Color: green
// Color: blue

const message = "Hello";
for (let char of message) {
  console.log("Character:", char);
}
// Output:
// Character: H
// Character: e
// Character: l
// Character: l
// Character: o
```

### Controlling Loop Execution

- You can use break and continue statements to control the flow of execution within loops:

- **break:** Immediately terminates the current loop and transfers control to the statement following the loop.

```js
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break; // Exit the loop when i is 3
  }
  console.log("Number:", i);
}
// Output:
// Number: 0
// Number: 1
// Number: 2
```

- **continue:** Skips the rest of the statements in the current iteration of the loop and moves to the next iteration.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Skip the rest of this iteration when i is 2
  }
  console.log("Value:", i);
}
// Output:
// Value: 0
// Value: 1
// Value: 3
// Value: 4
```
