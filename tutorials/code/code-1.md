# Miscellaneous code

## Var in loop with setTimeout

```js
function x() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
x();
// output
// 5
// 5
// 5
// 5
// 5
```

> As var is functional scope so it will print last i value
> it will print 5 despite of i<5 because it will increment and then check

## You run a pizza shop and offer three types of pizzas:

- small: $7
- medium: $9
- large: $10

- Customers can add an unlimited number of extra options: either "ExtraSauce" for $1 or "ExtraToppings" for $2.

- **Task**: Write a function that calculates the cost of the pizza based on its name as the first argument and any number of added options.
  For example:

```js
let price = {
  ExtraToppings: 2,
  ExtraSauce: 1,
  large: 10,
  medium: 9,
  small: 7,
};

function calculatePrice(size, ...args) {
  let pizzaPrice = price[size] ?? 0;
  let extraPrice = args
    .map((item) => {
      return price[item] ?? 0;
    })
    .reduce((carry, item) => carry + item, 0);
  console.log(pizzaPrice + extraPrice);
}
calculatePrice("small"); // 7
calculatePrice("medium", "ExtraSauce", "ExtraToppings"); // 12
calculatePrice(
  "medium",
  "ExtraToppings",
  "ExtraToppings",
  "ExtraToppings",
  "ExtraToppings"
); // 17
```

### using recursion

```js
function calculateRecursionPrice(first, ...args) {
  if (args.length > 0) {
    let [newFirst, ...otherExtra] = args;
    let allPrice =
      (price[first] ?? 0) +
      (args.length > 0 ? calculateRecursionPrice(newFirst, ...otherExtra) : 0);
    return allPrice;
  } else {
    return price[first];
  }
}
console.log("small", calculateRecursionPrice("small")); // 7
console.log(
  "medium ExtraSauce ExtraToppings",
  calculateRecursionPrice("medium", "ExtraSauce", "ExtraToppings")
); // 12
console.log(
  "medium ExtraToppings ExtraToppings ExtraToppings ExtraToppings",
  calculateRecursionPrice(
    "medium",
    "ExtraToppings",
    "ExtraToppings",
    "ExtraToppings",
    "ExtraToppings"
  )
); // 17
```

## Scope chain

```js
function x() {
  let a = 10;

  function d() {
    console.log(a);
  }
  a = 500;
  return d;
}
var z = x();
z(); // 500
```

## Sequence of operation

```js
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
});
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
// Start End Promise Timeout
```

> higher priority than setTimeout when same time execute and change according timeout or promise execution

## var scope

```js
var x = 10;

function foo() {
  var x = 5;
  console.log(x);
}
foo();
console.log(x); // 5,10
```

## Function

```js
getData1(); // getData11
getData(); // TypeError: getData is not a function
function getData1() {
  console.log("getData11");
}
var getData = () => {
  console.log("Hello");
};
```
