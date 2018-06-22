import React from "react";
import { render } from "react-dom";
import Dashboard from "./Dashboard";
import styles from "./styles.css";

render(<Dashboard />, document.querySelector("#app"));

/**
 *  Welcome to the Optimizely Ice Cream Shop Dashboard!
 *
 *  This application is used to help our employees serve up
 *  ice cream to their customers.
 *
 *  DATA.js contains a list of ingredients (ice cream or toppings)
 *  and recipes (rules of how ingredients can be combined).
 *
 *  TODO list:
 *
 *  1 - Render a list of ice creams and a separate list of toppings
 *    1a - Each list should show the 'name' of the ice cream or topping.
 *
 *  ---------------------------------------------------------------
 *
 *  2 - Render a list of recipes
 *    2a - The list should show the name of the recipe and a
 *         "friendly" description of the criteria
 *
 *        EXPECTED OUTPUT:
 *        - The Basic
 *            Chocolate Ice Cream or Vanilla Ice Cream
 *        - Chocolate Lovers
 *            Chocolate Ice Cream and M&Ms and (not Strawberry Ice Cream nor
 *            Lemon Ice Cream) and Caramel Sauce
 *        - Tutty Fruity
 *            (Lemon Ice Cream or Strawberry Ice Cream) and
 *             Raspberry Sauce and (not M&Ms nor Chocolate Ice Cream)
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

const button = document.getElementsByClassName("solution-button")[0];
button.onclick = () => {
  var buttonText = button.textContent;
  var solution = document.getElementsByClassName("solution")[0];
  if (solution.className.indexOf("shown") > -1) {
    button.textContent = "Hide Expected Output";
    solution.style.display = "block";
    solution.className = "solution hidden";
  } else if (solution.className.indexOf("hidden") > -1) {
    button.textContent = "Show Expected Output";
    solution.style.display = "none";
    solution.className = "solution shown";
  }
};
