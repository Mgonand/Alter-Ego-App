import React, { Component } from "react";
class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { enigma: false};
    
  }

  
  render() {
    return (
     <div className="enigma">
 <div className="back" onClick={() => this.props.next(1)}></div>
     <img className="enigmaImg" src={require('../../mapa.png')} alt="alt"/>
     </div>
    );
  }
}

export default Map;