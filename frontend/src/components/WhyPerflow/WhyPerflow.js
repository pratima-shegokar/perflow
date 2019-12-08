import React from 'react';

class WhyPerflow extends React.Component {
    render() {
        return (
            <React.Fragment className="loginPage">
                <div className="whyChoosePerflowSection">
                    <div className="TitleDiv text-center">
                        <h1 className="Title text-white">Why Choose Perflow?</h1>
                    </div>
                    <div className="container-fluid">
                        <div className="pwcRow row">
                            <div className="col-lg-4 ml-lg-auto mt-lg-auto mb-lg-auto 
                                            col-md-6 ml-md-auto mt-md-auto mb-md-auto 
                                            col-sm-6 ml-sm-auto" id="wcpGraph">
                                <img alt="placeholdergraph" src="sample_graph.jpg" width="80%" height="auto" class="d-inline-block align-top" />
                                <p id= "graphText">This graph shows the cashflow of a project at any given time</p>
                            </div>
                            <div className="col-lg-6 mt-lg-auto mr-lg-auto mb-lg-auto ml-lg-1
                                            col-md-6 ml-md-auto mt-md-3 mr-md-auto mb-md-3
                                            col-sm-6 mr-sm-6" id="why-pf-info-column">
                                <h3 className="part1">Perflow is a precision tool designed to be used by experienced Project Managers.</h3>
                                <br></br>
                                <p className="part2">It provides visual representations of KPI, EV, (Abed finish this list) that are updated each month to reflect the ongoing status of a given project.</p>
                                <br></br>
                                <p className="part3">To use PerFlow and get nearly instantaneous graphical representations, all a PM needs to enter is a few pieces of information
                        and update them each month. It's that easy!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testimonialsSection">
                    <div className="TitleDiv text-center">
                        <h1 className="Title text-white">Testimonials</h1>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-4 mt-lg-4 mr-lg-1 mb-lg-5 ml-lg-auto
                                            col-md-6 ml-md-auto mt-md-3 mr-md-auto mb-md-3
                                            col-sm-6 mr-sm-6">
                                
                                <div className="card" id="card1">
                                    <div className="card-body" id="cardup1">
                                    </div>
                                    <div className="card-body" id="cardbody1">
                                        <img className="avatar rounded-circle" src="cardimg.png" id="cardimage1"></img>
                                        <h4 className="card-title">Anders Anderson</h4>
                                        <h6 className="card-subtitle mb-4 text-muted">Project Manager and PerFlow user</h6>
                                        <p className="card-text">"Perflow has completely changed how
                                        I manage my products. With PerFlow, I'm able to immediately
                                         see how ahead of or behind schedule we are and adjust accordingly." </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 mt-lg-4 mr-lg-auto mb-lg-5 ml-lg-1
                                            col-md-6 ml-md-auto mt-md-3 mr-md-auto mb-md-3
                                            col-sm-6 mr-sm-6">
                                
                                <div className="card" id="card2">
                                    <div className="card-body" id="cardup2">
                                    </div>

                                    <div className="card-body"id="cardbody2">
                                        <img className="avatar rounded-circle" src="cardimg.png" id="cardimage2"></img>
                                        <h4 className="card-title">Kjell Gustavson</h4>
                                        <h6 className="card-subtitle mb-4 text-muted">Project Manager and PerFlow user</h6>
                                        <p className="card-text">"Since my team started using PerFlow, we've communicated 
                                        better - both with each other, as well as with our clients. We're able to give 
                                        clients an updated, clear picture of how their project is going." </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default WhyPerflow;