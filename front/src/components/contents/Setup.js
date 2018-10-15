import React, { Component } from "react";
import { Link } from "react-router-dom";
class setup extends Component {
  render() {
    return (
      <div>
        <h1>Personalizado?</h1>
        <Link to="/home">No</Link>
        <br/>
        <Link to="/genres">Yes</Link>
      </div>
    );
  }
}

export default setup;
