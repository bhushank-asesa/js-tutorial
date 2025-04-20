# Closure in detail

> `Closure` combination of scope and it's lexical environment like scope chain

## case 1

```js
function outer() {
  let a = 5;
  function inner() {
    console.log(a, b);
  }
  var b = 7;
  return inner;
}
outer()(); // 5,7
var callFun = outer();
callFun(); // 5,7
```

- `outer()()` => outer() => inner function => inner(); same as `var callFun = outer(); callFun();`
- changing position of a, let instead of var still form closure
- also passing parameter will also closure

```js
function outer(c) {
  let a = 5;
  function inner() {
    console.log(a, b, c);
  }
  var b = 7;
  return inner;
}
outer("test")();
var callFun = outer("just");
callFun();
```

- output

```bash
5 7 'test'
5 7 'just'
```

## nested 3 function

```js
function outest() {
  function outer(c) {
    let a = 5;
    function inner() {
      console.log(a, b, c);
    }
    var b = 7;
    return inner;
  }
  return outer;
}
outest()("Hello")(); // 5 7 'Hello'
```

## Global a

```js
function outest() {
  function outer(c) {
    let a = 5;
    function inner() {
      console.log(a, b, c);
    }
    var b = 7;
    return inner;
  }
  return outer;
}
let a = 45;
outest()("Hello")(); // 5 7 'Hello'
```

- if we comment `let a = 5;` then it will be `// 45 7 'Hello'`
- if we comment bot a declaration it will giver `reference error a is not defined`
- it try to find in all cope chain

## Data hiding

```js
function counter() {
  let count = 1;
  return function incrementCount() {
    console.log(count++);
  };
}
let counter1 = counter();
let counter2 = counter();
counter1();
counter1();
counter2();
counter2();
counter2();
counter2();
```

- output

```bash
1
2
1
2
3
4
```

- here count variable become private variable as dita hiding is done
- new copy for counter1 and counter2 created

## scalable counter example

- this can be achieved using constructor function

```js
function Counter() {
  let count = 1;
  this.incrementCount = () => {
    count++;
    console.log(count);
  };
  this.decrementCount = () => {
    count--;
    console.log(count);
  };
}
let counter1 = new Counter();
let counter2 = new Counter();
counter1.incrementCount();
counter1.incrementCount();
counter1.decrementCount();
counter2.incrementCount();
counter2.decrementCount();
```

- output

```bash
Counter {incrementCount: ƒ, decrementCount: ƒ}
Counter {incrementCount: ƒ, decrementCount: ƒ}
2
3
2
1
2
```

- Counter = good naming convention

## disadvantage of Closure

> Over consumption of memory as variable are not garbage collected till program execute

## Garbage collector(GC)

- program that free unutilized memory
- in c and c++ is low level language and developer has option to utilize memory or garbage collection
- as JS is high level language `GC` when unused variable picks from memory when that variable no longer needed
- Form a good closure to better garbage collection

## smart garbage collector in latest browser

```js
function outer() {
  let a = 5;
  let z = 5;
  function inner() {
    console.log(a, b); // Plcae debgger here // z is undefined if we try but a is printed in cosole
  }
  var b = 7;
  return inner;
}
let outerCall = outer();
outerCall();
```
