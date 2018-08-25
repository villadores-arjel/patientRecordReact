import React, { Component } from 'react';
import {
  NavLink,
} from "react-router-dom";

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleSignOut(e) {
    e.preventDefault();
    this.props.onSignOut();
  }

  render() {
    return (
      <nav className="row navbar navbar-expand-lg navbar-dark bg-info">
          <a className="navbar-brand" href="javascript:;">Welcome {this.props.user.username}</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Patient List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/addPatientForm" className="nav-link">Add Patient</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:;" onClick={this.handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}

export default Navbar;
