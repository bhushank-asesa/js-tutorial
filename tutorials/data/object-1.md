# Object

## Object.create()

> used  to create a new object with a specified prototype and optional properties.

### Syntax:

```js
Object.create(prototype, propertiesObject)
```

* prototype: The object to be set as the new object's prototype.

* propertiesObject (optional): Descriptors for additional properties (like writable, enumerable).

### Key Uses:

#### Create a New Object with a Specific Prototype

```js
const person = {
    greet() {
        console.log(`Hello, I am ${this.name}`);
    }
};

const user = Object.create(person); // user inherits from person
user.name = "Alice";
user.greet(); // Hello, I am Alice
```

* user.__proto__ === person → true

### Prototypal Inheritance (without classes)

> Useful in functional inheritance patterns, especially before ES6 class.

```js
const Animal = {
    speak() {
        console.log("Animal speaks");
    }
};
const dog = Object.create(Animal);
dog.speak(); // Animal speaks
```

### Create an Object with No Prototype

```js
const pure = Object.create(null);
console.log(pure.toString); // undefined — no inherited Object methods
```

* Helpful for creating dictionaries or maps with no inherited keys (e.g., avoiding hasOwnProperty conflicts).

### Comparison to {} or new Object():

| Method	|Inherits From	|Customizable
|---|---|---|
| {} or new Object()	|Object.prototype	|No
| Object.create(proto)	|proto you define	|Yes

### Example with Property Descriptors:

```js
const user = Object.create({}, {
    id: {

        value: 101,
        writable: false,
        enumerable: true

    }
});
console.log(user.id); // 101
user.id = 202;
console.log(user.id); // Still 101 (not writable)
```

### Summary

> Object.create() is mainly used to:

* Set up inheritance manually.

* Create pure dictionaries with null prototype.

* Add properties with fine control via descriptors.
