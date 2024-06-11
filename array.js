var description =
  "Array => resizable, multiple data-types, starts with 0 index with non-negative number(can't use string to access)";

let arr_1 = ["c", "b", "c"];
const cars = new Array("Saab", "Volvo", "BMW", "access", "pep+");

// const pushRes = arr_1.push("a"); // push @ last, multiple item can be pushed
// console.log("push a", arr_1, pushRes); // pushRes is count
// const popRes = arr_1.pop(); // pop @ last
// console.log("pop", arr_1, popRes); // popRes => gives which element is removed/popped
// const shiftRes = arr_1.shift(); // remove first element
// console.log(shiftRes, arr_1); // shiftRes => removed element
// const unshiftRes = arr_1.unshift("d", "e"); // add to start element return length of array
// console.log(unshiftRes, arr_1);
// console.log("cars.at(2)", cars.at(2));
// const arr_cars = arr_1.concat(cars); //  (joins) two or more arrays
// console.log("arr_1.concat(cars)", arr_cars, cars);
// const twoWheeler = cars.slice(3, 5); // array.slice(start[default 0], end[default end]) // start = access end = pep+ it not includes end indexed value  'access', 'pep+
// console.log(twoWheeler, cars);
// const fourWheeler = cars.slice(-5, -2); // starts from end 'Saab', 'Volvo', 'BMW' ; works like start exclude and end includes
// console.log(fourWheeler, cars);
// console.log("cars.join()", cars.join("___")); // join by specified string and if string not specified then join by ,
// cars.splice(3, 2, "ford"); //array.splice(index(required), count, item1, ....., itemX(item will added to array)) changes in cars array
// console.log(cars);
// const arr_1_keys = arr_1.keys(); // keys = Object [Array Iterator] // not changes original array
// console.log(Array.isArray(arr_1), arr_1_keys, arr_1);
// for (let ak of arr_1_keys) {
//   //  Object [Array Iterator]
//   console.log(ak);
// }
// console.log(arr_1.lastIndexOf("c")); // gives last index of c => 2
// const fill_arr_1 = arr_1.fill("z"); // fill z with every element
// console.log(arr_1, fill_arr_1); // return same arr_1
// arr_1.fill("z", 1, 3); // start and end end index will skipped
// console.log(arr_1);
// const carsReversed = cars.toReversed();// not changes original array
// console.log(carsReversed, cars);
// const arr_1Sorted = arr_1.sort(); // sort only [] array
// console.log(arr_1Sorted, arr_1); // change original array
