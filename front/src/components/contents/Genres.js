import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class genres extends Component {
  state = {
    Terror: false,
    Clasicas: false,
    Historicas: false,
    Aventuras: false,
    Mitologicas: false
  };

  toggleChangeTerr = () => {
    console.log("hola");
    this.setState(prevState => ({
      Terror: !prevState.Terror
    }));
  };

  toggleChangeClas = () => {
    this.setState(prevState => ({
      Clasicas: !prevState.Clasicas
    }));
  };

  toggleChangeHist = () => {
    this.setState(prevState => ({
      Historicas: !prevState.Historicas
    }));
  };
  toggleChangeAvent = () => {
    this.setState(prevState => ({
      Aventuras: !prevState.Aventuras
    }));
  };
  toggleChangeMito = () => {
    this.setState(prevState => ({
      Mitologicas: !prevState.Mitologicas
    }));
  };

  submitForm = e => {
    let arr = [];
    for (var key in this.state) {
      if (this.state[key] === true) {
        arr.push(key);
      }
    }
    let data = {
      check: arr.toString()
    };
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/games/genres/${this.props.id}`, data)
      .then(res => console.log(res.data));
  };

  render() {
    return (
      <div className="container">
        <h1 className="questionsH1">
          ¿Qué tipo de
          <br /> historias prefieres?
        </h1>
        <p className="questionsP">* Selecciona tantas como prefieras</p>

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
        <svg
          className="genresSvg"
          width="369px"
          height="548px"
          viewBox="0 0 369 548"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Pantalla-5"
              transform="translate(-3.000000, -246.000000)"
              fill-rule="nonzero"
            >
              <g id="Rectangle-Copy-6" >
                <path
                  className={(this.state.Terror ? 'genreBlue' : 'genreWhite')}
                  stroke="#2096AE"
                  stroke-width="1"
                  d="M28.6347067,307.451268 C21.6344864,308.608672 16.5,314.661792 16.5,321.757049 L16.5,353 C16.5,361.008129 22.9918711,367.5 31,367.5 L344,367.5 C352.008129,367.5 358.5,361.008129 358.5,353 L358.5,270.006167 C358.5,269.213754 358.435043,268.422674 358.305782,267.640874 C356.999466,259.740009 349.535572,254.39407 341.634707,255.700386 L28.6347067,307.451268 Z"
                  stroke-linejoin="square"
                  
                  fill-rule="evenodd"
                />
              </g>
              <g
                id="Rectangle-Copy-7"
                transform="translate(187.500000, 440.500000) scale(1, -1) translate(-187.500000, -440.500000) "
              >
                <path
                  className={(this.state.Clasicas ? 'genreBlue' : 'genreWhite')}
                  stroke="#60B3C4"
                  stroke-width="1"
                  d="M28.6347067,436.451268 C21.6344864,437.608672 16.5,443.661792 16.5,450.757049 L16.5,482 C16.5,490.008129 22.9918711,496.5 31,496.5 L344,496.5 C352.008129,496.5 358.5,490.008129 358.5,482 L358.5,399.006167 C358.5,398.213754 358.435043,397.422674 358.305782,396.640874 C356.999466,388.740009 349.535572,383.39407 341.634707,384.700386 L28.6347067,436.451268 Z"
                  stroke-linejoin="square"
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                />
              </g>
              <g
                id="Rectangle-Copy-8"
                transform="translate(187.500000, 518.500000) scale(-1, 1) translate(-187.500000, -518.500000) "
              >
                <path
                  className={(this.state.Historicas ? 'genreBlue' : 'genreWhite')}
                  stroke="#60B3C4"
                  stroke-width="1"
                  d="M28.5533237,514.304428 C21.5905547,515.496391 16.5,521.532457 16.5,528.596516 L16.5,562 C16.5,570.008129 22.9918711,576.5 31,576.5 L344,576.5 C352.008129,576.5 358.5,570.008129 358.5,562 L358.5,475.013744 C358.5,474.193774 358.430447,473.375281 358.292088,472.567068 C356.940826,464.673766 349.446626,459.370394 341.553324,460.721656 L28.5533237,514.304428 Z"
                  stroke-linejoin="square"
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                />
              </g>
              <g
                id="Rectangle-Copy-9"
                transform="translate(187.500000, 649.000000) scale(-1, -1) translate(-187.500000, -649.000000) "
              >
                <path
                  className={(this.state.Aventuras ? 'genreBlue' : 'genreWhite')}
                  stroke="#2096AE"
                  stroke-width="1"
                  d="M28.6143391,644.91447 C21.6234756,646.080557 16.5,652.129421 16.5,659.21687 L16.5,691 C16.5,699.008129 22.9918711,705.5 31,705.5 L344,705.5 C352.008129,705.5 358.5,699.008129 358.5,691 L358.5,607.008015 C358.5,606.208708 358.433908,605.410769 358.302399,604.622354 C356.984835,596.723357 349.513336,591.388052 341.614339,592.705616 L28.6143391,644.91447 Z"
                  stroke-linejoin="square"
                  fill="#2096AE"
                  fill-rule="evenodd"
                />
              </g>
              <g id="Rectangle-Copy-10">
                <path
                  className={(this.state.Mitologicas ? 'genreBlue' : 'genreWhite')}
                  stroke="#60B3C4"
                  stroke-width="1"
                  d="M28.6346282,720.449201 C21.634444,721.606639 16.5,727.659743 16.5,734.754969 L16.5,766 C16.5,774.008129 22.9918711,780.5 31,780.5 L344,780.5 C352.008129,780.5 358.5,774.008129 358.5,766 L358.5,683.002324 C358.5,682.209884 358.435039,681.418778 358.305769,680.636952 C356.99941,672.736095 349.535486,667.390197 341.634628,668.696556 L28.6346282,720.449201 Z"
                  stroke-linejoin="square"
                  fill="#FFFFFF"
                  fill-rule="evenodd"
                />
              </g>
            </g>
          </g>
        </svg>
        <div className="terrorDiv" onClick={this.toggleChangeTerr}>
          <span className={"Terror "+(this.state.Terror ? 'whiteFont' : 'blackFont')}>Terror</span>
        </div>
        <div className="clasicDiv" onClick={this.toggleChangeClas}>
          <span className={"Clasicas "+(this.state.Clasicas ? 'whiteFont' : 'blackFont')}>Clásicas</span>
        </div>
        <div className="historDiv" onClick={this.toggleChangeHist}>
          <span className={"Historicas "+(this.state.Historicas ? 'whiteFont' : 'blackFont')}>Históricas</span>
        </div>
        <div className="aventDiv" onClick={this.toggleChangeAvent}>
          <span className={"Aventuras "+(this.state.Aventuras ? 'whiteFont' : 'blackFont')}>Aventuras</span>
        </div>
        <div className="mitoDiv" onClick={this.toggleChangeMito}>
          <span className={"Mitologia "+(this.state.Mitologicas ? 'whiteFont' : 'blackFont')}>Mitología</span>
        </div>
       
        <Link to="/avatar">
          <button
            onClick={this.submitForm.bind(this)}
            className="genreBtn"
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

export default genres;
