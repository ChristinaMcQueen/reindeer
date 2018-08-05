import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

import RouterConfig from '../../../Route/config';
import { actions } from './store';

const mapStateToProps = state => ({
    location: state.getIn(['router', 'location'])
});

const mapDispatchProps = dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch)
});

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currLocation: props.location
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const currLocation = RouterConfig.filter(item => item.path === window.location.pathname)[0].name;
        this.props.actions.setRouter(currLocation);
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
                {RouterConfig.map(item => <Menu.Item
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
