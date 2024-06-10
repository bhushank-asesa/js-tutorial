// console.log(a); // ReferenceError => will give not defined error, means reference not found in memory

// ------------------------------------------------------------------------------------------------
// console.log(a, b); // ReferenceError => Cannot access 'a' before initialization for let and const
// let a = 5;
// const b = 5;

// ------------------------------------------------------------------------------------------------

// console.log(a); // will give undefined as output for var
// undefined = memory is allocated to and undefined is like/assuming placeholder for some time to initialize it
// var a = 5;
// var b; if it is not initialized then it is undefined throughout the program
// ------------------------------------------------------------------------------------------------
// const b; SyntaxError: Missing initializer in const declaration
// const a = 5;
// a = 74; // TypeError: Assignment to constant variable. for const
// const a = 7; // SyntaxError: Identifier 'a' has already been declared for const

// ------------------------------------------------------------------------------------------------

// let 4 = 5;
// let 4a = "4a"; // SyntaxError: Invalid or unexpected token let a4 is valid variable declaration
// console.log(A); // will give ReferenceError A is not defined
// let A = 15;
// console.log(A, a); // will give separate values as variable name is case sensitive
// let a1 = 7; let a1 = 5; // Uncaught SyntaxError: Identifier 'a1' has already been declared
// ------------------------------------------------------------------------------------------------

/* let a = "a";
const b = "b";
{
  let a = "a1";
  const b = "b1";
  console.log(a, b); // will give separate values `a1` & `b1` as let and const is block scoped
}
console.log(a, b); // will give  a & b 

var c = "c";
{
  console.log(c); // will give c
}
function varC() {
  var c = "c1";
  console.log("in varC ", c); // will give c1 because var is function scoped, to check that use setTimeout issue
}
varC();
console.log(c);*/
// ------------------------------------------------------------------------------------------------

// js is loosely typed
// var a =5;
// a = "a";
// a = undefined // it is possible but tis mistake or bad way
// ------------------------------------------------------------------------------------------------
