import { List } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';


const ListComponent = props => (
    <List bordered
        className='list-wrap'
        dataSource={props.data}
        renderItem={(item, index) => (<List.Item onClick={() => props.handleDelete(index)}>
            {item}
        </List.Item>)}
    />
);
ListComponent.propTypes = {
    data: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default ListComponent;
