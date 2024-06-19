// Javascript is synchronous and single threaded language
// Everything in Javascript is happen inside Execution Context
// Execution Context contains two part 1) Memory => store in key:value pair eg. a:10 fun:{} 2) Code (also known as Thread of Execution) -> execute one by one line
// first phase all memory is allocated
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

// in memory allocation n, square2, square4 are undefined
// execution goes to line 5 then n => 2
// from line 6-9 no executed
// for line 10 brand new execution for function created and that memory and code of created after line(last) 8 done this execution context removed/demolished
// same above happen for line 11

// this stack is maintained by call stack
//  call stack also known as Call stack, Exe. Context Stack, Program stack, control stack, Runtime stack, Machine stack
// call stack maintains order of execution of execution context
// Global execution context is always bottom at call stack
