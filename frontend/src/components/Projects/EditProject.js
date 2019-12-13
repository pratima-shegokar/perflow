import React from "react";
import ProjectsApi from "./../../api/ProjectsApi";
import { Link } from "react-router-dom";

class EditProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {},
      prevProject: {}
    };
  }

  componentDidMount() {
    this.setState({
      project: this.props.location.state.project,
      prevProject: Object.assign({}, this.props.location.state.project)
    });
  }

  async updateProject(projectData) {
    try {
      const response = await ProjectsApi.updateProject(projectData);
      const project = response.data;

      this.setState({
        project: project,
        prevProject: this.props.location.state.project
      });

      console.log(this.state.prevProject, this.state.project);
      //go to My Perojects page
      //window.location = "/ProjPanel";
    } catch (e) {
      console.error(e);
    }
  }
  render() {
    let { project, prevProject } = this.state;
    console.log(prevProject, project);
    return (
      <div className="card">
        <div className="card-body">
          <h3 style={{ color: "black" }}>Project details</h3>
          <br></br>
          <div>
            <div class="container-fluid">
              <div className="form-group col-md-8">
                <label>Project Unique Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.projectUniqueNumber}
                  onChange={e => {
                    project.projectUniqueNumber = e.target.value;
                    this.setState({
                      project: project,
                      prevProject: prevProject
                    });
                  }}
                />
              </div>
              <div className="form-group col-md-8">
                <label>Project Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.projectName}
                  onChange={e => {
                    project.projectName = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-4">
                <label>Duration</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.duration}
                  onChange={e => {
                    project.duration = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-4">
                <label>Budget</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.budget}
                  onChange={e => {
                    project.budget = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-4">
                <label>First Planned Value</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.firstPV}
                  onChange={e => {
                    project.firstPV = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Last Planned Value</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.lastPV}
                  onChange={e => {
                    project.lastPV = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Peak Interval</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.peakInterval}
                  onChange={e => {
                    project.peakInterval = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>

              <div className="form-group col-md-6">
                <label>Advance Payment</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.advPayment}
                  onChange={e => {
                    project.advPayment = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Performance Bond</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.perfBond}
                  onChange={e => {
                    project.perfBond = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Credit Time</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.creditTime}
                  onChange={e => {
                    project.creditTime = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
              <div className="form-group col-md-6">
                <label>Discount Rate</label>
                <input
                  type="text"
                  className="form-control"
                  value={project.discountRate}
                  onChange={e => {
                    project.discountRate = e.target.value;
                    this.setState({ project: project });
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div className="form-group">
            <Link
              to={{ pathname: "/ProjPanel", state: { project: project } }}
              className="btn btn-outline-primary btn-sm ml-4"
              role="button"
              onClick={() => this.updateProject(project)}
            >
              Save
            </Link>
            <Link
              to={{
                pathname: "/ProjPanel",
                state: { project: this.state.prevProject }
              }}
              className="btn btn-outline-primary btn-sm ml-4"
              role="button"
            >
              Cancel
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EditProject;
