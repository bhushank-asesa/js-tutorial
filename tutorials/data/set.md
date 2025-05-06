# Set

> A Set  is a built-in object that lets you store unique values of any type — whether primitive values or object references.

## Key Characteristics of Set:

* No duplicate values allowed

* Order is preserved (insertion order)

* Supports iteration

* Can hold any value type (numbers, strings, objects, etc.)

## Syntax:

```js
const mySet = new Set([1, 2, 3]);
// You can also add values later:
mySet.add(4);
```

## Common Methods:

|Method|	Description|
|---|---|
.add(value)	|Adds a value|
.delete(value)	|Removes a value|
.has(value)|	Checks if a value exists|
.clear()|	Removes all values|
.size	|Returns the number of values|
.forEach() or for...of	|Iterates over the values|

## Example:

```js
const numbers = new Set();

numbers.add(1);
numbers.add(2);
numbers.add(2); // Duplicate, ignored
numbers.add("2");

console.log(numbers); // Set(3) { 1, 2, "2" }
console.log(numbers.has(2)); // true
```

> Even though 2 and "2" might seem similar, they are different values.

## Why Use Set?

* To store unique values without needing to manually filter duplicates.

* For fast lookups (.has() is typically O(1) time).

* To eliminate duplicates from arrays:

```js
const arr = [1, 2, 2, 3];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3]
```

## Summary

* Set ensures uniqueness.

* Offers simple, fast operations like .add(), .has(), and .delete().

* Maintains insertion order, and works well for deduplication and membership tests.
