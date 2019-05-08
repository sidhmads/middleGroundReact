import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './App.css';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import { authenticationAction } from './actions/authenticationAction';

class App extends Component {

  login = (event) => {
    this.props.authenticationActions('LOGIN', {client: this.props.authenticationReducer.client});
  }

  logout = (event) => {
    this.props.authenticationActions('LOGOUT', {});
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
        <NavBar />
        <HomePage />
        <Button disabled={this.props.authenticationReducer.token.length > 0} onClick={this.login}>Login</Button>
        <Button disabled={this.props.authenticationReducer.token.length === 0} onClick={this.logout}>Logout</Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  authenticationActions: (type, props) => dispatch(authenticationAction(type, props))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
