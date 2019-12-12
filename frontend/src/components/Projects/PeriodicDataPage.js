import React from 'react';
import MaterialTable from 'material-table';
import RecordsApi from "../../api/RecordsApi";

class PeriodicDataPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            evs : [],
            records : [],
            columns : [
                { title: 'Month', field: 'interval' },
                { title: 'Actual Cost', field: 'ac', type: 'numeric' },
                { title: 'Work Done', field: 'ev', type: 'numeric' },
            ]
        };
    }

    componentDidMount() {
        RecordsApi.getAllRecords()
            .then(({data}) => this.setState({records: data}))
            .catch(err => console.error(err));
    }

    render() {
        const recs = this.state.records.map(
            record => record.interval = "M" + record.interval);
        this.state.records.interval = recs;
        return (
            <React.Fragment>
                <MaterialTable
                    title="Periodic Data"
                    data={this.state.records}
                    columns={this.state.columns}
                    options={{
                        rowStyle: {
                            backgroundColor: '#EEE',
                        }
                    }}
                    editable={{
                        onRowAdd: newData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    /*this.setState(prevState => {
                                        const data = [...prevState.data];
                                        data.push(newData);
                                        return { ...prevState, data };
                                    });*/
                                }, 300);
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    /*if (oldData) {
                                        this.setState(prevState => {
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }*/
                                }, 300);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    /*this.setState(prevState => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });*/
                                }, 300);
                            }),
                    }}
                />
            </React.Fragment>
        )
    }
}

export default PeriodicDataPage;