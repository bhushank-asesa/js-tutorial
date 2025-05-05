# Data types

## Difference between `null` and `undefined` and `undeclared` .

* both used to represent the absence of a value, but they are not the same and are used in different contexts:

### undefined

* **Type:** undefined (primitive)

* Variable has been declared but has not been assigned a value yet.

* *Who sets it?:* JavaScript engine automatically.

```js
let a;
console.log(a); // undefined
```

### null

* **Type:** object (this is a historical quirk)

* Variable is explicitly set to "no value" by the programmer.

* Who sets it?: The developer, intentionally.

```js
let a = null;
console.log(a); // null
```

### Undeclared

Definition: A variable has never been declared in the current scope.

Accessing it: Throws a ReferenceError.
|Feature|	undefined|	null | Undeclared |
|---|---|---|---|
|Declared|Yes|Yes|No|
|Assigned|Yes|Yes|No|
|Type/typeOf result|	undefined|	object (a historical bug)|undefined (only with typeof)
|Set by|	JavaScript	|Developer|Not set
|Indicates|	Variable not assigned|	Variable intentionally empty
|Common use|	Default value	|Reset or clear value
|Equality (==)|	null == undefined → true	
|Strict equality (===)|	null === undefined → false	
|Access|No error|No error|ReferenceError (if accessed directly)

* Example Together:

```js
let x;
let y = null;

console.log(typeof x); // "undefined"
console.log(typeof y); // "object"

console.log(x == y); // true  (loose equality)
console.log(x === y); // false (strict equality)
```

## What is the `typeof` operator in JavaScript?

-The typeof operator in JavaScript is used to determine the data type of a given operand. It returns a string indicating the type.

```js
typeof operand
typeof(operand)
console.log(typeof "hello") //"string"
console.log(typeof 123) //"number"
```

##  Data Structures: Arrays, objects, maps, and sets are essential

* arrays, objects, maps, and sets are foundational data structures. Each has specific strengths and ideal use cases.

### Array

* Ordered list of values (indexed by number).

* Allows duplicates.

* **Best for:** Ordered collections, lists, or when position matters.

```js
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // "banana"
```

#### Characteristics:

* Access by index: arr[0]

* Useful methods: push(), pop(), map(), filter(), forEach()

### Object

* Key-value pairs with keys as strings (or symbols).

* Unordered.

* **Best for:** Representing real-world entities or structured data.

```js
let person = {
    name: "Alice",
    age: 30
};
console.log(person.name); // "Alice"
```

#### Characteristics:

* Access by key: obj.key or obj["key"]

* Not iterable with for...of (but iterable with for...in)

* Cannot use object as a key (use Map instead)

### Map

* Like objects, but with any type of key (not just strings).

* Maintains insertion order.

* **Best for:** Key-value pairs where keys can be any type.

```js
let map = new Map();
map.set("key", 100);
map.set({}, "object as key");
console.log(map.get("key")); // 100
```

#### Characteristics:

* Use .set() and .get()

* Iterable with for...of

* Preserves order

### Set

* Collection of unique values.

* No duplicates.

* **Best for:** Removing duplicates, checking membership quickly.

```js
let set = new Set([1, 2, 2, 3]);
console.log(set); // Set(3) {1, 2, 3}
```

####  Characteristics:

* Use .add(), .has(), .delete()

* Iteration order is preserved

* Only stores values, not key-value pairs

### 
|Feature	|Array	|Object	|Map	|Set|
|---|---|---|---|---|
|Key Type|	Index (number)|	String/Symbol|	Any|	-|
|Order Preserved	|✅ Yes	|❌ No	|✅ Yes	|✅ Yes|
|Duplicates|	✅ Yes|	Keys: ❌|	Keys: ❌|	❌ No
|Iterable|	✅ Yes|	❌ (use for..in)	|✅ Yes	|✅ Yes
|Use Case|	Lists	|Structured data|	Key-value w/ any key	|Unique values
