import React, { Component } from "react";
class Page2 extends Component {
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
            Y cada vez que llamaba, se salía con la suya en todo. La voz
            incesante del hombre había repiqueteado en su cabeza desde aquella
            llamada. Laura conservó una fotografía recortada del periódico local
            y la pegó en la parte superior de su monitor.
          </p>

          <p>
            El que Gene usara un nuevo teléfono desechable con cada llamada
            significaba que la policía no estaba interesada en desperdiciar
            esfuerzos rastreándolo. Comenzó a registrar los números telefónicos
            de cada teléfono desechable con el que llamaba.
          </p>
          <img
            className="imageTiger"
            src={require("../../caraTigre.png")}
            alt="alt"
          />
          <p>
            Hace un año, el Estado se vio obligado a cerrar una de sus
            instituciones psiquiátricas. Laura escuchó historias sobre pacientes
            antiguos que causaban problemas en los proyectos de vivienda a unas
            ciudades de distancia.
            <br />
            Laura podía escuchar el golpeteo ruidoso en el trasfondo, amenizando
            por las súplicas de auxilio tartamudeantes de Gene.
          </p>

          <p>
            <span className="cap2Span">¿Qué número se esconde detrás?</span>
          </p>
        </div>

        <button onClick={() => this.props.next(3)} className="cap2Btn">
          <span className="signSpan">Enigma</span>
        </button>
      </div>
    );
  }
}
export default Page2;
