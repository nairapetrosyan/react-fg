import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import HandlerBinding from "./Hello";
import Home from "./Home";
import DifferentStates from "./DifferentStates";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/handler-bind" component={HandlerBinding} />
          <Route exact path="/" component={Home} />
          <Route exact path="/different-states" component={DifferentStates} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("container"));
