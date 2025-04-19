# Call, Apply amd Bind

> This are used to code sharing or code borrowing

## case 1

```js
let a1 = {
  fnm: "Bhushan",
  lnm: "Kumbhar",
  print: function () {
    console.log(this.fnm, this.lnm);
  },
};
let a2 = {
  fnm: "Abhishek",
  lnm: "Biranje",
};
a1.print(); // Bhushan Kumbhar
a1.print.call(a2); // Abhishek Biranje
```

## case 2

> use separate function

```js
let b1 = {
  fnm: "Bhushan",
  lnm: "Kumbhar",
};
let b2 = {
  fnm: "Sourabh",
  lnm: "Patil",
};

function print() {
  console.log(this.fnm + " " + this.lnm);
}
print.call(b1); // Bhushan Kumbhar
print.call(b2); // Sourabh Patil
```

## case 3

```js
let b1 = { fnm: "Bhushan", lnm: "Kumbhar" };
function printEmployeeDetails(designation, salary = 10000) {
  console.log(this.fnm + " " + this.lnm + " " + designation + " " + salary);
}
printEmployeeDetails.call(b1, "developer", 25000);
printEmployeeDetails.apply(b1, ["tester", 50000]);
let fun1 = printEmployeeDetails.bind(b1, "Frontend developer", 35000);
console.log(fun1);
fun1();
// output
// Bhushan Kumbhar developer 25000
// Bhushan Kumbhar tester 50000
// [Function: bound printEmployeeDetails]
// Bhushan Kumbhar Frontend developer 35000
```

## call takes comma separated value as argument i.e. `c` all = comma

## apply takes array as extra argument i.e. `a` pply = array

## bind takes comma separated value as argument but return function and call it
