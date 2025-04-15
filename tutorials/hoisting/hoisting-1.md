# Hoisting

## Normal Way

```js
var x = 1

function getName() {
    console.log("getName Called")
}
console.log(x)
getName()
console.log(getName)
/* 
1
getName Called
ƒ getName() {
  console.log("getName Called")
}
*/
```

## Hoisting var

* can access x as undefined before declaration
* memory is allocated to function and var

```js
console.log(x)
getName()
console.log(getName)
var x = 1

function getName() {
    console.log("getName Called")
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

* memory for x is not allocated so it will give ReferenceError

```js
getName()
console.log(x)
console.log(getName)

function getName() {
    console.log("getName Called")
}
getName()
/* 
getName Called
Uncaught ReferenceError: x is not defined at test.js:2:13
*/
```

## Arrow function

* arrow function treated as variable and will give 
* memory allocated to getName2 as var

```js
getName()
console.log(getName2)
getName2()
console.log(getName)

function getName() {
    console.log("getName Called")
}
getName()
var getName2 = () => {
    console.log("getName Called")
}
/* 
getName Called
undefined
Uncaught TypeError: getName2 is not a function at test.js:3:1
*/
```

## function

> new execution context created for function call
