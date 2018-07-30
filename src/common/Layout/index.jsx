import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import 'reset-css';
import 'antd/lib/button/style/css';

import '../style/index.css';
import Header from '../components/Header';
import storeConfig from '../../store';

const store = storeConfig();

class Layout extends Component {
    render() {
        return (
            <Provider store={store}>
                <main>
                    <Header />
                    {this.props.children}
                </main>
            </Provider>
        );
    }
}
Layout.propTypes = {
    children: PropTypes.array.isRequired
};
Layout.defaultProps = {
    children: []
};

export default Layout;
