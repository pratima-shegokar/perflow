import React from 'react';
import './Footer.css';


class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer id="footer" className="py-4 bg-dark text-white-50 mt-5">
                    <div className="container text-left">
                        <div className="row">
                            <div className="col-xs-12 col-md-6">
                                <div><a href="/ContanctUs">Contant us</a></div>
                                <div><a href="/Help"> Help</a></div>
                            </div>
                            <div className="col-xs-12 col-md-6">
                                <div className="text-center">
                                    <div className="text-muted">Address</div>
                                    <div className="text-muted">Brinellvägen 8, 114 28 Stockholm</div>
                                </div>
                                <div className="container-inline">
                                    <div><a href="https://facebook.com/perflowsda" target="blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></div>
                                    <div><a href="https://www.instagram.com/perflowsda6/" target="blank" title="Instagram"><i className="fab fa-instagram"></i></a></div>
                                    <div><a href="https://twitter.com/Perflow1" target="blank" title="Twitter"><i className="fab fa-twitter"></i></a></div>
                                    <div className="container text-center">
                                        <small>Copyright &copy; Perflow</small>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </footer >
            </React.Fragment >
                )
            }
        }
        
export default Footer;