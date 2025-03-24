# Event Bubbling and capture

## Html code

```html
<div
  style="
        height: 200px;
        width: 200px;
        background-color: red;
        align-items: center;
      "
  id="gParent"
>
  <div
    style="
          height: 125px;
          width: 125px;
          background-color: yellow;
          margin: auto;
        "
    id="parent"
  >
    <div
      style="
            height: 75px;
            width: 75px;
            background-color: green;
            margin: auto;
          "
      id="child"
    ></div>
  </div>
</div>
```

## JS

````js
document.querySelector("#div").addEventListener(
      "click",
      (e) => {
        console.log("div Clicked");
      },
      true // it is event capture and by default false means bubbling is on
    );
    ```
## Bubbling

> It happens child to gParent

## Capturing

> It happens gParent to child
````

## Cases

1. G-false P-false C-false = child->parent->gParent
2. G-true P-true C-true = gParent->parent->child
3. G-true estopProp.-P-false C-true = gParent->child->parent

## To solve e-commerce wishlist on product which has navigation on link

1. G-false P-false C-false-estopProp. = child

```js
document.querySelector("#gParent").addEventListener(
  "click",
  (e) => {
    console.log("grandParent Clicked");
  },
  false
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent Clicked");
    e.stopPropagation();
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("child Clicked");
    e.stopPropagation();
  },
  false
);
```

## React To solve e-commerce wishlist on product which has navigation on link

```js
const pClick = (e) => {
  e.stopPropagation();
  console.log("parent clicked");
};
const gpClick = (e) => {
  console.log("grand parent clicked");
};
const cClick = (e) => {
  e.stopPropagation();
  console.log("child clicked");
};
return (
  <div className="bg-red-400 w-64 h-64" onClick={gpClick}>
    <div className="bg-green-400 w-32 h-32 m-auto" onClick={pClick}>
      <div className="bg-yellow-200 w-12 h-12 m-auto" onClick={cClick}></div>
    </div>
  </div>
);
```
