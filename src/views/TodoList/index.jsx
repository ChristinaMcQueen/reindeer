import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from './components/Input';
import List from './components/List';

import { actions } from './store';

import './todolist.css';

const mapStateToProps = state => ({
    inputValue: state.getIn(['todo', 'inputValue']),
    list: state.getIn(['todo', 'list'])
});
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...actions }, dispatch)
});

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleInputChange(evt) {
        this.props.actions.setInputValue(evt.target.value);
    }
    handleInputSubmit() {
        this.props.actions.addItem();
    }
    handleDelete(index) {
        this.props.actions.delItem(index);
    }
    render() {
        return (
            <div className='todo-list'>
                <Input
                    value={this.props.inputValue}
                    handleChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                />
                <List data={this.props.list} handleDelete={this.handleDelete} />
            </div>
        );
    }
}
TodoList.propTypes = {
    inputValue: PropTypes.string.isRequired,
    list: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
