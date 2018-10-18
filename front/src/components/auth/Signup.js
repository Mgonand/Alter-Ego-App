// auth/Signup.js
import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "", redirect: false };
    this.service = new AuthService();
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/setup" />;
    }
  };
  handleFormSubmit = event => {
    console.log("hola");
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(response => {
        this.setState({
          username: "",
          password: "",
          redirect: true
        });
        this.props.getUser(response.user);
        this.renderRedirect();
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="main">
        {this.renderRedirect()}
        <h1 className="AlterEgo blue-title">AlterEgo</h1>
        <h3 className="registrate">Regístrate</h3>
        <svg
          className="signSvg"
          width="343px"
          height="457px"
          viewBox="0 0 343 457"
        >
          <g
            id="Page-1"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Pantalla-2"
              transform="translate(-16.000000, -111.000000)"
              fill="#333333"
              fill-rule="nonzero"
            >
              <path
                d="M47.2480099,111.781013 L338.24801,171.752743 C350.33067,174.242839 359,184.881007 359,197.217589 L359,541.945139 C359,556.304543 347.359403,567.945139 333,567.945139 L42,567.945139 C27.6405965,567.945139 16,556.304543 16,541.945139 L16,293.850409 L16,137.245859 C16,122.886456 27.6405965,111.245859 42,111.245859 C43.7629559,111.245859 45.5213407,111.425166 47.2480099,111.781013 Z"
                id="Rectangle"
              />
            </g>
          </g>
        </svg>
        <form className="signForm">
          <fieldset>
            <label className="signLabel">Usuario</label>
            <input
              className="signInput"
              type="text"
              name="username"
              value={this.state.username}
              onChange={e => this.handleChange(e)}
            />
            <hr className="signHr"/>
          </fieldset>

          <fieldset>
            <label className="signLabel">Contraseña</label>
            <input
              className="signInput"
              type="password"
              name="password"
              value={this.state.password}
              onChange={e => this.handleChange(e)}
            />
            <hr className="signHr"/>
          </fieldset>

          <fieldset>
            <label className="signLabel">Email</label>
            <input className="signInput" type="email" name="email" />
            <hr className="signHr"/>
          </fieldset>
          <fieldset>
            <label className="signLabel">Conectar con:</label>
            <input className="signInput" type="email" name="email" />
            <hr className="signHr"/>
          </fieldset>
        </form>
        <button
          onClick={this.handleFormSubmit.bind(this)}
          className="signBtn"
          type="submit"
          value="Sign up"
        >
          <span className="signSpan">Empezar</span>
        </button>
      </div>
    );
  }
}

export default Signup;
