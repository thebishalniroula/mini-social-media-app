import "./app.css";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Users from "./components/Users";
export default function App() {
  return (
    <Router>
      <Nav />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/:id">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
