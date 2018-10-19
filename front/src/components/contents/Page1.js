import React, { Component } from "react";
import { Link } from "react-router-dom";
class Page1 extends Component {
  render() {
    return (
      <div>
        <h1 className="cap1H1">El día de las Bestias</h1>
        <div>
          <img
            className="imageCap"
            src={require("../../capitulo1.png")}
            alt="alt"
          />
        </div>
        <div className="cap1text">
          <p>
            —Hola, ¿cuál es su emergencia? —Laura contestó la llamada que llegó
            a la estación.
          </p>

          <p>
            Lo había hecho por tanto tiempo que se había convertido en un
            reflejo para ella siempre que contestaba. Pero esa vez se le hizo
            difícil permanecer apática una vez que reconoció el número.
          </p>

          <p>
            —Hola, hay fieras fuera de mi casa. ¡Están tratando de tirar la
            puerta! Mi nombre es…
          </p>

          <p>
            El miedo en la voz del hombre era palpable, y más auténtico que
            incluso sus llamadas más convincentes. Antes de que siquiera lo
            dijera, Laura sabía que su nombre era:
          </p>

          <p>—…Gene Brewster.</p>

          <p>
            Las primeras veces que llamó, fue convincente. También imaginativo.
            Hubo una llamada donde logró enviar un equipo de policia a la casa
            de alguien. Otra de sus llamadas de broma fastidió tanto a la chica
            nueva que renunció al día siguiente.
          </p>

          <p />
        </div>
        <img
          onClick={() => this.props.next(2)}
          className="imageArrow"
          src={require("../../rigthArrow.png")}
          alt="alt"
        />
      </div>
    );
  }
}

export default Page1;
