import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    });
  }

  signOut() {
    this.setState({user: null});
  }

  render() {
    return (
      <div className="container-fluid">
          {
           (this.state.user) ?
            <Home
              user={this.state.user}
              onSignOut={this.signOut}
            /> :
            <Login
              onSignIn={this.signIn}
            />
          }
      </div>
    );
  }
}

export default App;
