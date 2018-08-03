import React, { Component, Fragment } from 'react';

import './scrollbar.css';

export default class Scrollbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?'
        };
    }
    render() {
        return (
            <Fragment>
                <div className='scrollbar-wrap'>
                    <div className='custom-scrollbar'>
                        <p>{this.state.content}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}
