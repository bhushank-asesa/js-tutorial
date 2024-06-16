const radiusArgument = [1, 3, 2, 4, 5];

function area(radiusParameter) {
  return radiusParameter * radiusParameter * Math.PI;
}
function circumFerence(radiusParameter) {
  return 2 * radiusParameter * Math.PI;
}
function diameter(radiusParameter) {
  return 2 * radiusParameter;
}
function calculate(radiusParameter, logic) {
  let output = [];
  for (let i = 0; i < radiusParameter.length; i++) {
    output.push(logic(radiusParameter[i]));
  }
  return output;
}
// console.log(calculate(radiusArgument, area));
// console.log(calculate(radiusArgument, circumFerence));
// console.log(calculate(radiusArgument, diameter));

console.log("DRY => don't repeat yourself");

Array.prototype.calc = function (logic) {
  // this is called polyfil like map
  let output = [];
  for (let i = 0; i < this.length; i++) {
    // this will be array
    output.push(logic(this[i]));
  }
  return output;
};

console.log(radiusArgument.calc(area));
console.log(radiusArgument.calc(circumFerence));
console.log(radiusArgument.calc(diameter));

// it gives reusability/modularability over old approach, DRY -> Don't repeat yourself
