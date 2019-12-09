import React from 'react';
import MaterialTable from 'material-table';
import RecordsApi from "../../api/RecordsApi";

class PeriodicDataPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            records : []
        };
    }

    componentDidMount() {
        RecordsApi.getAllRecords()
            .then(({data}) => this.setState({records: data}))
            .catch(err => console.error(err));
    }

    render() {
        console.log(this.state.records);
        return (
            //ProjectForm should be the page where you can view periodic data and you can update the data.
            <React.Fragment>
                <MaterialTable title="Periodic Data"
                               data={this.state.records}
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
                <div className="text-center mt-5">
                    <p className="text-muted"/>
                </div>
            </React.Fragment>
        )
    }
}

export default PeriodicDataPage;