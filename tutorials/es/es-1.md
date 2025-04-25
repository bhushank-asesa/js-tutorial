# ES ECMAScript

> ECMAScript 2015 is also known as ES6 and ECMAScript 6.

## ES 6

### let and const

### Arrow Function

* concise way to write functions in JavaScript
* Instead of the traditional function keyword, you use a "fat arrow" (=>).

```js
const a = (b) => {
    console.log(b);
};
```

* Basic syntax

```js
(parameters) => expression;
```

* for single parameter, you can even omit the parentheses:

```js
(parameter) => expression;
```

* function body has more than one statement, wrap it in curly braces {} and explicitly use a return statement:

```js
(parameters) => {
    // multiple statements
    return result;
};
```

---

* Traditional Function:

```js
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // Output: 8
```

---

* Arrow Function Equivalent:

```js
const addArrow = (a, b) => a + b;
console.log(addArrow(5, 3)); // Output: 8
```

---

* Single Parameter:

```js
const double = number => number\ * 2;
console.log(double(7)); // Output: 14
```

---

* No Parameters:

```js
const greet = () => "Hello!";
console.log(greet()); // Output: Hello!
```

---

* Multiple Statements:

```js
const multiplyAndLog = (x, y) => {
    const product = x\ * y;
    console.log(`The product is: ${product}`);
    return product;
};
multiplyAndLog(4, 6); // Output: The product is: 24 (and returns
```

#### Key Differences and Benefits of Arrow Functions:

##### **Concise Syntax:**

* often require less code to write.

##### **Lexical this Binding:**

* Unlike regular functions, arrow functions don't have their own this value.
* They inherit the this value from their surrounding (enclosing) scope.
* This can make dealing with this inside callbacks and methods much simpler and less prone to errors.

##### **No arguments Object:**

* Arrow functions do not have their own arguments object.
* If you need to access all the arguments passed to the function, you can use rest parameters (...args).
-

##### **Cannot be used as Constructors:**

* You can't use new with arrow functions to create constructor functions.

> Arrow functions are widely used in modern JavaScript, especially with concepts like promises, array methods (map, filter, reduce), and event handlers.

### Object destructure

```js
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

// Destructuring Assignment
let {
    firstName,
    age
} = person;
```

### Array destructure

* Destructuring assignment makes it easy to assign array values and object properties to variables.

```js
Example;
// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Destructuring Assignment
let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2); // Banana Orange
```

### Spread operator

* The ... operator can be used to expand an iterable into more arguments for function calls:

* The ... operator expands an iterable (like an array) into more elements:

```js
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
const numbers = [23, 55, 21, 87, 56];
let maxValue = Math.max(...numbers);
console.log(year, maxValue);
```

### The For/Of Loop

### JavaScript Maps

* A Map holds key-value pairs where the keys can be any datatype.

* A Map remembers the original insertion order of the keys.
* Being able to use an Object as a key is an important Map feature.

```js
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200],
]);
console.log(fruits); // Map(3) {'apples' => 500, 'bananas' => 300, 'oranges' => 200}
```

### JavaScript Sets

* A JavaScript Set is a collection of unique values.

* Each value can only occur once in a Set.

* The values can be of any type, primitive values or objects.

```js
const letters = new Set();

// Add some values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters); // Set(3) {'a', 'b', 'c'}
```

### JavaScript Classes

-JavaScript Classes are templates for JavaScript Objects.

* Use the keyword class to create a class.

* Always add a method named constructor():

```js
class ClassName {
    constructor() {
        ...
    }
}
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}
```

-A JavaScript class is not an object.

-It is a template for JavaScript objects.

* Using a Class
* When you have a class, you can use the class to create objects:

```js
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
```

### Promise

* Promise.allSettled()
* Promise.any()

### Default Parameter Values

* ES6 allows function parameters to have default values.

```js
function myFunction(x, y = 10) {
    // y is 10 if not passed or undefined
    return x + y;
}
myFunction(5);
```
