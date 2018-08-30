import React, { Component } from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import CustomLink from './CustomLink';

class PatientList extends Component {

  render() {
      const columns = [
          {
            accessor: 'id',
            Header: 'Patient ID ',
            minWidth: 150
          },
          {
            accessor: 'lastName',
            Header: 'Last Name',
            minWidth: 150
          },
          {
            accessor: 'firstName',
            Header: 'First Name',
            minWidth: 150
          },
          {
            accessor: 'middleName',
            Header: 'Middle Name',
            minWidth: 150
          },
          {
            accessor: 'suffixName',
            Header: 'Suffix Name',
            minWidth: 150
          },
          {
            accessor: 'birthDate',
            Header: 'Birth Date',
            minWidth: 150
          },
          {
            accessor: 'editProfile',
            Header: 'Edit Profile',
            minWidth: 150
          },
          {
            accessor: 'viewRecords',
            Header: 'View Records',
            minWidth: 150
          }
      ];

      const defaultSorted = [
          {
            id: 'lastName'
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
            editProfile: <CustomLink
                            data={2}
                            pathname={"/editProfileForm"}
                            iconClass={'fas fa-user-edit fa-lg text-info'}
                          />,
            viewRecords:  <CustomLink
                            data={2}
                            pathname={"/patientRecords"}
                            iconClass={'fas fa-folder-open fa-lg text-info'}
                          />
          },
          {
            id: 1,
            lastName: "Villado",
            firstName: "ArJel",
            middleName: "Villa",
            suffixName: "",
            birthDate: "August 29, 2015",
            editProfile: <CustomLink
                            data={1}
                            pathname={"/editProfileForm"}
                            iconClass={'fas fa-user-edit fa-lg text-info'}
                          />,
            viewRecords:  <CustomLink
                            data={1}
                            pathname={"/patientRecords"}
                            iconClass={'fas fa-folder-open fa-lg text-info'}
                          />
          }
      ];

    return (
      <div className="row">
        <div className="offset-lg-1 col-lg-10 p-2 text-center">
            <h2>Patient List</h2>
            <div className="mt-4 table-responsive-sm">
            <ReactTable
                data={patients}
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

export default PatientList;
