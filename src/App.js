import React, { Component } from 'react';
import { graphql, compose, ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import gql from 'graphql-tag';

import './App.css';
import LoginFormContainer from './components/container/LoginFormContainer';
import Header from './components/presentational/Header';
import Footer from './components/presentational/Footer';
import ActionButtons from './components/presentational/ActionButtons';

// const apolloClient = new ApolloClient({
//   uri: '/graphql' // need port
// });


class App extends Component {
  constructor() {
    super();
  }

  handleFormSubmit(ev) {
    // TODO: call submit API

    ev.preventDefault();
  }

  onClick() {
    return true
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <Header/>
            <LoginFormContainer handleSubmit={this.handleFormSubmit.bind(this)} loginMutation={this.props.loginMutation}/>
            <ActionButtons/>
            <Footer/>
          </div>
        </div>
    );
  }
}

const LoginMutation = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user
      token
    }
  }
`;

export default compose(
  graphql(LoginMutation, { name: 'loginMutation' })
)(App);
