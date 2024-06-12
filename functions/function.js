simpleFunction();
// funExpression(); // funExpression(); TypeError: funExpression is not a function
function simpleFunction() {
  console.log("This is function statement also known as declarations");
}
var funExpression = function () {
  console.log("This is function Expression, can't call before declarations");
};
// function ()=>{
//     console.log("this is anonymous function will give syntax error => SyntaxError: Function statements require a function name")
//  you use this anonymous in arrow expression
// }
funExpression();
let description =
  "Major difference between function declaration and expression is that hoisting because funExpression is treated as var which is undefined initially;";

var namedExpressionFunction = function namedFunction() {
  console.log("This is named function expression");
};
namedExpressionFunction();
// namedFunction(); // will give ReferenceError: namedFunction is not defined because this is not in outer/global space, it is in namedExpressionFunction

function area(radiusParameter) {
  return radiusParameter * radiusParameter * Math.PI;
}
const areaArgument = 5;
console.log(area(areaArgument));
description +=
  " first class function(also known as higher order function) is function which take function as argument or can return function;";
console.log(description);
(() => {
  const a = 5;
  console.log("immediately invoked function expression", a);
  // it will clear memory as soon as function calls execute itself
})();

function* gen() {
  // this is generator function
  let i = 0;
  yield 1;
  yield 2;
  yield 3;
  yield 4; // it holds the value of previous and give next value on genTemp.next()
  //   while (true) {
  //  this is to unlimited yield
  //     yield i;
  //     i++;
  //   }
}
const genTemp = gen();
console.log(genTemp.next()); //  { value: 1, done: false } false because 4 yield nt done
console.log(genTemp.next().value);
console.log(genTemp.next().value);
console.log(genTemp.next());
console.log(genTemp.next()); // { value: undefined, done: true } // true because yield done
console.log(genTemp.next().value);
