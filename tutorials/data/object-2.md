# Distinguish between host objects and native objects

## Native Objects

> JavaScript, as a language, has its own built-in set of tools and blueprints. These are the native objects. They are part of the core JavaScript specification and are always available, regardless of the environment where the JavaScript code is running (be it a web browser, Node.js, or some other JavaScript runtime).

> Native Objects are the objects that are intrinsic to the JavaScript language itself. They provide fundamental functionalities and data structures.

## Examples:

1. Object
2. Array
3. String
4. Number
5. Boolean
6. Function
7. Date
8. Math
9. RegExp
10. Error
11. Promise
12. Map
13. Set

## Host objects

> **_Host objects_** are provided by the specific environment in which the JavaScript code is being executed. These objects extend the capabilities of JavaScript by giving it access to the features of that environment.

> Host Objects are supplied by the host environment to enable JavaScript to interact with it.

### In a web browser environment, common host objects include:

- window (the global object in browsers)
- document (represents the HTML or XML document)
- console (provides access to the browser's debugging console)
- navigator (contains information about the browser)
- history (allows manipulation of the browser's history)
- DOM elements (like document.getElementById, document.createElement, etc.)
- XMLHttpRequest or fetch (for making network requests)
- localStorage and sessionStorage (for client-side storage)
-

### In a Node.js environment, some host objects include:

- global (the global object in Node.js)
- process (provides information about the current Node.js process)
- require (for importing modules)
- module and exports (for defining modules)
- File system objects (like fs)
- Network objects (like http, net)

## Here's a table summarizing the key differences:

| Feature      | Native Objects                                            | Host Objects                                                      |
| ------------ | --------------------------------------------------------- | ----------------------------------------------------------------- |
| Source       | Part of the core JavaScript language specification        | Provided by the specific JavaScript execution environment         |
| Availability | Always available in any JavaScript environment            | Available depending on the environment (browser, Node.js, etc.)   |
| Purpose      | Provide fundamental language features and data structures | Enable JavaScript to interact with the environment                |
| Examples     | Object, Array, Math, String, Function                     | window, document, console (in browsers); process, fs (in Node.js) |

---

> In essence, native objects are the building blocks of JavaScript itself, while host objects are the tools that allow JavaScript to interact with the outside world in different environments. Understanding this distinction is crucial for comprehending how JavaScript code behaves in various contexts
