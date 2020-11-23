import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function Home() {
  let { path, url } = useRouteMatch();

  return (
    <div className="Home">
      <ul className="home-list">
        <li>
          <Link to="/home/movies" className="ele-a">
            电影
          </Link>
        </li>
        <li>
          <Link to="/home/books" className="ele-a">
            书
          </Link>
        </li>
      </ul>
    </div>
  );
}
