# Memoization 

> Memoization is a technique to cache the results of expensive function calls and return the cached result when the same inputs occur again. Here's how you can implement memoization in JavaScript:

## Basic Memoization Function

```js
function memoize(fn) {
    const cache = {};

    return function(...args) {

        const key = JSON.stringify(args); // Convert arguments to a string key

        if (key in cache) {
            console.log('Fetching from cache:', key);
            return cache[key];
        }

        console.log('Calculating result:', key);
        const result = fn(...args);
        cache[key] = result;
        return result;

    };
}
```

```js
function slowFibonacci(n) {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
}

const memoizedFibonacci = memoize(slowFibonacci);

console.log(memoizedFibonacci(10)); // Fast after memoization
console.log(memoizedFibonacci(10)); // Retrieved from cache
```

```js
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Calculates and caches
console.log(memoizedFactorial(5)); // Uses cache
```

## Notes

* Use Map instead of plain object {} for better key handling, especially for non-string arguments.

* For recursive functions, combine memoization with recursion properly (e.g., memoize(fib) where fib uses memoize internally).

## Support for async functions

### Cache expiration (TTL – time to live)

* Advanced Memoize Function

```js
function advancedMemoize(fn, options = {}) {
    const cache = new Map();
    const ttl = options.ttl || 0; // in milliseconds

    return async function(...args) {

        const key = JSON.stringify(args);
        const now = Date.now();

        // If in cache and not expired
        if (cache.has(key)) {
            const {
                value,
                timestamp
            } = cache.get(key);

            if (!ttl || now - timestamp < ttl) {
                console.log('⏪ Returning cached result for:', key);
                return value;
            } else {
                cache.delete(key); // expired
            }
        }

        // Call original function
        const result = await fn(...args);
        cache.set(key, {
            value: result,
            timestamp: now
        });

        console.log('🚀 Calculated and cached result for:', key);
        return result;

    };
}
```

### Usage: Async API Call with TTL

```js
async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    return response.json();
}

const memoizedFetchUserData = advancedMemoize(fetchUserData, {
    ttl: 60000
}); // cache for 60 seconds

(async () => {
    const user1 = await memoizedFetchUserData(1); // Fetches from API
    const user2 = await memoizedFetchUserData(1); // Returns cached

    console.log(user1.name);
})();
```

### Notes

* The TTL feature is optional. Set ttl: 0 or omit it to cache indefinitely.

* Works for both sync and async functions. If you use sync functions, just remove await and async in the wrapper.

### Auto-Clearing Cache with Expiry

#### This version:

* Uses a Map for better performance.

* Cleans up expired entries automatically each time a new call happens (no setInterval needed).

```js
function memoizeWithAutoCleanup(fn, options = {}) {
    const cache = new Map();
    const ttl = options.ttl || 0; // in ms
    const keyResolver = options.keyResolver || ((args) => JSON.stringify(args));

    return async function(...args) {

        const key = keyResolver(args);
        const now = Date.now();

        // Clean expired entries
        for (const [k, {
                timestamp
            }] of cache.entries()) {
            if (ttl && now - timestamp > ttl) {
                cache.delete(k);
            }
        }

        if (cache.has(key)) {
            const {
                value,
                timestamp
            } = cache.get(key);
            if (!ttl || now - timestamp < ttl) {
                console.log('⏪ Returning cached:', key);
                return value;
            }
        }

        const result = await fn(...args);
        cache.set(key, {
            value: result,
            timestamp: now
        });
        console.log('🚀 Cached result for:', key);
        return result;

    };
}
```

### Custom Key Generator (for objects, classes, etc.)

* If your function accepts objects, classes, or unordered params, JSON.stringify isn’t always safe or deterministic.

* You can define a custom key generator like this:

```js
function stableObjectKeyResolver(args) {
    return args.map(arg => {

        if (typeof arg === 'object' && arg !== null) {
            return Object.keys(arg).sort().map(k => `${k}:${arg[k]}`).join(',');
        }
        return String(arg);

    }).join('|');
}
```

```js
const fetchData = async ({
    userId,
    type
}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${type}/${userId}`);
    return response.json();
};

const memoizedFetch = memoizeWithAutoCleanup(fetchData, {
    ttl: 60000, // 60 seconds
    keyResolver: stableObjectKeyResolver
});

(async () => {
    const user = await memoizedFetch({
        userId: 1,
        type: "users"
    });
    const cachedUser = await memoizedFetch({
        type: "users",
        userId: 1
    }); // Same input, different key order

    console.log(user.name);
})();
```

### Summary

Feature	|Supported?	|Notes|
|---|---|---|
Auto-clear expired|	✅	|Done on every function call|
Works with objects|	✅	|Use keyResolver|
TTL (time-to-live)|	✅	|Millisecond control|
Sync & Async support|	✅	|Works with both|

## Recursive function and performance? 

> Memoization shines especially for recursive functions, turning exponential time complexity into linear (or better) by avoiding redundant calls.

### Why Memoization Helps in Recursion

* Let’s look at the Fibonacci example — classic and perfect for explaining this.

* Without Memoization

```js
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

console.time("Without memo");
console.log(fib(40)); // Takes a long time!
console.timeEnd("Without memo");
```

* Time Complexity: O(2^n)

* Reason: It recalculates the same values over and over.

* With Memoization

```js
function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.join(',');
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const fib = memoize(function(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
});

console.time("With memo");
console.log(fib(40)); // Much faster!
console.timeEnd("With memo");
```

* Time Complexity: O(n)

* Each value from fib(0) to fib(n) is computed only once.

### Real Performance Boost

* Here’s what you can expect in terms of speed:

|n	|Without Memo (ms)	|With Memo (ms)|
|---|---|---|
|30|	~10–50ms|	< 1ms|
|40|	~1–2 seconds|	< 1ms|
|45|	~10+ seconds|	< 1ms|

* Memoization cuts redundant recursive calls from millions to just n.

### Best Practices

* For recursive memoized functions, define them with function keyword so they can reference themselves.

* Store memoized function in a variable after decoration (e.g., const fib = memoize(...))

* Use Map instead of plain object for better performance and flexibility.

* Prefer WeakMap when using object references as keys (especially in OOP-heavy code).

### Other Use Cases

* Memoization also drastically improves:

* Factorial (O(n) to O(n) but with better runtime)

* DP problems (e.g., knapsack, coin change, LCS)

* Tree or graph traversal (e.g., memoizing subtree sizes or visited paths)
