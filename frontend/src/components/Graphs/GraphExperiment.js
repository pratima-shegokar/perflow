import React from 'react';
import { render } from 'react-dom';
import LineDemo from './LineDemo';

class GraphExperiment extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div>
                    <LineDemo/>
                </div>

            </React.Fragment>

        );
    }
}


export default GraphExperiment;