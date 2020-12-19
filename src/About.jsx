import React from "react";
import { BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";


import Component1 from "./components/about/Component1";
import Component2 from "./components/about/Component2";
import Component4 from "./components/about/Component4";
import Component5 from "./components/about/Component5";

import "./about.css"

export default function About() {
  return (
    <Router>
      <div className="about">
        <h2>About</h2>
        <div className="infoabout">
          <Link className="ele-a" to="/about/com1">Component1 </Link> | 
          <Link className="ele-a" to="/about/com2">Component2 </Link> | 
          <Link className="ele-a" to="/about/com4">Component4 </Link> | 
          <Link className="ele-a" to="/about/com5">Component5 </Link>
        </div> 

        <Switch>
                    
        <Route path="/about/com1">
            <Component1 name="sovoo" />
          </Route>
          <Route path="/about/com2">
            <Component2 />
          </Route>
          <Route path="/about/com4">
            <Component4 />
          </Route>
          <Route path="/about/com5">
            <Component5 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
