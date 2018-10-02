/**
 * 
 * @param {*} parentEle 
 * @param {*} props 
 * @param {*} childEle 
 * step2
 function createElement(parentEle, props, childEle) {
  if (typeof parentEle === "function") {
    return parentEle();
  } else {
    let parentElement = document.createElement(parentEle);
    parentElement.innerHTML = childEle;
    return parentElement;
  }
}
 */

function createElement(parentEle, props, ...childEles) {
  if (typeof parentEle === "function") {
    return parentEle();
  } else {
    let parentElement = document.createElement(parentEle);
    childEles.forEach(child => {
      if (typeof child === "string") {
        parentElement.innerHTML += child;
      } else if (typeof child === "object") {
        parentElement.appendChild(child);
      }
    });
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

/**
 * step2
const Hello = function() {
  return React.createElement("div", null, `Hello Version2.0`);
};
const helloWorld = React.createElement(Hello, null, null);
ReactDOM.render(helloWorld, document.getElementById("root"));

 */

const HelloVersion3 = function() {
  return React.createElement("div", null, `版本3.0`);
};
const helloWorld1 = React.createElement(HelloVersion3, null, null);
const helloWorld2 = React.createElement(HelloVersion3, null, null);
const divEle = React.createElement("div", null, `我被一个div标签包裹`);

const parent = React.createElement(
  "div",
  null,
  helloWorld1,
  "div",
  helloWorld2,
  divEle,
  `我是文本内容哦`
);

ReactDOM.render(parent, document.getElementById("root"));
