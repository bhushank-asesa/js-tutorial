# Javascript array

## What is Array

- Ordered Collection, start from 0
- Dynamic Size(resizable), add/remove
- Mixed Data Types, numbers, strings, objects, and even other arrays
- Object Natur arrays are actually a special type of object. However, they are optimized for storing and manipulating ordered lists of values.
- Zero-Based Indexing

## Array iteration Methods

### for

- Traditional way to iterate through an array.
- full control over the iteration process.
- can access both the element and its index.

```js
const myArray = [1, 2, 3, 4, 5];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
```

- Output

```bash
1
2
3
4
5
```

### for...of loop:

- This loop provides a more concise way to iterate over the values of an array.
  It's simpler to use when you only need the element values.

```js
const myArray = [1, 2, 3, 4, 5];
for (const element of myArray) {
  console.log(element);
}
```

- Output

```bash
1
2
3
4
5
```

```js
const myArray = [11, 22, 33, 44, 55];
for (let [index, val] of myArray.entries()) {
  console.log(val, index);
}
```

- output

```bash
11 0
...
```

### entries()

- returns an Iterator object with the key/value pairs from an array:

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Create an Iterator
const list = fruits.entries();
console.log(list); // Object [Array Iterator]
for (let x of list) {
  console.log(x); // [ 0, 'Banana' ]....
}
```

### for...in

- The for...in loop iterates over the keys (property names) of an object.
- It's primarily used when you need to access and manipulate the properties of an object.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (const key in person) {
  console.log(key + ": " + person[key]);
}

// Output:
// firstName: John
// lastName: Doe
// age: 30
```
