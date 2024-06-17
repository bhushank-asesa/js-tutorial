let counter = 0;
function getData() {
  console.log("typing ", counter++);
}
const debounceMethod = function (fn, delay) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    console.log(args);
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
const betterFunction = debounceMethod(getData, 300);

// debounce -> difference between keystroke i.e. event, search input key press
// throttling => difference between function call like window resize , shooting game
