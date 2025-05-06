# Symbol

> Symbol is a primitive data type introduced in ES6, used to create unique and immutable identifiers — often for object properties.

## Key Uses of Symbol:

### Unique Object Property Keys

* Symbols are commonly used to create properties that won’t clash with other property names, especially in large codebases or libraries.

```js
const sym = Symbol("id");
const user = {
    [sym]: 123
};

console.log(user[sym]); // 123
```

* Even if another part of the code creates Symbol("id"), it won’t conflict — every Symbol is unique.

### Hide Object Properties

> Properties defined with symbols don’t show up in:

1. for...in loops

2. Object.keys()

3. JSON.stringify()

```js
const hidden = Symbol("secret");
const obj = {
    visible: "I am here",
    [hidden]: "You can't see me easily"
};

console.log(Object.keys(obj)); // ["visible"]
```

## Built-in Symbols (Well-known Symbols)

> JavaScript provides well-known symbols to customize language behavior.

### Examples:

* Symbol.iterator – to make objects iterable

* Symbol.toPrimitive – to define how an object converts to a primitive

* Symbol.toStringTag – customizes Object.prototype.toString

```js
const myObj = {
    [Symbol.toStringTag]: "CustomObject"
};

console.log(Object.prototype.toString.call(myObj)); // [object CustomObject]
```

## Key Properties of Symbol:

* Each Symbol("desc") is unique, even with the same description.

* Symbols are not auto-converted to strings — trying to do so throws an error.

```js
let a = Symbol("test");
let b = Symbol("test");

console.log(a === b); // false
```

## When Should You Use Symbols?

* When creating libraries where you want to avoid naming collisions.

* When you need private-like object keys (not truly private but hidden from most accessors).

* When using or customizing language internals with well-known symbols.
