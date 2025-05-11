# Objects

> Fundamental data structures that allow you to represent complex entities with properties and behaviors. Think of them as collections of key-value pairs, where each key is typically a string (or Symbol) and each value can be any valid JavaScript data type – including other objects!

## What is an Object?

- an unordered collection of related data, stored as key-value pairs.

- **Key (Property Name):** A string (or Symbol) that uniquely identifies a value within the object.
- **Value:** Any valid JavaScript data type, such as: Primitive values (string, number, boolean, null, undefined, bigint, symbol)

## Other objects

1. Arrays
2. Functions (when a function is a value of an object property, it's called a method)

## Creating Objects

- **Object Literal Notation:** This is the most common and concise way to create objects. You define an object using curly braces {} and list the key-value pairs inside, separated by commas.

```js
const person = {
  name: "Alice",
  age: 30,
  city: "New York",
  greet: function () {
    // Method
    console.log(`Hello, my name is ${this.name}`);
  },
};
```

- **Using the new Object() Constructor:** While less common for simple objects, you can create an empty object using the new Object() constructor and then add properties.

```js
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2023;
```

- **Using Constructor Functions (with new):** You can define a constructor function to create multiple objects with the same structure. The new keyword is used to instantiate objects from these constructors.

```js
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.bark = function () {
    console.log("Woof!");
  };
}

const dog1 = new Dog("Buddy", "Golden Retriever");
const dog2 = new Dog("Lucy", "Poodle");
```

- **Using ES6 Classes (Syntactic Sugar over Constructor Functions):** Classes provide a more structured and cleaner syntax for creating objects and dealing with inheritance.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log("Generic animal sound");
  }
}

const cat = new Animal("Whiskers");
```

- **Using Object.create():** This method creates a new object with the specified prototype object and properties. It allows for creating objects with custom prototypes.

```js
const proto = {
  greet: function () {
    console.log(`Hello from ${this.name}`);
  },
};

const anotherPerson = Object.create(proto);
anotherPerson.name = "Bob";
anotherPerson.greet(); // Output: Hello from Bob 3. Accessing Object Properties
```

### You can access the properties of an object using two main ways:

- **Dot Notation:** This is the most common and preferred way when the property name is a valid JavaScript identifier (no spaces, doesn't start with a number, etc.).

```js
console.log(person.name); // Output: Alice
person.greet(); // Output: Hello, my name is Alice
```

- **Bracket Notation:** This is necessary when the property name is not a valid identifier (e.g., contains spaces, starts with a number) or when you need to access a property using a variable.

```js
const myProperty = "city";
console.log(person["age"]); // Output: 30
console.log(person[myProperty]); // Output: New York

const address = { "street address": "123 Main St" };
console.log(address["street address"]); // Output: 123 Main St 4. Modifying Objects
```

> JavaScript objects are dynamic, meaning you can add, delete, and modify their properties after they are created.

### Adding Properties: Simply assign a value to a new property name.

```js
person.job = "Engineer";
console.log(person.job); // Output: Engineer
```

### Modifying Properties: Assign a new value to an existing property.

```js
person.age = 31;
console.log(person.age); // Output: 31
```

### Deleting Properties: Use the delete operator.

```js
delete person.city;
console.log(person.city); // Output: undefined 5. Key Concepts Related to Objects
```

### Properties: The attributes or characteristics of an object.

- **Methods:** Functions that are associated with an object and can operate on its data.

- **this Keyword:** Inside a method, this refers to the object that the method is being called on.

- **Prototypes:** Objects inherit properties and methods from their prototype. This forms the basis of prototypal inheritance in JavaScript.

- **Object.keys(), Object.values(), Object.entries():** These static methods provide ways to iterate over the keys, values, and key-value pairs of an object, respectively.

- **Object.assign():** Used to copy the values of all enumerable own properties from one or more source objects to a target object. 1

### **Spread Syntax (...):** Can be used to create shallow copies of objects or merge objects.

```js
const personCopy = { ...person };
const mergedObject = { ...person, ...car };
```

## Why are Objects Important?

### Objects are fundamental because they allow you to:

- **Model real-world entities:** You can represent people, cars, books, or any other concept with their associated data and actions.
- **Organize and structure code:** By grouping related data and functions, objects make your code more organized and easier to manage.
- **Build complex data structures:** You can create nested objects and arrays of objects to represent intricate relationships.
- **Implement object-oriented programming (OOP) principles:** JavaScript's object-based nature allows you to utilize concepts like encapsulation, inheritance, and polymorphism (though its inheritance is prototypal).
