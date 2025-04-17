# Generator Function

## What is Generator Function

- Generator functions (function\*) allow pausing and resuming execution.
- They use yield to return values one at a time instead of executing fully.
- Useful for lazy evaluation, handling infinite loops, and working with async tasks.

## Example

```js
function* generator() {
  yield 1;
  yield 2;
}
const gen = generator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: undefined, done: true }
console.log(gen.next()); // { value: undefined, done: true }
```

## Practical Use Cases

> Lazy Evaluation (Efficient Data Processing)

```js
function* largeDataset() {
  for (let i = 1; i <= 1000000; i++) {
    yield i;
  }
}

const data = largeDataset();
console.log(data.next().value); // 1
console.log(data.next().value); // 2
```

## Passing Values to yield

> You can send data into a generator using next(value):

```js
function* greet() {
  const name = yield "What is your name?";
  yield `Hello, ${name}!`;
}

const greeter = greet();
console.log(greeter.next().value); // "What is your name?"
console.log(greeter.next("John").value); // "Hello, John!"
```

## Using Generators for Infinite Sequences

> A generator can create infinite sequences without running out of memory.

```js
function* infiniteNumbers() {
  let i = 1;
  while (true) {
    yield i++;
  }
}

const numbers = infiniteNumbers();
console.log(numbers.next().value); // 1
console.log(numbers.next().value); // 2
console.log(numbers.next().value); // 3
```

# Function Old Approach

## Iterate using for

```js
const radiusArgument = [1, 3, 2, 4, 5];

function calculateArea(radiusParameter) {
  let output = [];
  for (let i = 0; i < radiusParameter.length; i++) {
    output.push(Math.PI * radiusParameter[i] * radiusParameter[i]);
  }
  return output;
}
const result = calculateArea(radiusArgument);
console.log(result); // [3.141592653589793, 28.274333882308138, 12.566370614359172, 50.26548245743669, 78.53981633974483]
```

## using prototype function other newer approach

```js
const radiusArgument = [1, 3, 2, 4, 5];

function area(radiusParameter) {
  return radiusParameter * radiusParameter * Math.PI;
}

const result = radiusArgument.map(area);
console.log(result); // [3.141592653589793, 28.274333882308138, 12.566370614359172, 50.26548245743669, 78.53981633974483]
```
