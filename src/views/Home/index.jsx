import React, { Component } from 'react';

import SubComponent from '../components/LayoutHorizontal';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }
    render() {
        return (
            <main className="home">
                <SubComponent />
            </main>
        );
    }
}

export default Home;
