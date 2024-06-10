var description =
  "hoisting in case of const works in different way because they are temporal dead-zone";
let a = "5"; // add debugger here
var b = 58;
description +=
  " while adding debugger that let variable is not attached to global memory, attached to another space and gives <value unavailable> in that memory";
console.log(a);
description +=
  " var => attached to global memory, can access via global window variable";
description +=
  " let => attached to another memory, can't access before initialization";
console.log(window.b);
console.log(window.a); // give undefined because it is let variable and let is in another memory

description +=
  " temporal dead-zone is time between let/const hoisted and declaration";

description +=
  " temporal dead-zone can avoid bu declaring and initializing let/const on top of all";
