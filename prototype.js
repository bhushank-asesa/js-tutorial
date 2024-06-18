let arr = ["Sourabh,Abhishek"];
let object = {
  name: "Bhushan",
  city: "Kolhapur",
  getIntro: function () {
    console.log(`${this.name} is from ${this.city}`);
  },
};
// What is Prototype Chain? eg. fun.__proto__.__proto__.__proto__
let object_2 = { name: "Manish" };

object_2.__proto__ = object; // never do this;this will cause major performance issue

// it finds city in object_2 then in it's prototype, prototypes's prototype so on;
// only works in browser

Function.prototype.myBind = function () {
  console.log("This myBind will bind to every function");
};
Function.prototype.square = function (n) {
  console.log(n * n);
};
function fun() {}
