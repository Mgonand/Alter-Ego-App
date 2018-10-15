import React, { Component } from "react";
import { Link } from "react-router-dom";
class genres extends Component {
  render() {
    return (
      <div>
        <h1>Elije tus generos favoritos</h1>
        <form action="">
          <input type="checkbox" name="vehicle1" value="Bike" /> LOQUESEA
          <br />
          <input type="checkbox" name="vehicle2" value="Car" /> VAMPIROS
          <br />
          <input type="checkbox" name="vehicle3" value="Boat" checked /> DRAMA
          <br />
        </form>
        <Link to="/avatar">NEXT</Link>
      </div>
    );
  }
}

export default genres;
