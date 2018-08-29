import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { NavLink } from "react-router-dom";

function EditProfileLink(props) {
  return (
    <NavLink to={{
      pathname:"/editProfileForm",
      state: {
        patient: props.patient
      }
    }}>
      <i className="fas fa-user-edit fa-lg text-info"></i>
    </NavLink>
  );
}

function ViewRecordsLink(props) {
  return (
    <NavLink to={{
      pathname:"/patientRecordList",
      state: {
        patient: props.patient
      }
    }}>
      <i className="fas fa-file-medical fa-lg text-info"></i>
    </NavLink>
  );
}

class PatientList extends Component {

  render() {
      const { SearchBar } = Search;
      const columns = [
          {
            dataField: 'id',
            text: 'Patient ID '
          },
          {
            dataField: 'lastName',
            text: 'Last Name',
            sort: true
          },
          {
            dataField: 'firstName',
            text: 'First Name',
            sort: true
          },
          {
            dataField: 'middleName',
            text: 'Middle Name'
          },
          {
            dataField: 'suffixName',
            text: 'Suffix Name'
          },
          {
            dataField: 'birthDate',
            text: 'Birth Date'
          },
          {
            dataField: 'editProfile',
            text: 'Edit Profile'
          },
          {
            dataField: 'viewRecords',
            text: 'View Records'
          }
      ];

      const defaultSorted = [
          {
            dataField: 'lastName',
            order: 'asc'
          }
      ];

      let patients = [
          {
            id: 2,
            lastName: "Villa",
            firstName: "Jel",
            middleName: "Villa",
            suffixName: "",
            birthDate: "August 29, 2015",
            editProfile: <EditProfileLink patient={2} />,
            viewRecords:  <ViewRecordsLink patient={2} />
          },
          {
            id: 1,
            lastName: "Villado",
            firstName: "ArJel",
            middleName: "Villa",
            suffixName: "",
            birthDate: "August 29, 2015",
            editProfile: <EditProfileLink patient={1} />,
            viewRecords: <ViewRecordsLink patient={1} />
          }
      ];

    return (
      <div className="row">
        <div className="offset-md-2 col-md-8 p-5 text-center">
            <h2>Patient List</h2>
            <div className="table-responsive-sm">
              <ToolkitProvider
                bootstrap4
                keyField="id"
                data={ patients }
                columns={ columns }
                defaultSorted={ defaultSorted }
                pagination={ paginationFactory() }
                search
              >
              {
                props => (
                  <div>
                    <SearchBar { ...props.searchProps } />
                    <hr />
                    <BootstrapTable { ...props.baseProps } />
                  </div>
                )
              }
              </ToolkitProvider>
            </div>
        </div>
      </div>
    );
  }
}

export default PatientList;
