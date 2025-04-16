# Hoisting

## Normal Way

```js
var x = 1;

function getName() {
  console.log("getName Called");
}
console.log(x);
getName();
console.log(getName);
/* 
1
getName Called
ƒ getName() {
  console.log("getName Called")
}
*/
```

## Hoisting var

- can access x as undefined before declaration
- memory is allocated to function and var

```js
console.log(x);
getName();
console.log(getName);
var x = 1;

function getName() {
  console.log("getName Called");
}
/*
undefined
test.js:6 getName Called
test.js:3 ƒ getName() {
  console.log("getName Called")
}
*/
```

## X not defined

- memory for x is not allocated so it will give ReferenceError

```js
getName();
console.log(x);
console.log(getName);

function getName() {
  console.log("getName Called");
}
getName();
/* 
getName Called
Uncaught ReferenceError: x is not defined at test.js:2:13
*/
```

## Arrow function

- arrow function treated as variable and will give
- memory allocated to getName2 as var

```js
getName();
console.log(getName2);
getName2();
console.log(getName);

function getName() {
  console.log("getName Called");
}
getName();
var getName2 = () => {
  console.log("getName Called");
};
/* 
getName Called
undefined
Uncaught TypeError: getName2 is not a function at test.js:3:1
*/
```

## function

> new execution context created for function call

## let and const hoisting

> Let and Const are hoisted using temporal dead-zone

- let and const hoisted in scope other than global(window in case of browser) or other than global memory
- var is attached global space

```js
let a = 15; // add debugger here
var b = 20;
console.log(a, b);
```

## Reference Error

- if we access let/const before declaration it will give `ReferenceError: Cannot access 'a' before initialization`

```js
console.log(a, b); // Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 15;
var b = 20;
```

- if we access any random variable which is not in any scope it will give `Uncaught ReferenceError: d is not defined`

```js
console.log(d);
let a = 15;
var b = 20;
```

## Window

> we can access var as window.varA not window.letB as let variable is in another memory/scope
> window.letB will give undefined

## Syntax error

- It will give `syntaxError: Identifier 'a' has already been declared`
- cant execute single line of code
- let variable can not redeclared with another var/const/let

```js
let a = 15;
let a = 17;
var a = 20;
```

- let can initialize later possible but const will give error `SyntaxError: Missing initializer in const declaration`

```js
let c;
c = 45
const a;
a = 44

```

## Type error

- it will give `TypeError: Assignment to constant variable.`
- const as name can't change

```js
const a = 45;
a = 44;
```

## const

> const hoisting work same as let

## let vs var vs const

- use const as possible as
- if const not possible then use let
- keep var aside use it in rare case

## Other

> Avoid Temporal dead-zone using let/const declaration on top of scope
> let and const are hoisted using Temporal Dead-zone
