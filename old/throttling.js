const expensive = function () {
  console.log("expensive function called");
};
// window.addEventListener("resize", expensive());
var throttle = function (fn, delay) {
  let flag = true;
  return function () {
    let context = this;
    args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
// throttle is used to rate limit expensive function
const betterExpensive = throttle(expensive, 300);

// debounce -> difference between keystroke i.e. event, search input key press
// throttling => difference between function call like window resize , shooting game
