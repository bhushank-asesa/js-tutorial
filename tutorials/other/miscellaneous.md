# Miscellaneous

##  What distinguishes an "attribute" from a "property"? 

> (especially in the context of the DOM), attributes and properties are related but distinct concepts when dealing with HTML elements.

### Attributes

* Defined in HTML.

* Represent initial values set on an element.

* Accessible via methods like getAttribute() and setAttribute().

## Example:

```html
<input id="myInput" type="text" value="Hello">
```

```js
const input = document.getElementById("myInput");
console.log(input.getAttribute("value")); // "Hello"
```

### Properties

* Defined on the DOM object.

* Reflect the current state of the element.

* Directly accessible as object properties in JavaScript.

* Example:

```js
console.log(input.value); // "Hello"
input.value = "World";
console.log(input.getAttribute("value")); // still "Hello"
console.log(input.value); // "World"
```

### Key Differences

Feature	|Attribute|	Property|
|---|---|---|
Source|	HTML markup	|DOM object
Use|	Gets initial value|	Reflects current state
Access|	getAttribute() / setAttribute()	|Direct property access (el.value)
Sync behavior|	Not automatically synced after change	|Changes reflect immediately

### Summary

* Attributes initialize the element.

* Properties reflect the live state of the element in the browser.

### Here's a list of common HTML attributes vs their corresponding DOM properties where behavior or values can differ:

|HTML Attribute|	DOM Property|	Notes
|---|---|---|
value|	element.value|	Attribute = initial value; Property = current value (e.g., in `<input>` )
checked|	element.checked|	Attribute = default checked state; Property = current checked state
selected|	element.selected|	Attribute = initially selected; Property = currently selected
disabled|	element.disabled|	Both can be read/set, but property reflects the live state
href|	element.href|	Attribute = raw string; Property = fully resolved URL
src|	element.src|	Same as above (e.g., for <img>)
class|	element.className|	Attribute = full class string; Property = className string
style|	element.style|	Attribute = raw CSS string; Property = CSSStyleDeclaration object
tabindex|	element.tabIndex|	Attribute = string; Property = integer
readonly|	element.readOnly|	Attribute = presence-only boolean; Property = true/false boolean

### Example Difference (with checked)

```html
<input type="checkbox" id="cb" checked>
```

```js
const cb = document.getElementById("cb");
cb.checked = false;

console.log(cb.getAttribute("checked")); // "checked"
console.log(cb.checked); // false
```

## Advantages and disadvantages of extending built-in JavaScript objects.

> Extending built-in JavaScript objects (like Array, Object, String, etc.) means adding custom methods or properties to their prototypes. While this can be powerful, it comes with significant trade-offs.

### Advantages of Extending Built-in JavaScript Objects

#### Code Reusability

* Custom methods added to prototypes can be reused across your application.

```js
Array.prototype.first = function() {
    return this[0];
};
```

#### Cleaner Syntax

* Enhances readability by making utility methods feel native.

```js
const names = ["Alice", "Bob"];
console.log(names.first()); // Cleaner than a helper: first(names)
```

#### Encapsulation

* Keeps utility logic close to the data it operates on (e.g., string methods on strings).

#### Polyfilling

Safe and useful for adding standard methods not supported in older environments (e.g., adding Array.prototype.includes in old browsers).

### Disadvantages of Extending Built-in JavaScript Objects

#### Name Collisions / Conflicts

* If future versions of JavaScript add a method with the same name, your version may cause unexpected behavior or bugs.

```js
Array.prototype.toJSON = function() {
    /* BAD IDEA */
};
```

#### Unexpected Behavior

* Third-party libraries may iterate over objects or arrays and be disrupted by your additions.

```js
for (let key in arr) {
    ...
} // your custom method shows up
```

#### Breaks Encapsulation

* Modifying global prototypes can affect all parts of the codebase, including third-party libraries — leading to difficult-to-debug issues.

#### Performance Concerns

Browsers optimize built-in prototypes; extending them can interfere with engine optimizations.

#### Bad Practice in Team Environments

Generally discouraged in collaborative or production environments due to the reasons above — it may surprise other developers.

### When It Might Be Acceptable

* Writing polyfills for older environments.

* Inside controlled environments (e.g., personal scripts or internal tools).

* With symbols or non-enumerable properties (to reduce risks).

## What is a common scenario for employing anonymous functions?

> A common scenario for employing anonymous functions is when passing a function as an argument to another function, especially for short-lived or one-off operations.

### Common Use Case: Callbacks in Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(function(num) {
    return num * num;
});
```

* Here, the function passed to .map() is anonymous — it doesn't need a name because it's used immediately and not reused elsewhere.

### Other Typical Scenarios

#### Event Handlers

```javascript
button.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

#### Timers

```javascript
setTimeout(function() {
    console.log("Executed after delay");
}, 1000);
```

#### Immediately Invoked Function Expressions (IIFE)

```javascript
(function() {
    console.log("This runs immediately!");
})();
```

#### Promises

```javascript
fetch("/api/data")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    });
```

> Anonymous functions are great for concise, single-use logic — but should be avoided when the function needs to be reused or referenced elsewhere.
