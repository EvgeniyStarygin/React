import React from "react";
import ReactDOM from "react-dom";

import Shop from "./components/Shop";
import "./App.css";

import products from "./products.json";

let headersArr = ["Name", "Price", "Photo", "Quantity", "Control"];

ReactDOM.render(
  <Shop items={products} headers={headersArr} />,
  document.getElementById("container")
);
