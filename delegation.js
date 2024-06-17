document.querySelector("#mainDiv").addEventListener("click", (e) => {
  // delegation saves the lots of memory, because there will large number of li may be dynamic if we add every li addEventListener then it will be memory consuming so delegation using bubbling saves memory
  console.log("main div clicked", e.target, e.target.id, e.target.tagName);
  if (e.target.tagName === "LI") {
    console.log("Li clicked");
  }
});
