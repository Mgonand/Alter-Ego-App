import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { timeout: false};
    
  }

  renderRedirect = () => {
    if (this.state.timeout) {
      return <Redirect to="/home" />;
    }
  };
  timerEnd = () => {
    this.setState({timeout:true})
  };

 componentDidMount(){
    setTimeout(this.timerEnd, 6000)
  };
  
  render() {
    return (
     <div className=" main intro">
     {this.renderRedirect()}
     <div className="Oval">
<svg width="132px" height="132px" viewBox="0 0 132 132" >
    <defs>
        <radialGradient cx="50%" cy="0%" fx="50%" fy="0%" r="100%" id="radialGradient-1">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#000000" offset="100%"></stop>
        </radialGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.1312">
        <g id="Pantalla-7" transform="translate(-122.000000, -86.000000)" fill="url(#radialGradient-1)" fill-rule="nonzero">
            <circle id="Oval" cx="188" cy="152" r="66"></circle>
        </g>
    </g>
</svg></div>
<h1 className="introH1">¿Preparado para ser <br/>el dueño de tu destino?</h1>
<div className="cloudLeft">
<img src={require('../../nubes1.png')} alt="alt"/>
</div>
<div className="cloudRigth">
<img src={require('../../nubes2.png')} alt="alt"/>
</div>
        {/* <Link to="/home">
          <button className="signBtn">
            <span className="signSpan">Comenzar</span>
          </button>
        </Link> */}
      </div>
    );
  }
}

export default Intro;
