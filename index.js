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

/**
  * 
  * @param {*} parentEle 
  * @param {*} props 
  * @param  {...any} childEles 
  * step3
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
  */

function createElement(parentEle, props, ...childEles) {
  if (
    typeof parentEle === "function" &&
    /^\s*class\s+/.test(parentEle.toString())
  ) {
    let component = new parentEle();
    return component.render();
  } else if (typeof parentEle === "function") {
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

/**
 * step3
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
 */

class Hello {
  render() {
    return React.createElement("div", null, `版本四，类组件的实现`);
  }
}
const helloWorld = React.createElement(Hello, null, null);

ReactDOM.render(helloWorld, document.getElementById("root"));
