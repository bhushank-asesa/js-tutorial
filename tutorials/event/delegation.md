# Event delegation

> delegation saves the lots of memory, because there will large number of li/child element may be dynamic if we add every li addEventListener then it will be memory consuming so delegation using bubbling saves memory

## HTML

```html
<div id="mainDiv">
    <li id="five" data-value="1">Five</li>
    <li id="one" data-value="12">One</li>
    <li id="two" data-value="1534">Two</li>
    <li id="three" data-value="134">Three</li>
    <li id="four" data-value="112">Four</li>
    <span> This is span </span>
</div>
```

## JS

```js
document.querySelector("#mainDiv").addEventListener("click", (e) => {
    console.log("main div clicked", e, e.target, e.target.id, e.target.tagName, e.target.dataset.value);
    if (e.target.tagName === "LI") {
        console.log("Li clicked");
    }
});
```
* can set data-* attribute for more information to click event operation
* can get data attribute by e.target.dataset[key] eg. data-value=>e.target.dataset.value
