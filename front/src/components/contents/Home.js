import React, { Component } from "react";
import { Link } from "react-router-dom";
class home extends Component {
  render() {
    return(
    <div>
      <Link to="/home">List of Stories</Link>
      <br/>
      <Link to="/Game">Continue your Story</Link>
    </div>
    )}
}

export default home;
