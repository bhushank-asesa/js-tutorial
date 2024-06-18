function calc(n) {
  let sum = 0;
  for (let index = 0; index < n; index++) {
    sum += n;
  }
  return sum;
}
// console.time();
// console.log(calc(5));
// console.timeEnd();
// memoization is an optimization technique that can be used to reduce time-consuming calculations by saving previous input to something called cache and returning the result from it.
const memoization = (fun) => {
  let cache = {}; // use this by closure method
  return function (...args) {
    n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = fun(n);
      cache[n] = result;
      return result;
    }
  };
};
const efficiency = memoization(calc);
console.time();
console.log(efficiency(5));
console.timeEnd();

console.time();
console.log(efficiency(5));
console.timeEnd();

console.time();
console.log(efficiency(7));
console.timeEnd();

console.time();
console.log(efficiency(7));
console.timeEnd();
