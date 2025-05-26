# Set Timeout trust issue

> Callback function is registered in web API env.

```js
console.log("start");
setTimeout(() => {
  console.log("callback");
}, 5000);
console.log("end");
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}
console.log("while expires in 10 seconds");

/*
start
end
while expires in 10 seconds
callback
*/
```

- setTimeout doesn't guarantee that it will execute in after 5000ms(e.g), it will after execute min 5000ms
- in example timeout register web API env. and goes into cbq after 5 seconds and GCE move next line
- Consider there is 1 million lines which takes 10 sec to execute in gec then gec is busy
- So timer may be expired but CBF will execute after 10 sec
- this is called trust issue with setTimeout
- Only one callstack due to synchronous single threaded JS language

## defer Task

- you can defer task by using 0 ms setTimeout

```js
console.log("start");
function cbf() {
  console.log("callback");
}
setTimeout(cbf, 0);
console.log("end");
/*
start
end
callback
*/
```
