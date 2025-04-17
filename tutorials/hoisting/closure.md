# Closure

## What is closure

- Function with lexical env. is closure

## case 1

```js
function a() {
  var a1 = 15;
  function b() {
    console.log(a1);
  }
  return b;
}
d = a();
d(); // 15
```

- closure for `a` created

## case 2

- can modify a1 also

```js
function a() {
  var a1 = 15;
  function b() {
    console.log(a1);
  }
  a1 = 25;
  return b;
}
d = a();
d(); // 25
```

> Closure can contain function or pass function or return function

## case 3

```js
function a() {
  var a1 = 15;
  function b() {
    function c() {
      console.log(a1);
    }
    c();
  }
  a1 = 25;
  return b;
}
d = a();
d(); // 25
```

## use cases

- module design pattern
- currying
- function like once
- maintain state in async world
- setTimeout
- Iterators
