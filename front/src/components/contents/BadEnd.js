import React, { Component } from "react";
import { Link } from "react-router-dom";
class BadEnd extends Component {
  render() {
    return (
      <div>
        <img className="enigmaImg" src={require('../../badEnding.png')} alt="alt"/>
        </div>
    )
}
}

export default BadEnd;
