import React, { Component } from "react";
import { Link } from "react-router-dom";
class setup extends Component {
  render() {
    return (
      <div className="main">
        <img
            className="Shape"
            src={require("../../settings.png")}
            alt="alt"
          />
        <svg className="signSvg" width="343px" height="456px" viewBox="0 0 343 456">
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Pantalla-3"
              transform="translate(-16.000000, -107.000000)"
              fill="#333333"
              fill-rule="nonzero"
            >
              <path
                d="M29.0536179,168.255096 L341.085084,107.280048 C349.215573,105.691244 357.094617,110.994327 358.683421,119.124816 C358.86862,120.072546 358.961869,121.035945 358.961869,122.001601 L358.961869,547.773598 C358.961869,556.057869 352.24614,562.773598 343.961869,562.773598 L31.0001675,562.773598 C22.7158963,562.773598 16.0001675,556.057869 16.0001675,547.773598 C16.0001675,547.760848 16.0001838,547.748098 16.0002163,547.735348 L16.9304515,182.938399 C16.9487113,175.777692 22.0258137,169.628421 29.0536179,168.255096 Z"
                id="Rectangle"
              />
            </g>
          </g>
        </svg>
        <h1 className="setupH1">¿Quieres que tu relato sea personalizado?</h1>
        <Link to="/home"><button className="setupBtn no"> <span className="setupSpan">No</span></button></Link>
        <br />
        <Link to="/Questions"><button className="setupBtn yes"><span className="setupSpan">Sí</span></button></Link>
      </div>
    );
  }
}

export default setup;
