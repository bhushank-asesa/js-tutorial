# spread vs object-assign

> Both Object.assign() and the spread operator (...) are used to copy or merge objects, but they have some subtle differences in behavior and use cases.

## Common Purpose:

> Both are used for shallow cloning or merging objects:

```js
const obj1 = {
    a: 1
};
const obj2 = {
    b: 2
};

// Using Object.assign()
const merged1 = Object.assign({}, obj1, obj2);

// Using spread operator
const merged2 = {
    ...obj1,
    ...obj2
};

console.log(merged1); // { a: 1, b: 2 }
console.log(merged2); // { a: 1, b: 2 }
```

##  Key Differences

|Feature	|Object.assign()|	Spread Operator (...)|
|---|---|---|
Mutates target?|	✅ Yes (modifies first argument)	|❌ No (creates new object)
Can copy property descriptors	|❌ No	|❌ No
Symbol properties copied?	|✅ Yes	|❌ No (not copied by spread)
Prototype copied?	|❌ No	|❌ No
Shallow clone only?|	✅ Yes	|✅ Yes
Use with arrays?	|Not ideal (Object.assign([], [1, 2]))	|✅ Yes, commonly used ([...arr])
Nullable/undefined safe?	|❌ Throws error if source is null/undefined	|✅ Works (skips null/undefined sources)

## Mutation Warning with Object.assign()

```js
const original = {
    a: 1
};
const copy = Object.assign(original, {
    b: 2
});

console.log(original); // { a: 1, b: 2 } — mutated!
```

## With spread:

```js
const original = {
    a: 1
};
const copy = {
    ...original,
    b: 2
};

console.log(original); // { a: 1 } — original stays safe
```

## Best Practice:

* Use spread when creating a new object safely.

* Use Object.assign() if you need to copy properties into an existing object or for more dynamic merging.
