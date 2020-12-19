import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import Movies from "./components/Movies";
import Books from "./components/Books";

import ShopList from "./ShopList";
import ShopItem from "./components/ShopItem";

import About from "./About";

import "./App.css";
export default function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="nav-list">
            <li>
              <Link to="/home" className="ele-a">
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
      <div className="container-all">
        <Switch>
          <Route path="/shopList" exact component={ShopList}></Route>
          <Route path="/shopList/:id" component={ShopItem}></Route>
          <Route path="/about" component={About}></Route>

          <Route path="/home/movies" component={Movies}></Route>
          <Route path="/home/books" component={Books}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  return <h2>404</h2>;
}
