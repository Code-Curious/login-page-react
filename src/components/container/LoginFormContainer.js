import React, { Component } from 'react';
import LoginForm from '../presentational/LoginForm.js';
import './LoginForm.css';


class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      hasError: false
    }
  }
  submit(){
    console.log("submit");
    this.setState({
      user: this.refs.email.value,
      password: this.refs.password.value
    }, async function(){
      // TODO: call Apollo client
      // this.props.handleSubmit({this.state.email, this.state.password})
      const { email, password } = this.state;
      await this.props.loginMutation({
        variables: { email, password }
      });
      // TODO: save token
    });

  }

  render() {
    return (
      <form className="login-form" onSubmit={this.props.handleSubmit}>
        <input type="text" placeholder="Email" ref="email"/>
        <input type="password" placeholder="Password" ref="password"/>
        <a href="" className="forgot-pwd">Forgot your password ?</a>
        <button className="btn btn-submit">Sign In</button>
        <hr/>
      </form>

    );
  }
}

export default LoginFormContainer;


