import React from 'react';

class Home extends React.Component {

    componentDidMount() {
        document.body.style = 'background-image: linear-gradient(to bottom right, #177b91, #63D8F2, #177b91); color: white;';
    }

    render() {
        return (
            <React.Fragment>
                <div id="home-header">
                    A unique, easy-to-use project management tool
                    </div>
                <div id="home-blurb">
                    PerFlow is a new project management tool. At first glance, it seamlessly provides
                     a number of visual representations of how your project is going. Behind the scenes, algorithms
                     calculate data that a project management team has traditionally had to laboriously calculate by hand.
                    </div>
                <div>
                    <a href="/RegistrationPage" style={{ textDecoration: 'none' }}><button type="button" className="btn btn-primary btn-lg" id="home-signup-button">Sign Up For A Free Trial</button></a>
                </div>
            </React.Fragment>
        );
    }
}

export default Home;