function createElement(parentEle, props, childEle) {
  if (typeof parentEle === "function") {
    return parentEle();
  } else {
    let parentElement = document.createElement(parentEle);
    parentElement.innerHTML = childEle;
    return parentElement;
  }
}
function render(insertEle, rootEle) {
  rootEle.appendChild(insertEle);
}
React = {
  createElement
};
ReactDOM = {
  render
};

const Hello = function() {
  return React.createElement("div", null, `Hello Version2.0`);
};
const helloWorld = React.createElement(Hello, null, null);
ReactDOM.render(helloWorld, document.getElementById("root"));
