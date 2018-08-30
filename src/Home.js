import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Navbar from './Navbar';
import PatientList from './PatientList';
import PatientProfileForm from './PatientProfileForm';
import PatientRecords from './PatientRecords';

class Home extends Component {

  render() {
    return (
        <HashRouter>
          <div>
              <Navbar
                user={this.props.user}
                onSignOut={this.props.onSignOut}
              />
              <Route exact path="/" component={PatientList} />
              <Route path="/addPatientForm" component={PatientProfileForm} />
              <Route path="/editProfileForm" render={ (props) => <PatientProfileForm {...props} /> } />
              <Route path="/patientRecords" render={ (props) => <PatientRecords {...props} /> } />
          </div>
        </HashRouter>
    );
  }
}

export default Home;
