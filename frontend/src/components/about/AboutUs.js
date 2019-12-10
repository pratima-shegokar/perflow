import React from 'react';
import './AboutUs.css';

class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="heading">About Us</div>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="./aboutUs-Jessica.jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Jessica</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
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
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
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
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
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
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Pratima</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Sidhi</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Aasma</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <div className="card mt-5 mr-5 ml-5">
                                <div class="card-body text-center">
                                    <img className="rounded-circle" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="..." />
                                </div>
                                <div class="card-body text-center">
                                    <h5 class="card-title">Abed</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">Junior Developer</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paragraph">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutUs;