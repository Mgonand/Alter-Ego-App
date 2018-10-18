import React, { Component } from "react";
import "./App.scss";
import { Switch, Route, Router } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import AuthService from "./components/auth/AuthService";
import Contents from "./components/contents/Contents";
import Story from "./components/contents/Story";
import Home from "./components/contents/Home";
import Setup from "./components/contents/Setup";
import Genres from "./components/contents/Genres";
import Avatar from "./components/contents/Avatar";
import Questions from "./components/contents/Questions";
import axios from "axios";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null, game: { id: "id", c: "asd" } };
    this.service = new AuthService();
  }
  getChapter = chapId => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/games/${chapId}`, {withCredentials: true}).then(response => {
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
            {/* <Navbar
              userInSession={this.state.loggedInUser}
              logout={this.logout}
            /> */}
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
              <Route exact path="/setup" render={() => <Setup />} />
              <Route exact path="/" render={() => (
                  <Contents
                    findGame={(id, cId) => {
                      this.updateState(id, "id");
                      this.getChapter(cId);
                    }}
                  />
                )} />
              <Route exact path="/game" render={() => <Story />} />
              <Route
                exact
                path="/genres"
                render={() => <Genres id={this.state.loggedInUser._id} />}
              />
              <Route
                exact
                path="/avatar"
                render={() => <Avatar id={this.state.loggedInUser._id} />}
              />
              <Route
                exact
                path="/questions"
                render={() => <Questions id={this.state.loggedInUser._id} />}
              />
              <Route exact path="/login" render={() => <Home />} />
            </Switch>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Switch>
            <Route
              exact
              path="/login"
              render={() => <Login getUser={this.getTheUser} />}
            />
            <Route
              exact
              path="/signup"
              render={() => <Signup getUser={this.getTheUser} />}
            />
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
