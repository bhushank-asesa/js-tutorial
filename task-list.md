# Javascript task List

1. Array

- slice()`and`splice()
- difference between `find()` and `findIndex()`?
- Explain the primary distinction between the Array.forEach - loop and Array.map() method, as well as when to choose one over the other.

2. Object
3. let/var/const, hoisting and temporal Dead-zone
4. functions ,declarations, expression, programming, arrow function, IIFE, generator functions
5. this keyword with arrow function, behavior

- Describe how JavaScript's `this` keyword works in different contexts.

6. call, apply, bind
7. currying
8. debounce and throttling
9. Event propagation and delegation
10. Bubbling
11. Capturing
12. Prototype and prototype inheritance

- Explain the difference between `prototype` and `__proto__`.

13. Memoization => recursive function and performance?
14. Polyfills
15. Execution and call stack
16. String
17. Number
18. scope and scope chaining
19. Mutable/Immutable data types
20. callback and hell
21. promise and promise chaining and APIs(4); Promise.all => speed up?
22. async/await, async/defer
23. callback vs promise vs async/await
24. Event loop, micro-task, Macro-tasks
25. Web APIs
26. setTimeout, setInterval, compare, difference use cases
27. Working of JS Engine
28. Javascript
29. ES6 and above
30. Date, Math, Other, Loop, block
31. String.prototype.repeat
32. Implement the compose() and pipe() polyfill .
33. Design patterns like singleton, factory patterns etc
34. Implement the publisher-subscriber pattern in javascript
35. Implement Async. parallel, Async.series which executes a set of async tasks parallel and in series
36. Implement thet Retry API
37. How rendering work in the browser
38. Implement Memoization
39. Progressive Web application
40. Clone an Object
41. Implement clearAllTimeout()
42. Implement a function to flatten a nested array
43. Implement an LRU Cache
44. closure, How does closure affect garbage collection in JavaScript?
45. Explain lexical scope in JavaScript and how it affects variable visibility. Provide examples to illustrate?
46. How do you handle errors and exceptions in JavaScript? What are the best practices for error handling in asynchronous code with promises?
47. Find the output of below code?

```javascript
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```

---

48 Find the output ?

```javascript
var x = 10;
function foo() {
  var x = 5;
  console.log(x);
}
foo();
console.log(x);
```

---

49. Find the output ?

```javascript
    function x(){
    for(var i=1;i<=5;i++){
    setTimeout(()=>{
    console.log(i)
    },i\*1000)
    } }
    x();
```

---

50. Find the output ?

```javascript
function x() {
  let a = 10;
  function d() {
    console.log(a);
  }
  a = 500;
  return d;
}
var z = x();
z();
```

---

51. Find the output ?

```javascript
getData1();
getData();
function getData1() {
  console.log("getData11");
}
var getData = () => {
  console.log("Hello");
};
```

---

52. higher-order functions
53. shallow copy and deep copy
54. data types

- Explain the difference between `null` and `undefined`.
- What is the `typeof` operator in JavaScript?
- Data Structures: Arrays, objects, maps, and sets are essential.
- Differentiate between a variable that is null, undefined, or undeclared.

55. CORS
56. What is the difference between `Object.assign()` and the spread operator?
57. What is a module bundler, and how does it work?
58. interceptors
59. localStorage & sessionStorage
60. What is the difference between synchronous and asynchronous code in JavaScript?

61. What is `eval()` in JavaScript, and why is it considered harmful?
62. What is a `Proxy` in JavaScript, and how is it used?
63. What is a `WeakMap` in JavaScript, and how does it differ from a regular `Map`?
64. Operator

- What is the difference between `==` and `===` in JavaScript?

65.

- How do you optimize JavaScript performance in a web application?
- Explain the concept of functional programming and how JavaScript supports it.
- What are JavaScript modules, and how do you use them?
- How does JavaScript handle memory management and garbage collection?

66. Condition: Only solve the problem with recursion.

You run a pizza shop and offer three types of pizzas:

- small: $7
- medium: $9
- large: $10

Customers can add an unlimited number of extra options: either "ExtraSauce" for $1 or "ExtraToppings" for $2.

Task:
Write a function that calculates the cost of the pizza based on its name as the first argument and any number of added options.
For example:

```javascript
pizzaPrice("small");
// => 7

pizzaPrice("medium", "ExtraSauce", "ExtraToppings");
// => 12

pizzaPrice(
  "medium",
  "ExtraToppings",
  "ExtraToppings",
  "ExtraToppings",
  "ExtraToppings"
);
// => 17
```

67. What is JavaScript?
68. What is the `new` keyword used for?
69. What is a `WeakMap` and how is it different from a `Map`?
70. What is a `Set` in JavaScript?
71. What is `Object.create()` used for?
72. What are "decorators" in JavaScript?
73. ES6 Features: Get comfortable with arrow functions, destructuring, spread/rest operators, and template literals.
74. What is the purpose of `Object.assign()`?
75. What are "template literals"?
76. What is the `spread` operator?
77. What is the `rest` parameter?
78. Explain the `for...of` loop.
79. What is `Symbol` used for in JavaScript?
80. How do you create a class in JavaScript?
81. What is destructuring in JavaScript?
82. What is the `Proxy` object?
83. DOM Manipulation: Know how to interact with the Document Object Model (DOM) effectively.
84. Design Patterns: Know the most common patterns like Singleton, Observer, and Module.
85. JSON: Understand JSON parsing and stringify.
86. Build Tools: Grasp Webpack and Babel for bundling and transpiling.
87. Testing: Explore testing frameworks like Jest and Mocha.
88. Debugging: Proficiency with browser developer tools is a must.
89. ESLint and Code Style: Adhere to clean code practices.
90. Security: Understand common web security vulnerabilities (e.g., XSS, CSRF).
91. Documentation: Keep your code well-documented for clarity.
92. Automation: Grasp task runners like Grunt and Gulp.
93. Progressive Web Apps (PWAs): Understand PWA concepts and service workers.
94. Web Performance: Optimize your code for speed and efficiency.
95. What is a common scenario for employing anonymous functions?
96. Distinguish between host objects and native objects.
97. Clarify the distinctions among 'function User(){}', 'var user = User()', and 'var user = new User()'
98. Explain the differences between feature detection, feature inference, and utilizing the User Agent (UA) string.
99. What is type coercion, and what are some common pitfalls associated with relying on it in JavaScript code?
100.  What distinguishes an "attribute" from a "property"?
101.  List the advantages and disadvantages of extending built-in JavaScript objects.
102.  Discuss the same-origin policy's implications for JavaScript.
103.  Why is it referred to as a "Ternary operator," and what does the term "Ternary" signify?
104.  Define strict mode and outline some of its advantages and disadvantages.
105.  Analyze the pros and cons of writing JavaScript code in a language that compiles to JavaScript.
106.  What tools and techniques do you employ for debugging JavaScript code?
107.  Enumerate the benefits and drawbacks of immutability and explain how you can achieve it in your code.
108.  Compare ES6 classes and ES5 function constructors, and furnish a use case for the arrow (=>) function syntax.
109.  Describe the advantages of using the arrow syntax for methods in constructors.
110.  Give an example of generating a string using ES6 Template Literals and explain their benefits.
111.  Discuss the benefits of using spread syntax and differentiate it from rest syntax.
112.  Explain how code sharing between files can be accomplished.
