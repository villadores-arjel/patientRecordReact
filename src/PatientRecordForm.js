import React, { Component } from 'react';
import CustomLink from './CustomLink';

class PatientRecordForm extends Component {

  render(){
    return(
      <div className="row">
        <div className="offset-lg-2 col-lg-8 p-3 text-center">
          <div className="clearfix">
            <CustomLink
              pathname={"/patientRecords/"}
              iconClass={'fas fa-arrow-circle-left fa-lg'}
              text={'Back'}
              className={'btn btn-info float-left'}
            />
          </div>

          <form className="mt-4 text-left">
              <div className="form-row">
                  <div className="col-md-3">
                      <label>Date</label>
                      <div className="form-group">
                          <input type="date" className="form-control" id="date" />
                      </div>
                  </div>
              </div>

              <div className="table-responsive-sm">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Examination</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>X-Ray</th>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                        </tr>
                    </tbody>
                </table>
              </div>

              <button type="submit" className="btn btn-info btn-md btn-block mt-2">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PatientRecordForm;
