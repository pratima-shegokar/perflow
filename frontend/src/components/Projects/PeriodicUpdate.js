import React from "react";
import MaterialTable from "material-table";
import RecordsApi from "../../api/RecordsApi";

class PeriodicUpdate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      evs: [],
      records: [],
      columns: [
        { title: "Month", field: "monthInterval" },
        { title: "Planned Value", field: "formattedPv", type: "numeric" },
        { title: "Earned Value", field: "ev", type: "numeric" },
        { title: "Actual Cost", field: "ac", type: "numeric" }
      ]
    };
  }

  componentDidMount() {
    RecordsApi.getByProjectId(this.props.location.state.project.projectId)
      .then(({ data }) => this.setState({ records: data }))
      .catch(err => console.error(err));
  }

  render() {
    let decimalFormatter = new Intl.NumberFormat("en-En", {
      style: "decimal",
      minimumSignificantDigits: 3,
      maximumSignificantDigits: 3,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    const recs = this.state.records.map(record => {
      record.monthInterval = "Month-" + record.interval;
      record.formattedPv = decimalFormatter.format(record.pv);
      return record;
    });

    return (
      <React.Fragment>
        <div align="center">
          <MaterialTable
            title="Periodic Data "
            data={recs}
            columns={this.state.columns}
            options={{
              rowStyle: {
                backgroundColor: "#EEE"
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
              onRowUpdate: newData =>
                new Promise(resolve => {
                  newData.updated = true;
                  RecordsApi.updateRecord(newData);
                  const records = this.state.records.map(record => {
                    if (record.recordId == newData.recordId) {
                      return newData;
                    } else {
                      return record;
                    }
                  });
                  this.setState({ records }, () => resolve());
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
                })
            }}
            style={{
              width: "60%"
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default PeriodicUpdate;
