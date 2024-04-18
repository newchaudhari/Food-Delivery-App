import React from "react";
import ReactDOM from "react-dom/client";

//* React.createElement => object =>  HtmlElement(render)

const heading = React.createElement("h1", { id: "heading" }, "Navin is here!");
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);

//* JSX (transpiled before it reaches to JS) => Parcel - Babel
//* Babel convert JSX into Readable Js syntax
//* JSX => Babel transpile it into React.createElement (converted by BAbel) => ReactElement(JS Object) => HTMLElement(render)
//* JSX

// React Element
const jsxHeading = <h1 id="heading">Namaste Navin! 🚀</h1>;
console.log(jsxHeading);

// React Functional Component
const Title = () => <h1 id="heading">Namaste Navin From title Tag</h1>;
//* React Component => it is JS function that returns JSX
//* Component Composition => combining smaller components together
const Heading = () => {
  return (
    <div>
      <Title />
      <h1 id="heading">Namaste Navin from React Functional component 🚀</h1>;
    </div>
  );
};

//* render will replace the code not append it
//* To render functional component we need to use angular brackets
root.render(<Heading />);

































































































document.body.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "a":
      document.body.style.backgroundColor = "blue";
      break;
    case "b":
      document.body.style.backgroundColor = "#C0C0C0";
      break;
    case "c":
      document.body.style.backgroundColor = "#00FF00";
      break;
    case "d":
      document.body.style.backgroundColor = "#808000";
      break;
    case "e":
      document.body.style.backgroundColor = "orange";
      break;
    case "f":
      document.body.style.backgroundColor = "#7FFFD4";
      break;
    case "g":
      document.body.style.backgroundColor = "gray";
      break;
    case "h":
      document.body.style.backgroundColor = "yellow";
      break;
    case "i":
      document.body.style.backgroundColor = "#800000";
      break;
    case "j":
      document.body.style.backgroundColor = "#FF00FF";
      break;
    case "k":
      document.body.style.backgroundColor = "#00008B";
      break;
    case "l":
      document.body.style.backgroundColor = "#BDEDFF";
      break;
    case "m":
      document.body.style.backgroundColor = "teal";
      break;
    case "n":
      document.body.style.backgroundColor = "red";
      break;
    case "o":
      document.body.style.backgroundColor = "#16E2F5";
      break;
    case "p":
      document.body.style.backgroundColor = "black";
      break;
    case "q":
      document.body.style.backgroundColor = "#2C3539";
      break;
    case "r":
      document.body.style.backgroundColor = "purple";
      break;
    case "s":
      document.body.style.backgroundColor = "lightblue";
      break;
    case "t":
      document.body.style.backgroundColor = "green";
      break;
    case "u":
      document.body.style.backgroundColor = "cyan";
      break;
    case "v":
      document.body.style.backgroundColor = "pink";
      break;
    case "w":
      document.body.style.backgroundColor = "darkblue";
      break;
    case "x":
      document.body.style.backgroundColor = "#006A4E";
      break;
    case "y":
      document.body.style.backgroundColor = "#EDDA74";
      break;
    case "z":
      document.body.style.backgroundColor = "#FFA600";
      break;
    default:
      document.body.style.backgroundColor = "#E55451";
      break;
  }
});
