import React, { Component } from "react";

class Enigma extends Component {
  constructor(props) {
    super(props);
    this.state = { enigma: false, input: "", modal: false };
  }

  next = () => {
    this.props.next(4);
  };

  activeModal = () => {
    this.setState({ modal: true });
    setTimeout(this.next, 3000);
  };

  timerEnd = () => {
    if (this.state.input === "17") {
      this.activeModal();
    } else {
      alert("No es el número correcto, sigue intentándolo.");
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="main enigma">
        <img
          className="enigmaImg"
          src={require("../../enigma.png")}
          alt="alt"
        />
        <input
          className="enigmaInput"
          name="input"
          type="text"
          value={this.state.input}
          placeholder="Tu respuesta aquí"
          onChange={e => this.handleChange(e)}
        />
        <button className="signBtn">
          <span className="signSpan" onClick={this.timerEnd}>
            Resolver
          </span>
        </button>
        <div className={"mainModal " + (this.state.modal ? "show" : "hide")}>
          <div className="insideModal enig">
            <div className="textModal enigtext">
              <p>¡Enigma resuelto! Ahora puedes continuar</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Enigma;
