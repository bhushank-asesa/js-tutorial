# Javascript

> JavaScript is a high-level, interpreted programming language that is primarily used to make web pages interactive and dynamic. It is one of the core technologies of the web, alongside HTML and CSS.

## Key Features of JavaScript:

* **Client-Side Scripting:** Runs directly in the user's browser without needing server-side execution.

* **Event-Driven:** Responds to user actions like clicks, form submissions, or keystrokes.

* **Dynamically Typed:** You don't need to specify variable types.

* **Object-Oriented & Functional:** Supports both object-oriented and functional programming styles.

* **Asynchronous Capabilities:** Includes features like callbacks, promises, and async/await to handle asynchronous operations (e.g., API calls).

## Common Uses:

* Validating form inputs before submission.

* Creating interactive elements like image sliders, dropdowns, and modals.

* Fetching and displaying data dynamically without reloading the page (using AJAX or Fetch API).

* Building full web applications using frameworks like React, Angular, or Vue.js.

* Server-side development (using Node.js).

## Example:

```js
// A simple JavaScript example
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

---

> In summary, JavaScript is the engine behind interactive web experiences and is essential for modern web development.

## Difference between synchronous and asynchronous code in JavaScript?

> The difference between synchronous and asynchronous code in JavaScript lies in how tasks are executed and waited on. Here's a clear comparison:

### Synchronous Code

* Executes line by line.

* Each task waits for the previous one to finish.

* Blocking: If one task takes time, it blocks the rest.

#### Example:

```js
console.log("Start");
console.log("Processing...");
console.log("End");
```

##### Output:

```bash
Start
Processing...
End
```

### Asynchronous Code

* Does not wait for tasks to finish.

* Non-blocking: Executes other tasks while waiting.

* Uses callbacks, promises, or async/await.

#### Example using setTimeout (asynchronous):

```js
console.log("Start");

setTimeout(() => {

    console.log("Delayed Message");

}, 2000); // 2 seconds delay

console.log("End");
```

##### Output:

```bash
Start
End
Delayed Message
```

### Real-Life Analogy:

* **Synchronous:** You stand in line at a coffee shop until the person ahead of you is served.

* **Asynchronous:** You place your order, leave, and get notified when it’s ready.

* When to Use Asynchronous Code?
    - Making API calls

    - Reading files (in Node.js)

    - Waiting for user input, timers, animations, etc.

## Polyfills in JavaScript

> Polyfills are code snippets (usually JavaScript libraries) that implement modern JavaScript features in older environments (like outdated browsers) that do not natively support those features.

### Why Polyfills Are Needed

* JavaScript evolves over time. New features (e.g., Promise, Array.prototype.includes, fetch, etc.) might not work in:

    - Old versions of Internet Explorer

    - Legacy mobile browsers

    - Outdated embedded systems

* To bridge this gap, polyfills simulate these features using older syntax or methods.

### Example of a Polyfill

> Array.prototype.includes Polyfill

* This feature is not supported in IE11. A polyfill would look like:

```js
if (!Array.prototype.includes) {
    Array.prototype.includes = function(searchElement, fromIndex) {
        return this.indexOf(searchElement, fromIndex) !== -1;
    };
}
```

* Now you can safely use:

```js
['a', 'b', 'c'].includes('b'); // true
```

* Even in environments where includes isn't natively supported.

### Common Polyfilled Features

|Feature	|PolyfillLibrary/Method|
|---|---|
Promise|	es6-promise|
fetch|	whatwg-fetch|
Array.includes|	Manual or via core-js|
Object.assign|	Manual or core-js|
Symbol|	core-js|

### Tools that Handle Polyfills Automatically

* **Babel:** Transpiles ES6+ code to ES5. With @babel/preset-env + core-js, it adds polyfills as needed.

* **core-js:** A modular polyfill library.

* **polyfill.io:** A service that delivers polyfills based on the user’s browser.

#### Example usage of polyfill.io:

```html
<script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
```

### Best Practices

* Only include polyfills that are needed for your target browsers.

* Avoid polluting global scope (use conditionals).

* Use tools like Babel + core-js for production-ready apps.

## String.prototype.repeat()

> The repeat() method in JavaScript returns a new string with the original string repeated a specified number of times.

### Syntax

```js
str.repeat(count)
```

* str: The original string.

* count: An integer between 0 and Infinity, indicating how many times to repeat the string.

### Example

```js
"abc".repeat(3); // "abcabcabc"
"hi ".repeat(2); // "hi hi "
"🌟".repeat(5); // "🌟🌟🌟🌟🌟"
```

### Edge Cases

```js
"abc".repeat(0); // ""
"abc".repeat(-1); // ❌ RangeError
"abc".repeat(0.5); // "" → count is converted to integer (floor)
"abc".repeat(Infinity); // ❌ RangeError
(null).repeat(2); // ❌ TypeError
```

### Browser Support

* ✅ Supported in ES6+ (modern browsers, Node.js ≥ 4).

* ❌ Not supported in IE.

### To support older browsers, use a polyfill.

* Polyfill for String.prototype.repeat

```js
if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {

        if (this == null) throw new TypeError("Can't convert to string");
        let str = String(this);
        count = Math.floor(count);
        if (count < 0 || count === Infinity) throw new RangeError("Invalid count value");

        let result = '';
        while (count > 0) {
            if (count % 2 === 1) result += str;
            str += str;
            count = Math.floor(count / 2);
        }
        return result;

    };
}
```

* This implementation handles edge cases and is efficient for large count values.
