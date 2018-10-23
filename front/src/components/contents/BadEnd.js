import React, { Component } from "react";
class BadEnd extends Component {
  constructor(props) {
    super(props);
    this.state = { timeout: false};
    
  }

  renderRedirect = () => {
    if (this.state.timeout) {
      this.props.next(8)
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
        <h2 className="saltar" onClick={() => this.props.next(8)}>Saltar</h2>
        <img className="enigmaImg" src={require('../../badEnding.png')} alt="alt"/>
        </div>
    )
}
}

export default BadEnd;
