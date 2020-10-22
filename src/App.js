import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";

import ShopList from "./components/ShopList";
import ShopItem from "./components/ShopItem";

import "./App.css";
export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/" className="ele-a">
                首页
              </Link>
            </li>
            <li>
              <Link to="/shopList" className="ele-a">
                商品
              </Link>
            </li>
            <li>
              <Link to="/about" className="ele-a">
                关于
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/shopList" exact component={ShopList}></Route>
        <Route path="/shopList/:id" component={ShopItem}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function NotFound() {
  return <h2>404</h2>;
}
