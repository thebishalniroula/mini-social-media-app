import "./app.css";
import UserProfile from "./components/UserProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

import Users from "./components/Users";
import { useState } from "react";
export default function App() {
  const [input, setInput] = useState();
  return (
    <Router>
      <Nav setInput={setInput} />
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Users input={input} />
          </Route>
          <Route path="/:id">
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
