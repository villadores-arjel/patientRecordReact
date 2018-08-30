import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {
  Route,
  HashRouter
} from "react-router-dom";
import PatientRecordForm from './PatientRecordForm';
import PatientProfile from './PatientProfile';
import CustomLink from './CustomLink';

class PatientRecordList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      patient: this.props.patient
    };
  }

  render() {
    const columns = [
        {
          Header: 'Record ID',
          accessor: 'id',
          minWidth: 150
        },
        {
          Header: 'Date',
          accessor: 'date',
          minWidth: 150
        },
        {
          Header: 'View Details',
          accessor: 'viewRecord',
          minWidth: 150
        }
    ];

    const defaultSorted = [
        {
          id: 'id'
        }
    ];

    let patientRecords = [
        {
          id: '5',
          date: 'August 30, 2016',
          viewRecord:  <CustomLink
                          data={5}
                          pathname={"/viewRecord"}
                          iconClass={'far fa-file-word fa-lg text-info'}
                        />
        },
        {
          id: '2',
          date: 'August 29, 2016',
          viewRecord:  <CustomLink
                          data={2}
                          pathname={"/viewRecord"}
                          iconClass={'far fa-file-word fa-lg text-info'}
                        />
        },
        {
          id: '1',
          date: 'August 28, 2016',
          viewRecord:  <CustomLink
                          data={1}
                          pathname={"/viewRecord"}
                          iconClass={'far fa-file-word fa-lg text-info'}
                        />
        }
    ];

    return (
      <div className="row">
        <div className="offset-lg-1 col-lg-10 p-2 text-center">
            <h2>Patient Record List</h2>
            <CustomLink
              pathname={"/patientRecords/addRecordForm"}
              iconClass={'fas fa-file-medical fa-lg'}
              text={'Add new Record'}
              className={'btn btn-info'}
            />

            <div className="mt-3 table-responsive-sm">
              <ReactTable
                  data={patientRecords}
                  columns={columns}
                  defaultPageSize={5}
                  minRows={5}
                  defaultSorted={ defaultSorted }
                  className="-striped -highlight"
                  filterable
                />
            </div>
        </div>
      </div>
    );
  }
}

class PatientRecords extends Component{

  constructor(props) {
    super(props);
    this.state = {
      patient: this.props.location.state.data
    };
  }

  render(){
    return(
      <HashRouter>
        <div>
          <PatientProfile patient={this.state.patient} />
          <hr />
          <Route exact path="/patientRecords/" render={ () => <PatientRecordList patient={this.state.patient} /> } />
          <Route path="/patientRecords/addRecordForm" render={ (props) => <PatientRecordForm {...props} /> } />
        </div>
      </HashRouter>
    );
  }
}

export default PatientRecords;
