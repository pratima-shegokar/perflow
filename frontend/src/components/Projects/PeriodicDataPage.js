import React from 'react';
import MaterialTable from 'material-table';
import RecordsApi from "../../api/RecordsApi";

class PeriodicDataPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            records : [],
            columns : [
                { title: 'Id', field: 'recordId' },
                { title: 'Interval', field: 'interval' },
                { title: 'PV', field: 'pv' },
                { title: 'PCIF', field: 'pcif' },
                { title: 'EV', field: 'ev' },
                { title: 'AC', field: 'ac' },
                { title: 'CIF', field: 'cif' },
                { title: 'COF', field: 'cof' },
                { title: 'Project', field: 'project.projectName'}
            ]
        };
    }

    componentDidMount() {
        RecordsApi.getAllRecords()
            .then(({data}) => this.setState({records: data}))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <React.Fragment>
                <MaterialTable title="Periodic Data"
                               data={this.state.records}
                               columns={this.state.columns}
                               options={{
                                   rowStyle: {
                                       backgroundColor: '#EEE',
                                   }
                               }}
                               /*editable={{
                                   onRowAdd: newData =>
                                       new Promise(resolve => {
                                           setTimeout(() => {
                                               resolve();
                                               this.setState(prevState => {
                                                   const data = [...prevState.data];
                                                   data.push(newData);
                                                   return { ...prevState, data };
                                               });
                                           }, 600);
                                       }),
                                   onRowUpdate: (newData, oldData) =>
                                       new Promise(resolve => {
                                           setTimeout(() => {
                                               resolve();
                                               if (oldData) {
                                                   this.setState(prevState => {
                                                       const data = [...prevState.data];
                                                       data[data.indexOf(oldData)] = newData;
                                                       return { ...prevState, data };
                                                   });
                                               }
                                           }, 600);
                                       }),
                                   onRowDelete: oldData =>
                                       new Promise(resolve => {
                                           setTimeout(() => {
                                               resolve();
                                               this.setState(prevState => {
                                                   const data = [...prevState.data];
                                                   data.splice(data.indexOf(oldData), 1);
                                                   return { ...prevState, data };
                                               });
                                           }, 600);
                                       }),
                               }}*/
                />
            </React.Fragment>
        )
    }
}

export default PeriodicDataPage;