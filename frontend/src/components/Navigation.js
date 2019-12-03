import React from 'react';

//This whole file (or component) should only be touch if the team decides to change it.
//This component it's already set up for appear in every page.

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-info">
                    <a class="navbar-brand" href="/Homepage">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/LogoutPage">Logout<span class="sr-only">(current)</span></a>
                            </li>   
                        </ul>   
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navigation;