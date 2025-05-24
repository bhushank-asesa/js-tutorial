# Function 1

## Function statement and declaration

- It is a normal function

```js
simpleFunction();

function simpleFunction() {
  console.log("This is function statement also known as declarations");
}
// funExpression();
```

- note `TypeError`: funExpression is not a function, function not defined

## Function expression

- in function expression, function is stored in variable

```js
// funExpression();
var funExpression = function () {
  console.log("This is function Expression, can't call before declarations");
};
funExpression();
```

- You can't call until function declared i.e funExpression is not a function

### Named function expression

```js
var namedExpressionFunction = function namedFunction() {
  console.log("This is named function expression");
};
```

- You can call using `namedExpressionFunction()` not `namedFunction()`
- `namedFunction()` will give ReferenceError: namedFunction is not defined because this is not in outer/global space, it is in namedExpressionFunction

## Anonymous function

- you use this anonymous in Function/Arrow expression
- you can't use this function in Function statement and declaration else it will give SyntaxError: Function statements require a function name

```js
function ()=>{

    console.log("this is anonymous function will give syntax error => SyntaxError: Function statements require a function name")

}
```

## Argument and Parameter

```js
function area(radiusParameter) {
  // this is parameter
  return radiusParameter * radiusParameter * Math.PI;
}
const areaArgument = 5;
console.log(area(areaArgument)); // this is argument
```

## immediately invoked function expression (IIFE)

- it will clear memory as soon as function calls execute itself

```js
(() => {
  const a = 5;
  console.log("immediately invoked function expression", a);
})();
```

## First class function(also known as higher order function)

- function which take function as argument or can return function;
  eg map etc

```js
const a = 5;

function square(a) {
  return a * a;
}

function double(a) {
  return a + a;
}

function calc(value, logic) {
  return logic(value);
}
let ans1 = calc(a, double);
let ans2 = calc(a, square);
console.log(ans1, ans2);
```
