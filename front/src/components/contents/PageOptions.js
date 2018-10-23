import React, { Component } from "react";
class PageOptions extends Component {
  render() {
    return (
      <div className="main">
        <h2 className="Mapa" onClick={() => this.props.next(9)}>Mapa</h2>
        <img
            className="Shape"
            src={require("../../settings.png")}
            alt="alt"
          />
        <div className="cap2text">
          <p>
            —Señor, lo siento. Este número está reservado para emergencias. Por
            favor, absténgase de hacer llamadas de broma a este número en el
            futuro. Que tenga un buen día.
          </p>

          <p>
            Mientras acercaba su mano al botón de apagado, podía escuchar las
            súplicas de Gene volviéndose más frenéticas, ebullendo en gritos de
            ayuda en tanto su puerta frontal se hacía añicos.
          </p>

          <p>
            En ese momento, Laura deseó, más que nada, poder quedarse en línea
            solo por otro segundo más.
          </p>

          <p>Pero realmente tenía que llegar a casa pronto.</p>

          <p>
            Mi hermana ni siquiera reacciona cuando él entra a mi habitación.
            Sus pisadas son silenciosas, pero el aire se pone tan frío que puedo
            ver mi aliento. Alicia se estremece y se acurruca todavía más cerca
            de mí, envolviendo sus brazos diminutos alrededor de mi cintura.
            Espero que se quede dormida. Sé que es alto y delgado, pero eso es
            lo único que puedo ver.{" "}
          </p>

          <p>
            <span className="cap3Span">¿Abres la puerta del sótano?</span>
          </p>
        </div>
        <div className="options">
          <img
              className="desliza"
              src={require("../../desliza.png")}
              alt="alt"
            />
          <img
              className="ovalCircle"
              src={require("../../OvalCircle.png")}
              alt="alt"
            />
            <img
              className="oval"
              src={require("../../oval.png")}
              alt="alt"
            />
  
          <button onClick={() => this.props.next(7)} className="btnSi">
            <span >Sí</span>
          </button>
          <button onClick={() => this.props.next(5)} className="btnNo">
            <span >No</span>
          </button>
        </div>
      </div>
    );
  }
}

export default PageOptions;
