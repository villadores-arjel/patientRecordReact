import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Navbar from './Navbar';
import PatientList from './PatientList';
import PatientRecordList from './PatientRecordList';
import PatientProfileForm from './PatientProfileForm';
import PatientRecordForm from './PatientRecordForm';

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
              <Route path="/patientRecordList" render={ (props) => <PatientRecordList {...props} /> } />
              <Route path="/addRecordForm" render={ (props) => <PatientRecordForm {...props} /> } />
          </div>
        </HashRouter>
    );
  }
}

export default Home;
