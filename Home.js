import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/handler-bind">Handler Binding</Link>
        <br />
        <Link to="/different-states">Different States</Link>
      </div>
    );
  }
}

export default Home;
