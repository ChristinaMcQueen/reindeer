import { Input, Button } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';


const TodoInput = props => (
    <div className='input-line'>
        <Input
            value={props.value}
            placeholder="todo"
            onChange={props.handleChange}
            style={{ marginRight: '1rem' }}
        />
        <Button type='primary' onClick={props.handleSubmit}>
            Submit
        </Button>
    </div>
);
TodoInput.propTypes = {
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};
export default TodoInput;
