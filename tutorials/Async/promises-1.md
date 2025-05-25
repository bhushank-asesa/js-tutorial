# Promise

## Normal Way

```js
let cart = ["Shirt", ""];
createOrder(cart); // orderId
proceedToPayment(orderID);
```

- With Callback function

```js
createOrder(cart, function (orderId) {
  proceedToPayment();
});
```

- inversion of control
- never know it will call CBF or call twice

## Promise

```js
let promise = createOrder(cart);
```

- it gives promise with undefined/empty and after some time(fulfilled/rejected) automatically fill actual data
- This is better way than blindly trusting above normal way of callback
- In callback -> passing callback function
- in Promise -> we attach function and we have control of it
- createOrder do it's own work only

### Fetch

```js
let URL = "https://api.github.com/users/bhushank-bwd";
let res = fetch(URL);
console.log(res);
res.then(function (data) {
  console.log(data);
});
console.log("End");

/*
Promise {<pending>}
End
Response {type: 'cors', url: 'https://api.github.com/users/bhushank-bwd', redirected: false, status: 200, ok: true, …}

[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Response
*/
```

- gives pending initially and then fulfilled
- while consoling promiseObject is in pending because Javascript execute without wait that time promise is in pending stage but after some time this will show fulfilled/rejected stage
- promise guarantee that it will execute once
- promise object are immutable means secure

---

> **Promise** - is placeholder for certain period of time until we receive value from async operation

> **Promise** is object representing eventual complete/failure of async operation

- avoid callback hell

```js
let cart = [];
createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function () {
    showOrderSummary(function () {
      updateWallet();
    });
  });
});
```

- horizontal scale

### Promise Chaining

- vertical scale

```js
let cart = [];

createOrder(cart)
  .then(function (orderId) {
    proceedToPayment();
  })
  .then(function () {
    orderSummary();
  })
  .then(function () {
    updateWallet();
  });
```

- with arrow function

```js
let cart = [];

createOrder(cart)
  .then((orderId) => proceedToPayment)
  .then(() => orderSummary())
  .then(() => updateWallet());
```
