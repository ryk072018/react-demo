import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Component1 from "./components/about/Component1";
import Component2 from "./components/about/Component2";
import Component3 from "./components/about/Component3";

export default function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <div className="infoabout">
        morning
        <Component1 name="sovoo" />
        <Component2 />
        <Component3 />
      </div>
    </div>
  );
}
