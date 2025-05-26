# Lexical environment

## case 1

```js
function a() {
  console.log(b);
}
var b = 10;
a(); // 10
```

## case 2

```js
function a() {
  function c() {
    console.log(b);
  }
}
var b = 10;
a(); // 10
```

```js
function a() {
  var b = 15;
  function c() {
    console.log(b); // add debugger
  }
  c();
}
var b = 10;
a(); // 10
```

## What is lexical env

- local memory along with lexical env. of parent
- different memory /execution context is created for function a,b
- lexical environment is current executionContext + parent executionContext. it has reference of it's parent lexical environment
- global executionContext -> parent reference is null;
- let three function c,b,a, and find d in c,b, a and this is called scope chain

```js
function a() {
  function b() {
    function c() {
      console.log(d);
    }
    c();
  }
  b();
}
var d = 10;
a();
```
