import React, { Component } from 'react';

import Header from '../components/Header';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                Layout
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
