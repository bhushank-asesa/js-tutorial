# Event Loop

- Call stack do one task at a time
- eg.

```js
function a() {
  console.log("a");
}
a();
console.log("end");
```

- New execution context is created for function which pop in and out
- Global execution context also pop out after all code execute
- Anything comes in Call stack execute immediately

## Browser has following

- Js engine
  - Call stack
- URL - which
- actual tab to show html
- local storage
- timer
- Bluetooth and geo-location and other

### how work it

- JS engine needs access to above super powers
- super power like web APIs
  - setTimeout
  - DOM API
  - fetch
  - local storage
  - console
  - geo location
- browser has global object i.e. window to use super powers
- window.console.log() same as console.log which helps to access console and same for timeout and so on

## Event Loop

```js
console.log("start");
setTimeout(function cbf() {
  console.log("timer");
}, 5000);
console.log("end");
```

- first start and end prints
- cbf is register in list and timer starts
- after timer expire cbf should go in call stack but it goes into **CALL BACK QUEUE(CBQ)**
- here **Event Loop(EL)** comes in picture
- EL acts as gate keeper, checks whether something in CBQ and push it in Call Stack one by one, and remove after pushing in CS them from CBQ

```js
console.log("start");
document.getElementById("button").addEventListener("click", function () {
  console.log("Button clicks");
});
console.log("end");
```

- this even listener function goes to call back list and after click it goes in CBQ
- EL works here
- Directly from callback list it can't go to CS
- if user clicks 5-6 times then 5-6 cbf goes in CBQ

```js
console.log("start");
setTimeout(function cbf() {
  console.log("timer");
}, 5000);
fetch("URL").then(function () {
  console.log("API called");
});
console.log("end");
```

- here fetch work different
- instead of CBQ fet cbf goes in **MicroTask Queue(MTQ)** which has higher priority than CBQ
- in MTQ cbf from promises and mutation observer cbf goes
- EL also checks for MTQ
- CBQ also called As TASk Queue
- **CBQ starvation** if one task in MTQ create another Micro task then so on then CBQ doesn't get chance
