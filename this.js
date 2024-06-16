"use strict";
// this in global object
var a = 5;
console.log(this, this.a, window.a); // it gives {} when node this.js; gives global = window object in browser

// this global object depends upon Javascript runtime env.
// in browser => global => window object
// in Node.js => global => global

function b() {
  let a = 5;
  console.log(this); // it will give undefined when strict mode is on
  //   console.log(this.a); // it will  give error in strict mode TypeError: Cannot read properties of undefined (reading 'a')
}
// this keyword in function is depends upon how function is called
b(); // will undefined
window.b(); // will print window object for this keyword; if in strict mode if we called as window.b() it will print the window global object

// this substitution => this keyword in function undefined/ null then this keyword value will be replaced by global object only in non strict mode
let object = {
  c: 15,
  d: function () {
    // function in object is called as method like OOP
    console.log(this, this.c); // it will give this object
  },
};
object.d();

// three important method
// call apply bind; check another video of Akshay Saini

let student_1 = {
  name: "Bhushan",
  printName: function () {
    // why anonymous function not works
    console.log(this.name);
  },
};
student_1.printName();
let student_2 = {
  name: "Sourabh",
};
// call method is used sharing object
student_1.printName.call(student_2); //  this will change the this value of student_1 to student_2

const objectArrow = {
  e: 15,
  printE: () => {
    // arrow function didn't have this keyword value, it will use/behave like enclosing lexical context
    console.log("49", this); // will give  window object
  },
};
objectArrow.printE();

const objectNestedArrow = {
  f: 15,
  printF: function () {
    console.log("59", this); // will print objectNestedArrow object
    const g = () => {
      console.log(61, this); // will print objectNestedArrow object
    };
    g();
    // if we use arrow function for printF then it will print window in above both console
  },
};
objectNestedArrow.printF();
