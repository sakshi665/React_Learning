//OBJECT
let ReactDOM = {};

//RENDER METHOD

function render(component, root) {
  let optimizedDOM = react(component);
  console.log("rendering to DOM");
  root.innerHTML = optimizedDOM;
}

ReactDOM.render = render;
