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

## Object Assign Purpose

### Key Purposes:

#### Shallow Copy of Objects

> It creates a shallow clone of an object:

```js
const original = {
    a: 1,
    b: 2
};
const clone = Object.assign({}, original);

console.log(clone); // { a: 1, b: 2 }
```

* **Note:** It only copies one level deep — nested objects remain references.

#### Merging Multiple Objects

```js
const a = {
    x: 1
};
const b = {
    y: 2
};
const merged = Object.assign({}, a, b);

console.log(merged); // { x: 1, y: 2 }
```

* If keys overlap, later values overwrite earlier ones:

```js
Object.assign({
    a: 1
}, {
    a: 2,
    b: 3
}); // { a: 2, b: 3 }
```

### Adding or Modifying Properties

```js
const user = {
    name: "Alice"
};
Object.assign(user, {
    age: 25
});

console.log(user); // { name: "Alice", age: 25 }
```

#### Mixing in Methods

```js
const canFly = {
    fly() {
        console.log("Flying");
    }
};
const bird = {};
Object.assign(bird, canFly);

bird.fly(); // Flying
```

### Important Notes:

* Shallow Copy: Nested objects are not deeply cloned.

* Target is Mutated: The first argument (target) is modified.

### Summary

Use Case|	Example|
|---|---|
Clone object|	Object.assign({}, obj)
Merge objects|	Object.assign({}, a, b)
Add/update properties|	Object.assign(obj, { prop: val })
Mix behaviors	|Object.assign(target, mixin)
