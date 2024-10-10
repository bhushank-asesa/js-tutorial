const fruits = ["Banana", "Orange", "Lemon", "Banana", "Apple", "Mango"];
// const citrus = fruits.slice(-3, -1);

// console.log(citrus);

const fruits_1 = ["Banana", "Orange", "Apple", "Mango"];
fruits_1.splice(2, 0, "Lemon", "Kiwi");

const fruits_2 = ["Banana", "Orange", "Apple", "Mango"];
const f2 = fruits_2.toSpliced(2, 0, "Lemon", "Kiwi");

// console.log(fruits_1, fruits_2, f2);

// console.log(fruits_1.at(2), fruits_1[2]);
// console.log(fruits_1.join(), fruits_1.join("__"));
// let fruit = fruits.pop();
let length = fruits.push("Kiwi");
// console.log(fruits, length);
// fruits.shift();
// console.log(fruits);
// let a = fruits.toString("adsad");
// console.log(a);
let position = fruits.indexOf("Banana");
let includes = fruits.includes("Banana");
let lastPosition = fruits.lastIndexOf("Banana");
// console.log(position, includes, lastPosition);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
// console.log(first);
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
let c = myChildren.concat("abc");

// console.log(myChildren, c);

const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const newArr = myArr.flat();
// console.log(newArr);
const a1 = Array(5).fill("abc");
// console.log(a1);

let a = myChildren.find((item) => item == "Emil");
let b = myChildren.findIndex((item) => item == "Emil");
console.log(a, b);
