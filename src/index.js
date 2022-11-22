import myName from "./myName";
import "./style.css";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  // Lodash, currently included via a script, is required for this line to work
  element.textContent = myName("Cody");
  element.classList.add("hello");

  btn.textContent = "click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
