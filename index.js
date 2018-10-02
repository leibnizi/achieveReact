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

let rootElement, rootReactElement;
// React基础组件库
class Component {
  constructor(props) {
    this.props = props;
  }
  setState(state) {
    this.state = state;
    reRender();
  }
}

// React.createElement
function createElement(parentEle, props, ...childEles) {
  if (
    typeof parentEle === "function" &&
    /^\s*class\s+/.test(parentEle.toString())
  ) {
    // 当为类组件时
    let component = new parentEle(props);
    return component;
  } else if (typeof parentEle === "function") {
    // 当为函数组件时
    return parentEle(props);
  } else {
    // 当为html标签组件时
    let parentElement = document.createElement(parentEle);
    Object.keys(props || {}).forEach(key => {
      switch (key) {
        case "onclick":
          parentElement.addEventListener("click", props[key]);
          break;
        case "onClick":
          parentElement.addEventListener("click", props[key]);
          break;
        default:
          break;
      }
    });
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
  rootElement = rootEle;
  rootReactElement = insertEle;
  rootEle.appendChild(insertEle.render());
}

function reRender() {
  while (rootElement.hasChildNodes()) {
    rootElement.removeChild(rootElement.lastChild);
  }
  ReactDOM.render(rootReactElement, rootElement);
}

React = {
  createElement,
  Component
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

// class Hello {
//   render() {
//     return React.createElement("div", null, `版本四，类组件的实现`);
//   }
// }
// const helloWorld = React.createElement(Hello, null, null);

// class Hello extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return React.createElement("div", null, `Hello ${this.props.name}`);
//   }
// }
// const helloWorld = React.createElement(Hello, { name: "文字" }, null);
// ReactDOM.render(helloWorld, document.getElementById("root"));

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }
  onPlusClick() {
    this.setState({ value: this.state.value + 1 });
  }
  onMinusClick() {
    this.setState({ value: this.state.value - 1 });
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("div", null, `The Famous Dan Abramov's Counter`),
      React.createElement("div", null, `${this.state.value}`),
      React.createElement(
        "button",
        { onClick: this.onPlusClick.bind(this) },
        "+"
      ),
      React.createElement(
        "button",
        { onClick: this.onMinusClick.bind(this) },
        "-"
      )
    );
  }
}
let myCounter = React.createElement(Counter, null, null);
ReactDOM.render(myCounter, document.getElementById("root"));
