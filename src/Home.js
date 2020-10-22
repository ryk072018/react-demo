import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function Home() {
  return (
    <Router>
      <div className="Home">
        <ul className="home-list">
          <li>
            <Link to="/movies" className="ele-a">
              电影
            </Link>
          </li>
          <li>
            <Link to="/books" className="ele-a">
              书
            </Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Movies() {
  return (
    <div>
      <ul>
        <li>Top</li>
        <li>最新</li>
        <li>热门</li>
      </ul>
    </div>
  );
}

function Books() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Books</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}> components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v state</Link>
        </li>

        {/* <li>好书</li>
        <li>Top</li>
        <li>新书</li> */}

        <Switch>
          <Route path={`${match.url}/:bookId`}>
            <Book />
          </Route>
          <Route path={match.path}>
            <h3>请选择一本书</h3>
          </Route>
        </Switch>
      </ul>
    </div>
  );
}

function Book() {
  let { bookId } = useParams();
  return <h3>获取书的ID: {bookId}</h3>;
}
