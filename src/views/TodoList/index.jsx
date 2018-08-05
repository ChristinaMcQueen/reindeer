import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';

import Input from './components/Input';
import List from './components/List';

// import setInputValue from '../../state/actions/todolist';
import { setInputValue, addItem, delItem } from '../../state/actions/todolist';
import storeConfig from '../../state/store';

import './todolist.css';

// const mapStateToProps = state => ({
//     inputValue: state.todolist.inputValue,
//     list: state.todolist.list
// });
// const mapDispatchProps = dispatch => ({
//     actions: bindActionCreators({ setInputValue }, dispatch)
// });
const store = storeConfig();

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState().todolist;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);

        store.subscribe(this.handleStoreChange);
    }
    componentDidMount() {
        axios.get('http://localhost:8988/api/mockup/data').then((res) => {
            console.log('------------------------------------');
            console.log(res);
            console.log('------------------------------------');
        });
    }
    handleStoreChange() {
        this.setState(() => ({ ...store.getState().todolist }));
    }
    handleInputChange(evt) {
        store.dispatch(setInputValue(evt.target.value));
    }
    handleInputSubmit() {
        store.dispatch(addItem());
    }
    handleDelete(index) {
        store.dispatch(delItem(index));
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
// export default connect(mapStateToProps, mapDispatchProps)(TodoList);
