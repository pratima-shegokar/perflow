import React from 'react';
import Footer from './footer/Footer';

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
                                    <img src="" class="rounded circle" alt="pictire">
                                        <img src="" class="rounded circle" alt="profile"></img>
                                    </img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </body>
            </React.Fragment>
        )
    }
}


export default AboutUs;