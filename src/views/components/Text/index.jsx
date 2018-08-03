import React, { Component } from 'react';

import './text.css';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure id exercitationem nulla qui repellat laborum vitae, molestias tempora velit natus. Quas, assumenda nisi. Quisquam enim qui iure, consequatur velit sit?'
        };
    }
    render() {
        return (
            <div className='text'>
                <section className='custom-selection'>
                    <strong>Custom Selection</strong>
                    <p>{this.state.content}</p>
                </section>
                <section className='unselectable'>
                    <strong>Unselectable</strong>
                    <p>{this.state.content}</p>
                </section>
                <section className='etched-wrap'>
                    <p className='etched-text'>I appear etched into the background.</p>
                </section>
                <section className='gradient-wrap'>
                    <p className='gradient-text'>{this.state.content}</p>
                </section>
            </div>
        );
    }
}
