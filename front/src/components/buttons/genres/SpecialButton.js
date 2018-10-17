import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default class SpecialButton extends Component {
  render() {
    if (this.props.type === "a"){
      return (
        <svg width="365px" height="135px" viewBox="0 0 365 135">
          <g transform="translate(-7.000000, -254.000000)" fill-rule="nonzero">
              <g id="Rectangle-Copy-6">
                  <path className={this.props.normalClassName} stroke="#2096AE" stroke-width="1" d="M28.6347067,315.451268 C21.6344864,316.608672 16.5,322.661792 16.5,329.757049 L16.5,361 C16.5,369.008129 22.9918711,375.5 31,375.5 L344,375.5 C352.008129,375.5 358.5,369.008129 358.5,361 L358.5,278.006167 C358.5,277.213754 358.435043,276.422674 358.305782,275.640874 C356.999466,267.740009 349.535572,262.39407 341.634707,263.700386 L28.6347067,315.451268 Z" stroke-linejoin="square"  fill-rule="evenodd"></path>
              </g>
          </g>
        </svg>
      )
    }

    if (this.props.type === "b"){
      return (
        <svg width="365px" height="135px" viewBox="0 0 365 135">
          <g id="Pantalla-5" transform="translate(-7.000000, -383.000000)" fill-rule="nonzero">
              <g id="Rectangle-Copy-7" transform="translate(187.500000, 448.500000) scale(1, -1) translate(-187.500000, -448.500000) ">
                  <path className={this.props.normalClassName} stroke="#60B3C4" stroke-width="1" d="M28.6347067,444.451268 C21.6344864,445.608672 16.5,451.661792 16.5,458.757049 L16.5,490 C16.5,498.008129 22.9918711,504.5 31,504.5 L344,504.5 C352.008129,504.5 358.5,498.008129 358.5,490 L358.5,407.006167 C358.5,406.213754 358.435043,405.422674 358.305782,404.640874 C356.999466,396.740009 349.535572,391.39407 341.634707,392.700386 L28.6347067,444.451268 Z" stroke-linejoin="square" fill="#FFFFFF" fill-rule="evenodd"></path>
              </g>
          </g>
        </svg>
      )
    }
  }
}


