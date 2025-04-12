# `This` in Javascript

> `this` behaves differently in node, browser, dom function etc.

## Global Scope

- Depends upon

```js
console.log(this); // gives window in browser console in external js
```

## Function in `non strict` mode

```js
console.log(this); // window
function funA() {
  console.log(this);
}
funA();
```

## Function in `strict` mode

```js
"use strict";
console.log(this); // window
function funA() {
  console.log(this); // undefined
}
funA();
```

## Function in `non strict` mode if `value of substitution`

- in non strict mode if this is undefined then it will replaced by globalObject

```js
console.log(this); // window
function funA() {
  console.log(this); // window
}
function funB() {
  let c = 4;
  console.log(this); // window
}
funA();
funB();
```

## This by calling method

- this keyword depends upon how function called

```js
"use strict";
console.log(this); // window
function funA() {
  console.log(this);
}
funA(); // undefined
window.funA(); // window
```

## in object

```js
console.log(this); // global
let a = {
  a1: 5,
  a2: function () {
    console.log(this);
  },
};
a.a2(); // {a1: 5, a2: ƒ}
```

## in code sharing call method

```js
console.log(this); // window
let student1 = {
  name: "Bhushan",
  printName: function () {
    console.log(this, this.name);
  },
};
let student2 = {
  name: "abhishek",
};
student1.printName(); // {name: 'Bhushan', printName: ƒ} 'Bhushan'
student1.printName.call(student2); // {name: 'abhishek'} 'abhishek'
```

## in Arrow function

- this follows Enclosing lexical context will give parent eg function or global

```js
console.log(this); // window
let student1 = {
  name: "Bhushan",
  printName: function () {
    console.log(this, this.name); // function
    let printRandom = () => {
      console.log(this); // function
    };
    printRandom();
  },
};
let printRandomOne = () => {
  console.log(this);
};
student1.printName();
printRandomOne(); // window/global
```

## DOM

```js
<body>
  <span onclick="alert(this+ ' ' +this.tagName)" style="padding: 10px">
    Click me
  </span>
</body>
// [object HTMLSpanElement] SPAN
```

## Class, constructor

- coming soon
