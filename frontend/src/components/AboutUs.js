import React from 'react';

class AboutUs extends React.Component {
    render() {
        return (
            <React.Fragment>
                <body className="d-flex flex-column">
                    <div id="page-content">
                        <div className="container text-center">
                            <div className="row justify-content-center">
                                <div className="col-md-7">
                                    <h1 className="font-weight-light mt-4 text-black">About Us</h1>
                                    <p className="lead text-black-50">We are a team!</p>
                                    <img src="../PerflowLogo.png" className="rounded circle" alt="pictire" />
                                    <img src="../PerflowLogo.png" className="rounded circle" alt="profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </body>
            </React.Fragment>
        )
    }
}

export default AboutUs;