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
