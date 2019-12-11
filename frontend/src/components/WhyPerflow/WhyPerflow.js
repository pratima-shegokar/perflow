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
                            <div className="col-lg-5 col-md-4 col-sm-12" id="wcpGraph">
                                <img alt="placeholdergraph" src="sample_graph.jpg" width="80%" height="auto" class="d-inline-block align-top" />
                                <p>This graph shows the cashflow of a project at any given time</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6" id="why-pf-info-column">
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
                            <div className="col-sm-6">
                                <div>
                                    <h1 className="text-center">"Perflow has completely changed how I manage my products. With PerFlow, I'm able to immediately see
                                how ahead of or behind schedule we are and adjust accordingly" </h1>
                                    <p className="text-right">--Anders Anderson, Project Manager and PerFlow user</p>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div>
                                    <h1 className="text-center">"Since my team started using PerFlow, we've communicated better - both with each
                                other, as well as with our clients. We're able to give clients an updated, clear picture of how their project is going." </h1>
                                    <p className="text-right">--Kjell Gustavson, Project Manager and PerFlow user</p>
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