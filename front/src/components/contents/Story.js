import React, { Component } from "react";

class story extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      title: props.title,
      text: props.text,
      op1: props.option1,
      op2: props.option2,
      type: props.type
    };
  }
  render() {
    return (
      <div>
        <h1>Title</h1>
        <p>text</p>
        <a href="/id1">option1</a>
        <a href="/id2">option2</a>
      </div>
    );
  }
}

export default story;
