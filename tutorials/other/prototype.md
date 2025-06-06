# Prototype and prototype inheritance - Explain the difference between prototype and __proto__.

> The terms prototype and __proto__ in JavaScript both relate to prototypal inheritance, but they serve different purposes and exist in different contexts.

## prototype (Function property)

* **Where it exists:** On constructor functions (i.e., functions meant to be used with new)

* **What it is:** An object that becomes the prototype of instances created using the constructor.

* Example:

```js
function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const p = new Person('Alice');
p.sayHello(); // "Hello, I'm Alice"
```

* p was created by Person, so p.__proto__ === Person.prototype is true.

* You define shared methods and properties on Person.prototype.

## __proto__ (Object property, non-standard but widely supported)

* Where it exists: On all objects

* What it is: A reference to the object’s prototype, i.e., the object from which it inherits.

* Example:

```js
const obj = {};
console.log(obj.__proto__ === Object.prototype); // true
```

* __proto__ lets you access or set an object's prototype.

* Modern JavaScript prefers Object.getPrototypeOf(obj) over using __proto__.

## Key Differences:

|Feature|	prototype|	__proto__|
|---|---|---|
Belongs to|	Constructor functions|	All objects|
Used for|	Defining properties or methods for instances|	Accessing an object's prototype|
Type|	Property (object)|	Property (object)|
Standard|	Yes	|No (but widely supported)|
Preferred alternative|	—|	Object.getPrototypeOf() / Object.setPrototypeOf()|

## Visual Summary:

```js
function Animal() {}
const dog = new Animal();

console.log(Animal.prototype); // Prototype object for instances of Animal
console.log(dog.__proto__); // Points to Animal.prototype
console.log(dog.__proto__ === Animal.prototype); // true
```

## Best Practices

* Use prototype to define reusable methods on constructor functions.

* Avoid using __proto__ in production; use:

    - Object.getPrototypeOf(obj) instead of obj.__proto__

    - Object.setPrototypeOf(obj, proto) instead of obj.__proto__ = proto
