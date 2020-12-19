import React from "react";
import {
  Link,
} from "react-router-dom";

export default function Home() {

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
