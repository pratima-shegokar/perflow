import React from 'react';

class MyProjects extends React.Component {
    render() {
        return (
            // /Projects should be the page where you can see the project specifically
            <React.Fragment>
                <div className="text-center mt-5">
                    <p className="text-muted">
                        You don't have any projects yet. Would you like to <a href="/Project" className="text-reset">create a new one?</a>.</p>
                </div>
            </React.Fragment>
        )
    }
}

export default MyProjects;