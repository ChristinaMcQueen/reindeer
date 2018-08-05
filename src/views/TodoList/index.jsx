import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import Input from './components/Input';
import List from './components/List';

import { actions } from './store';
import storeConfig from '../../store';

import './todolist.css';

// const mapStateToProps = state => ({
//     inputValue: state.todolist.inputValue,
//     list: state.todolist.list
// });
// const mapDispatchToProps = dispatch => ({
//     actions: bindActionCreators({ setInputValue, addItem, delItem }, dispatch)
// });
const store = storeConfig();

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().todo;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);

        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange() {
        this.setState(() => ({ ...store.getState().todo }));
    }
    handleInputChange(evt) {
        store.dispatch(actions.setInputValue(evt.target.value));
        // this.props.actions.setInputValue(evt.target.value);
    }
    handleInputSubmit() {
        store.dispatch(actions.addItem());
        // this.props.actions.addItem();
    }
    handleDelete(index) {
        store.dispatch(actions.delItem(index));
        // this.props.actions.delItem(index);
    }
    render() {
        return (
            <div className='todo-list'>
                <Input
                    value={this.state.inputValue}
                    handleChange={this.handleInputChange}
                    handleSubmit={this.handleInputSubmit}
                />
                <List data={this.state.list} handleDelete={this.handleDelete} />
            </div>
        );
    }
}
TodoList.propTypes = {
    actions: PropTypes.object.isRequired
};
TodoList.defaultProps = {
    actions: {}
};
export default TodoList;
// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
