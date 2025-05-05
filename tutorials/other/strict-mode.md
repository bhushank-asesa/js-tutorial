# What is Strict Mode?

> Strict mode is activated by adding the string "use strict"; at the top of your script or function:

### example

```js
"use strict";
let x = 3.14;
// Or inside a function:

function myFunction() {
    "use strict";
    // strict rules apply here
}
```

## Advantages of Strict Mode

|Benefit	|Description|
|---|---|
|Prevents undeclared variables	|Helps catch bugs early by throwing errors on assignments to undeclared variables.
Safer this|	In functions, this is undefined instead of falling back to window.
 Eliminates silent errors|	Converts silent failures (like writing to read-only properties) into real errors.
Disallows duplicate params|	Avoids confusing bugs from duplicate function parameters.
Future-proof code	|Reserved keywords for future JS (like let, static) are restricted.
Safer eval usage	|eval() in strict mode can't introduce new variables into surrounding scope.

## Disadvantages of Strict Mode

|Limitation|	Description|
|---|---|
|Legacy code incompatibility	|May break older JavaScript code that relied on looser rules.
Verbose for some code patterns|	More strict about structure; may require extra setup or refactoring.
Not automatically enabled|	You must explicitly turn it on in each file or function.

### Example of Error in Strict Mode

```js
"use strict";
x = 10; // ❌ ReferenceError: x is not defined
```

* In non-strict mode, this would silently create a global variable x.

## When to Use It

* Always in modern code, especially in modules and classes.

* Helps catch errors early during development.
