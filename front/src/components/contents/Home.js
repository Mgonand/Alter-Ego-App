import React, { Component } from "react";
import { Link } from "react-router-dom";


class home extends Component {
  
  render() {
    return (
      <div className="main gradient">
      <div className="icon"></div>
      <h1 className="AlterEgo">AlterEgo</h1>
        <Link to="/signup">
          <button className="Rectangle">
            <span className="Regstrate">Regístrate</span>
          </button>
        </Link>
        <br />
        <Link to="/login">
          <button className="Rectangle">
            <span className="Mi-cuenta">Mi cuenta</span>
          </button>
        </Link>
      </div>
    );
  }
}

export default home;
