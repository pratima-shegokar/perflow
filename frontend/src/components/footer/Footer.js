import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <footer id="footer" className="py-4 bg-light text-white-50 mt-5">
                    <div className="container text-left">
                        <div className="row">
                            <div className="col-xs-12 col-md-4 text-left">
                                <img src={('./PerflowLogo.png')} className="LogoFooter" />
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="text-center mt-5">
                                    <div className="text-muted">Brinellvägen 8, 114 28 Stockholm</div>
                                    <small>Copyright &copy; Perflow</small>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4 text-right">
                                <p>
                                    <a href="https://facebook.com/perflowsda" target="blank" title="Facebook"><i className="fab fa-facebook-f mr-2"></i></a>
                                    <a href="https://www.instagram.com/perflowsda6/" target="blank" title="Instagram"><i className="fab fa-instagram ml-1"></i></a>
                                    <a href="https://twitter.com/Perflow1" target="blank" title="Twitter"><i className="fab fa-twitter ml-2"></i></a>
                                </p>
                                <div><a className="disabled" href="/ContanctUs" >Contant us</a></div>
                                <div><a className="disabled" href="/Help"> Help</a></div>
                            </div>
                        </div>
                    </div>
                </footer >
            </React.Fragment >
        )
    }
}

export default Footer;