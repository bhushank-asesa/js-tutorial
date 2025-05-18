# Execution Context

> Everything in JS happens in execution context

> JS is synchronized language i.e. one command execution at a time in specific order

## Sample Code 1

```js
var n = 2;
function square(num) {
  var ans = num * num;
}
var square2 = square(n);
var square4 = square(4);
```

## Global Execution context

| Memory(variable env.) | code(Thread of execution) |
| --------------------- | ------------------------- |
| var a                 | line                      |
| function square:{}    | by                        |
| var square2           | line                      |
| var square4           | execution                 |

### First Phase

- `Global execution context creation`
- also known as memory creation phase
- it allocates memory for variable and memory
- n => undefined
- square => function code
- square2 and square4 as undefined

### Second Phase

- `Code execution phase`
- 2 is allocated to var n
- when execution goes to `var square2 = square(num)`, brand new execution created for function square
- same above phase one created for memory allocation of function square
- after return (in second phase of function execution context) it backs to global execution

## Call stack

- in call stack there bottom Global execution context and execution context for function (may E1) in and out.
- If second function then E2 created and it's in and out and so on.
- call stack maintains order of execution of execution context

### Call stack also known as

1. Call stack
2. Execution context stack
3. Program stack
4. Control stack
5. Runtime stack
6. Machine stack

## Sample Code 2

```js
var x = 1;
a();
b();
console.log(x);
function a() {
  var x = 10;
  console.log(x);
}
function b() {
  var x = 100;
  console.log(x);
}
```

- Separate memory for x created in respective execution context (eg. global, e1(function a), e2(function 2))

## Shortest Program in JS

- Empty Program is shortest program of JS
- window (in case of browser present there)
- window is global object(in GEC) in browser
- for chrome there `V8` JS Engine
- this === window
- **Global space** => Every code in program except code which is in function i.e top level code
- a = 10 -> window.a = this.a
- but function a() { var x =100 } not works for window.x or this.x

## Undefined vs not defined

- `Undefined` defined and memory is allocated in GEC
- `not defined` not allocation memory

```js
var a;
console.log(a); // undefined
console.log(a === undefined); // true
console.log(b); // not defined error
```

- JS is loosely typed language

```js
var a = 5;
console.log(a); // 5
a = "Hello world";
console.log(a); // Hello world
```

> Never do mistake of `a = undefined`, it is possible but bad thing
