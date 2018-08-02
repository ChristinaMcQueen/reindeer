import React, { Component } from 'react';

import SubComponent from '../components/GridLayout';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <div className="home">
                <SubComponent />
            </div>
        );
    }
}

export default Home;
