# setTimeout and setInterval

> setTimeout and setInterval are both timing functions in JavaScript used to schedule code execution. Here’s a comparison, along with their use cases:

## Basic Syntax

* setTimeout(function, delay)

* Executes the function once after the delay (in milliseconds).

* setInterval(function, delay)

* Executes the function repeatedly at every delay interval.

## Main Difference

|Feature|	setTimeout|	setInterval|
|---|---|---|
Execution	|Once after the delay|	Repeated at fixed intervals
Control	|Stops after one call|	Continues until clearInterval is called
Use Case|	One-time delayed task|	Recurring tasks like polling or clocks
Cancel Function	|clearTimeout(timeoutId)|	clearInterval(intervalId)

## Use Case Examples

1. Delayed Action (e.g., hide alert after 5s)

```js
setTimeout(() => {
    alert("5 seconds passed!");
}, 5000);
```

2. Recurring Action (e.g., digital clock)

```js
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);
```

3. Simulate Repeating with setTimeout (for dynamic intervals)

```js
function repeat() {
    console.log("Runs every 2 seconds");
    setTimeout(repeat, 2000); // dynamically controllable
}
repeat();
```

4. Polling a Server Every 10 Seconds

```js
const intervalId = setInterval(() => {
    fetch('/api/status').then(res => res.json()).then(console.log);
}, 10000);
```

5. Retry With Backoff (only possible with setTimeout)

```js
let delay = 1000;

function retryFetch() {
    fetch('/api')

        .then(res => {
            if (!res.ok) throw new Error("Retrying...");
            return res.json();
        })
        .then(console.log)
        .catch(() => {
            delay *= 2;
            setTimeout(retryFetch, delay);
        });

}
retryFetch();
```

## Which One to Use?

|Situation|	Use|
|---|---|
One-time delay|	setTimeout
Periodic execution (e.g. animations, clocks)|	setInterval
Dynamic interval control (e.g., retries, polling with conditions)|	setTimeout (recursive)

## Implement clearAllTimeout() and clearAllInterval

> JavaScript doesn't provide built-in clearAllTimeout() or clearAllInterval() functions, but you can implement your own versions by tracking the IDs of timeouts and intervals you create. Here's how you can do it:

### Implementation of clearAllTimeout() and clearAllInterval()

```js
// Global arrays to keep track of timeout and interval IDs
const timeouts = [];
const intervals = [];

// Custom wrapper for setTimeout
function setTrackedTimeout(callback, delay) {
    const id = setTimeout(() => {
        // Remove from list when executed
        const index = timeouts.indexOf(id);
        if (index !== -1) timeouts.splice(index, 1);
        callback();
    }, delay);
    timeouts.push(id);
    return id;
}

// Custom wrapper for setInterval
function setTrackedInterval(callback, delay) {
    const id = setInterval(callback, delay);
    intervals.push(id);
    return id;
}

// Clear all timeouts
function clearAllTimeout() {
    timeouts.forEach(clearTimeout);
    timeouts.length = 0;
}

// Clear all intervals
function clearAllInterval() {
    intervals.forEach(clearInterval);
    intervals.length = 0;
}
```

### Usage Example

```js
// Set some tracked timers
setTrackedTimeout(() => console.log("Timeout 1"), 2000);
setTrackedTimeout(() => console.log("Timeout 2"), 3000);
setTrackedInterval(() => console.log("Interval running"), 1000);

// Clear them after 5 seconds
setTimeout(() => {
    clearAllTimeout();
    clearAllInterval();
    console.log("All timeouts and intervals cleared.");
}, 5000);
```
