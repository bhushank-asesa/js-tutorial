# debouncing

## HTML

```html
<input onkeyup="eventCall(5)" name="example-1" />
<input onkeyup="eventCall()" name="example-2" />
```

## JS

### Actual Function

```js
let counter = 0;
function webCall(a) {
  console.log("Key upped " + counter * a);
  counter++;
}
```

### Event Call function

```js
const eventCall = debounceCaLL(webCall, 100); // argument actual Function and delay
```

### Debounce call

```js
function debounceCaLL(fn, time) {
  let timer;
  return function () {
    let context = this;
    args = arguments;
    console.log(context, args, fn);
    clearTimeout(timer);
    timer = setTimeout(() => {
      webCall.apply(context, arguments);
    }, time);
  };
}
```

- this function takes two parameter actual function call and delay
- timer and clear timeout
- return function get context(this) of input event and argument of it
- in time out that webCall apply with context and argument
