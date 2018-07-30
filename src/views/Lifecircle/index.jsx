import React, { Component } from 'react';

class Lifecircle extends Component {
    // static propTypes = {
    //     key: 'propTypes'
    // };
    // static defaultProps = {
    //     key: 'defaultProps'
    // };
    constructor(props) {
        super(props);
        this.state = {
            key: 'LifeCircle'
        };
    }
    // getDefaultProps() {
    //     console.log('getDefaultProps');
    // }
    getInitialState() {
        console.log('getInitialState');
    }
    // componentWillMount() {
    //     console.log('componentWillMount');
    // }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    shouleComponentUpdate() {
        console.log('shouleComponentUpdate');
    }
    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    render() {
        console.log('render');
        return (<div>{this.state.key}</div>);
    }
}

export default Lifecircle;
