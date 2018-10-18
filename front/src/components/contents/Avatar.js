import React, { Component } from "react";
import { Link } from "react-router-dom";
class genres extends Component {
  render() {
    return (
      <div>
        <div>
          <h1 className="questionsH2">Elije tu avatar</h1>
          <svg
            className="svgTop"
            width="343px"
            height="208px"
            viewBox="0 0 343 208"
          >
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Pantalla-6"
                transform="translate(-16.000000, -80.000000)"
                fill="#333333"
                fill-rule="nonzero"
              >
                <path
                  d="M28.6821801,129.140183 L341.68218,80.1870545 C349.866953,78.906958 357.539745,84.5043038 358.819842,92.6890765 C358.939766,93.455859 359,94.2307924 359,95.0068963 L359,273 C359,281.284271 352.284271,288 344,288 L31,288 C22.7157288,288 16,281.284271 16,273 L16,143.960025 C16,136.570632 21.3815379,130.282002 28.6821801,129.140183 Z"
                  id="Rectangle-Copy-15"
                  transform="translate(187.500000, 184.000000) scale(-1, -1) translate(-187.500000, -184.000000) "
                />
              </g>
            </g>
          </svg>
        </div>
<div></div>
        <Link to="/home">
          <button className="signBtn">
            <span className="signSpan">Comenzar</span>
          </button>
        </Link>
      </div>
    );
  }
}

export default genres;
