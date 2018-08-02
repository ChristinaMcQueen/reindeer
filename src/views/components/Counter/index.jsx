import React, { Component } from 'react';

import './counter.css';

export default class index extends Component {
    render() {
        return (
            <ul className='counter-wrap'>
                <li>A</li>
                <li>B</li>
                <li>C
                    <ul className='counter-wrap'>
                        <li>A</li>
                        <li>B
                            <ul className='counter-wrap'>
                                <li>A</li>
                                <li>B</li>
                                <li>C</li>
                            </ul>
                        </li>
                        <li>C</li>
                    </ul>
                </li>
            </ul>
        );
    }
}
