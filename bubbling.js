document.querySelector("#grandParent").addEventListener(
  "click",
  () => {
    console.log("grandParent Clicked");
  },
  true
);
document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("parent Clicked");
    e.stopPropagation(); // it won't bubbleOut in false case and won't capturing in true case
  },
  false
);
document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true
);

// capturing/trickling -> top to bottom
// bubbling -> bottom to top
// by default bubbling is on means child->parent->grandParent will clicked false by default

// child click
// all true => grandParent=>Parent=>Child
// c/true, p/false, gp/true => grandParent=>Child=>parent
// c/false, p/false, gp/true => grandParent=>Child=>parent
// c/false, p/true, gp/true => grandParent=>parent=>child

// parent click
// all true => grandParent=>Parent
// // c/true, p/false, gp/true => grandParent=>parent
// // c/true, p/true, gp/false => parent=>grandParent
// // c/false, p/false, gp/false => parent=>grandParent

// some events like blur can't bubbles

// e.stopPropagation(); // it won't bubbleOut in false case and won't capturing in true case
// all false child=>parent -> stops further in bubbling upward in child click
// all true grandParent -> stops further in capturing
