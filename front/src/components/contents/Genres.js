import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class genres extends Component {
  state = {
    isMJ: false,
    isJB: false,
    isDrake: false
  };

  toggleChangeMJ = () => {
    this.setState(prevState => ({
      isMJ: !prevState.isMJ,
    }));
  }

  toggleChangeJB = () => {
    this.setState(prevState => ({
      isJB: !prevState.isJB,
    }));
  }

  toggleChangeDrake = () => {
    this.setState(prevState => ({
      isDrake: !prevState.isDrake,
    }));
  }

  submitForm = (e) => {
    let arr = [];
    for (var key in this.state) {
      if(this.state[key] === true) {
        arr.push(key);
      }
    }
    let data = {
      check: arr.toString() 
    };
    axios.put(`http://localhost:3010/api/games/genres/${this.props.id}`, data)
          .then(res => console.log(res.data));
  }

  render() {
    return (
      <div className="container">
        <h2>Save the multiple checkbox values in React js</h2>
        <hr />
        <form >
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isMJ}
                onChange={this.toggleChangeMJ}
                className="form-check-input"
              />
              MJ
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isJB}
                onChange={this.toggleChangeJB}
                className="form-check-input"
              />
              JB
            </label>
          </div>
          <div className="form-check">
            <label className="form-check-label">
              <input type="checkbox"
                checked={this.state.isDrake}
                onChange={this.toggleChangeDrake}
                className="form-check-input"
              />
              Drake
            </label>
          </div>
          <div className="form-group">
          <Link to="/avatar">
            <button className="btn btn-primary" onClick={this.submitForm.bind(this)}>
              Next
            </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default genres;
