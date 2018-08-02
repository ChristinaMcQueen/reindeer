import React, { Component } from 'react';

import Counter from '../components/Counter';

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
                <Counter />
            </div>
        );
    }
}

export default Home;
