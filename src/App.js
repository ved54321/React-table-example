import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ReactTable from "react-table";
import "react-table/react-table.css";
class App extends Component {
  constructor () {
            super();

            this.state = {
                tableData: [{
                    resourceID: '',
                    resourceType: '',
                    tenantName: '',
                    dealerID: '',
                    status: '',
                    logFilePath: '',
                    supportPerson: '',
                    lastUpdatedTime: '',
                }],
            };
        }

    componentDidMount () {
            axios.get('http://private-9ff5e-stackoverflow.apiary-mock.com/questions', {
              responseType: 'json'
            }).then(response => {
                this.setState({ tableData: response.data });
            });
        }
  render() {
     const { tableData } = this.state;


     const columns = [{
                            Header: 'Details',
                                  columns: [
                                      {
                                          Header: 'Tenant Name',
                                          accessor: 'tenantName',
                                      },
                                      {
                                          Header: 'Support Engineer',
                                          id: 'supportEngineer',
                                          accessor: d => d.supportPerson,
                                      },
                                  ],
                              },
                              {
                                  Header: 'Info',
                                  columns: [
                                      {
                                          Header: 'Dealer ID',
                                          accessor: 'dealerID',
                                      },
                                      {
                                          Header: 'Status',
                                          accessor: 'status',
                                      },
                                  ],
                              },
                              {
                                  Header: 'Logs',
                                  columns: [
                                      {
                                          Header: 'File Path',
                                          accessor: 'logFilePath',
                                      },
                                  ],
                              }]

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
       
        <p className="App-intro">
         Welome to React
        </p>

      <ReactTable
        data={tableData}
        columns={columns}
        defaultPageSize={10}
              className="-striped -highlight"
      />

      </div>
    );
  }
}

export default App;
