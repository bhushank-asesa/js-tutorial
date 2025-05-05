# Shallow and Deep Copy

> shallow copy and deep copy refer to how objects (including arrays) are duplicated, especially when they contain nested values like objects within objects.

## Shallow Copy

* duplicates only the first level of an object or array. - Nested objects/arrays are still shared between the original and the copy.

```js
const original = {
    a: 1,
    b: {
        c: 2
    }
};
const shallow = {
    ...original
};

shallow.b.c = 42;
console.log(original.b.c); // 42 (changed!)
```

### Key Points:

* Only top-level properties are copied.

* Nested references are not copied; they still point to the same object.

### Methods:

* Arrays: slice(), concat(), [...arr]

* Objects: Object.assign(), { ...obj }

## Deep Copy

* duplicates everything recursively—even nested objects and arrays—so the original and the copy are completely independent.

```js
const original = {
    a: 1,
    b: {
        c: 2
    }
};
const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 42;
console.log(original.b.c); // 2 (unchanged)
```

### Key Points:

* Recursively copies all levels.

* Original and copy don’t share nested data.
* Safe but slower than shallow copy.

### Common methods:

* JSON.parse(JSON.stringify(obj)) (⚠️ Loses functions, undefined, Dates, etc.)

* Use libraries like Lodash (_.cloneDeep(obj))

## Comparison Table

|Feature|	Shallow Copy	|Deep Copy
|---|---|---|
Nested Objects	|Shared	|Fully copied
Performance|	Fast	|Slower
Methods	|Object.assign, spread	|JSON.parse(JSON.stringify()), Lodash
Use Case|	Simple, flat objects|	Complex, nested structures
