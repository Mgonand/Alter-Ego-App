import React, { Component } from "react";
import { Link } from "react-router-dom";
class genres extends Component {
  render() {
    return (
      <div>
        <h1>Elije tu avatar favoritos</h1>
        
      
        <Link to="/questions">NEXT</Link>
      </div>
    );
  }
}

export default genres;
