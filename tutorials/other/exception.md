# Exception and Error handling

> errors and exceptions are handled using a combination of try, catch, finally, and sometimes throw. Here’s a breakdown of how to properly handle errors:

## Using try...catch

```js
try {
    // Code that may throw an error
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
}
```

* **try:** Contains code that might fail.

* **catch**: Handles the error if thrown.

* **error**: The caught error object, usually of type Error.

## Using finally (Optional Cleanup)

```js
try {
    openConnection();
} catch (e) {
    console.error("Connection error:", e);
} finally {
    closeConnection(); // Always runs, error or not
}
```

> Useful for closing resources, resetting state, etc.

## Throwing Custom Errors

```js
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (e) {
    console.error("Custom error:", e.message);
}
```

## Async/Await Error Handling

* When working with promises:

```js
async function fetchData() {
    try {
        let response = await fetch("/api/data");
        let data = await response.json();
        console.log(data);
    } catch (e) {
        console.error("Fetch error:", e);
    }
}
```

## Global Error Handlers (for last-resort cases)

* Browser (window):

```js
window.onerror = function(message, source, lineno, colno, error) {
    console.error("Global error:", message);
};
```

* Node.js:

```js
process.on("uncaughtException", (err) => {
    console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Rejection:", reason);
});
```

## Best Practices

* Don’t silently ignore errors.

* Log errors with meaningful context.

* Use finally for cleanup (e.g., closing DB, clearing timeouts).

* For async code, prefer try...catch over .catch() chaining if readability is important.

* Avoid throwing strings; use Error objects for better stack traces.

## What are the best practices for error handling in asynchronous code with promises?

> Handling errors in asynchronous code using Promises (or async/await) is crucial for building reliable, debuggable applications. Here are best practices for error handling in asynchronous JavaScript:

## Always Catch Errors

* Using .catch() with Promises:

```js
fetch('/api/data')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error fetching data:", error));
```

* Using try...catch with async/await:

```js
async function getData() {
    try {
        const res = await fetch('/api/data');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Async error:", error);
    }
}
```

## Use finally for Cleanup

```js
async function processFile() {
    try {
        await openFile();
        // Do something
    } catch (e) {
        console.error("File error:", e);
    } finally {
        await closeFile(); // Always runs
    }
}
```

## Handle .catch() on Every Promise Chain

* Uncaught promises can lead to unexpected crashes or silent failures:

```js
doSomethingAsync()
    .then(result => processResult(result))
    .catch(err => {

        console.error("Unhandled error:", err);

    });
```

## Use Global Handlers as a Safety Net

* Catch what you missed (don't rely on this for regular error handling):

* Browser:

```js
window.addEventListener("unhandledrejection", event => {
    console.error("Unhandled Promise rejection:", event.reason);
});
```

* Node.js:

```js
process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled rejection:", reason);
});
```

## Throw Descriptive Errors

* Instead of generic strings, throw Error objects for stack traces:

```js
throw new Error("Invalid user ID");
```

## Avoid Swallowing Errors Silently

* This is bad (no error logged or re-thrown):

```js
try {
    await doSomething();
} catch (e) {
    // Nothing here!
}
```

* Do this instead:

```js
catch (e) {
    console.error("Error:", e);
    throw e; // Optional: rethrow if needed
}
```

## Use Custom Error Classes for Granular Control

```js
class ValidationError extends Error {
    constructor(message) {

        super(message);
        this.name = "ValidationError";

    }
}

function validateUser(user) {
    if (!user.name) throw new ValidationError("Name is required");
}
```

* Then handle it specifically:

```js
try {
    validateUser({});
} catch (e) {
    if (e instanceof ValidationError) {

        console.warn("Validation failed:", e.message);

    } else {

        throw e; // rethrow unknown errors

    }
}
```

## Don’t Mix .then() with async/await in the Same Flow

* Stick to one style per function for clarity:

```js
// GOOD
const data = await fetchJson();

// NOT RECOMMENDED
fetch('/api').then(async res => {
    const data = await res.json(); // confusing mix
});
```
