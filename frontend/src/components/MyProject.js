import React from 'react';

class MyProjects extends React.Component{
    render(){
        return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#Homepage">Homepage</a>
                <nav className="mr-auto">
                <a class="nav-link" href="#home">Home</a>
                <a class="nav-link" href="#features">Features</a>
                <a class="nav-link" href="#pricing">Pricing</a>
                </nav>
              </nav>
            </div>
        )
    }
}

export default MyProjects;