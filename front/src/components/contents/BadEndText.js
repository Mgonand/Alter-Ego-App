import React, { Component } from "react";
import { Link } from "react-router-dom";
class BadEndText extends Component {
  state = {
    modal: false
  };

  toggleChangeClas = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  timerEnd = () => {
    this.setState({ modal: true });
  };

  componentDidMount() {
    setTimeout(this.timerEnd, 5000);
  }

  render() {
    return (
      <div>
        <h2 className="Mapa" onClick={() => this.props.next(9)}>
          Mapa
        </h2>
        <img className="Shape" src={require("../../settings.png")} alt="alt" />
        <div className="badText">
          <p>
            Mi habitación está tan oscura que todos sus demás rasgos son
            enmascarados por las sombras. Mi respiración se acelera. Está parado
            a mi lado de la cama.
          </p>

          <p>
            Me mira fijamente y, mientras lo hace, los agujeros en donde sus
            ojos deberían estar comienzan a brillar con un blanco inquietante y
            vacante. Continúa observándome, sin parpadear y sin moverse.
          </p>

          <p>Definitivamente no ha sido una buena elección.</p>
        </div>
        <img className="fishBad" src={require("../../fishBad.png")} alt="alt" />
        <Link to="/home"><h1 className="fin">FIN</h1></Link>
        <div className={"mainModal " + (this.state.modal ? "show" : "hide")}>
          <div className="insideModal">
            <p className="closeX" onClick={this.toggleChangeClas}>
              x
            </p>
            <div className="textModal2">
              <p>
                Este hilo de la historia acaba aquí. Puedes volver a tomar las
                decisiones que dejaste atrás, reflejadas en el mapa, siempre que
                llegues a un final.
              </p>
            </div>
            <button className="goodModalBtn">Comprar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default BadEndText;
