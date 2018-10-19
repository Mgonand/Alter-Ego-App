import React, { Component } from "react";

class Enigma extends Component {
  constructor(props) {
    super(props);
    this.state = { enigma: false,input:""};
    
  }

  renderRedirect = () => {
    if (this.state.enigma) {
      this.props.next(4);
    }
  };
  timerEnd = () => {
    if(this.state.input === "17"){
    this.setState({enigma:true})}else{alert("No es el número correcto, sigue intentándolo.")}
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  
  render() {
    return (
     <div className="enigma">
     {this.renderRedirect()}
     <img className="enigmaImg" src={require('../../enigma.png')} alt="alt"/>
     <input className="enigmaInput" name="input" type="text" value={this.state.input} placeholder="Tu respuesta aquí" onChange={e => this.handleChange(e)}/>
     <button className="signBtn"><span className="signSpan" onClick={this.timerEnd}>Resolver</span></button>
     </div>
    );
  }
}

export default Enigma;