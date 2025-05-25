# Promise

## consumer

```js
let cart = [];

const promise = createOrder(cart);
console.log(promise);
promise
  .then(function (orderId) {
    console.log(orderId);
  })
  .catch((err) => {
    console.log(err.message);
  });

console.log("End");
```

## Producer

```js
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart()) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    let orderId = 12345;
    setTimeout(() => {
      resolve(orderId);
    }, 5000);
  });
  return pr;
}

function validateCart() {
  return true;
}
/*
Promise 
{<pending>}[[Prototype]]:
Promise[[PromiseState]]: "fulfilled"
[[PromiseResult]]: 12345
End
12345

Promise {<rejected>: Error: cart is not valid
at http://127.0.0.1:5500/test.js:17:19
at new Promise (<anonymous>…}
End
cart is not valid
*/
```

# Promise chaining

```js
let cart = [];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  });

console.log("End");
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart()) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    let orderId = 12345;
    setTimeout(() => {
      resolve(orderId);
    }, 5000);
  });
  return pr;
}

function validateCart() {
  return false;
}
function proceedToPayment(orderId) {
  const pr = new Promise((resolve, reject) => {
    resolve("proceedToPayment for " + orderId);
  });
  return pr;
}
/*
End
cart is not valid
proceedToPayment for undefined

End
12345
proceedToPayment for 12345
*/
```

- handle promise result in next level else you will in promise hell
- need to return data to use in next level
- catch at the end will handle any error in promise
- to get specific error, put catch at specific promise then
- no matter error is where after cath all then will definitely called

```js
let cart = [];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch((err) => {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (error) {
    console.log(error.message);
  })
  .then(function () {
    console.log("No matter what happens i will definitely called");
  });

console.log("End");
function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart()) {
      const err = new Error("cart is not valid");
      reject(err);
    }
    let orderId = 12345;
    setTimeout(() => {
      resolve(orderId);
    }, 5000);
  });
  return pr;
}

function validateCart() {
  return false;
}
function proceedToPayment(orderId) {
  const pr = new Promise((resolve, reject) => {
    resolve("proceedToPayment for " + orderId);
  });
  return pr;
}
/*
End
cart is not valid
proceedToPayment for undefined
No matter what happens i will definitely called
*/
```
