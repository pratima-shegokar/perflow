import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="heading text-center">About Us</div>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <a href="https://www.linkedin.com/in/jessica-shortz-02572831/" target="blank" style={{ textDecoration: 'none' }}>
                                        <img className="rounded-circle" src="./aboutUs-Jessica.jpg" alt="..." />
                                    </a>
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Jessica</h5>

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Milad.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Milad</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Tarek.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Tarek</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Melany.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Melany</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Pratima.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Pratima</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Sidhi.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Sidhi</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Aasma.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Aasma</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Abed.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Abed</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paragraph" style={{paddingLeft: "100px", paddingRight: "100px"}}>
                        PerFlow is made up of a team of students in Software Development Academy 6, a coding program run by
                        <a href="https://www.novarepotential.com/" target="blank"> Novare Potential</a> in conjunction with
                        <a href="https://www.kth.se/en" target="blank"> KTH</a>. During the course, we learn Java, git, JavaScript,
                         C#, SQL, and how to use a variety of frameworks and tools like Hibernate, Spring, Gradle, and more. During the last
                          three weeks of the program, we are assigned to random groups and tasked to build an application together. PerFlow
                           is the result of our group's efforts. We are deeply grateful to Novare Potential, KTH, and each other for this
                            learning opportunity.
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutUs;