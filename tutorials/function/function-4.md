# Function

## Function expression/declaration

```js
a();
function a() {
  console.log("a");
}
```

- can be called before declared

## Function expression

```js
// b() // b treated as undefined and will give error as not function
var b = function () {
  console.log("b");
};
```

- difference between expression and declaration/statement them are in hoisting

## Anonymous function

```js
function (){
 console.log("c");
}
```

- looks like function statement but give syntax error due to
  function requires name

## Named function expression

```js
var d = function e() {
  console.log("d");
};
// d() = undefined in GCE -> will be error
```

## Parameter and argument

- **Parameter** in definition
- **Argument** in call

```js
function f(param1, param2) {
  console.log(param1, param2);
}
f(arg1, arg2);
```

## First Class function

- can pass as argument, as anonymous also
- can return also
- used as value eg fn = ()=>{}
- this are as free citizen which can go everywhere

## Higher Order function

- Function that take/return another function
- acts like function manager which manages another function
- eg. arr.map(x=>x\*2), setTimeout

## arrow function

- ES6 enhancement
