// auth/Signup.js
import React, { Component } from 'react';
import AuthService from './AuthService'
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' ,redirect: false};
    this.service = new AuthService();
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/setup' />
    }
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service.signup(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            redirect: true,
        });
        this.props.getUser(response.user)
        this.renderRedirect()
        
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      

  render() {
    
    return(
      <div className="main">
        {this.renderRedirect()}
   <h1 className="AlterEgo blue-title">AlterEgo</h1>
        <h3>Welcome!, create your account next:</h3>

        <form onSubmit={this.handleFormSubmit}>
          <fieldset>
            <label>Username:</label>
            <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          </fieldset>
          
          <fieldset>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          </fieldset>
          
          <input type="submit" value="Sign up" />
        </form>

        <p>Ya tienes cuenta?</p>
        <Link to='/login'><button>Login</button></Link>
      </div>
    )
  }
}

export default Signup;