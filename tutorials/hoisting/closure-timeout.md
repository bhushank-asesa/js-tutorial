# Closure with setTimeout

## Case 1

- here closure will form to get value of i after setTimeout

```js
function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 2000);
}
x(); // 1 after 2 second
```

---

```js
function x() {
  var i = 1;
  setTimeout(() => {
    console.log(i);
  }, 2000);
  console.log("This is x function");
}
x();
```

- Above code will print `This is x function` and after 2 seconds it print i i.e. 1
- as Javascript does not wait for anything

## Closure with setTimeout

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("This is x function");
}
x();
```

- output

```bash
This is x function
6
6
6
6
6
```

- var 6 will print because var is function scoped and in above example i is block scoped so all block will point same space in memory / execution context for `i`

## Use let to tackle above var i in setTimeout problem

```js
function x() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  console.log("This is x function");
}
x();
```

- output

```bash
This is x function
1
2
3
4
5
```

- because let is blocked scoped so new copy of i is created for every block of iteration

## Without let to tackle above var i in setTimeout problem

```js
function x() {
  for (var i = 1; i <= 5; i++) {
    function print(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 1000);
    }
    print(i);
  }
  console.log("This is x function");
}
x();
```

- output

```bash
This is x function
1
2
3
4
5
```

- as var is function scope so function for print i made this will create separate copy of i in every function execution context
- closure is used
