import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import setRouter from '../../../actions/router';
import config from './config';

const mapStateToProps = state => ({
    location: state.router.location
});

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators({ setRouter }, dispatch)
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(name, path) {
        this.props.actions.setRouter(name);
        this.props.history.push(path);
    }
    render() {
        return <header className="header">
            <Menu
                selectedKeys={[this.props.location]}
                mode="horizontal"
            >
                {config.Menu.map(item => <Menu.Item
                    key={item.name}
                    onClick={() => this.handleClick(item.name, item.path)}
                >
                    <Icon type={item.icon} />{item.value}
                </Menu.Item>)}
            </Menu>
        </header>;
    }
}

Header.propTypes = {
    location: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};
Header.defaultProps = {
    location: 'home',
    actions: {},
    history: {}
};

export default withRouter(connect(mapStateToProps, mapDispatchProps)(Header));
