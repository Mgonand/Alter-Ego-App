import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: props.first,
      second: props.second,
      third: props.third,
      fourth: props.fourth
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };

  submitForm() {
    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/games/questions/${this.props.id}`,
        this.state
      )
      .then(res => {
        console.log(res);
      });
  }
  render() {
    let { first, second, third} = this.state;
    return (
      <div>
        <Link to="/setup">
        <img
            className="prev"
            src={require("../../anterior.png")}
            alt="alt"
          />
          </Link>
        <img
            className="Shape"
            src={require("../../settings.png")}
            alt="alt"
          />
        <h1 className="questionsH1">
          Empieza <br />
          contestando estas preguntas sobre ti:
        </h1>

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
              id="Pantalla-4"
              transform="translate(-16.000000, -80.000000)"
              fill="#333333"
              fill-rule="nonzero"
            >
              <path
                d="M28.6821801,129.140183 L341.68218,80.1870545 C349.866953,78.906958 357.539745,84.5043038 358.819842,92.6890765 C358.939766,93.455859 359,94.2307924 359,95.0068963 L359,273 C359,281.284271 352.284271,288 344,288 L31,288 C22.7157288,288 16,281.284271 16,273 L16,143.960025 C16,136.570632 21.3815379,130.282002 28.6821801,129.140183 Z"
                id="Rectangle-Copy-12"
                transform="translate(187.500000, 184.000000) scale(-1, -1) translate(-187.500000, -184.000000) "
              />
            </g>
          </g>
        </svg>
        <form onSubmit={this.handleSubmit} className="questionForm">
         
            <label for="first" className="questionLabel">
            ¿Cúal es tu color favorito?
            </label>
            <input
              className="questionInput"
              type="text"
              id="first"
              name="first"
              value={first}
              onChange={e => this.setState({ first: e.currentTarget.value })}
            />
            <hr className="questionHr" />
            <label for="second" className="questionLabel">
            ¿Con qué animal te identificas?
            </label>
            <input
              className="questionInput"
              type="text"
              id="second"
              name="second"
              value={second}
              onChange={e => this.setState({ second: e.currentTarget.value })}
            />
            <hr className="questionHr" />
            <label for="third" className="questionLabel">
            ¿Qué sueles comer con frecuencia?
            </label>
            <input
              className="questionInput"
              type="text"
              id="third"
              name="third"
              value={third}
              onChange={e => this.setState({ third: e.currentTarget.value })}
            />
            <hr className="questionHr" />
        
        </form>
        <Link to="/genres">
              <button
                onClick={this.submitForm.bind(this)}
                className="signBtn"
                type="submit"
                value="Sign up"
              >
                <span className="signSpan">Siguiente</span>
              </button>
            </Link>
      </div>
    );
  }
}

export default questions;
