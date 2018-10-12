import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
class home extends Component {
  render() {
    return(
    <div>
      <Link to="/home">List of Stories</Link>
      <br/>
      <Link to="/home">Profile</Link>
    </div>
    )}
}

export default home;
