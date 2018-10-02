function createElement(parentEle, props, childEle) {
  let parentElement = document.createElement(parentEle);
  parentElement.innerHTML = childEle;
  return parentElement;
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

const helloWorld = React.createElement("div", null, `Hello World`);
ReactDOM.render(helloWorld, document.getElementById("root"));
