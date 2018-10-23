import React, { Component } from "react";
class GoodEnd extends Component {
  constructor(props) {
    super(props);
    this.state = { timeout: false};
    
  }

  renderRedirect = () => {
    if (this.state.timeout) {
      this.props.next(6)
    }
  };
  timerEnd = () => {
    this.setState({timeout:true})
  };

 componentDidMount(){
    setTimeout(this.timerEnd, 5000)
  };
  render() {
    return (
      <div className="main">
        {this.renderRedirect()}
        <h2 className="saltar" onClick={() => this.props.next(6)}>Saltar</h2>
        <img className="enigmaImg" src={require('../../goodEnding.png')} alt="alt"/>
        </div>
    )
}
}
export default GoodEnd;
