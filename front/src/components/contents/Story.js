import React, { Component } from "react";
import { Link } from "react-router-dom";
class story extends Component {
  
  pushChapter(){

  }
  render() {
    const { title, text, options } = this.props;
    if (Array.isArray(options))
      return (
        <div>
          <h1>{title}</h1>
          <p>{text}</p>
          {options.map(e => {
            return (
              <h3
                onClick={() => {
                  this.props.findChapter(e._id);
                  
                }}
              >
                <Link to="/game">{e.title}</Link>
              </h3>
            );
          })}
        </div>
      );
    return <div />;
  }
}

export default story;
