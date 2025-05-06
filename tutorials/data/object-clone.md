# Object clone

> Cloning an object in JavaScript can be done in several ways. Below are some common methods, each with its pros and cons, especially when it comes to shallow vs deep cloning.

## Shallow Clone with Object.assign()

> This creates a shallow copy of an object. It will copy the top-level properties, but any nested objects or arrays will still be referenced.

```js
const original = {
    a: 1,
    b: {
        c: 2
    }
};

// Shallow clone using Object.assign()
const clone = Object.assign({}, original);

console.log(clone); // { a: 1, b: { c: 2 } }
console.log(clone.b === original.b); // true (same reference to nested object)
```

## Shallow Clone with Spread Operator

> Similar to Object.assign(), this also creates a shallow copy, but the syntax is more concise.

```js
const original = {
    a: 1,
    b: {
        c: 2
    }
};

// Shallow clone using spread operator
const clone = {
    ...original
};

console.log(clone); // { a: 1, b: { c: 2 } }
console.log(clone.b === original.b); // true (same reference to nested object)
```

## Deep Clone with JSON.parse() and JSON.stringify()

> This method creates a deep clone of an object, meaning it also clones nested objects and arrays. However, it has limitations (e.g., it won't clone functions, undefined, or symbol properties).

```js
const original = {
    a: 1,
    b: {
        c: 2
    }
};

// Deep clone using JSON methods
const clone = JSON.parse(JSON.stringify(original));

console.log(clone); // { a: 1, b: { c: 2 } }
console.log(clone.b === original.b); // false (new reference)
```

## Deep Clone with structuredClone() (Modern Browsers)

> structuredClone() is a built-in function available in modern browsers that performs a deep clone and handles more complex types (like Date, Map, Set, ArrayBuffer, etc.).

```js
const original = {
    a: 1,
    b: {
        c: 2
    },
    d: [3, 4]
};

// Deep clone using structuredClone
const clone = structuredClone(original);

console.log(clone); // { a: 1, b: { c: 2 }, d: [3, 4] }
console.log(clone.d === original.d); // false (new reference)
```

## Key Differences:

* **Shallow clone:** Copies only the top-level properties, nested objects/arrays will be referenced.

* **Deep clone:** Copies both top-level and nested properties, creating entirely new references.

## Limitations:

* **JSON.parse()/JSON.stringify():** Cannot handle special types (e.g., Date, functions, undefined).

* **structuredClone():** Not available in all environments (e.g., older browsers, Node.js).
