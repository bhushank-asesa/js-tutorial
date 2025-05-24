# CallBack Function

## What is Callback function

> Function which is passed in another function

> Javascript is synchronous and single threaded language

> With help of Callback function async task can achievable

### Example

```js
setTimeout(() => {
  console.log("Timer"); // anonymous will show in call stack
}, 5000);
function x(y) {
  console.log("x");
  y();
}
x(function () {
  console.log("Y called"); // anonymous will show in call stack
});
```

- Everything will be executed in call stack
- Should never block call stack

### Example 2

```js
let globalCounter = 0;

let element = document.getElementById("click");
element.addEventListener("click", function () {
  globalCounter++;
  console.log(globalCounter);
});
```

- Using global variable is not secure

```js
function attachEventListener() {
  let counter = 0;
  let element = document.getElementById("click");
  element.addEventListener("click", function () {
    counter++;
    console.log(counter);
  });
}
attachEventListener();
```

- above will form closure
- check with element/eventListener tab
- listener are heavy
- remove when not necessary

## Callback hell

```js
let cart = [];

api.createOrder(function () {
  api.processPayment(function () {
    api.showOrderSummary();
  });
});
```

- code horizontally grow
- unreadable, unmaintainable
- pyramid of doom in programming

### Inversion of control

- Blindly trusting createOrder API
- don't know how many times it will call
