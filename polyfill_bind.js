let name = { fnm: "Bhushan", lnm: "Kumbhar" };
let printName = function (state, city = "") {
  // console.log(`${this.fnm} ${this.lnm}`); //  obj.call(args[0]);
  console.log(`${this.fnm} ${this.lnm} ${state} ${city}`);
};
let printMyName = printName.bind(name, "Maharashtra");
printMyName("Kolhapur");
Function.prototype.myBind = function (...args) {
  let obj = this;
  let param = args.slice(1);
  return function (...arg) {
    // obj.call(args[0]);
    // obj.apply(args[0], param);
    obj.apply(args[0], [...param, ...arg]);
  };
};

let printMyName2 = printName.myBind(name, "Maharashtra");
printMyName2("Kolhapur");
