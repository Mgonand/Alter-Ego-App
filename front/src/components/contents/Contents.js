import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Contents extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/games`).then(res => {
      const list = res.data;
      this.setState({ list });
    });
  }

  render() {
    return (
      <div className="main">
        <img
        onClick={()=>{this.props.logout()}}
            className="Shape"
            src={require("../../settings.png")}
            alt="alt"
          />
        <h1 className="homeTerrorH1">Terror</h1>
        <div className="scroll1">
          <Link to="/game">
            <img
              className="image"
              src={require("../../tarjeta1.png")}
              alt="alt"
            />
          </Link>

          <img className="image" src={require("../../oso.png")} alt="alt" />
        </div>
        <h1 className="homeTerrorH2">Aventuras</h1>
        <div className="scroll2">
          <img className="image" src={require("../../lobo.png")} alt="alt" />
          <img className="image" src={require("../../bicho4.png")} alt="alt" />
        </div>
      </div>
    );
  }
}

export default Contents;
