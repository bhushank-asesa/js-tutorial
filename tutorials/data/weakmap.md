# WeakMap

> A WeakMap is a special kind of Map that holds key-value pairs where the keys must be objects, and those keys are held weakly, meaning:

> If there are no other references to a key object, it can be garbage collected, even if it's still in the WeakMap.

## Key Differences: Map vs WeakMap

|Feature|	Map	|WeakMap|
|---|---|---|
|Key types|	Any value (objects, primitives)|	Only objects|
|Garbage collection|	Keys are strongly held	|Keys are weakly held (GC eligible)|
|Iterable?|	Yes (forEach, for...of)	|❌ No iteration|
|Size accessible?|	.size property available	|❌ No .size|
|Use cases|	General-purpose map	|Private metadata for objects|

## Example of WeakMap:

```js
const wm = new WeakMap();
let obj = {
    name: "Alice"
};

wm.set(obj, "some metadata");

console.log(wm.get(obj)); // "some metadata"

obj = null; // Now eligible for garbage collection
```

* After obj = null, the object is no longer referenced elsewhere — so the key and its value can be garbage collected. This is not possible with Map, which holds keys strongly.

## Use Case: Private Data in Classes

```js
const privateData = new WeakMap();

class Person {
    constructor(name) {
        privateData.set(this, {
            name
        });
    }

    getName() {
        return privateData.get(this).name;
    }
}

const p = new Person("Bob");
console.log(p.getName()); // Bob
```

* Here, privateData keeps internal state hidden from external access, and once the instance is discarded, its entry is cleaned up automatically.

## Limitations of WeakMap

* Not iterable

* Can’t list keys/values

* No .clear() method

## Summary

* Use Map for general-purpose collections.

* Use WeakMap when:

* Keys are objects

* You want automatic cleanup

* You’re storing private data linked to objects
