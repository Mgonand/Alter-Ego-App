import React, { Component } from "react";
import { Link } from "react-router-dom";
class GoodEndText extends Component {
  state = {
    modal: false
  };

  toggleChangeClas = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  timerEnd = () => {
    this.setState({modal:true})
  };

 componentDidMount(){
    setTimeout(this.timerEnd, 5000)
  };


  render() {
    return (
      <div>
        <h2 className="Mapa" onClick={() => this.props.next(9)}>
          Mapa
        </h2>
        <img className="Shape" src={require("../../settings.png")} alt="alt" />
        <div className="badText goodText">
          <p>
            Mi habitación está tan oscura que todos sus demás rasgos son
            enmascarados por las sombras. Mi respiración se acelera.
            <br />
            El ruido que emerge de su garganta es suave, pero acarrea una
            emoción atenuada de desesperación y entretenimiento.
          </p>

          <p>
            Y eso es todo lo que importa.
            <br />
          </p>
        </div>
        <img
          className="fishBad"
          src={require("../../birdGood.png")}
          alt="alt"
        />
        <Link to="/home"><h1 className="fin finCap">FIN CAPÍTULO 1</h1></Link>
        <div className={"mainModal "+(this.state.modal ? 'show' : 'hide')}>
          <div className="insideModal">
          <p className="closeX" onClick={this.toggleChangeClas}>x</p>
            <div className="textModal">
              <p>
                ¿Te ha gustado?,<br/> pues estás a un solo click de poder<br/>  seguir
                disfrutando de esta historia <br/> completa.
              </p>
            </div>
            <button className="goodModalBtn">Comprar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default GoodEndText;
