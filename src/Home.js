import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";

import Navbar from './Navbar';
import PatientList from './PatientList';
import PatientRecordList from './PatientRecordList';
import AddPatientForm from './AddPatientForm';

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
              <Route path="/addPatientForm" component={AddPatientForm} />
          </div>
        </HashRouter>
    );
  }
}

export default Home;
