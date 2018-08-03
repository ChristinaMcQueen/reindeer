import React, { Component, Fragment } from 'react';

import './mousecursor.css';

export default class MoseCursor extends Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
    }
    handleMouseMove(e) {
        const x = e.pageX - this.node.offsetLeft;
        const y = e.pageY - this.node.offsetTop;
        this.node.style.setProperty('--x', `${x}px`);
        this.node.style.setProperty('--y', `${y}px`);
    }
    render() {
        return (
            <Fragment>
                <button
                    className='mouse-cursor-gradient-tracking'
                    onMouseMove={this.handleMouseMove}
                    ref={(node) => {
                        this.node = node;
                        return this.node;
                    }}
                >
                    <span>Hover me</span>
                </button>
            </Fragment>
        );
    }
}
