console.log(x);
console.log(funSimple());
console.log(funSimple);
console.log(funArrowAnonymous); // will print undefined
// console.log(funArrowAnonymous()); // error not function
console.log(funArrow);
// console.log(funArrow());// error not function

function funSimple(){
    console.log("this is simple function",x);
}
var funArrowAnonymous = () => {
    console.log("this is function with arrow anonymous");
}
var funArrow = function () {
    console.log("this is function with arrow with function keyword");
}
var x = 7;
funSimple();

var description = "hoisting is concept in javascript that we can access var and function before initializations var is undefined and function gives the function body(in case of normal function and arrow function will give undefined)";
description += " This is because before code execution started memory is allocated to var & function"; 
description += " check it in browser debugger with placing debugger and call stack"; 
description += " Explain in detail this for interview";
console.log(description); 