import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Contents extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    };


  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_API_URL}/api/games`).then(res => {
      const list = res.data;
      this.setState({ list });
    });
  }

  render() {
    return (
      <div>
        <h1>hola</h1>
        {this.state.list.map(list => {
          return (
            <div>
              <h1 onClick={() => {this.props.findGame(list._id, list.chapters[0])}}>
                <Link to="/game">{list.title} </Link>
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Contents;
