# OOP

## What is the `new` keyword used for?

> It's a fundamental part of how object-oriented programming works in the language. Essentially, new is used to create new instances of constructor functions or classes. When you use new before a function or class, it does several things behind the scenes:

- **Creates a new empty object:** A brand-new, plain JavaScript object is created.
- **Sets the prototype of the new object:** The [[Prototype]] (internal property) of the newly created object is set to the prototype property of the constructor function or class being called. This establishes the prototype chain, allowing the new object to inherit properties and methods from the constructor's prototype.
- **Binds this:** The this keyword inside the constructor function or class is bound to this newly created object. This means that when you refer to this within the constructor, you're referring to the specific instance being created.
- **Executes the constructor:** The code inside the constructor function or the constructor() method of the class is executed. This is where you can initialize the object's properties and perform any setup needed for the new instance.
- **Returns the new object (or a different object):**
  - If the constructor function or class doesn't explicitly return anything (or returns a primitive value), the new operator will automatically return the newly created object.
  - If the constructor function or class returns a non-primitive value (an object), that object will be returned instead of the newly created one. However, this is a less common pattern.
- Let's look at an example using a constructor function:

```js
function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.bark = function () {
    console.log("Woof!");
  };
}

// Create new Dog objects using the 'new' keyword
const myDog = new Dog("Buddy", "Golden Retriever");
const anotherDog = new Dog("Lucy", "Poodle");

console.log(myDog.name); // Output: Buddy
myDog.bark(); // Output: Woof!
console.log(anotherDog.breed); // Output: Poodle
```

- And here's an example using a class:

```js
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  startEngine() {
    console.log("Engine started!");
  }
}

// Create new Car objects using the 'new' keyword
const myCar = new Car("Toyota", "Camry");
const anotherCar = new Car("Honda", "Civic");

console.log(myCar.make); // Output: Toyota
myCar.startEngine(); // Output: Engine started!
console.log(anotherCar.model); // Output: Civic
```

> In both cases, the new keyword is essential for creating individual instances (myDog, anotherDog, myCar, anotherCar) of the Dog constructor or the Car class. Each instance has its own set of properties and can use the methods defined in the constructor's prototype or the class definition.

> Think of a constructor function or a class as a blueprint. The new keyword uses that blueprint to build an actual object in memory. Each time you use new, you get a unique object based on that blueprint.

## How do you create a class in JavaScript?

> Creating classes in JavaScript is straightforward, especially with the introduction of the class keyword in ECMAScript 2015 (ES6). This provides a more familiar syntax for developers coming from other object-oriented languages, although it's important to remember that JavaScript's inheritance model is still prototype-based under the hood.

> Here are the two primary ways to create a class in JavaScript:

### Using the class Keyword (ES6 and later):

- This is the modern and preferred way to define classes in JavaScript.

```js

class MyClass {
// Constructor method (required for initializing instances)
constructor(propertyName1, propertyName2) {
this.propertyName1 = propertyName1;
this.propertyName2 = propertyName2;
}

// Method definition
methodName() {
console.log("This is a method of MyClass.");
console.log(`Property 1: ${this.propertyName1}`);
}

// Another method
anotherMethod(value) {
return value \* 2;
}

// Static method (associated with the class itself, not instances)
static staticMethod() {
console.log("This is a static method.");
}
}

// Creating instances of the class using the 'new' keyword
const instance1 = new MyClass("Hello", 10);
const instance2 = new MyClass("World", 20);

// Accessing properties
console.log(instance1.propertyName1); // Output: Hello

// Calling methods
instance1.methodName(); // Output: This is a method of MyClass.
// Property 1: Hello
console.log(instance2.anotherMethod(5)); // Output: 10

// Calling a static method
MyClass.staticMethod(); // Output: This is a static method.
```

- Explanation:

- **class MyClass { ... }:** This declares a new class named MyClass. Class names conventionally start with an uppercase letter.
- **constructor(propertyName1, propertyName2) { ... }:** This is a special method for creating and initializing objects created with the new keyword. It's called automatically when you instantiate the class. The this keyword inside the constructor refers to the newly created instance. You can define parameters that will be passed when creating a new object.
- **methodName() { ... } and anotherMethod(value) { ... }:** These are method definitions. They are added to the prototype of the class, meaning all instances of the class will share these methods.
- **static staticMethod() { ... }:** This defines a static method. Static methods are associated with the class itself, not with individual instances. You call them directly on the class (MyClass.staticMethod()). They don't have access to the this keyword of a particular instance.
- **const instance1 = new MyClass("Hello", 10);:** This creates a new instance (object) of the MyClass using the new keyword. The arguments passed to new MyClass() are passed to the constructor method.

### Using Constructor Functions (Older Approach, Still Valid):

> Before the class keyword, classes were often simulated using constructor functions. While the class syntax is generally preferred now for clarity, understanding constructor functions can be helpful.

```js
function MyClassConstructor(propertyName1, propertyName2) {
this.propertyName1 = propertyName1;
this.propertyName2 = propertyName2;

// You can define methods directly on the instance (less efficient for many instances)
// this.methodName = function() {
// console.log("This is a method of MyClass (instance-specific).");
// };
}

// Adding methods to the prototype (more efficient)
MyClassConstructor.prototype.methodName = function() {
console.log("This is a method of MyClass (from prototype).");
console.log(`Property 1: ${this.propertyName1}`);
};

MyClassConstructor.prototype.anotherMethod = function(value) {
return value \* 2;
};

// Static methods are added directly to the constructor function
MyClassConstructor.staticMethod = function() {
console.log("This is a static method (constructor function).");
};

// Creating instances
const instance3 = new MyClassConstructor("Goodbye", 30);
const instance4 = new MyClassConstructor("Universe", 40);

console.log(instance3.propertyName1); // Output: Goodbye
instance3.methodName(); // Output: This is a method of MyClass (from prototype).
// Property 1: Goodbye
console.log(instance4.anotherMethod(7)); // Output: 14
MyClassConstructor.staticMethod(); // Output: This is a static method (constructor function).
```

### Key Differences between class and Constructor Functions:

- **Syntax:** The class syntax is cleaner and more aligned with class-based languages.
- **Prototype:** With class, methods defined within the class body are automatically added to the prototype. With constructor functions, you explicitly assign methods to ConstructorFunction.prototype.
- **constructor:** The class syntax has a dedicated constructor method.
- **Hoisting:** Class declarations are not hoisted in the same way as function declarations. You must declare a class before you can use it. Constructor functions, being regular functions, are hoisted.

###

> In modern JavaScript development, using the class keyword is the recommended approach for creating classes due to its improved readability and more structured syntax. However, understanding constructor functions provides valuable insight into JavaScript's prototypal inheritance model.
