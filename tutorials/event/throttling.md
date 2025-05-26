# Throttling

> Throttle is used to rate limit expensive function

## HTML

```html
<input type="text" onkeyup="betterExpensive()" />
```

## JS

### Actual Function

```js
const expensive = function () {
  console.log("expensive function called");
};
```

### Event Call function

```js
const betterExpensive = throttle(expensive, 300); // argument actual Function and delay
```

### Throttle call

```js
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
```

- **Debounce ->** difference between keystroke i.e. event, search input key press
- **Throttling =>** difference between function call like window resize , shooting game
