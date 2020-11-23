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

export default function Books() {
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

