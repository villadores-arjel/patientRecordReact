import React, { Component } from 'react';

class AddPatientForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: this.setPatientDetails()
    };
  }

  setPatientDetails(){
    if(typeof(this.props.location.state)!=="undefined")
    {
      return this.props.location.state.data;
    }
    return null;
  }

  render() {
    return (
      <div className="row">
        <div className="offset-lg-2 col-lg-8 p-3 text-center">
            <h2>Patient Profile</h2>
            <hr />
            <form className="text-left">
                <div className="form-row">
                    <div className="col-md-3">
                        <div className="md-form form-group">
                            <input type="text" className="form-control" id="lastname" defaultValue={this.state.patient} />
                            <label htmlFor="lastname">Last Name</label>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form form-group">
                            <input type="text" className="form-control" id="firstname" />
                            <label htmlFor="firstname">First Name</label>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form form-group">
                            <input type="text" className="form-control" id="middlename" />
                            <label htmlFor="middlename">Middle Name</label>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form form-group">
                            <input type="text" className="form-control" id="suffixname" />
                            <label htmlFor="suffixname">Suffix Name</label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form form-group">
                            <input type="text" className="form-control" id="address" />
                            <label htmlFor="address">Address</label>
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="col-md-3">
                        <label>Date of Birth</label>
                        <div className="form-group">
                            <input type="date" className="form-control" id="dob" />
                        </div>
                    </div>

                    <div className="col-md-3">
                      <label>Gender</label>
                      <select className="custom-select">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                      </select>
                    </div>

                    <div className="col-md-3 mt-2 mt-md-0">
                      <label>Civil Status</label>
                      <select className="custom-select">
                          <option value="single">Single</option>
                          <option value="married">Maried</option>
                      </select>
                    </div>

                    <div className="col-md-3">
                        <div className="md-form form-group">
                            <input type="text" className="form-control" id="nationality" />
                            <label htmlFor="nationality">Nationality</label>
                        </div>
                    </div>
              </div>

                <button type="submit" className="btn btn-info btn-md btn-block mt-2">Submit</button>
            </form>
        </div>
      </div>
    );
  }
}

export default AddPatientForm;
