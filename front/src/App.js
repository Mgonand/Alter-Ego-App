import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Router } from "react-router-dom";

// import ProjectList from './components/projects/ProjectList';
import Navbar from "./components/navbar/Navbar";
// import ProjectDetails from './components/projects/ProjectDetails';
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import Story from "./components/contents/Story";
import Home from "./components/contents/Home";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, game: { id: "id", c: "asd" } };
    this.service = new AuthService();
  }
  getChapter = chapId => {
    axios.get(`http://localhost:3010/api/games/${chapId}`).then(response => {
      this.updateState(response.data, "c");
    });
  };

  updateState = (id, name) => {
    const _game = { ...this.state.game };
    _game[name] = id;

    this.setState({ game: _game }, () => {});
  };
  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  logout = () => {
    this.service.logout().then(() => {
      this.setState({ loggedInUser: null });
    });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  render() {
    this.fetchUser();
    if (this.state.loggedInUser) {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            />
            <Switch>
              <Route
                exact
                path="/game"
                render={() => (
                  <Story
                    {...this.state.game.c}
                    findChapter={id => {
                      this.getChapter(id);
                    }}
                  />
                )}
              />
              <Route
                exact
                path="/home"
                render={() => (
                  <Contents
                    findGame={(id, cId) => {
                      this.updateState(id, "id");
                      this.getChapter(cId);
                    }}
                  />
                )}
              />
              <Route
                exact
                path="/"
                render={() => (
                  <Home/>
                )}
              />
              <Route exact path="/game" render={() => <Story />} />
            </Switch>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            />
            <Switch>
              <Route
                exact
                path="/signup"
                render={() => <Signup getUser={this.getTheUser} />}
              />
              <Route
                exact
                path="/login"
                render={() => <Login getUser={this.getTheUser} />}
              />
            </Switch>
          </header>
        </div>
      );
    }
  }
}

export default App;
