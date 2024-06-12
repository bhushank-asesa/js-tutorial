const radiusArgument = [1, 3, 2, 4, 5];

function calculateArea(radiusParameter) {
  let output = [];
  for (let i = 0; i < radiusParameter.length; i++) {
    output.push(Math.PI * radiusParameter[i] * radiusParameter[i]);
  }
  return output;
}
function calculateCircumFerence(radiusParameter) {
  let output = [];
  for (let i = 0; i < radiusParameter.length; i++) {
    output.push(Math.PI * radiusParameter[i] * 2);
  }
  return output;
}
function calculateDiameter(radiusParameter) {
  let output = [];
  for (let i = 0; i < radiusParameter.length; i++) {
    output.push(2 * radiusParameter[i]);
  }
  return output;
}
console.log(calculateCircumFerence(radiusArgument));
console.log(calculateArea(radiusArgument));
console.log(calculateDiameter(radiusArgument));
