import React, { Component } from 'react';

function LoginError(props) {
  return (
    <div className="col-12 alert alert-warning alert-dismissible fade show text-center" role="alert">
      <strong>Login Error!</strong>
    </div>
  );
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    if(username && password)
    {
      this.props.onSignIn(username, password);
    }
    else
    {
      this.setState({hasError: true});
    }
  }

  render() {
    return (
        <div className="row p-3">
          {(this.state.hasError) ? <LoginError /> : ""}
          <form className="offset-md-2 col-md-8 offset-lg-3 col-lg-6 text-center border border-light p-5 mt-5" onSubmit={this.handleSignIn}>
            <p className="h4 mb-4">Sign in</p>

            <div className="md-form">
              <input type="text" id="username" ref="username" className="form-control" />
              <label htmlFor="username">Username</label>
            </div>

            <div className="md-form">
              <input type="password" id="password" ref="password" className="form-control" />
              <label htmlFor="password">Password</label>
            </div>

            <div className="d-flex justify-content-around">
                <div>
                    <a href="">Forgot password?</a>
                </div>
            </div>
            <button className="btn btn-info mt-3" type="submit">Sign in</button>
          </form>
        </div>
    );
  }
}

export default Login;
