import React, { Component } from "react";
import { Link } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import PageOptions from "./PageOptions";
import GoodEnd from "./GoodEnd";
import GoodEndText from "./GoodEndText";
import BadEnd from "./BadEnd";
import BadEndText from "./BadEndText";
import Enigma from "./Enigma";
class story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      bad: false,
      good: false
    };
  }
  nextPage=(newPage)=>{
    this.setState({page:newPage})
  }



  render() {
    if (this.state.page === 1) {
      return <Page1 next={this.nextPage}/>;
    } else if (this.state.page === 2) {
      return <Page2 next={this.nextPage}/>;
    }else if (this.state.page === 3) {
      return <Enigma next={this.nextPage} />;
    } else if (this.state.page === 4) {
      return <PageOptions next={this.nextPage}/>;
    } else if (this.state.page === 5) {
      return <GoodEnd next={this.nextPage}/>;
    } else if (this.state.page === 6) {
      return <GoodEndText next={this.nextPage}/>;
    } else if (this.state.page === 7) {
      return <BadEnd next={this.nextPage}/>;
    } else if (this.state.page === 8) {
      return <BadEndText next={this.nextPage}/>;
    }
  }
}

export default story;
