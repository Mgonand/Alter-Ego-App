import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class questions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: props.first,
      second: props.second,
      third: props.third,
      fourth: props.fourth
    };
  }

  handleSubmit = event => {
    event.preventDefault();
  };



  submitForm() {
    console.log("aquí")
    axios
      .put(
        `http://localhost:3010/api/games/questions/${this.props.id}`,
        this.state
      )
      .then(res => {
        console.log(res);
      });
  }
  render() {
    let { first, second, third, fourth } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="first">Pregunta 1: </label>
            <input
              type="text"
              id="first"
              name="first"
              value={first}
              onChange={e => this.setState({ first: e.currentTarget.value })}
            />
            <label for="second">Pregunta 2: </label>
            <input
              type="text"
              id="second"
              name="second"
              value={second}
              onChange={e => this.setState({ second: e.currentTarget.value })}
            />
            <label for="third">Pregunta 3: </label>
            <input
              type="text"
              id="third"
              name="third"
              value={third}
              onChange={e => this.setState({ third: e.currentTarget.value })}
            />
            <label for="fourth">Pregunta 4: </label>
            <input
              type="text"
              id="fourth"
              name="fourth"
              value={fourth}
              onChange={e => this.setState({ fourth: e.currentTarget.value })}
            />
          </div>
          <div>
          <Link to="/home"><button onClick={this.submitForm.bind(this)}>
              NEXT
            </button></Link>
          </div>
        </form>
        
      </div>
    );
  }
}

export default questions;
