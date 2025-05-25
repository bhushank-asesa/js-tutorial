# Async and await

## Async

- keyword is used to create asynchronous function
- async function always return promise
- if return value is non-promise value then this value is wrapped in promise and return it

```js
async function getData() {
  return "text-promise-value";
}

const data = getData();
console.log(data);
data.then((res) => {
  console.log(res);
});
/*

Promise {<fulfilled>: 'text-promise-value'}
text-promise-value
*/
```

- if we return promise with actual promise, then it not wrap in promise again

```js
const p = new Promise((resolve, reject) => {
  resolve("promise resolved");
});

async function getData() {
  return p;
}

const data = getData();
console.log(data);
data.then((res) => {
  console.log(res);
});
/*
Promise {<pending>}
promise resolved
*/
```

## await

- async and await combo used to handle promises
- before async await, .then used

```js
const p = new Promise((resolve, reject) => {
  resolve("promise resolved");
});

async function handlePromise() {
  const data = await p;
  console.log(data);
}
handlePromise();

/*
promise resolved
*/
```

- await is keyword only be used in async function
- else give error

```js
await function()
/*
Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules (at test.js:10:1)
*/
```

### case 1

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});

async function handlePromise() {
  // JSE waits here 10 seconds
  const data = await p;
  console.log(data);
  console.log("resolving after 10 seconds");
}
handlePromise();
/*
promise resolved
resolving after 10 seconds
*/
```

#### Old Approach

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});

p.then((res) => {
  console.log(res);
});
console.log("programs ends");
/*
programs ends
promise resolved
*/
```

### Case 3

```js
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});

async function handlePromise() {
  console.log("hello handle promise");
  const data1 = await p;
  console.log(data1);
  console.log("after first promise ");

  const data2 = await p;
  console.log(data2);
  console.log("after second promise");
}
handlePromise();
console.log("programs ends");
/*
hello handle promise
programs ends
promise resolved
after first promise 
promise resolved
after second promise
*/
```

- both promise done after 10 seconds not 20 seconds

### case 4

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 20000);
});

async function handlePromise() {
  console.log("hello handle promise");
  const data1 = await p1;
  console.log(data1);
  console.log("after first promise ");

  const data2 = await p2;
  console.log(data2);
  console.log("after second promise");
}
handlePromise();
console.log("programs ends");
/*
hello handle promise
programs ends
promise resolved
after first promise 
promise resolved
after second promise
*/
```

- first promise will resolve after 10s and second after 20s (not 30s)

### case 5

- reverse above time in setTimeOut

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 20000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved");
  }, 10000);
});

async function handlePromise() {
  console.log("hello handle promise");
  const data1 = await p1;
  console.log(data1);
  console.log("after first promise ");

  const data2 = await p2;
  console.log(data2);
  console.log("after second promise");
}
handlePromise();
console.log("programs ends");
/*
hello handle promise
programs ends
promise resolved
after first promise 
promise resolved
after second promise
*/
```

- here both promise print after 20 second

## await behind scene

- check debugger on console.log() of handle promise and check
- JSE not wait for anything, but looks like wait
- it suspends execution of function handlePromise but not for program
- first suspend for p1 and resume once resolved at which it suspends
- if p2 is 10 and p2 is 20 seconds then it stops further execution of p2 due to await and after p1 resolve both console prints

## fetch

```js
const URL = "https://api.github.com/users/bhushank-bwd";

async function getData() {
  let fetchRes = await fetch(URL);
  let data = await fetchRes.json();
  console.log(data);
}
getData();
// {login: 'bhushank-bwd', id: 103272497 ....
```

## try catch

```js
const URL = "https://invalidURL/";

async function getData() {
  try {
    let fetchRes = await fetch(URL);
    let data = await fetchRes.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getData();
// TypeError: Failed to fetch  at getData
```

- old approach

```js
const URL = "https://invalidURL/";

async function getData() {
  let fetchRes = await fetch(URL);
  let data = await fetchRes.json();
  console.log(data);
}
getData().catch(function (error) {
  console.log(error);
});
//  Uncaught (in promise) TypeError: Failed to convert value to 'Response'
```

## async await vs promises

- what is async await
  - async is keyword used with function & async function is different
  - await is used with async
  - they are used to handle promises
  - behind scene above handlePromises function, js uses promises and .then

### async-await vs promise then.catch

- async-await syntactic suger over promise then.catch
- behind scene it is promise then.catch
- if we use async await then promise chain not needed, easier code structure
- we are sure of promise will work and not depend on when then will be executed
