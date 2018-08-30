import React, { Component } from 'react';

class PatientProfile extends Component{

  constructor(props) {
    super(props);
    this.state = {
      patient: this.props.patient
    };
  }

  render(){
    return(
      <div className="row">
        <div className="offset-md-2 col-md-8 p-5 text-center">
            <h3>{this.state.patient}</h3>
        </div>
      </div>
    );
  }

}

export default PatientProfile;
