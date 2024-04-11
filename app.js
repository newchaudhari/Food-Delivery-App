import React from "react";
import ReactDOM from "react-dom"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Namaste React"
    ),
    React.createElement(
      "h2",
      { id: "center" },
      "Hello it's H2 tag from child1"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello it's H1 tag form child2"
    ),
    React.createElement(
      "h2",
      { id: "center" },
      "Hello it's H2 tag from child2"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date = new Date();
console.log(months[date.getMonth()]);

const root1 = document.getElementById("root");

document.body.addEventListener("keydown", (event) => {
  console.log(event.key);
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
