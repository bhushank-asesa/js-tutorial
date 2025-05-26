# Block and Scope

## What is block

- block {} is compound statement
- multiple statement used as single statement
- block scope => variable we can access in block

## case 1

```js
{
  var a = 25;
  let b = 40;
  const c = 50;
}
// add debugger each line
```

- b and c are not in global space/execution context, these are block scoped

```js
{
  var a = 25;
  let b = 40;
  const c = 50;
  console.log(a, b, c);
}
console.log(a, b, c); //  b is undefined
```

## Shadowing var

- var a of block shadows var a of global because they share same memory in global scope

```js
var a = 10;
{
  var a = 15;
}
console.log(a); // 15
```

## Shadowing let and const

- let/const are not shadowed because they are in different memory space both a are in different execution context scope eg global/script/block

```js
let a = 10;
{
  let a = 15;
}
console.log(a); // 10
```

## illegal shadowing

```js
let a = 10;
{
  var a = 15;
}
console.log(a); // SyntaxError: Identifier 'a' has already been declared
```

- let and let ok
- var and let ok

## var should not cross boundaries

## all function scope also works same for arrow function
