import React from 'react';

import './counter.css';

const Counter = () => (
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
    </ul>);

export default Counter;
