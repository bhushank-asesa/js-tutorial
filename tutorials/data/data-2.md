# Mutable/Immutable data types in JS

> data types are categorized as mutable or immutable based on whether their values can be changed after they are created.

## Mutable Data Types:

* Can be changed without reassigning the variable.

* Changes affect the original data.

### Examples:

* Objects

* Arrays

* Functions

### Example with an object:

```js
let user = {
    name: "Alice"
};
user.name = "Bob"; // ✅ Modified
console.log(user.name); // "Bob"
```

### Example with an array:

```js
let list = [1, 2, 3];
list.push(4); // ✅ Modified
console.log(list); // [1, 2, 3, 4]
```

## Immutable Data Types:

* Cannot be changed once created.

* To "change" them, you must create a new value.

## Examples (all primitive types):

1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. BigInt
7. Symbol

### Example with a string:

```js
let greeting = "Hello";
greeting[0] = "Y"; // ❌ Does nothing
console.log(greeting); // "Hello"
greeting = "Yellow"; // ✅ New string assigned
```

## Summary Table:

|Data Type	|Mutable?|
|---|---|
Object	|✅ Yes
Array	|✅ Yes
Function|	✅ Yes
String|	❌ No
Number|	❌ No
Boolean|	❌ No
Null|	❌ No
Undefined|	❌ No
BigInt|	❌ No
Symbol|	❌ No
