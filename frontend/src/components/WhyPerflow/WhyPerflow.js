import React from "react";
import "./WhyPerflow.css";

class WhyPerflow extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container1">
          <div className="whyChoosePerflowSection">
            <div className="TitleDiv text-center">
              <h1 className="Title" id="title1">
                Why Choose Perflow?
              </h1>
            </div>
            <div className="container-fluid">
              <div className="pwcRow row mt-1">
                <div
                  className="col-lg-4 ml-lg-auto mt-lg-auto mb-lg-auto 
                                            col-md-6 ml-md-auto mt-md-auto mb-md-auto 
                                            col-sm-6 ml-sm-auto mr-sm-auto mt-sm-2 "
                  id="wcpGraph"
                >
                  <img
                    id="samplegraph"
                    alt="placeholdergraph"
                    src="sample_graph.jpg"
                    className="d-inline-block align-top"
                  />
                  <p className="mr-5 ml-5" id="graphText">
                    This graph shows the cashflow of a project at any given time
                  </p>
                </div>
                <div
                  className="col-lg-4 mt-lg-auto mr-lg-auto mb-lg-auto ml-lg-1
                                            col-md-6 ml-md-auto mt-md-3 mr-md-auto mb-md-3
                                            col-sm-6 mr-sm-6"
                  id="why-pf-info-column"
                >
                  <h3 className="part1">
                    Perflow is a precision tool designed to be used by
                    experienced Project Managers.
                  </h3>
                  <br></br>
                  <p className="part2">
                    It provides visual representations of SPI, CPI, KPI, EV and
                    many more Earned Value Management metrics that are updated
                    each month to reflect the ongoing status of a given project.
                  </p>
                  <br></br>
                  <p className="part3">
                    To use PerFlow and get nearly instantaneous graphical
                    representations, all a PM needs to enter is a few pieces of
                    information and update them each month. It's that easy!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonialsSection">
            <div className="TitleDiv text-center">
              <h1 className="Title" id="title2">
                Testimonials
              </h1>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-lg-4 mt-lg-4 mr-lg-1 mb-lg-5 ml-lg-auto
                                            col-md-6 ml-md-auto mt-md-3 mr-md-auto mb-md-3
                                            col-sm-6 mr-sm-6"
                  id="card1column"
                >
                  <div className="card" id="card1">
                    <div className="card-body" id="cardup1"></div>
                    <div className="card-body" id="cardbody1">
                      <img
                        className="avatar rounded-circle"
                        alt="per1"
                        src="person1.png"
                        id="cardimage1"
                      />
                      <h4 className="card-title">Anders Anderson</h4>
                      <h6 className="card-subtitle mb-4 text-muted">
                        Project Manager and PerFlow user
                      </h6>
                      <p className="card-text">
                        "Perflow has completely changed how I manage my
                        products. With PerFlow, I'm able to immediately see how
                        ahead of or behind schedule we are and adjust
                        accordingly."{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 mt-lg-4 mr-lg-auto mb-lg-5 ml-lg-1
                                            col-md-6 ml-md-auto mt-md-3 mr-md-auto mb-md-3
                                            col-sm-6 mr-sm-6"
                  id="card2column"
                >
                  <div className="card" id="card2">
                    <div className="card-body" id="cardup2"></div>
                    <div className="card-body" id="cardbody2">
                      <img
                        className="avatar rounded-circle"
                        alt="per1"
                        src="person2.png"
                        id="cardimage2"
                      />
                      <h4 className="card-title">Kjell Gustavson</h4>
                      <h6 className="card-subtitle mb-4 text-muted">
                        Project Manager and PerFlow user
                      </h6>
                      <p className="card-text">
                        "Since my team started using PerFlow, we've communicated
                        better - both with each other, as well as with our
                        clients. We're able to give clients an updated, clear
                        picture of how their project is going."{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default WhyPerflow;
